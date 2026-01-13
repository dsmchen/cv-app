import '../styles/Outputter.css';

export default function Outputter({ contact, experience }) {
  const experienceJsx = [];

  for (const exp of experience) {
    experienceJsx.push(
      <ul key={exp.id} className="exp">
        {exp.jobTitle && <li key={exp.id + '-jobTitle'}>{exp.jobTitle}</li>}
        {exp.companyName && (
          <li key={exp.id + '-companyName'}>{exp.companyName}</li>
        )}
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
        {(experience[0].jobTitle || experience[0].companyName) && (
          <h4>Experience</h4>
        )}
        {experienceJsx}
      </div>
    </div>
  );
}
