export default function Outputter({ name, email }) {
  return (
    <div className="outputter">
      <h2>Outputter</h2>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}
