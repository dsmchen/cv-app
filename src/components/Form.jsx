import '../styles/Form.css';
import TextInput from './inputs/TextInput';
import EmailInput from './inputs/EmailInput';
import TelInput from './inputs/TelInput';
import Button from './Button';
import { useState } from 'react';

export default function Form({ name, setName, email, setEmail, tel, setTel }) {
  const [inputDisabled, setInputDisabled] = useState(false);

  return (
    <form>
      <TextInput
        label="Name"
        name={name}
        setName={setName}
        disabled={inputDisabled}
      />
      <EmailInput email={email} setEmail={setEmail} disabled={inputDisabled} />
      <TelInput tel={tel} setTel={setTel} disabled={inputDisabled} />
      <div className="buttons">
        <Button
          label="Edit"
          setInputDisabled={setInputDisabled}
          inputDisabled={inputDisabled}
        />
        <Button
          label="Submit"
          setInputDisabled={setInputDisabled}
          inputDisabled={inputDisabled}
        />
      </div>
    </form>
  );
}
