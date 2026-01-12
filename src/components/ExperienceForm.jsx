import '../styles/Form.css';
import TextInput from './inputs/TextInput';
import Button from './buttons/Button';
import ButtonGroup from './buttons/ButtonGroup';
import { useState } from 'react';

export default function ExperienceForm({ experience, setExperience }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const [count, setCount] = useState(1);
  const experienceList = [];

  for (let i = 0; i < count; i++) {
    experienceList.push(
      <div className="experience-item">
        <TextInput
          label="Company name"
          value={experience[i].companyName}
          setExperience={setExperience}
          disabled={inputDisabled}
        />
        <TextInput
          label="Job title"
          value={experience[i].jobTitle}
          setExperience={setExperience}
          disabled={inputDisabled}
        />
      </div>
    );
  }

  return (
    <form>
      <h3>Experience</h3>
      {experienceList}
      <ButtonGroup
        formType="list"
        count={count}
        setCount={setCount}
        setInputDisabled={setInputDisabled}
      />
    </form>
  );
}
