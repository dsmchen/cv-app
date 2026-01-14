import Button from './Button';

export default function ButtonGroup({
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
          <Button
            label="Add experience"
            experience={experience}
            setExperience={setExperience}
          />
          <Button
            label="Remove experience"
            experience={experience}
            setExperience={setExperience}
          />
        </>
      )}
      {formType === 'education' && (
        <>
          <Button
            label="Add education"
            education={education}
            setEducation={setEducation}
          />
          <Button
            label="Remove education"
            education={education}
            setEducation={setEducation}
          />
        </>
      )}
      <Button label="Edit" setInputDisabled={setInputDisabled} />
      <Button label="Submit" setInputDisabled={setInputDisabled} />
    </div>
  );
}
