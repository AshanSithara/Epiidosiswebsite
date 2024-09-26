import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString, CountryCode, getCountries } from 'libphonenumber-js';
import PhoneInputWithValidation from './PhoneInputWithValidation'; // Adjust the path as necessary
import CountrySelect from '../../Common/CountrySelect'


// Custom phone validation function using libphonenumber-js
const validatePhoneNumber = (phoneNumberString: string, countryCode: string) => {
  const validCountryCode = getCountries().includes(countryCode.toUpperCase() as CountryCode)
    ? (countryCode.toUpperCase() as CountryCode)
    : undefined;

  if (!validCountryCode) {
    return "Invalid country code";
  }

  const phoneNumber = parsePhoneNumberFromString(phoneNumberString || '', validCountryCode);

  if (!phoneNumber) {
    return "Invalid phone number";
  }

  if (!phoneNumber.isValid()) {
    return "Phone number is invalid for the selected country";
  }

  return true; // Phone number is valid
};

const ContactUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true); // State for phone validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    countryCode: 'ae', // Default to Dubai (country code)
    companyName: '',
    projectType: '',
    investmentAmount: [] as string[],
    additionalInfo: '',
  });

  const [countryCode, setCountryCode] = useState<string>("ae"); // Default to India
  const [validationMessage, setValidationMessage] = useState<string | null>(null); // For phone validation
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePhoneChange = (value: string, countryCode: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
      countryCode, // Capture the country code dynamically
    }));
  };


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        investmentAmount: [...prevData.investmentAmount, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        investmentAmount: prevData.investmentAmount.filter((amount) => amount !== value),
      }));
    }
  };

  const validatePhone = (): boolean => {
    const validationResult = validatePhoneNumber(formData.phone, countryCode);
    if (validationResult === true) {
      setValidationMessage(null);
      return true;
    } else {
      setValidationMessage(validationResult as string);  // Show error message
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

       
  // Validate email format if the input is for email
  if (name === 'email') {
    validateEmail(value);
  }
  };

  const handleValidationChange = (isValid: boolean) => {
    setIsPhoneValid(isValid); // Update phone validation state
  };

  const [emailError, setEmailError] = useState<string>('');

const validateEmail = (email: string) => {
  // Regex for validating email
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Validates formats like example@domain.com
  if (!regex.test(email)) {
    setEmailError('Please enter a valid email (e.g., example@gmail.com)');
  } else {
    setEmailError('');
  }
};

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedValues: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setFormData({ ...formData, investmentAmount: selectedValues });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPhoneValid) {
      alert("Please enter a valid phone number."); // Alert for invalid phone
      return; // Prevent submission if phone is invalid
    }
     // Validate the email before proceeding
     validateEmail(formData.email); // Ensure this function is available in your component
     if (emailError) {
         alert(emailError); // Alert for invalid email
         return; // Prevent submission if email is invalid
     }

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      number: formData.phone,
      description: "Lead From Structured Investment",
      organization: formData.companyName || "Not provided",
      investment_amount: formData.investmentAmount.join(', '),
    };

    try {
      const response = await fetch("https://erp.epiidosisinvestments.com/lead/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
         window.location.replace('/SuccessPage');
        setFormSubmitted(true);
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="p-8 md:p-16 text-white rounded-lg max-w-full bg-cover bg-center text-left" style={{ fontFamily: "Montserrat, sans-serif", backgroundImage: "url('/Contact.svg')" }}>
            <h2 className="text-2xl font-bold mb-4">Key Features of Our Structured Finance Process</h2><br />
            <ul className="list-disc mt-4 pl-4 space-y-2 text-sm leading-relaxed text-justify tracking-tighter">
              <li><strong>Comprehensive Funding Process:</strong> From onboarding to fund deployment, we guide you with clarity and transparency.</li><br />
              <li><strong>Rigorous Verification:</strong> Customized financial strategies that align with your specific goals.</li><br />
              <li><strong>Transparent Fee Structure:</strong> Transparent, market-linked interest rates with no hidden fees.</li><br />
              <li><strong>Strategic Support and Guidance:</strong> Access to global markets with local expertise.</li><br />
            </ul><br />
            <p className="text-xm italic mb-4">We simplify investing with a structured, step-by-step approach. To maximize the success of your project, we ensure transparency, efficiency, and strategic execution.</p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg mr-2">
            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Thank you for your submission!</h2>
                <p className="text-sm">We will be in touch soon.</p>
              </div>
            ) : (
              <form className="textc" onSubmit={handleSubmit}>
                <h1 className="textsize textgold font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Get Started with Epiidosis Investments
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
                  <div className="flex flex-col ">
                    <label className="mb-2 font-medium text-[#6D758F]">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Brian Clark"
                      className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                      value={formData.name}
                      onChange={(e) => {
                        const { value } = e.target;
                        // Allow only alphabets (both lowercase and uppercase) and limit to 50 characters
                        if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
                          handleChange(e);
                        }
                      }}
                      maxLength={20} // Set a limit of 20 characters
                    required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@youremail.com"
                      className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium">Phone</label>
                    <PhoneInputWithValidation
                  countryCode={formData.countryCode}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onValidationChange={handleValidationChange} // Pass validation change handler
                />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium">Country</label>
                    <CountrySelect/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="-"
                      className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                      value={formData.companyName}
                      onChange={handleChange}
                      maxLength={50}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium">Type of Project/Investment</label>
                    <input
                      type="text"
                      name="projectType"
                      placeholder="Type of Project/Investment"
                      className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                      value={formData.projectType}
                      onChange={handleChange}
                    />
                  </div>
               
                  </div>
                 
                  
                
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2">Desired Investment Amount</label>
                  <div className="flex mt-2">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="asset1"
                    name="investmentAmount"
                    value="5 - 10 million"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="asset1">5 - 10 million</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="asset2"
                    name="investmentAmount"
                    value="10 - 50 million"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="asset2">10 - 50 million</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="asset3"
                    name="investmentAmount"
                    value="50 - 100 million"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="asset3">50 - 100 million</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="asset4"
                    name="investmentAmount"
                    value="100 - 200 million"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="asset4">100 - 200 million</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="asset5"
                    name="investmentAmount"
                    value="200 million +"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="asset5">200 million +</label>
                </div>
              </div>
            </div>
                </div>
               
                <div className="flex flex-col">
                  <label className="mb-2 font-medium mt-2">Additional Information or Questions</label>
                  <textarea
                    name="additionalInfo"
                    placeholder="Type your message here..."
                    className="w-full p-4 border rounded-lg shadow-lg shadow-slate-100 mb-4"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-8 bg-[#201E1F] text-white font-semibold rounded-md shadow-lg shadow-slate-100"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
