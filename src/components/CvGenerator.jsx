import '../styles/CvGenerator.css';
import { useState } from 'react';
import Inputter from './Inputter';
import Outputter from './Outputter';

export default function CvGenerator() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    tel: '',
  });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  return (
    <main>
      <Inputter
        contact={contact}
        setContact={setContact}
        experience={experience}
        setExperience={setExperience}
        education={education}
        setEducation={setEducation}
      />
      <Outputter
        contact={contact}
        experience={experience}
        education={education}
      />
    </main>
  );
}
