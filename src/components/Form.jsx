import TextInput from './inputs/TextInput';
import EmailInput from './inputs/EmailInput';
import TelInput from './inputs/TelInput';
import Button from './Button';

export default function Form({ name, setName, email, setEmail, tel, setTel }) {
  return (
    <form>
      <p>Form component</p>
      <TextInput name={name} setName={setName} />
      <EmailInput email={email} setEmail={setEmail} />
      <TelInput tel={tel} setTel={setTel} />
      <Button />
    </form>
  );
}
