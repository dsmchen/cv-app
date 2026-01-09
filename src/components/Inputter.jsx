import Form from './Form';

export default function Inputter({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
}) {
  return (
    <div className="inputter">
      <h2>Inputter</h2>
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        tel={tel}
        setTel={setTel}
      />
    </div>
  );
}
