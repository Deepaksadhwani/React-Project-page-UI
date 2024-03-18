import { useState } from "react";
import { projectData, filterData } from "../utils/data";
import Card from "./Card";

const Cards = () => {
  const [projectList, setProjectList] = useState(projectData);

  const selectionFilterHandler = (title) => {
    if (title === "All") {
      setProjectList(projectData);
    } else {
      const filteredProjects = projectData.filter(
        (project) => project.tag === title
      );
      setProjectList(filteredProjects);
    }
  };

  return (
    <div className="flex flex-col flex-wrap max-w-max space-x-4 gap-y-4 mx-auto items-center justify-center">
      <div>
        {filterData.map((data) => (
          <button
            key={data.id}
            onClick={() => selectionFilterHandler(data.title)}
            className={`text-lg px-2 py1 rounded-md font-medium text-white bg-bgDark hover:bg-opacity-50 border-2 transition-all duration-200`}
          >
            {data.title}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
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
    </div>
  );
};

export default Cards;
