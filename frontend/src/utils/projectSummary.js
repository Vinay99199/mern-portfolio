const projectSummaries = [
  {
    matches: ["avonex"],
    summary:
      "Verified ride-sharing for employees and students, with organization checks, driver approval, ride creation, seat booking, and booking management.",
  },
  {
    matches: ["wanderlust"],
    summary:
      "Travel-stay platform with listings, search, wishlists, bookings, reviews, and Razorpay payments.",
  },
  {
    matches: ["interviewai", "prep-pilot", "preppilot"],
    summary:
      "AI job-prep app that analyzes resumes and job descriptions, identifies skill gaps, and generates interview questions and ATS-ready resumes.",
  },
  {
    matches: ["url shortener"],
    summary:
      "Shorten long URLs, share links, generate QR codes, and redirect visitors.",
  },
  {
    matches: ["full stack portfolio"],
    summary:
      "Portfolio site showcasing projects and skills, with a resume and backend-powered contact form.",
  },
];

export default function getProjectSummary(project) {
  const title = project?.title?.toLowerCase() || "";
  const matchingSummary = projectSummaries.find(({ matches }) =>
    matches.some((name) => title.includes(name))
  );

  return matchingSummary?.summary || project?.description || "Project details are currently being updated.";
}
