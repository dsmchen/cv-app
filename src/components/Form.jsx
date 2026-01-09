import '../styles/Form.css';
import TextInput from './inputs/TextInput';
import EmailInput from './inputs/EmailInput';
import TelInput from './inputs/TelInput';
import Button from './Button';

export default function Form({ name, setName, email, setEmail, tel, setTel }) {
  return (
    <form>
      <TextInput label="Name" name={name} setName={setName} />
      <EmailInput email={email} setEmail={setEmail} />
      <TelInput tel={tel} setTel={setTel} />
      <div className="buttons">
        <Button label="Edit" />
        <Button label="Submit" />
      </div>
    </form>
  );
}
