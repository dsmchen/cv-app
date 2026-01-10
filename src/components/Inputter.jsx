import ContactForm from './ContactForm';

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
      <ContactForm
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
