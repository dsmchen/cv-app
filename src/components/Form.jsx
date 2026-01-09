import Input from './Input';
import Button from './Button';

export default function Form({ name, setName }) {
  return (
    <form>
      <p>Form component</p>
      <Input name={name} setName={setName} />
      <Button />
    </form>
  );
}
