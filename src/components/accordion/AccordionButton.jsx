import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import '../../styles/Accordion.css';

export default function AccordionButton({ label, open, setOpen }) {
  function handleClick() {
    setOpen(!open);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-expanded={open}
      aria-controls={'sect-' + label}
      id={'accordion-' + label}
      className="accordion-button"
    >
      <span>{label}</span>
      <Icon path={open ? mdiChevronUp : mdiChevronDown} size={1} />
    </button>
  );
}
