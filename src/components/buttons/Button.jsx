export default function Button({
  label,
  experience,
  setExperience,
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
      case 'Add':
        setExperience([
          ...experience,
          {
            id: experience.length,
            companyName: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            mainResponsibilities: '',
          },
        ]);
        break;
      case 'Remove':
        if (experience.length > 1) {
          setExperience(
            experience.filter((e) => e.id !== experience.length - 1)
          );
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
