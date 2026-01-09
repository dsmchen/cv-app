import { useState } from 'react';
import Inputter from './Inputter';
import Outputter from './Outputter';

export default function CvGenerator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <main>
      <Inputter
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />
      <Outputter name={name} email={email} />
    </main>
  );
}
