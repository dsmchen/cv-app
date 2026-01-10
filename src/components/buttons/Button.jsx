export default function Button({ label, count, setCount, setInputDisabled }) {
  function handleClick(e) {
    e.preventDefault();

    switch (label) {
      case 'Submit':
        setInputDisabled(true);
        break;
      case 'Edit':
        setInputDisabled(false);
        break;
      case 'Add':
        setCount(count + 1);
        break;
      case 'Remove':
        if (count > 1) {
          setCount(count - 1);
        }
        break;
    }
  }

  return (
    <button onClick={handleClick}>
      <span>{label}</span>
    </button>
  );
}
