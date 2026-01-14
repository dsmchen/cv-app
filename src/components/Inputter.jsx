import ContactForm from './forms/ContactForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';

export default function Inputter({
  contact,
  setContact,
  experience,
  setExperience,
  education,
  setEducation,
}) {
  return (
    <div className="inputter">
      <h2>Inputter</h2>
      <ContactForm contact={contact} setContact={setContact} />
      <ExperienceForm experience={experience} setExperience={setExperience} />
      <EducationForm education={education} setEducation={setEducation} />
    </div>
  );
}
