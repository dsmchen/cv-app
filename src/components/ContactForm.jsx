import '../styles/Form.css';
import TextInput from './fields/TextInput';
import EmailInput from './fields/EmailInput';
import TelInput from './fields/TelInput';
import ButtonGroup from './buttons/ButtonGroup';
import { useState } from 'react';

export default function ContactForm({ contact, setContact }) {
  const [inputDisabled, setInputDisabled] = useState(false);

  return (
    <form>
      <h3>Contact</h3>
      <TextInput
        label="Name"
        value={contact.name}
        contact={contact}
        setContact={setContact}
        disabled={inputDisabled}
      />
      <EmailInput
        value={contact.email}
        contact={contact}
        setContact={setContact}
        disabled={inputDisabled}
      />
      <TelInput
        value={contact.tel}
        contact={contact}
        setContact={setContact}
        disabled={inputDisabled}
      />
      <ButtonGroup setInputDisabled={setInputDisabled} />
    </form>
  );
}
