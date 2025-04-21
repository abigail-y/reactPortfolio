import React from 'react';
import dataEntry from '../img/dataEntry.png';
import musicReview from '../img/musicReview.png';
import excersieApp from '../img/exercise.png';

const Projects = () => {
  const projects = [
    {
      title: 'Simple Survey',
      description: 'A simple data entry survey.',
      image: dataEntry,
      link: 'https://students.gaim.ucf.edu/~ab841661/dig3134c/assignment02/assignment02-part1/form_all.php',
    },
    {
      title: 'Music Review',
      description: 'A PHP-based music review site. Login using "admin" or "reviewer" for both the username and password.',
      image: musicReview,
      link: 'https://students.gaim.ucf.edu/~ab841661/dig3134c/assignment05/login.php',
    },
    {
      title: 'React-Native Exercise App',
      description: 'A small React Native exercise tracking app.',
      image: excersieApp,
      link: 'https://abigail-y.github.io/new-exercise-app/',
    },
  ];

  return (
    <div className="projects-page">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
