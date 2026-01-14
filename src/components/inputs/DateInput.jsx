export default function DateInput({
  label,
  value,
  experience,
  setExperience,
  index,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Start date':
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
      case 'End date':
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
