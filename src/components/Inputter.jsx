import Form from './Form';

export default function Inputter({ name, setName }) {
  return (
    <div className="inputter">
      <h2>Inputter</h2>
      <Form name={name} setName={setName} />
    </div>
  );
}
