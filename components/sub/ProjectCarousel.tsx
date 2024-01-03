// ProjectsCarousel.jsx
"use client";
import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';

interface Project {
  src: string;
  title: string;
  description: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="px-5">
          <ProjectCard
            src={project.src}
            title={project.title}
            description={project.description}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectsCarousel;
