import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id = "projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div style={{zIndex:12000}} className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className='cursor-pointer'>
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Website"
          description="A modern Next.js website with a dark mode toggle and a contact form."
        />
        </div>

        <div className='cursor-pointer'>
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Interactive website cards with a 3D tilt effect and a custom cursor."
        />
        </div>

        <div className='cursor-pointer'>
        <ProjectCard
          src="/SpaceWebsite.png"
          title="A Portfolio Website"
          description="A portfolio website with a space theme and a contact form."
        />
        </div>
        
      </div>
      <div className="mt-10 h-full w-full flex flex-col md:flex-row gap-10 px-10" style={{zIndex:12000}}>
        
      <div className='cursor-pointer'>
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Website"
          description="A modern Next.js website with a dark mode toggle and a contact form."
        />
        </div>

        <div className='cursor-pointer'>
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Interactive website cards with a 3D tilt effect and a custom cursor."
        />
        </div>

        <div className='cursor-pointer'>
        <ProjectCard
          src="/SpaceWebsite.png"
          title="A Portfolio Website"
          description="A portfolio website with a space theme and a contact form."
        />
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
