export default function EmailInput({ value, contact, setContact, disabled }) {
  function handleChange(e) {
    setContact({
      ...contact,
      email: e.target.value,
    });
  }

  return (
    <label>
      <span>Email (required)</span>
      <input
        type="email"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required
      />
    </label>
  );
}
