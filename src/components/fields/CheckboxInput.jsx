export default function CheckboxInput({
  label,
  checked,
  experience,
  setExperience,
  education,
  setEducation,
  itemKey,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Present experience':
        setExperience(
          experience.map((exp) => {
            if (exp.id === itemKey) {
              return { ...exp, present: e.target.checked };
            } else {
              return exp;
            }
          })
        );
        break;
      case 'Present education':
        setEducation(
          education.map((edu) => {
            if (edu.id === itemKey) {
              return { ...edu, present: e.target.checked };
            } else {
              return edu;
            }
          })
        );
        break;
    }
  }

  return (
    <label className={label.toLowerCase()}>
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
