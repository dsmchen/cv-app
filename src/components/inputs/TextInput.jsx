export default function TextInput({
  label,
  value,
  setName,
  setExperience,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Name':
        setName(e.target.value);
        break;
      case 'Company name':
        setExperience([...value, { companyName: e.target.value }]);
        break;
      case 'Job title':
        setExperience([...value, { jobTitle: e.target.value }]);
        break;
    }
  }

  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
