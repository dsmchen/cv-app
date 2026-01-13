import '../styles/Form.css';
import TextInput from './inputs/TextInput';
import ButtonGroup from './buttons/ButtonGroup';
import { useState } from 'react';

export default function ExperienceForm({ experience, setExperience }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const count = experience.length;
  const experienceList = [];

  for (let i = 0; i < count; i++) {
    experienceList.push(
      <div className="experience-item" key={i}>
        <TextInput
          label="Company name"
          value={experience[i] ? experience[i].companyName : ''}
          setExperience={setExperience}
          disabled={inputDisabled}
          index={i}
          experience={experience}
        />
        <TextInput
          label="Job title"
          value={experience[i] ? experience[i].jobTitle : ''}
          setExperience={setExperience}
          disabled={inputDisabled}
          index={i}
          experience={experience}
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
        experience={experience}
        setExperience={setExperience}
        setInputDisabled={setInputDisabled}
      />
    </form>
  );
}
