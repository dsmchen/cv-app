export default function TextInput({
  label,
  value,
  contact,
  setContact,
  experience,
  setExperience,
  education,
  setEducation,
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
      case 'Institution name':
        setEducation(
          education.map((edu) => {
            if (edu.id === index) {
              return { ...edu, institutionName: e.target.value };
            } else {
              return edu;
            }
          })
        );
        break;
      case 'Title of study':
        setEducation(
          education.map((edu) => {
            if (edu.id === index) {
              return { ...edu, titleOfStudy: e.target.value };
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
        type="text"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}
