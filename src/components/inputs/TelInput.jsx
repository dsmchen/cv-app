export default function TelInput({ tel, setTel }) {
  function handleChange(e) {
    setTel(e.target.value);
  }

  return (
    <label>
      Phone number
      <input type="tel" value={tel} onChange={handleChange} />
    </label>
  );
}
