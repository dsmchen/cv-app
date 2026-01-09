export default function TextInput({ label, name, setName }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <label>
      {label}
      <input type="text" value={name} onChange={handleChange} />
    </label>
  );
}
