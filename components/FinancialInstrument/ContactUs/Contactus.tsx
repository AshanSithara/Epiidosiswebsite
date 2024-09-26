import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import * as Yup from "yup";
import { parsePhoneNumberFromString, CountryCode, getCountries } from 'libphonenumber-js';
import Image from 'next/image';
import CountrySelect from "../../Common/CountrySelect"

// Define type for country data
interface CountryData {
  dialCode: string;
  iso2: string;
  name: string;
  countryCode: string;
}

// Phone validation function
const validatePhoneNumber = (phoneNumberString: string, countryCode: string): boolean => {
  const validCountryCode = getCountries().includes(countryCode.toUpperCase() as CountryCode)
    ? (countryCode.toUpperCase() as CountryCode)
    : undefined;

  if (!validCountryCode) {
    return false;
  }

  const phoneNumber = parsePhoneNumberFromString(phoneNumberString || '', validCountryCode);

  if (!phoneNumber || !phoneNumber.isValid()) {
    return false;
  }

  return true;
};

// Validation schema for the form
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string().email("Enter a valid email").required("Email is required."),
  phone: Yup.string()
    .required("Phone number is required.")
    .test("is-valid-phone", "Phone number is invalid.", function (value) {
      const countryCode = this.parent.phoneCode || 'AE';
      return validatePhoneNumber(value || "", countryCode);
    }),
  country: Yup.string().required("Country is required."),
  instrumentType: Yup.array().min(1, "Select at least one instrument type"),
  assetValue: Yup.array(), // Asset value is now optional with checkbox values
  useOfFunds: Yup.array().min(1, "Select at least one intended use of funds"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  phoneCode: "ae",
  country: "",
  instrumentType: [],
  otherInstrument: "",
  assetValue: [],
  useOfFunds: [],
  otherUseOfFunds: "",
};

