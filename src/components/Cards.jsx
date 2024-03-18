import { useState } from "react";
import { projectData, filterData } from "../utils/data";
import Card from "./Card";

const Cards = () => {
  const [projectList, setProjectList] = useState(projectData);

  const selectionFilterHandler = (title) => {
    if (title === "All") {
      // If "All" is selected, show all projects
      setProjectList(projectData);
    } else {
      // Filter projects based on the selected tag
      const filteredProjects = projectData.filter(
        (project) => project.tag === title
      );
      setProjectList(filteredProjects);
    }
  };

  return (
    <div>
      <div>
        {filterData.map((data) => (
          <button
            key={data.id}
            onClick={() => selectionFilterHandler(data.title)}
          >
            {data.title}
          </button>
        ))}
      </div>

      {projectList.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
          tag={item.tag}
        />
      ))}
    </div>
  );
};

export default Cards;
