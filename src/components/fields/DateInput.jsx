export default function DateInput({
  label,
  value,
  experience,
  setExperience,
  education,
  setEducation,
  index,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Experience start date':
        setExperience(
          experience.map((exp) => {
            if (exp.id === index) {
              return { ...exp, startDate: e.target.value };
            } else {
              return exp;
            }
          })
        );
        break;
      case 'Experience end date':
        setExperience(
          experience.map((exp) => {
            if (exp.id === index) {
              return { ...exp, endDate: e.target.value };
            } else {
              return exp;
            }
          })
        );
        break;
      case 'Education start date':
        setEducation(
          education.map((edu) => {
            if (edu.id === index) {
              return { ...edu, startDate: e.target.value };
            } else {
              return edu;
            }
          })
        );
        break;
      case 'Education end date':
        setEducation(
          education.map((edu) => {
            if (edu.id === index) {
              return { ...edu, endDate: e.target.value };
            } else {
              return edu;
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
        type="date"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
