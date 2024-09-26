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
    companyName: '',
    projectType: '',
    investmentAmount: [] as string[],
    additionalInfo: '',
    jurisdiction: '',
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

    // Prepare the payload with the form data
    const payload = {
      name: formData.name,
      email: formData.email,
      number: formData.phone,
      description: "Lead From Financial Instrument Investment",
      organization: formData.countryCode || "Not provided",
      category: formData.jurisdiction,
    };

    try {
      // Send POST request to the API endpoint
      const response = await fetch("https://erp.epiidosisinvestments.com/lead/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle the response
      if (response.ok) {
        window.location.replace('/SuccessPage');
        // Reset form data
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
          className={`fixed md:top-5/5 right-0 transform -translate-y-1/2 transition-transform duration-500 z-50 ${isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div
            onClick={toggleForm}
            className="absolute md:top-1 top-28 right-full transform -translate-y-1/2 bg-[#201E1F] text-white px-2 py-8 font-bold cursor-pointer"
            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontFamily: "Montserrat, sans-serif" }}
          >
            Get in touch
          </div>

          {/* Form Container */}
          <div className="bg-[#201E1F] shadow-lg p-8 md:mt-1 mt-28 w-[20rem] h-[38rem] sm:w-[32rem] overflow-y-auto text-sm">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    required
                    value={formData.name}
                    onChange={(e) => {
                      const { value } = e.target;
                      // Allow only alphabets (both lowercase and uppercase) and limit to 50 characters
                      if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
                        handleInputChange(e);
                      }
                    }}
                    maxLength={20}
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
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

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
                    Country of Residence
                  </label>
                  <CountrySelect />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white" htmlFor="assetValue">
                    Type of Financial Instruments (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="asset1"
                        name="assetValue"
                        value="asset1"
                        className="mr-2"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="asset1" className="text-white">
                        Listed Stocks
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="asset2"
                        name="assetValue"
                        value="asset2"
                        className="mr-2"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="asset2" className="text-white">
                        Bonds
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="asset3"
                        name="assetValue"
                        value="asset3"
                        className="mr-2"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="asset3" className="text-white">
                        Debentures
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="asset4"
                        name="assetValue"
                        value="asset4"
                        className="mr-2"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="asset4" className="text-white">
                        ETFs
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="asset5"
                        name="assetValue"
                        value="asset5"
                        className="mr-2"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="asset5" className="text-white">
                        Other (Please specify)
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="otherAsset"
                      name="otherAsset"
                      className="mt-1 p-2 w-full border border-gray-300 rounded"
                      placeholder="Other"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white" htmlFor="value">
                    Estimated Value of Financial Instruments
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center">
                      <input type="radio" id="value1" name="value" value="value1" className="mr-2" />
                      <label htmlFor="value1" className="text-white">
                        $50,000 - $250,000
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="value2" name="value" value="value2" className="mr-2" />
                      <label htmlFor="value2" className="text-white">
                        $250,001 - $500,000
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="value3" name="value" value="value3" className="mr-2" />
                      <label htmlFor="value3" className="text-white">
                        $500,001 - $1,000,000
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="value4" name="value" value="value4" className="mr-2" />
                      <label htmlFor="value4" className="text-white">
                        $1,000,001 - $5,000,000
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="value5" name="value" value="value5" className="mr-2" />
                      <label htmlFor="value5" className="text-white">
                        Above $5,000,000
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white" htmlFor="useOfFunds">
                    Intended Use of Funds
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="use1" name="useOfFunds" value="use1" className="mr-2" />
                      <label htmlFor="use1" className="text-white">
                        New Investments
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="use2" name="useOfFunds" value="use2" className="mr-2" />
                      <label htmlFor="use2" className="text-white">
                        Debt Consolidation
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="use3" name="useOfFunds" value="use3" className="mr-2" />
                      <label htmlFor="use3" className="text-white">
                        Business Expansion
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="use4" name="useOfFunds" value="use4" className="mr-2" />
                      <label htmlFor="use4" className="text-white">
                        Personal Expenses
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="use5" name="useOfFunds" value="use5" className="mr-2" />
                      <label htmlFor="use5" className="text-white">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#CB8511] hover:bg-[#1A9548] text-white font-bold rounded-md mt-4"
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
