import '../styles/Form.css';
import TextInput from './inputs/TextInput';
import EmailInput from './inputs/EmailInput';
import TelInput from './inputs/TelInput';
import ButtonGroup from './buttons/ButtonGroup';
import { useState } from 'react';

export default function ContactForm({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
}) {
  const [inputDisabled, setInputDisabled] = useState(false);

  return (
    <form>
      <h3>Contact</h3>
      <TextInput
        label="Name"
        name={name}
        setName={setName}
        disabled={inputDisabled}
      />
      <EmailInput email={email} setEmail={setEmail} disabled={inputDisabled} />
      <TelInput tel={tel} setTel={setTel} disabled={inputDisabled} />
      <ButtonGroup
        setInputDisabled={setInputDisabled}
        inputDisabled={inputDisabled}
      />
    </form>
  );
}
