import './App.css'
import { projects } from './data.ts'

function App() {

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>

        <header className="header">
          <h1>Hey! My name is Corbin Causby.</h1>
          <h2>I'm a software engineer and I love to build things.</h2>
        </header>
        <main>
            <section className="contact">
            <p><a href="https://www.linkedin.com/in/corbin-causby-82646220b/" target="_blank" aria-label="Visit myLinkedIn"><i className="fa fa-linkedin"></i></a></p>
            <p><a href="https://github.com/corbin-causby" target="_blank" aria-label="Visit my GitHub"><i className="fa fa-github"></i></a></p>
          </section>
          <section className="about-me">
            <h2>About Me</h2>
            <p>
              I am a software engineer with a passion for building innovative and efficient solutions. I enjoy working on challenging projects and continuously learning new technologies. In my free time, I like to contribute to open-source projects and explore new programming languages.
            </p>
          </section>
          <section>
            <ul className="projects">
              {projects.map((project) => (
                <li key={project.id}>
                  <article className="project">
                    <h3>{project.title}</h3>
                    <img src={project.image} alt={project.description} />
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>                    
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </main>
    </>
  )
}

export default App
