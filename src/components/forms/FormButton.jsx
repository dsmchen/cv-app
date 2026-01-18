import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
import { mdiPencil } from '@mdi/js';

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
  let iconPath;
  if (label === 'Delete experience' || label === 'Delete education') {
    iconPath = mdiDelete;
  } else if (label === 'Add experience' || label === 'Add education') {
    iconPath = mdiPlus;
  } else if (label === 'Edit') {
    iconPath = mdiPencil;
  }

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
      case 'Delete experience':
        setExperience(
          experience.filter(
            (exp) => exp.id !== e.target.getAttribute('data-item-key'),
          ),
        );
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
      case 'Delete education':
        setEducation(
          education.filter(
            (edu) => edu.id !== e.target.getAttribute('data-item-key'),
          ),
        );
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
      {iconPath && <Icon path={iconPath} size={1} />}
      <span>{label}</span>
    </button>
  );
}
