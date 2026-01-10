import Button from './Button';

export default function ButtonGroup({ inputDisabled, setInputDisabled }) {
  return (
    <div className="button-group">
      <Button
        label="Edit"
        setInputDisabled={setInputDisabled}
        inputDisabled={inputDisabled}
      />
      <Button
        label="Submit"
        setInputDisabled={setInputDisabled}
        inputDisabled={inputDisabled}
      />
    </div>
  );
}
