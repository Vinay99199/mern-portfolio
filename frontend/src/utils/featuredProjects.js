export const avonexProject = {
  _id: "avonex-featured-project",
  title: "AVONEX – Verified Smart Ride-Sharing Platform",
  description:
    "A verified carpooling platform for employees and students with secure authentication, organization verification, driver approval, ride creation, seat booking, and booking management.",
  image: "",
  githubLink: "https://github.com/Vinay99199/ride-share",
  liveLink: "",
  featured: true,
  featuredOrder: 3,
  displayOrder: 3,
};

export function ensureAvonexProject(projects) {
  const hasAvonex = projects.some((project) =>
    project.title?.toLowerCase().includes("avonex")
  );

  return hasAvonex ? projects : [...projects, avonexProject];
}
