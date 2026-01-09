export default function Button({ label, setInputDisabled }) {
  function handleClick(e) {
    e.preventDefault();

    if (label === 'Submit') {
      setInputDisabled(true);
    } else {
      setInputDisabled(false);
    }
  }

  return (
    <button onClick={handleClick}>
      <span>{label}</span>
    </button>
  );
}
