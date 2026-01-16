import FormButton from './FormButton';

export default function FormButtonGroup({
  formType,
  experience,
  setExperience,
  education,
  setEducation,
  inputDisabled,
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
            inputDisabled={inputDisabled}
          />
          <FormButton
            label="Remove experience"
            experience={experience}
            setExperience={setExperience}
            inputDisabled={inputDisabled}
          />
        </>
      )}
      {formType === 'education' && (
        <>
          <FormButton
            label="Add education"
            education={education}
            setEducation={setEducation}
            inputDisabled={inputDisabled}
          />
          <FormButton
            label="Remove education"
            education={education}
            setEducation={setEducation}
            inputDisabled={inputDisabled}
          />
        </>
      )}
      <FormButton
        label="Edit"
        inputDisabled={inputDisabled}
        setInputDisabled={setInputDisabled}
      />
      <FormButton
        label="Submit"
        inputDisabled={inputDisabled}
        setInputDisabled={setInputDisabled}
      />
    </div>
  );
}
