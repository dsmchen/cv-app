import '../../styles/Form.css';
import TextInput from '../fields/TextInput';
import DateInput from '../fields/DateInput';
import CheckboxInput from '../fields/CheckboxInput';
import Textarea from '../fields/Textarea';
import ButtonGroup from '../buttons/ButtonGroup';
import { useState } from 'react';

export default function ExperienceForm({ experience, setExperience }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const count = experience.length;
  const experienceList = [];

  for (let i = 0; i < count; i++) {
    experienceList.push(
      <div className="experience-item" key={i}>
        <TextInput
          label="Job title"
          value={experience[i].jobTitle ?? ''}
          experience={experience}
          setExperience={setExperience}
          index={i}
          disabled={inputDisabled}
        />
        <TextInput
          label="Company name"
          value={experience[i].companyName ?? ''}
          experience={experience}
          setExperience={setExperience}
          index={i}
          disabled={inputDisabled}
        />
        <DateInput
          label="Experience start date"
          value={experience[i].startDate ?? ''}
          experience={experience}
          setExperience={setExperience}
          index={i}
          disabled={inputDisabled}
        />
        {!experience[i].present && (
          <DateInput
            label="Experience end date"
            value={experience[i].endDate ?? ''}
            experience={experience}
            setExperience={setExperience}
            index={i}
            disabled={inputDisabled}
          />
        )}
        <CheckboxInput
          label="Present experience"
          checked={experience[i].present ?? false}
          experience={experience}
          setExperience={setExperience}
          index={i}
          disabled={inputDisabled}
        />
        <Textarea
          label="Main responsibilities"
          value={experience[i].mainResponsibilities ?? ''}
          experience={experience}
          setExperience={setExperience}
          index={i}
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
        formType="experience"
        experience={experience}
        setExperience={setExperience}
        setInputDisabled={setInputDisabled}
      />
    </form>
  );
}
