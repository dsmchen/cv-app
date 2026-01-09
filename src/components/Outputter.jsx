export default function Outputter({ name, email, tel }) {
  return (
    <div className="outputter">
      <h2>Outputter</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{tel}</p>
    </div>
  );
}
