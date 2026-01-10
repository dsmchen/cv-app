export default function TextInput({ label, value, setName, disabled }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
