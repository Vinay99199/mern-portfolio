function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>

      <div className="resume-links">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>

        <a href="/resume.pdf" download className="download">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;