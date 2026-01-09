export default function EmailInput({ email, setEmail }) {
  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <label>
      Email
      <input type="email" value={email} onChange={handleChange} />
    </label>
  );
}
