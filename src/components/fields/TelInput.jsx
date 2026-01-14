export default function TelInput({ value, contact, setContact, disabled }) {
  function handleChange(e) {
    setContact({
      ...contact,
      tel: e.target.value,
    });
  }

  return (
    <label>
      <span>Phone number</span>
      <input
        type="tel"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
