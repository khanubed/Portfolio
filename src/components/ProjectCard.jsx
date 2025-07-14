import React, { useRef } from 'react';
import ProjectHead from '../components/ProjectHead';
import ProjectCard from '../components/ProjectCard';
import  projects  from '../data/projectsData.js';

const Projects = () => {
  const parentRef = useRef(null);

  return (
    <section className='z-20 mt-[-25px] text-white bg-black w-full h-[170vh] relative'>
      <div className='rotate-12 absolute top-[-50px]'>
        <ProjectHead />
      </div>

      <div ref={parentRef} className='bg-black absolute flex flex-col items-center w-full top-16 h-[180vh]'>
        {projects.map((proj, i) => (
          <ProjectCard
            key={i}
            data={proj}
            parentRef={parentRef}
            offset={i === 0 ? ["0% end", "0% start"] : ["50% end", "50% 10%"]}
            scaleRange={i === 0 ? [1.2, 1] : [1.22, 1.02]}
            yRange={[700, 20]}
            borderColor={i === 1 ? 'border-cyan-500 hover:border-cyan-300' : ''}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
