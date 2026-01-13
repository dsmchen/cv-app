import '../styles/Outputter.css';

export default function Outputter({ contact, experience }) {
  const experienceJsx = [];

  for (const exp of experience) {
    experienceJsx.push(
      <ul key={exp.id} className="exp">
        {exp.companyName && (
          <li key={exp.id + '-companyName'}>{exp.companyName}</li>
        )}
        {exp.jobTitle && <li key={exp.id + '-jobTitle'}>{exp.jobTitle}</li>}
      </ul>
    );
  }

  return (
    <div className="outputter">
      <h2>Outputter</h2>
      <div className="cv">
        <header className="cv-header">
          <h3>{contact.name}</h3>
          <ul className="contact">
            <li>
              {contact.email && <span>Email: </span>}
              {contact.email}
            </li>
            <li>
              {contact.tel && <span>Phone number: </span>}
              {contact.tel}
            </li>
          </ul>
        </header>
        {(experience[0].companyName || experience[0].jobTitle) && (
          <h4>Experience</h4>
        )}
        {experienceJsx}
      </div>
    </div>
  );
}