const ContactUs: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (values: any) => {
     // Simple regex for email validation
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     // Validate email
     if (!emailPattern.test(values.email)) {
       alert("Please enter a valid email address.");
       return; // Exit if the email is invalid
     }
     
    const payload = {
      name: values.name,
      email: values.email,
      number: values.phone,
      description: "Lead From Financial Instrument Investment",
      organization: values.organization || "Not provided",
      investment_amount: values.investmentAmount,
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
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="p-8 md:p-16 text-white rounded-lg max-w-full bg-cover bg-center text-left " style={{ fontFamily: "Montserrat, sans-serif", backgroundImage: "url('/Contact.svg')" }}>
              <h2 className="text-2xl font-bold mb-4">Why Choose Epiidosis for Financial Instrument Investment?</h2>
              <ul className="list-disc mt-4 pl-4 space-y-2 text-sm leading-relaxed text-justify tracking-tighter">
                <li><strong>Retain Ownership:</strong> Access funds without selling your assets, keeping full ownership and potential appreciation.</li>
                <li><strong>Tailored Solutions:</strong> Customized financial strategies that align with your specific goals.</li>
                <li><strong>Competitive Rates:</strong> Transparent, market-linked interest rates with no hidden fees.</li>
                <li><strong>Global Reach:</strong> Access to global markets with local expertise.</li>
                <li><strong>Flexible Funding:</strong> Use funds for investments, business growth, or personal needs.</li>
                <li><strong>Efficient Process:</strong> Quick, streamlined access to liquidity with minimal disruption.</li>
                <li><strong>Expert Management:</strong> Ongoing asset management and advisory services to protect and grow your collateral.</li>
              </ul>
            </div>

            {/* Right Form Section */}
            <div className="px-4 bg-white rounded-lg">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Image
                    src="/Thankyou.png"
                    alt="Thank You"
                    width={400}
                    height={400}
                  />
                  <p className="text-lg font-semibold mt-4">Thank you for your submission!</p>
                </div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  // validationSchema={validationSchema} //for country select validation not fixed yet
                  onSubmit={handleSubmit}
                >
                  {({ values, setFieldValue }) => (
                    <Form>
                      <h1 className=" textgold  mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>Contact Information</h1>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-[#6D758F] font-semibold">
                        <div>
                          <label className="block text-[#6D758F] text-sm mb-2" htmlFor="name">Name</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            maxLength={20}
                            pattern="[A-Za-z\s]*"
                            title="Please enter only letters (a-z, A-Z) and spaces."
                            className="w-full px-4 py-2 border border-[#F1F3F7] rounded-md shadow-lg shadow-slate-100"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                              // Remove any non-alphabet characters
                              e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                            }}
                          />

                          <ErrorMessage name="name" component="p" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div>
                          <label className="block text-[#6D758F] text-sm mb-2" htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="email"
                            required
                            placeholder="example@youremail.com"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                              // Optionally, you could restrict certain characters here,
                              // but usually it's better to let typical email characters be input.
                              e.target.value = e.target.value.replace(/[^A-Za-z0-9@._-]/g, '');
                            }}
                            className="w-full px-4 py-2 border border-[#F1F3F7] rounded-md shadow-lg shadow-slate-100"
                          />
                          <ErrorMessage name="email" component="p" className="text-red-600 text-sm mt-1" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-[#6D758F] font-semibold">
                        <div>
                          <label className="block text-[#6D758F] text-sm mb-2" htmlFor="phone">Phone</label>
                          <PhoneInput
                            country={values.phoneCode}
                            value={values.phone}
                            onChange={(phone, data: CountryData) => {
                              setFieldValue('phone', phone);
                              setFieldValue('phoneCode', data.countryCode);
                            }}
                            inputClass="w-full px-4 py-2 border border-[#F1F3F7] rounded-md shadow-lg shadow-slate-100"
                            specialLabel="Phone Number"
                            inputProps={{
                              required: true,
                              className: "block border p-4 rounded-lg shadow-lg shadow-slate-100 h-[40px] w-80 sm:w-72 pl-[45px] pr-[12px]"
                            }}
                          />
                          <ErrorMessage name="phone" component="p" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className="font-semibold">
                          <label className="block text-[#6D758F] text-sm mb-2" htmlFor="country">Country of residence</label>
                          <CountrySelect />
                        </div>
                      </div>

                      <div className="mb-4 text-sm text-[#6D758F]">
                        <label className="block text-[#6D758F] text-sm mb-2 font-semibold" htmlFor="instrumentType">
                          Type of Financial Instruments (Select all that apply)
                        </label>
                        <div role="group" aria-labelledby="checkbox-group" className="flex flex-wrap space-x-4">
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="instrumentType" value="Listed Stocks" />
                            <span>Listed Stocks</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="instrumentType" value="Bonds" />
                            <span>Bonds</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="instrumentType" value="Debentures" />
                            <span>Debentures</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="instrumentType" value="ETFs" />
                            <span>ETFs</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="instrumentType" value="Other" />
                            <span>Other (Please specify)</span>
                          </label>
                        </div>

                        <div className="mt-4">
                          <Field
                            type="text"
                            name="otherInstrument"
                            placeholder="Other"
                            className="w-full border border-[#F1F3F7] rounded px-2 py-1 text-sm shadow-lg shadow-slate-100"
                          />
                        </div>

                        <ErrorMessage name="instrumentType" component="p" className="text-red-600 text-sm mt-1" />
                      </div>

                      <div className="mb-4 text-sm text-[#6D758F]">
                        <label className="block text-[#6D758F] text-sm mb-2 font-semibold" htmlFor="assetValue">
                          Estimated Value of Financial Instruments
                        </label>
                        <div role="group" aria-labelledby="checkbox-group" className="flex flex-wrap space-x-4">
                          <label className="flex items-center space-x-1">
                            <Field
                              type="radio"
                              name="assetValue"
                              value="$50,000 - $250,000"
                              className="form-radio checked:bg-yellow-500"
                            />
                            <span>$50,000 - $250,000</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field
                              type="radio"
                              name="assetValue"
                              value="$250,001 - $500,000"
                              className="form-radio checked:bg-yellow-500"
                            />
                            <span>$250,001 - $500,000</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field
                              type="radio"
                              name="assetValue"
                              value="$500,001 - $1,000,000"
                              className="form-radio checked:bg-yellow-500"
                            />
                            <span>$500,001 - $1,000,000</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field
                              type="radio"
                              name="assetValue"
                              value="$1,000,001 - $5,000,000"
                              className="form-radio checked:bg-yellow-500"
                            />
                            <span>$1,000,001 - $5,000,000</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field
                              type="radio"
                              name="assetValue"
                              value="Above $5,000,000"
                              className="form-radio checked:bg-yellow-500"
                            />
                            <span>Above $5,000,000</span>
                          </label>
                        </div>
                        {/* No validation error for assetValue */}
                      </div>


                      <div className="mb-4 text-sm text-[#6D758F]">
                        <label className="block text-[#6D758F] text-sm mb-2 font-semibold" htmlFor="useOfFunds">
                          Intended Use of Funds
                        </label>
                        <div role="group" aria-labelledby="checkbox-group" className="flex flex-wrap space-x-4">
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="useOfFunds" value="New Investments" />
                            <span>New Investments</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="useOfFunds" value="Debt Consolidation" />
                            <span>Debt Consolidation</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="useOfFunds" value="Business Expansion" />
                            <span>Business Expansion</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="useOfFunds" value="Personal Expenses" />
                            <span>Personal Expenses</span>
                          </label>
                          <label className="flex items-center space-x-1">
                            <Field type="checkbox" name="useOfFunds" value="Other" />
                            <span>Other (Please specify)</span>
                          </label>
                        </div>

                        <ErrorMessage name="useOfFunds" component="p" className="text-red-600 text-sm mt-1" />
                      </div>

                      <button
                        type="submit"
                        className="py-3 px-8 bg-[#201E1F] text-white font-semibold rounded-md font-semibold shadow-lg shadow-slate-100" style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
