export default function CheckboxInput({
  label,
  checked,
  experience,
  setExperience,
  index,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Present':
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
