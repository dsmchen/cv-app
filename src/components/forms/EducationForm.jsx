import '../../styles/Form.css';
import AccordionButton from '../accordion/AccordionButton';
import AccordionPanel from '../accordion/AccordionPanel';
import TextInput from '../fields/TextInput';
import DateInput from '../fields/DateInput';
import CheckboxInput from '../fields/CheckboxInput';
import FormButtonGroup from './FormButtonGroup';
import { useState } from 'react';

export default function EducationForm({ education, setEducation }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const count = education.length;
  const educationList = [];
  const [open, setOpen] = useState(false);
  const label = 'education';

  for (let i = 0; i < count; i++) {
    const key = education[i].id;

    educationList.push(
      <div className="education-item" key={key}>
        <TextInput
          label="Institution name"
          value={education[i].institutionName ?? ''}
          education={education}
          setEducation={setEducation}
          itemKey={key}
          disabled={inputDisabled}
        />
        <TextInput
          label="Title of study"
          value={education[i].titleOfStudy ?? ''}
          education={education}
          setEducation={setEducation}
          itemKey={key}
          disabled={inputDisabled}
        />
        <DateInput
          label="Education start date"
          value={education[i].startDate ?? ''}
          education={education}
          setEducation={setEducation}
          itemKey={key}
          disabled={inputDisabled}
        />
        {!education[i].present && (
          <DateInput
            label="Education end date"
            value={education[i].endDate ?? ''}
            education={education}
            setEducation={setEducation}
            itemKey={key}
            disabled={inputDisabled}
          />
        )}
        <CheckboxInput
          label="Present education"
          checked={education[i].present ?? false}
          education={education}
          setEducation={setEducation}
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
          {educationList}
          <FormButtonGroup
            formType={label}
            education={education}
            setEducation={setEducation}
            inputDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        </div>
      </AccordionPanel>
    </form>
  );
}
