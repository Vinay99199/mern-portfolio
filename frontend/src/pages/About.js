import React from 'react';

function About() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1>About Me</h1>
        
        <h2>Bio</h2>
        
        <p>
           Hi! I'm a final-year Computer Science student and an aspiring Full Stack Developer with a 
           passion for building dynamic and user-friendly web applications using the MERN stack. 
           I enjoy writing clean, maintainable, and efficient code, and I love solving real-world
           problems through robust backend logic and responsive frontend design. 
           Currently, I am exploring advanced topics like authentication systems, API architecture,
           and database optimization to further enhance my skills. I am always excited to learn new 
           technologies and take on challenges that help me grow as a developer.
        </p>

        <h2>Education</h2>
        <p>
          <strong>Bachelor of Technology in Computer Science</strong>
          <br />
          Kanpur Institute of Technology | Expected Graduation: 2027
        </p>

        <h2>Skills</h2>
        <ul>
          <li>Frontend: React, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB, MySQL</li>
          <li>Tools: Git, VS Code, Postman, Hoppscotch</li>
          <li>Other: REST API, Data Structures & Algorithms (Java), Problem Solving</li>
        </ul>

        <h2>Technologies I Use</h2>
        <ul>
          <li>React - Building interactive user interfaces</li>
          <li>Node.js & Express - Creating scalable backend systems</li>
          <li>MongoDB & MySQL - Managing structured and unstructured data</li>
          <li>Axios - Handling API communication</li>
          <li>CSS, Tailwind & Bootstrap - Designing responsive and modern UI</li>
        </ul>

        <h2>What I'm Learning</h2>
        <p>
          Currently, I'm focusing on advanced React concepts, authentication systems, and deployment strategies.
        </p>
      </div>
    </div>
  );
}

export default About;