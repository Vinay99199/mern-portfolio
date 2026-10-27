export default function getProjectDisplayTitle(project) {
  const title = project?.title || "Project";

  if (title.toLowerCase().includes("avonex")) return "AVONEX";
  if (title.includes("InterviewAI")) return "PrepPilot";

  return title;
}
