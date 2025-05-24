function EnvelopeScreen({ onOpen }) {
  return (
    <div className="envelope-screen">
      <div className="envelope-card" onClick={onOpen}>
        <h1>📩 You’ve Got a Birthday Card!</h1>
        <p>(Click to open)</p>
      </div>
    </div>
  );
}

export default EnvelopeScreen;
