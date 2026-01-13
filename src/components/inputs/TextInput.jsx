export default function TextInput({
  label,
  value,
  contact,
  setContact,
  experience,
  setExperience,
  disabled,
  index,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Name':
        setContact({
          ...contact,
          name: e.target.value,
        });
        break;
      case 'Company name':
        setExperience([
          ...experience,
          { ...experience[index], companyName: e.target.value },
        ]);
        break;
      case 'Job title':
        setExperience([
          ...experience,
          { ...experience[index], jobTitle: e.target.value },
        ]);
        break;
    }
  }

  console.log('TextInput value:', value);

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
