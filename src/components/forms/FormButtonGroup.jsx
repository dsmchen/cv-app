import FormButton from './FormButton';

export default function FormButtonGroup({
  formType,
  experience,
  setExperience,
  education,
  setEducation,
  setInputDisabled,
}) {
  return (
    <div className="button-group">
      {formType === 'experience' && (
        <>
          <FormButton
            label="Add experience"
            experience={experience}
            setExperience={setExperience}
          />
          <FormButton
            label="Remove experience"
            experience={experience}
            setExperience={setExperience}
          />
        </>
      )}
      {formType === 'education' && (
        <>
          <FormButton
            label="Add education"
            education={education}
            setEducation={setEducation}
          />
          <FormButton
            label="Remove education"
            education={education}
            setEducation={setEducation}
          />
        </>
      )}
      <FormButton label="Edit" setInputDisabled={setInputDisabled} />
      <FormButton label="Submit" setInputDisabled={setInputDisabled} />
    </div>
  );
}
