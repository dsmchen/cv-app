export default function CheckboxInput({
  label,
  checked,
  experience,
  setExperience,
  education,
  setEducation,
  index,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Present experience':
        setExperience(
          experience.map((exp) => {
            if (exp.id === index) {
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
            if (edu.id === index) {
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
