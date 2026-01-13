import Button from './Button';

export default function ButtonGroup({
  formType,
  experience,
  setExperience,
  setInputDisabled,
}) {
  return (
    <div className="button-group">
      {formType === 'list' && (
        <>
          <Button
            label="Add"
            experience={experience}
            setExperience={setExperience}
          />
          <Button
            label="Remove"
            experience={experience}
            setExperience={setExperience}
          />
        </>
      )}
      <Button label="Edit" setInputDisabled={setInputDisabled} />
      <Button label="Submit" setInputDisabled={setInputDisabled} />
    </div>
  );
}
