import projects from "./data.js"

const sortedProjects = projects.slice().sort((a, b) => {
  // Convert both titles to lowercase for case-insensitive sorting
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
});

const chooseColor = (category) => {
  switch (category) {
    case "Math":
      return "blue";
    case "Languages":
      return "green";
    case "Biology":
      return "red";
    case "Physics":
      return "hotpink";
    default:
      return "gray";
  }
};

const projectList = document.querySelector(".project-list");

sortedProjects.forEach((project) => {
  const anchorElement = document.createElement("a");
  anchorElement.href = project.url;
  anchorElement.target = "_blank";
  anchorElement.rel = "noreferrer";
  anchorElement.innerHTML = `
 <span>
   ${project.title} <i class="fas fa-external-link"></i>
 </span>
 <strong
   class="category"
   style="background-color: ${chooseColor(project.category)}"
 >
   ${project.category}
 </strong>
 `;
  projectList.appendChild(anchorElement);
});
