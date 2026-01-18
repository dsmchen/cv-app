import '../../styles/Form.css';
import AccordionButton from '../accordion/AccordionButton';
import AccordionPanel from '../accordion/AccordionPanel';
import FormButton from './FormButton';
import TextInput from '../fields/TextInput';
import DateInput from '../fields/DateInput';
import CheckboxInput from '../fields/CheckboxInput';
import Textarea from '../fields/Textarea';
import FormButtonGroup from './FormButtonGroup';
import { useState } from 'react';

export default function ExperienceForm({ experience, setExperience }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const count = experience.length;
  const experienceList = [];
  const [open, setOpen] = useState(false);
  const label = 'experience';

  for (let i = 0; i < count; i++) {
    const key = experience[i].id;

    experienceList.push(
      <div className="experience-item" key={key}>
        <FormButton
          label="Remove experience"
          experience={experience}
          setExperience={setExperience}
          inputDisabled={inputDisabled}
          itemKey={key}
        />
        <TextInput
          label="Job title"
          value={experience[i].jobTitle ?? ''}
          experience={experience}
          setExperience={setExperience}
          itemKey={key}
          disabled={inputDisabled}
        />
        <TextInput
          label="Company name"
          value={experience[i].companyName ?? ''}
          experience={experience}
          setExperience={setExperience}
          itemKey={key}
          disabled={inputDisabled}
        />
        <DateInput
          label="Experience start date"
          value={experience[i].startDate ?? ''}
          experience={experience}
          setExperience={setExperience}
          itemKey={key}
          disabled={inputDisabled}
        />
        {!experience[i].present && (
          <DateInput
            label="Experience end date"
            value={experience[i].endDate ?? ''}
            experience={experience}
            setExperience={setExperience}
            itemKey={key}
            disabled={inputDisabled}
          />
        )}
        <CheckboxInput
          label="Present experience"
          checked={experience[i].present ?? false}
          experience={experience}
          setExperience={setExperience}
          itemKey={key}
          disabled={inputDisabled}
        />
        <Textarea
          label="Main responsibilities"
          value={experience[i].mainResponsibilities ?? ''}
          experience={experience}
          setExperience={setExperience}
          itemKey={key}
          disabled={inputDisabled}
        />
      </div>,
    );
  }

  return (
    <form noValidate>
      <h3>
        <AccordionButton label={label} open={open} setOpen={setOpen} />
      </h3>
      <AccordionPanel open={open} label={label}>
        <div className="fields">
          {experienceList}
          <FormButtonGroup
            formType={label}
            experience={experience}
            setExperience={setExperience}
            inputDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        </div>
      </AccordionPanel>
    </form>
  );
}
