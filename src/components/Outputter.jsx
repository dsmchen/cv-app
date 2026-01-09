import '../styles/Outputter.css';

export default function Outputter({ name, email, tel }) {
  return (
    <div className="outputter">
      <h2>Outputter</h2>
      <div className="cv">
        <h3>{name}</h3>
        <ul className="contact">
          <li>
            <span>Email: </span>
            {email}
          </li>
          <li>
            <span>Phone number: </span>
            {tel}
          </li>
        </ul>
      </div>
    </div>
  );
}
