import { useState } from 'react';

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
    <div className="relative">
      {/* Floating Get in touch option */}
      <div
        className={`fixed top-2/5 right-0 transform -translate-y-1/2 transition-transform duration-500 z-50 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          onClick={toggleForm}
          className="absolute top-16 right-full transform -translate-y-1/2 bg-[#201E1F] text-white px-2 py-8 font-bold cursor-pointer"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' ,fontFamily: "Montserrat, sans-serif"} }
        >
          Get in touch
        </div>

        {/* Form Container */}
        <div className="bg-[#201E1F] shadow-lg p-8 mt-16 w-[32rem] h-[31rem] overflow-y-auto text-sm">
          {/* <button
            onClick={toggleForm}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button> */}
          {/* <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2> */}

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white" htmlFor="country">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="india"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white" htmlFor="assetValue">
                  Value of the Asset
                </label>
                <input
                  id="assetValue"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="-"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white" htmlFor="jurisdiction">
                  Asset Jurisdiction
                </label>
                <input
                  id="jurisdiction"
                  type="text"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  placeholder="Country"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Type your message here... "
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#CB8511] text-white py-2 rounded-md hover:bg-[#1A9548] transition duration-200"
           
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
