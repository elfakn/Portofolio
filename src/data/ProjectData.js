export default class ProjectData {
  constructor(title, description, image, demoLink, repoLink) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.demoLink = demoLink;
    this.repoLink = repoLink;
  }
}

export const projects = [
  {
    title: "Asset Management System",
    description: "Web aplikasi untuk manajemen aset dengan fitur CRUD, QR Code, dan integrasi approval.",
    image: "/projects/asset-management.png",
    demoLink: "https://example.com/asset-management",
    repoLink: "https://github.com/username/asset-management",
    tech: ["Laravel", "Vue.js", "TailwindCSS", "MySQL"]
  },
  {
    title: "Portfolio Website",
    description: "Website personal interaktif menggunakan Vue.js, TailwindCSS, dan animasi modern.",
    image: "/projects/portfolio.png",
    demoLink: "https://example.com/portfolio",
    repoLink: "https://github.com/username/portfolio",
    tech: ["Vue.js", "TailwindCSS"]
  }
];
