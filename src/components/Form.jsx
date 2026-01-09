import TextInput from './TextInput';
import EmailInput from './EmailInput';
import Button from './Button';

export default function Form({ name, setName, email, setEmail }) {
  return (
    <form>
      <p>Form component</p>
      <TextInput name={name} setName={setName} />
      <EmailInput email={email} setEmail={setEmail} />
      <Button />
    </form>
  );
}
