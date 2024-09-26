import React, { useState } from 'react';
import PhoneInputWithValidation from './PhoneInputWithValidation'; // Adjust the path as necessary
import CountrySelect from './CountrySelect';


export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true); // State for phone validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    countryCode: 'ae', // Default to Dubai (country code)
    assetValue: '',
    jurisdiction: '',
    message: '',
  });
  

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  const handlePhoneChange = (value: string, countryCode: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
      countryCode, // Capture the country code dynamically
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
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

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      number: formData.phone,
      description: "Lead From Asset Monetization",
      organization: formData.country || "Not provided",
      category: formData.jurisdiction,
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          countryCode: 'ae',
          assetValue: '',
          jurisdiction: '',
          message: '',
        });
        
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
    <div className="relative">
      {/* Floating Get in touch option */}
      <div
        className={`fixed top-5/5 right-0 transform -translate-y-1/2 transition-transform duration-500 z-50 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          onClick={toggleForm}
          className="absolute md:top-1 top-20 right-full transform -translate-y-1/2 bg-[#201E1F] text-white px-2 py-8 font-bold cursor-pointer"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontFamily: 'Montserrat, sans-serif' }}
        >
          Get in touch
        </div>

        {/* Form Container */}
        <div
          className="bg-[#201E1F] shadow-lg p-6 md:mt-1 mt-20 w-[100%] h-[35rem] max-w-[40rem] h-auto overflow-y-auto text-sm
          md:w-[40rem] md:h-[26rem]
          sm:w-[90%] sm:max-w-[32rem] sm:h-auto" // Set full width and auto height on small screens
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white sm:text-xs" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md sm:p-1 sm:text-sm" // Reduced padding and font size for mobile
                  placeholder="Brien Clark"
                  value={formData.name}
                  onChange={(e) => {
                    const { value } = e.target;
                    // Allow only alphabets (both lowercase and uppercase) and limit to 50 characters
                    if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
                      handleInputChange(e);
                    }
                  }}
                  maxLength={20}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white sm:text-xs" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md sm:p-1 sm:text-sm"
                  placeholder="example@youremail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white sm:text-xs" htmlFor="phone">
                  Phone
                </label>
                <PhoneInputWithValidation
                  countryCode={formData.countryCode}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onValidationChange={handleValidationChange} // Pass validation change handler
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white sm:text-xs" htmlFor="country">
                  Country
                </label>
                <CountrySelect />
              </div>
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
              <div>
                <label className="block text-sm font-medium text-white sm:text-xs" htmlFor="assetValue">
                  Value of the Asset
                </label>
                <input
                  id="assetValue"
                  type="number"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md sm:p-1 sm:text-sm"
                  placeholder="-"
                  value={formData.assetValue}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white sm:text-xs" htmlFor="jurisdiction">
                  Asset Jurisdiction
                </label>
                <input
                  id="jurisdiction"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md sm:p-1 sm:text-sm"
                  placeholder="Country"
                  value={formData.jurisdiction}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white sm:text-xs" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md sm:p-1 sm:text-sm"
                placeholder="Type your message here... "
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#CB8511] text-white py-2 rounded-md hover:bg-[#1A9548] transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
