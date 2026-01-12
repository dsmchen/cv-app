import '../styles/CvGenerator.css';
import { useState } from 'react';
import Inputter from './Inputter';
import Outputter from './Outputter';

export default function CvGenerator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [experience, setExperience] = useState([]);

  return (
    <main>
      <Inputter
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        tel={tel}
        setTel={setTel}
        experience={experience}
        setExperience={setExperience}
      />
      <Outputter name={name} email={email} tel={tel} />
    </main>
  );
}
