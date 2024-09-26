import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import * as Yup from "yup";
import { parsePhoneNumberFromString, CountryCode, getCountries } from 'libphonenumber-js';
import Image from 'next/image';
import CountrySelect from '../../Common/CountrySelect'

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

// Validation schema
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
  assetValue: Yup.string().required("Value of the Asset is required."),
  assetJurisdiction: Yup.string().required("Asset Jurisdiction is required."),
  message: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  phoneCode: "ae",  // Default to UAE
  country: "",
  assetValue: "",
  assetJurisdiction: "",
  message: "",
};

const ContactUs: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Function to handle form submission
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
      description: "Lead From Asset Monetization",
      organization: values.organization || "Not provided",
      investment_amount: values.investmentAmount,
    };

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => value !== "" && value !== null && value !== undefined)
    );

    try {
      const response = await fetch("https://erp.epiidosisinvestments.com/lead/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredPayload),
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
      <section className="py-12 bg-white" style={{
        fontFamily: "Lato, sans-serif",
      }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Section */}
            <div className="p-8 md:p-16 text-white rounded-lg max-w-full bg-cover bg-center text-justify tracking-tighter" style={{ fontFamily: "Montserrat, sans-serif", backgroundImage: "url('/Contact.svg')" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Epiidosis for Asset Monetization?</h2><br />
              <ul className="list-disc mt-4 pl-5 space-y-2 text-sm md:text-base leading-relaxed">
                <li><strong>Tailored Strategies for Maximized Returns:</strong> Our track record in optimizing asset values is complemented by customized strategies and expert financial insight.</li><br />
                <li><strong>Expertise in Diversified Asset Classes:</strong> From real estate and equities to intellectual property and digital assets, our deep understanding spans a wide range of asset classes.</li><br />
                <li><strong>Global Network:</strong> We connect you with the right buyers, partners, or financiers through our vast network.</li><br />
                <li><strong>Innovative Financial Solutions:</strong> Securitization, sale-leasebacks, asset-backed loans, and more options available.</li><br />
                <li><strong>Risk Management and Due Diligence:</strong> We ensure transparency and security through thorough audits and assessments.</li><br />
              </ul>
            </div>


            {/* Right Section */}
            <div className="px-4 bg-white rounded-lg ">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                </div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  // validationSchema={validationSchema} //for country select validation not fixed yet 
                  onSubmit={handleSubmit}
                >
                  {({ values, setFieldValue }) => (
                    <Form>
                      <h1 className=" textgold  mb-6" style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}>You're Interested in Monetizing</h1>
                      <p className="text-[#6D758F] mb-6">Connect with Epiidosis Investments LLC. Reach out to our dedicated team for personalized assistance, inquiries about our services, or to explore collaboration opportunities.</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-[#6D758F] text-sm">
                        <div>
                          <label className="block font-semibold text-sm mb-2" htmlFor="name">Name</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="Brian Clark"
                            required
                            maxLength={20}
                            pattern="[A-Za-z\s]*"
                            title="Please enter only letters (a-z, A-Z) and spaces."
                            className="w-full px-4 py-2 border border-[#F1F3F7] rounded-md font-semibold shadow-lg shadow-slate-100 "
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                              // Remove any non-alphabet characters
                              e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                            }}
                          />
                          <ErrorMessage name="name" component="p" className="text-red-600 text-sm mt-1" />
                        </div>

                        <div>
                          <label className="block font-semibold text-sm mb-2" htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="email"
                            required
                            placeholder="example@youremail.com"
                            className="w-full px-4 py-2 border border-[#F1F3F7] rounded-md font-semibold shadow-lg shadow-slate-100 "
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                              // Optionally, you could restrict certain characters here,
                              // but usually it's better to let typical email characters be input.
                              e.target.value = e.target.value.replace(/[^A-Za-z0-9@._-]/g, '');
                            }}
                          />
                          <ErrorMessage name="email" component="p" className="text-red-600 text-sm mt-1" />
                        </div>

                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-[#6D758F] text-sm">
                        <div className="grid mb-4 text-[#6D758F] text-sm" >
                          <label className="block font-semibold text-sm mb-2" htmlFor="phone">Phone</label>
                          <PhoneInput
                            country={values.phoneCode}
                            value={values.phone}
                            onChange={(phone, data: CountryData) => {
                              setFieldValue('phone', phone);
                              setFieldValue('phoneCode', data.countryCode);
                            }}
                            inputClass="w-full px-4 py-2 border border-[#F1F3F7] rounded-md font-semibold shadow-lg shadow-slate-100 "
                            specialLabel="Phone Number"
                            inputProps={{
                              required: true,
                              className: "block border p-4 rounded-lg shadow-lg shadow-slate-100 h-[40px] w-80 sm:w-72 pl-[45px] pr-[12px]"
                            }}
                          />
                          <ErrorMessage name="phone" component="p" className="text-red-600 text-sm mt-1" />

                        </div>
                        <div>
                          <label className="block font-semibold text-sm mb-2" htmlFor="country">Country</label>
                          <CountrySelect />
                          <ErrorMessage name="counntry" component="p" className="text-red-600 text-sm mt-1" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-[#6D758F] text-sm">

                        <div className="text-[#6D758F]">
                          <label className="block font-semibold text-sm mb-2" htmlFor="assetValue">Value of the Asset</label>
                          <Field
                            type="number"
                            name="assetValue"
                            placeholder="-"
                            required
                            className="w-full px-4 py-2 border border-[#F1F3F7] rounded-md font-semibold shadow-lg shadow-slate-100 "
                          />
                          <ErrorMessage name="assetValue" component="p" className="text-red-600 text-sm mt-1" />
                        </div>


                        <div className="mb-4 text-[#6D758F] text-sm">
                          <label className="block font-semibold text-sm mb-2" htmlFor="assetJurisdiction">Asset Jurisdiction</label>
                          <Field
                            type="text"
                            name="assetJurisdiction"
                            placeholder="Country"
                            required
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                              // Remove any non-alphabet characters
                              e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                            }}
                            className="w-full px-4 py-2 border border-[#F1F3F7] rounded-md font-semibold shadow-lg shadow-slate-100 "
                          />
                          <ErrorMessage name="assetJurisdiction" component="p" className="text-red-600 text-sm mt-1" />
                        </div>
                      </div>

                      <div className="mb-4 text-[#6D758F] text-sm">
                        <label className="block font-semibold text-sm mb-2" htmlFor="message">Message</label>
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="Type your message here..."
                          rows={3}
                          className="w-full px-4 py-2 border border-[#F1F3F7] rounded-md font-semibold shadow-lg shadow-slate-100 "
                        />
                      </div>

                      <button
                        type="submit"
                        className="py-3 px-8 bg-[#201E1F] text-white font-semibold rounded-md font-semibold shadow-lg shadow-slate-100" style={{ fontFamily: "Montserrat, sans-serif", }}
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
