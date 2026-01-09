export default function TextInput({ name, setName }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <label>
      TextInput component
      <input type="text" value={name} onChange={handleChange} />
    </label>
  );
}
