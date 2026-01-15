import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

export default function AccordionButton({ label, open, setOpen }) {
  function handleClick() {
    setOpen(!open);
  }

  return (
    <button type="button" onClick={handleClick}>
      <span>{label}</span>
      <Icon path={open ? mdiChevronUp : mdiChevronDown} size={1} />
    </button>
  );
}
