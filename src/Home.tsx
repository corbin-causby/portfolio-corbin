import { useState } from 'react'
import './App.css'
import { projects } from './data.ts'

export default function App() {


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
            </header><main>
                <section className="contact">
                    <p><a href="mailto:corbincausby01@gmail.com" onContextMenu={handleRightClick} aria-label="Send me an email"><i className="fa fa-envelope"></i></a></p>
                    <p><a href="https://www.linkedin.com/in/corbin-causby-82646220b/" target="_blank" onContextMenu={handleRightClick} aria-label="Visit myLinkedIn"><i className="fa fa-linkedin"></i></a></p>
                    <p><a href="https://github.com/corbin-causby" target="_blank" onContextMenu={handleRightClick} aria-label="Visit my GitHub"><i className="fa fa-github"></i></a></p>

                    {menu.visible && (
                        <div className="copy-popup" style={{ top: menu.y, left: menu.x, }}>
                            Copied!
                        </div>
                    )}
                </section>
                <section>
                    <ul className="projects">
                        {projects.map((project) => (
                            <li key={project.id}>
                                <article className="project">
                                    <a href={project.link}><img src={project.image}/></a>
                                    <p>{project.description}</p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
    </>
  );
};