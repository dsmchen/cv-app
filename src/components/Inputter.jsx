import ContactForm from './ContactForm';
import ExperienceForm from './ExperienceForm';

export default function Inputter({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
  experience,
  setExperience,
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
      <ExperienceForm experience={experience} setExperience={setExperience} />
    </div>
  );
}
