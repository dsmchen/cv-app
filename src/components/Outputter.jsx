import Icon from '@mdi/react';
import { mdiEmail } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import '../styles/Outputter.css';

export default function Outputter({ contact, experience, education }) {
  const experienceJsx = [];
  const educationJsx = [];

  for (const exp of experience) {
    const mainResponsibilitiesJsx = [];

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
                exp.startDate || exp.endDate || exp.present
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
              className={
                exp.endDate || exp.present
                  ? 'has-hyphen start-date'
                  : 'start-date'
              }
            >
              {exp.startDate}
            </li>
          )}
          {!exp.present && exp.endDate && (
            <li key={exp.id + '-endDate'} className="end-date">
              {exp.endDate}
            </li>
          )}
          {exp.present && (
            <li key={exp.id + '-present'} className="present">
              Present
            </li>
          )}
        </ul>
        {exp.mainResponsibilities && (
          <ul className="exp-bottom">
            {exp.mainResponsibilities.split(', ').forEach((element) => {
              mainResponsibilitiesJsx.push(<li key={element}>{element}</li>);
            })}
            {mainResponsibilitiesJsx}
          </ul>
        )}
      </div>
    );
  }

  for (const edu of education) {
    educationJsx.push(
      <ul className="edu" key={edu.id}>
        <li key={edu.id + '-0'}>{edu.institutionName}</li>
        <li key={edu.id + '-1'}>
          <span
            className={
              edu.startDate || edu.endDate || edu.present ? 'has-dash' : ''
            }
          >
            {edu.titleOfStudy}
          </span>
          <span className={edu.endDate || edu.present ? 'has-hyphen' : ''}>
            {edu.startDate}
          </span>
          {!edu.present && <span>{edu.endDate}</span>}
          {edu.present && <span>Present</span>}
        </li>
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
            {contact.email && (
              <li>
                <Icon path={mdiEmail} size={1} aria-label="Email" />
                {contact.email}
              </li>
            )}
            {contact.tel && (
              <li>
                <Icon path={mdiPhone} size={1} aria-label="Phone" />
                {contact.tel}
              </li>
            )}
          </ul>
        </header>
        <section className="experience">
          {(experience[0].jobTitle || experience[0].companyName) && (
            <h4>Experience</h4>
          )}
          {experienceJsx}
        </section>
        <section className="education">
          {(education[0].institutionName || education[0].titleOfStudy) && (
            <h4>Education</h4>
          )}
          {educationJsx}
        </section>
      </div>
    </div>
  );
}
