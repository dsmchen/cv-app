export default function TelInput({
  value,
  contact,
  setContact,
  disabled,
  telError,
  setTelError,
}) {
  function handleChange(e) {
    setContact({
      ...contact,
      tel: e.target.value,
    });
  }

  function handleBlur(e) {
    if (e.target.validity.valid) {
      setTelError(false);
    } else if (e.target.validity.valueMissing) {
      setTelError(true);
    }
  }

  return (
    <label>
      <span>Phone number (required)</span>
      <input
        type="tel"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        required
        className={telError ? 'invalid' : undefined}
        aria-describedby="tel-error"
      />
      {telError && (
        <span id="tel-error" role="alert" className="error">
          Phone number is required.
        </span>
      )}
    </label>
  );
}
