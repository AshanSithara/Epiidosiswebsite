import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString, CountryCode, getCountries } from 'libphonenumber-js';

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

  return true;
};

interface PhoneInputWithValidationProps {
  countryCode: string;
  value: string;
  onChange: (value: string, countryCode: string) => void;
  onValidationChange: (isValid: boolean) => void; // New prop for validation state
}

const PhoneInputWithValidation: React.FC<PhoneInputWithValidationProps> = ({
  countryCode,
  value,
  onChange,
  onValidationChange,
}) => {
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  // Validate on component mount or when the value changes
  useEffect(() => {
    const validationResult = validatePhoneNumber(value, countryCode);
    const isValid = validationResult === true;

    setValidationMessage(isValid ? null : (validationResult as string));
    onValidationChange(isValid);
  }, [value, countryCode, onValidationChange]);

  const handlePhoneChange = (newValue: string, data: any) => {
    onChange(newValue, data.countryCode);
  };

  return (
    <div>
      <PhoneInput
        country={countryCode}
        value={value}
        onChange={handlePhoneChange}
        specialLabel="Phone Number *"
        inputProps={{
          required: true,
          className: "block border p-4 rounded-lg shadow-lg shadow-slate-100 h-[40px] w-80 sm:w-72 pl-[45px] pr-[12px]",
        }}
        containerClass="w-1/2"
      />
      {validationMessage && (
        <p className="text-red-500 text-sm mt-1">{validationMessage}</p>
      )}
    </div>
  );
};

export default PhoneInputWithValidation;
