import '../../styles/Form.css';
import AccordionButton from '../buttons/AccordionButton';
import TextInput from '../fields/TextInput';
import DateInput from '../fields/DateInput';
import CheckboxInput from '../fields/CheckboxInput';
import FormButtonGroup from '../buttons/FormButtonGroup';
import { useState } from 'react';

export default function EducationForm({ education, setEducation }) {
  const [inputDisabled, setInputDisabled] = useState(false);
  const count = education.length;
  const educationList = [];
  const [open, setOpen] = useState(false);

  for (let i = 0; i < count; i++) {
    educationList.push(
      <div className="education-item" key={i}>
        <TextInput
          label="Institution name"
          value={education[i].institutionName ?? ''}
          education={education}
          setEducation={setEducation}
          index={i}
          disabled={inputDisabled}
        />
        <TextInput
          label="Title of study"
          value={education[i].titleOfStudy ?? ''}
          education={education}
          setEducation={setEducation}
          index={i}
          disabled={inputDisabled}
        />
        <DateInput
          label="Education start date"
          value={education[i].startDate ?? ''}
          education={education}
          setEducation={setEducation}
          index={i}
          disabled={inputDisabled}
        />
        {!education[i].present && (
          <DateInput
            label="Education end date"
            value={education[i].endDate ?? ''}
            education={education}
            setEducation={setEducation}
            index={i}
            disabled={inputDisabled}
          />
        )}
        <CheckboxInput
          label="Present education"
          checked={education[i].present ?? false}
          education={education}
          setEducation={setEducation}
          index={i}
          disabled={inputDisabled}
        />
      </div>
    );
  }

  return (
    <form noValidate>
      <h3>
        <AccordionButton label="Contact" open={open} setOpen={setOpen} />
      </h3>
      <div className={open ? 'fields' : 'closed fields'}>
        {educationList}
        <FormButtonGroup
          formType="education"
          education={education}
          setEducation={setEducation}
          setInputDisabled={setInputDisabled}
        />
      </div>
    </form>
  );
}
