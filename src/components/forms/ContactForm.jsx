import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import '../../styles/Form.css';
import TextInput from '../fields/TextInput';
import EmailInput from '../fields/EmailInput';
import TelInput from '../fields/TelInput';
import FormButtonGroup from '../buttons/FormButtonGroup';
import { useState } from 'react';

export default function ContactForm({ contact, setContact }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <form>
      <h3 onClick={handleClick}>
        <span>Contact</span>
        <Icon path={open ? mdiChevronUp : mdiChevronDown} size={1} />
      </h3>
      <div className={open ? 'fields' : 'closed fields'}>
        <TextInput
          label="Name (required)"
          value={contact.name}
          contact={contact}
          setContact={setContact}
          disabled={inputDisabled}
          required="true"
          nameError={nameError}
          setNameError={setNameError}
        />
        <EmailInput
          value={contact.email}
          contact={contact}
          setContact={setContact}
          disabled={inputDisabled}
          emailError={emailError}
          setEmailError={setEmailError}
        />
        <TelInput
          value={contact.tel}
          contact={contact}
          setContact={setContact}
          disabled={inputDisabled}
          telError={telError}
          setTelError={setTelError}
        />
        <FormButtonGroup setInputDisabled={setInputDisabled} />
      </div>
    </form>
  );
}
