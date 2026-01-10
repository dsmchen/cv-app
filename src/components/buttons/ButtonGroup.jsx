import Button from './Button';

export default function ButtonGroup({
  formType,
  count,
  setCount,
  setInputDisabled,
}) {
  return (
    <div className="button-group">
      {formType === 'list' && (
        <>
          <Button label="Add" count={count} setCount={setCount} />
          <Button label="Remove" count={count} setCount={setCount} />
        </>
      )}
      <Button label="Edit" setInputDisabled={setInputDisabled} />
      <Button label="Submit" setInputDisabled={setInputDisabled} />
    </div>
  );
}
