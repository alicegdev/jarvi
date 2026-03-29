export default function ApplyForm() {
  return (
    <div className="page">
      <form className="card">
        <h1 className="title">Apply</h1>
        <p className="subtitle">
          Send your application to Jarvi
        </p>

        <div className="field">
          <label className="label">Reference ID</label>
          <input className="input" placeholder="job_123" />
        </div>

        <div className="field">
          <label className="label">First name</label>
          <input className="input" placeholder="Jane" />
        </div>

        <div className="field">
          <label className="label">Last name</label>
          <input className="input" placeholder="Doe" />
        </div>

        <div className="field">
          <label className="label">Email</label>
          <input className="input" placeholder="jane@doe.com" />
        </div>

        <div className="field">
          <label className="label">LinkedIn</label>
          <input className="input" placeholder="https://linkedin.com/in/..." />
        </div>

        <button className="button">
          Submit application
        </button>
      </form>
    </div>
  );
}