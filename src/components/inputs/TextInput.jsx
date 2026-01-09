export default function TextInput({ label, name, setName, disabled }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
