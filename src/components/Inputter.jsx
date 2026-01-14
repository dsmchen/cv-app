import ContactForm from './forms/ContactForm';
import ExperienceForm from './forms/ExperienceForm';

export default function Inputter({
  contact,
  setContact,
  experience,
  setExperience,
}) {
  return (
    <div className="inputter">
      <h2>Inputter</h2>
      <ContactForm contact={contact} setContact={setContact} />
      <ExperienceForm experience={experience} setExperience={setExperience} />
    </div>
  );
}
