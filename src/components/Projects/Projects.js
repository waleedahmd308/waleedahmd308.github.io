import uniqid from 'uniqid'
import { freelanceProjects,educationalProjects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!freelanceProjects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Freelance Projects</h2>

      <div className='projects__grid'>
        {freelanceProjects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
      <div style={{ marginTop: '3rem' }}/>
       <h2 className='section__title'>Educational Projects</h2>

      <div className='projects__grid'>
        {educationalProjects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
