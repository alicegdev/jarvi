import { useState, useSearchParams } from "react";
import { submitApplication } from "../services/jarviApi";

export default function ApplyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddresses, setEmailAddresses] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const referenceId = 'secret';

    try {
      await submitApplication({
        firstName,
        lastName,
        emailAddresses,
        linkedInUrl,
        referenceId,
      });
      setMessage("Application envoyée avec succès !");
      setFirstName("");
      setLastName("");
      setEmailAddresses("");
      setLinkedInUrl("");
    } catch (err) {
      setMessage("Erreur: " + err.message);
    }
  };

  return (
    <div className="page">
      <form className="card" onSubmit={handleSubmit}>
        <h1 className="title">Apply</h1>
        <p className="subtitle">Send your application to Jarvi</p>

        <div className="field">
          <label className="label">First name</label>
          <input
            className="input"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Last name</label>
          <input
            className="input"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Email</label>
          <input
            className="input"
            placeholder="jane@doe.com"
            value={emailAddresses}
            onChange={(e) => setEmailAddresses(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">LinkedIn</label>
          <input
            className="input"
            placeholder="https://linkedin.com/in/..."
            value={linkedInUrl}
            onChange={(e) => setLinkedInUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="button">
          Submit application
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}