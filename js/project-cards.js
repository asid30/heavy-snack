function createProjectCard(project) {
  const card = document.createElement("a");
  card.className = "project";
  card.href = project.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", `Kunjungi situs ${project.name} (buka di tab baru)`);

  const banner = document.createElement("img");
  banner.className = "project-banner";
  banner.src = project.banner;
  banner.alt = project.bannerAlt || `Banner ${project.name}`;
  banner.loading = "lazy";

  const info = document.createElement("div");
  info.className = "project-info";
  const heading = document.createElement("div");
  heading.className = "project-heading";

  if (project.icon) {
    const icon = document.createElement("img");
    icon.className = "project-icon";
    icon.src = project.icon;
    icon.width = 56;
    icon.height = 56;
    icon.alt = "";
    icon.loading = "lazy";
    heading.append(icon);
  }

  const titleGroup = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = project.name;
  const category = document.createElement("span");
  category.className = "tag";
  category.textContent = project.category;
  titleGroup.append(title, category);
  heading.append(titleGroup);

  const description = document.createElement("p");
  description.textContent = project.description;
  info.append(heading, description);
  card.append(banner, info);
  return card;
}

document.getElementById("project-list").replaceChildren(...projects.map(createProjectCard));
