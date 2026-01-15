import '../../styles/Accordion.css';

export default function AccordionPanel({ open, label, children }) {
  return (
    <div
      className={open ? 'accordion-panel' : 'closed accordion-panel'}
      id={'sect-' + label}
      role="region"
      aria-labelledby={'accordion-' + label}
    >
      {children}
    </div>
  );
}
