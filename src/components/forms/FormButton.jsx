export default function FormButton({
  label,
  experience,
  setExperience,
  education,
  setEducation,
  setInputDisabled,
}) {
  function handleClick(e) {
    e.preventDefault();

    switch (label) {
      case 'Submit':
        setInputDisabled(true);
        break;
      case 'Edit':
        setInputDisabled(false);
        break;
      case 'Add experience':
        setExperience([
          ...experience,
          {
            id: experience.length,
            companyName: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            present: false,
            mainResponsibilities: '',
          },
        ]);
        break;
      case 'Remove experience':
        if (experience.length > 1) {
          setExperience(
            experience.filter((e) => e.id !== experience.length - 1)
          );
        }
        break;
      case 'Add education':
        setEducation([
          ...education,
          {
            id: education.length,
            institutionName: '',
            titleOfStudy: '',
            startDate: '',
            endDate: '',
            present: false,
          },
        ]);
        break;
      case 'Remove education':
        if (education.length > 1) {
          setEducation(education.filter((e) => e.id !== education.length - 1));
        }
        break;
    }
  }

  return (
    <button
      type={label === 'Submit' ? 'submit' : 'button'}
      onClick={handleClick}
    >
      <span>{label}</span>
    </button>
  );
}
