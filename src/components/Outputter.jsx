import '../styles/Outputter.css';

export default function Outputter({ name, email, tel }) {
  return (
    <div className="outputter">
      <h2>Outputter</h2>
      <div className="cv">
        <header className="cv-header">
          <h3>{name}</h3>
          <ul className="contact">
            <li>
              {email && <span>Email: </span>}
              {email}
            </li>
            <li>
              {tel && <span>Phone number: </span>}
              {tel}
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
