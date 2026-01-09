export default function EmailInput({ email, setEmail }) {
  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <label>
      EmailInput component
      <input type="email" value={email} onChange={handleChange} />
    </label>
  );
}
