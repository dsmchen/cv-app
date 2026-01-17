export default function Textarea({
  label,
  value,
  experience,
  setExperience,
  itemKey,
  disabled,
}) {
  function handleChange(e) {
    switch (label) {
      case 'Main responsibilities':
        setExperience(
          experience.map((exp) => {
            if (exp.id === itemKey) {
              return { ...exp, mainResponsibilities: e.target.value };
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
      <textarea
        rows="5"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder="Please enter a comma separated list."
      ></textarea>
    </label>
  );
}
