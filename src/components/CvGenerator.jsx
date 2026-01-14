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
  const [experience, setExperience] = useState([
    {
      id: 0,
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      mainResponsibilities: '',
    },
  ]);

  return (
    <main>
      <Inputter
        contact={contact}
        setContact={setContact}
        experience={experience}
        setExperience={setExperience}
      />
      <Outputter contact={contact} experience={experience} />
    </main>
  );
}
