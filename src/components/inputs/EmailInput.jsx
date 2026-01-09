export default function EmailInput({ email, setEmail }) {
  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <label>
      <span>Email</span>
      <input type="email" value={email} onChange={handleChange} />
    </label>
  );
}
