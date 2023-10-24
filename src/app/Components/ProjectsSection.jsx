"use client"
import Reac, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const ProjectsData = [
  {
    id: 1,
    title: "JavaScript Portfolio Website",
    description: 'Project 1 description',
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "JavaScript Book Library",
    description: 'Project 2 description',
    image: "/images/projects/booklibrary.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Full Stack Todo-List",
    description: 'Project 3 description',
    image: "/images/projects/todolist.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "JavaScript Game",
    description: 'Project 4 description',
    image: "/images/projects/Game.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "JavaScript Calculator",
    description: 'Project 5 description',
    image: "/images/projects/Calculator.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  )

  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 '>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />

      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection