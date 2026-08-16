import { useState } from 'react'
import './App.css'
import { projects } from './data.ts'

function App() {


  const [menu, setMenu] = useState({ visible: false, x: 0, y: 0 });

  const handleRightClick = (e: { preventDefault: () => void; currentTarget: { href: any; }; pageX: any; pageY: any; }) => {
    e.preventDefault();
    const url = e.currentTarget.href;

    navigator.clipboard.writeText(url);

    setMenu({
      visible: true,
      x: e.pageX,
      y: e.pageY,
    })

    setTimeout(() => {
      setMenu(prev => ({ ...prev, visible: false }));
    }, 2000);
  };




  return (
    <>
        <header className="header">
          <h1>Hey! My name is Corbin Causby.</h1>
          <h2>I'm a software engineer and I love to build things.</h2>
        </header>
        <main>
            <section className="contact">
            <p><a href="mailto:corbincausby01@gmail.com" onContextMenu={handleRightClick} aria-label="Send me an email"><i className="fa fa-envelope"></i></a></p>
            <p><a href="https://www.linkedin.com/in/corbin-causby-82646220b/" target="_blank" onContextMenu={handleRightClick} aria-label="Visit myLinkedIn"><i className="fa fa-linkedin"></i></a></p>
            <p><a href="https://github.com/corbin-causby" target="_blank" onContextMenu={handleRightClick} aria-label="Visit my GitHub"><i className="fa fa-github"></i></a></p>

            {menu.visible && (
            <div className="copy-popup" style={{top: menu.y, left: menu.x,}}>
              Copied!
            </div>
      )}
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
                    <h2>{project.title}</h2>
                    <img src={project.image} alt={project.description} />
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Check it out!</a>                    
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
