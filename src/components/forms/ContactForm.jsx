import '../../styles/Form.css';
import AccordionButton from '../accordion/AccordionButton';
import TextInput from '../fields/TextInput';
import EmailInput from '../fields/EmailInput';
import TelInput from '../fields/TelInput';
import FormButtonGroup from '../accordion/FormButtonGroup';
import { useState } from 'react';

export default function ContactForm({ contact, setContact }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [open, setOpen] = useState(true);
  const label = 'contact';

  return (
    <form noValidate>
      <h3>
        <AccordionButton label={label} open={open} setOpen={setOpen} />
      </h3>
      <div
        className={open ? 'fields' : 'closed fields'}
        id={'sect-' + label}
        role="region"
        aria-labelledby={'accordion-' + label}
      >
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
