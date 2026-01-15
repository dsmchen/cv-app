export default function AccordionPanel({ open, label, children }) {
  return (
    <div
      className={open ? 'fields' : 'closed fields'}
      id={'sect-' + label}
      role="region"
      aria-labelledby={'accordion-' + label}
    >
      {children}
    </div>
  );
}
