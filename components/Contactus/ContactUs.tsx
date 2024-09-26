"use client";
import React, { useRef, useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString, CountryCode, getCountries } from 'libphonenumber-js';
import PhoneInputWithValidation from './PhoneInputWithValidation'; // Adjust the path as necessary


const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [mapHeight, setMapHeight] = useState<number>(450);
  const [location, setLocation] = useState<"dubai" | "india">("dubai");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: 'ae', // Default to Dubai (country code)
    company: "",
    category: "",
    message: "",
  });
  
  const [isPhoneValid, setIsPhoneValid] = useState(true); // State for phone validation

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      setMapHeight(formRef.current.clientHeight);
    }
  }, [formRef.current]);

  const getMapEmbedUrl = () => {
    if (location === "dubai") {
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.305150680445!2d55.26079546559521!3d25.18574739615685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69af8ab1cd3f%3A0xcb2bd514d0345020!2sEPIIDOSIS%20INVESTMENTS%20LLC!5e0!3m2!1sen!2sae!4v1725185957434!5m2!1sen!2sae";
    }
    if (location === "india") {
      return "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.437187607768!2d77.373549!3d28.6264862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce522ca135bc1%3A0xc04e18db03aaf9ae!2sEpiidosis%20India%20Private%20Limited!5e0!3m2!1sen!2sae!4v1725439124553!5m2!1sen!2sae";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

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

  const handlePhoneChange = (value: string, data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  const handleValidationChange = (isValid: boolean) => {
    setIsPhoneValid(isValid); // Update phone validation state
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    // If phone number is valid, proceed with the form submission
    const payload = {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        description: "Main Contact Form Lead",
        organization: formData.company || "Not provided",
        category: formData.category,
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
             window.location.replace('/ThankYou');
            
        } else {
            alert("Form submission failed.");
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
        <div className="flex justify-center mb-4 text-xl md:text-2xl font-base">
          <button className={`px-4 py-2 ${location === "dubai" ? "textgold text-xl md:text-2xl underline font-extrabold" : "text-gray-500"}`} onClick={() => setLocation("dubai")}>
            Dubai
          </button>
          <button className={`px-4 py-2 ${location === "india" ? "textgold text-xl md:text-2xl underline font-extrabold" : "text-gray-500"}`} onClick={() => setLocation("india")}>
            India
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gapm">
          <div className="relative rounded-lg overflow-hidden ml-2 mt-2 order-2 md:order-1">
            <iframe title="Location Map" src={getMapEmbedUrl()} width="100%" height={mapHeight} style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
          </div>

          <div ref={formRef} className="bg-white rounded-lg mr-2 order-1 md:order-2">
            <h1 className="textsize textgold font-bold mb-4">
              Contact Us
            </h1>
            <p className="textgray mb-6">
              Connect with Epiidosis Investments LLC. Reach out to our dedicated team for personalized assistance, inquiries about our services, or to explore collaboration opportunities.
            </p>
            <form className="textc" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="mb-2 font-medium text-[#6D758F]">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      const { value } = e.target;
                      // Allow only alphabets (both lowercase and uppercase) and limit to 50 characters
                      if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
                        handleInputChange(e);
                      }
                    }}
                    placeholder="Brian Clark"
                    className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                    maxLength={20} // Set a limit of 20 characters
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@youremail.com"
                    className="p-4 border rounded-lg shadow-lg shadow-slate-100"
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
                  <label className="mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    maxLength={50} // Set a limit of 20 characters
                    placeholder="Company Name"
                    className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                  />
                </div>
              </div>
              
              
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                  >
                    <option value="">Select a category</option>
                    <option value="Invest with Us">Invest with Us</option>
                    <option value="Structured Finance">Structured Finance</option>
                    <option value="Financial Instrument Investment">Financial Instrument Investment</option>
                    <option value="Asset Monetizationer">Asset Monetization</option>

                  </select>
                </div>
             
              <div className="flex flex-col mb-6">
                <label className="mb-2 mt-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter your message here"
                  className="p-4 border rounded-lg shadow-lg shadow-slate-100"
                  required
                />
              </div>
              <button
                type="submit"
                className="pixwidth bg-black text-white rounded-lg p-4 font-bold hover:bg-[#1A9548] mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send a message"}
              </button>
            </form>

            <div className="mt-7 flex flex-col md:flex-row gap-3">
              <div className="flex items-center borders rounded-lg flex-1">
                <img
                  src="/invest/icon/Mail.png"
                  alt="Email"
                  className="w-12 h-12 mr-2"
                />
                <p className="textgray mr-8">
                  <strong>Email:</strong> info@epiidosisinvestments.com
                </p>
              </div>
              <div className="flex items-center borders rounded-lg flex-1">
                <img
                  src="/invest/icon/Phone.png"
                  alt="Phone"
                  className="w-12 h-12 mr-2"
                />
                <p className="textgray">
                  <strong>Phone:</strong><br /> +971 (04) 884 8644
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
