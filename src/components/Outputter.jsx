import '../styles/Outputter.css';

export default function Outputter({ contact, experience }) {
  const experienceJsx = [];
  const mainResponsibilitiesJsx = [];

  for (const exp of experience) {
    experienceJsx.push(
      <div className="exp" key={exp.id}>
        <ul className="exp-top">
          {exp.jobTitle && (
            <li
              key={exp.id + '-jobTitle'}
              className={exp.companyName ? 'has-comma job-title' : 'job-title'}
            >
              {exp.jobTitle}
            </li>
          )}
          {exp.companyName && (
            <li
              key={exp.id + '-companyName'}
              className={
                exp.startDate || exp.endDate
                  ? 'has-dash company-name'
                  : 'company-name'
              }
            >
              {exp.companyName}
            </li>
          )}
          {exp.startDate && (
            <li
              key={exp.id + '-startDate'}
              className={exp.endDate ? 'has-hyphen start-date' : 'start-date'}
            >
              {exp.startDate}
            </li>
          )}
          {exp.endDate && (
            <li key={exp.id + '-endDate'} className="end-date">
              {exp.endDate}
            </li>
          )}
        </ul>
        {exp.mainResponsibilities && (
          <ul className="exp-bottom">
            {exp.mainResponsibilities.split(', ').forEach((element) => {
              console.log(element);
              mainResponsibilitiesJsx.push(<li key={element}>{element}</li>);
            })}
            {mainResponsibilitiesJsx}
          </ul>
        )}
      </div>
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
        <section className="experience">
          {(experience[0].jobTitle || experience[0].companyName) && (
            <h4>Experience</h4>
          )}
          {experienceJsx}
        </section>
      </div>
    </div>
  );
}
