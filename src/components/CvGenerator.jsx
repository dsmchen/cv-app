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

  return (
    <main>
      <Inputter
        contact={contact}
        setContact={setContact}
        experience={experience}
        setExperience={setExperience}
      />
      <Outputter contact={contact} />
    </main>
  );
}
