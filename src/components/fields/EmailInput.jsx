import { useState } from 'react';

export default function EmailInput({
  value,
  contact,
  setContact,
  disabled,
  emailError,
  setEmailError,
}) {
  const [emailErrorType, setEmailErrorType] = useState('');

  function handleChange(e) {
    setContact({
      ...contact,
      email: e.target.value,
    });
  }

  function handleBlur(e) {
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      if (e.target.validity.valueMissing) {
        setEmailError(true);
        setEmailErrorType('valueMissing');
      } else if (e.target.validity.typeMismatch) {
        setEmailError(true);
        setEmailErrorType('typeMismatch');
      }
    }
  }

  return (
    <label>
      <span>Email (required)</span>
      <input
        type="email"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        required
        className={emailError && 'invalid'}
      />
      {emailError && emailErrorType === 'valueMissing' && (
        <span className="error">Email is required.</span>
      )}
      {emailError && emailErrorType === 'typeMismatch' && (
        <span className="error">
          Please enter a valid email e.g. doris@example.com.
        </span>
      )}
    </label>
  );
}
