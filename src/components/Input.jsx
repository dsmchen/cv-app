export default function Input({ name, setName }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <label>
      Input component
      <input type="text" value={name} onChange={handleChange} />
    </label>
  );
}
