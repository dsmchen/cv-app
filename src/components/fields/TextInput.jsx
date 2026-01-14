export default function TextInput({
  label,
  value,
  contact,
  setContact,
  experience,
  setExperience,
  index,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Name':
        setContact({
          ...contact,
          name: e.target.value,
        });
        break;
      case 'Job title':
        setExperience(
          experience.map((exp) => {
            if (exp.id === index) {
              return { ...exp, jobTitle: e.target.value };
            } else {
              return exp;
            }
          })
        );
        break;
      case 'Company name':
        setExperience(
          experience.map((exp) => {
            if (exp.id === index) {
              return { ...exp, companyName: e.target.value };
            } else {
              return exp;
            }
          })
        );
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
