export function handleProject(event) {
  event.preventDefault();

  const newProject = {
    name: event.target.name.value,
    description: event.target.description.value,
    isComplete: event.target.isComplete.value == "true",
    tags: event.target.tags.value.split(", ").map((tag) => {
      return {
        name: tag,
      };
    }),
    imageUrl: event.target.imageUrl.value,
    link: event.target.link.value,
  };

  return newProject;
}
