import { useState } from 'react';
import Inputter from './Inputter';
import Outputter from './Outputter';

export default function CvGenerator() {
  const [name, setName] = useState('');

  return (
    <main>
      <Inputter name={name} setName={setName} />
      <Outputter name={name} />
    </main>
  );
}
