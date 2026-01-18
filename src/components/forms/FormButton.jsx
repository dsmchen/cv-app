export default function FormButton({
  formType,
  label,
  experience,
  setExperience,
  education,
  setEducation,
  inputDisabled,
  setInputDisabled,
  setNameError,
  setEmailError,
  setEmailErrorType,
  setTelError,
  itemKey,
}) {
  function handleClick(e) {
    e.preventDefault();

    switch (label) {
      case 'Submit':
        if (formType === 'contact') {
          const form = e.target.closest('form');
          const name = document.getElementById('name');
          const email = document.getElementById('email');
          const tel = document.getElementById('tel');

          if (form.checkValidity()) {
            setInputDisabled(true);
          } else {
            if (name.validity.valueMissing) {
              setNameError(true);
            }
            if (tel.validity.valueMissing) {
              setTelError(true);
            }
            if (email.validity.valueMissing) {
              setEmailError(true);
              setEmailErrorType('valueMissing');
            } else if (email.validity.typeMismatch) {
              setEmailError(true);
              setEmailErrorType('typeMismatch');
            }
          }
        } else {
          setInputDisabled(true);
        }

        break;
      case 'Edit':
        setInputDisabled(false);
        break;
      case 'Add experience':
        setExperience([
          ...experience,
          {
            id: crypto.randomUUID(),
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
            experience.filter(
              (exp) => exp.id !== e.target.getAttribute('data-item-key'),
            ),
          );
        }
        break;
      case 'Add education':
        setEducation([
          ...education,
          {
            id: crypto.randomUUID(),
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
          setEducation(
            education.filter(
              (edu) => edu.id !== e.target.getAttribute('data-item-key'),
            ),
          );
        }
        break;
    }
  }

  return (
    <button
      type={label === 'Submit' ? 'submit' : 'button'}
      onClick={handleClick}
      disabled={label === 'Edit' ? !inputDisabled : inputDisabled}
      data-item-key={itemKey}
    >
      <span>{label}</span>
    </button>
  );
}
