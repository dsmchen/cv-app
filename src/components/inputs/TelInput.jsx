export default function TelInput({ tel, setTel, disabled }) {
  function handleChange(e) {
    setTel(e.target.value);
  }

  return (
    <label>
      <span>Phone number</span>
      <input
        type="tel"
        value={tel}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
