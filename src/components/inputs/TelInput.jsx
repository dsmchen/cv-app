export default function TelInput({ tel, setTel }) {
  function handleChange(e) {
    setTel(e.target.value);
  }

  return (
    <label>
      TelInput component
      <input type="tel" value={tel} onChange={handleChange} />
    </label>
  );
}
