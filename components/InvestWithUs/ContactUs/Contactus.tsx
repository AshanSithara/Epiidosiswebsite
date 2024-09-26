import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString, CountryCode, getCountries } from 'libphonenumber-js';
import CountrySelect from "../../Common/CountrySelect";

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    companyName: '',
    projectType: '',
    investmentAmount: [] as string[],
    additionalInfo: '',
  });

  const [countryCode, setCountryCode] = useState<string>("ae"); // Default to UAE
  const [validationMessage, setValidationMessage] = useState<string | null>(null); // For phone validation
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePhoneChange = (value: string, data: any) => {
    setFormData({
      ...formData,
      phone: value,
    });
    setCountryCode(data.countryCode); // Capture the country code dynamically
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

  const handleSelectChangeSector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value; // Capture the selected value
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectType: selectedValue,
    })); // Update formData with the selected value
    console.log("Selected Value:", selectedValue); // Log the actual selected value for better debugging
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validatePhone()) {
      alert("Please correct the phone number before submitting the form.");
      return;
    }

     // Validate the email before proceeding
     validateEmail(formData.email); // Ensure this function is available in your component
     if (emailError) {
         alert(emailError); // Alert for invalid email
         return; // Prevent submission if email is invalid
     }

    const payload = {
      name: formData.name,
      email: formData.email,
      number: formData.phone,
      description: "Lead From Invest With US",
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
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="p-8 md:p-16 text-white rounded-lg max-w-full bg-cover bg-center text-left" style={{ fontFamily: "Montserrat, sans-serif", backgroundImage: "url('/Contact.svg')" }}>
            <h2 className="text-2xl font-bold mb-4">Invest with Confidence</h2>
            <p className="text-base mb-4">With Epiidosis, you can expect substantial returns on your initial investment. Our investment management team is composed of seasoned professionals. They analyze investment opportunities, manage risks, and maximize returns for our clients.</p>
            <ul className="list-disc mt-4 pl-4 space-y-2 text-sm leading-relaxed text-justify tracking-tighter">
              <li>Complete transparency in investment process</li>
              <li>24/7 dedicated sales team support</li>
              <li>Full control of your investment</li>
              <li>Minimum investment of just AED 100K</li>
              <li>Investment lock-in period of just 1-year</li>
            </ul>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium text-[#6D758F]">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Brian Clark"
                      required
                      className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                      value={formData.name}
                      onChange={(e) => {
                        const { value } = e.target;
                        // Allow only alphabets (both lowercase and uppercase) and limit to 50 characters
                        if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
                          handleChange(e);
                        }
                      }}
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
                    <PhoneInput
                      country={countryCode}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputClass="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      containerClass="w-full"
                      specialLabel="Phone Number *"
                      inputProps={{
                        required: true,
                        className: "block border p-4 rounded-lg shadow-lg shadow-slate-100 h-[40px] w-80 sm:w-72 pl-[45px] pr-[12px]"
                      }}
                    />
                    {validationMessage && (
                      <p className={`mt-2 ${validationMessage === "Phone number is valid!" ? 'text-green-600' : 'text-red-600'}`}>
                        {validationMessage}
                      </p>
                    )}
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
                      required
                      className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-medium">Investment Amount</label>
                    <select
                      name="investmentAmount"
                      required
                      className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                      value={formData.investmentAmount}
                      onChange={handleSelectChange}
                    >
                      <option value="100K-150K AED">100K-150K AED</option>
                      <option value="150K-250K AED">150K-250K AED</option>
                      <option value="250K-500K AED">250K-500K AED</option>
                      <option value="500K+ AED">500K+ AED</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2 font-medium">Desired Investment Sector</label>
                  <select
                    name="projectType"
                    required
                    className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                    value={formData.projectType}
                    onChange={handleSelectChangeSector}
                  >
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Oil And Gas">Oil And Gas</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Industrial Investments">Industrial Investments</option>
                    <option value="Tourism and Hospitality">Tourism and Hospitality</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Education">Education</option>
                  </select>
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2 font-medium">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    placeholder="Enter any additional information or questions here..."
                    className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-8 bg-[#201E1E] text-white rounded-md shadow-md mt-4"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
