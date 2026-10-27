const projectTechnologyStacks = [
  {
    matches: ["avonex"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
  },
  {
    matches: ["wanderlust"],
    technologies: ["MongoDB", "Express.js", "Node.js", "EJS", "Razorpay"],
  },
  {
    matches: ["interviewai", "prep-pilot", "preppilot"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini AI", "Puppeteer"],
  },
  {
    matches: ["url shortener"],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "QR Codes"],
  },
  {
    matches: ["full stack portfolio"],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
];

export default function getProjectTechnologies(project) {
  const title = project?.title?.toLowerCase() || "";
  const matchingStack = projectTechnologyStacks.find(({ matches }) =>
    matches.some((name) => title.includes(name))
  );

  return matchingStack?.technologies || [];
}
