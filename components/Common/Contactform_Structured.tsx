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
    countryCode: 'ae',
    companyName: '',
    projectType: '',
    investmentAmount: [] as string[],
    additionalInfo: '',
    jurisdiction: '',
  });

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePhoneChange = (value: string, countryCode: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
      countryCode,
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
    
    // Prepare payload
    const payload = {
      name: formData.name,
      email: formData.email,
      number: formData.phone,
      description: "Lead From Structured Investment",
      organization: formData.companyName || "Not provided",
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
          companyName: '',
          projectType: '',
          investmentAmount: [],
          additionalInfo: '',
          jurisdiction: '',
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
        className={`fixed md:top-3/5 right-0 transform -translate-y-1/2 transition-transform duration-500 z-50 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          onClick={toggleForm}
          className="absolute md:top-1 top-56 right-full transform -translate-y-1/2 bg-[#201E1F] text-white px-2 py-8 font-bold cursor-pointer"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontFamily: 'Montserrat, sans-serif' }}
        >
          Get in touch
        </div>

        {/* Form Container */}
        <div className="bg-[#201E1F] shadow-lg p-8 md:mt-1 mt-56 w-[20rem] h-[36rem] sm:w-[32rem] overflow-y-auto text-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
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
                <label className="block text-sm font-medium text-white" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="example@youremail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Phone Number with Validation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white" htmlFor="phone">
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
            <label className="block text-sm font-medium text-white" htmlFor="country">
              Country
            </label>
            <CountrySelect />
          </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="companyName">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Your company name"
              value={formData.companyName}
              maxLength={50}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white" htmlFor="projectType">
              Type of Project/Investment
            </label>
            <input
              id="projectType"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Project/Investment type"
              value={formData.projectType}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="investmentAmount">
              Desired Investment Amount
            </label>
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
                  <label htmlFor="asset1" className="text-white">5 - 10 million</label>
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
                  <label htmlFor="asset2" className="text-white">10 - 50 million</label>
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
                  <label htmlFor="asset3" className="text-white">50 - 100 million</label>
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
                  <label htmlFor="asset4" className="text-white">100 - 200 million</label>
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
                  <label htmlFor="asset5" className="text-white">200 million +</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white" htmlFor="additionalInfo">
            Additional Information or Questions
          </label>
          <textarea
            id="additionalInfo"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Type your message here... "
            rows={4}
            value={formData.additionalInfo}
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
