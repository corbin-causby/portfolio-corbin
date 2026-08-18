import { skills } from "./data";


export default function About() {
    return (
        <main>
            <section className="about-me">
                <h2>About Me</h2>
                <p>
                    I am a software engineer with a passion for building innovative and efficient solutions. I enjoy working on challenging projects and continuously learning new technologies. In my free time, I like to contribute to open-source projects and explore new programming languages.
                </p>
            </section>
            <section>
                <ul className="skills">
                    {skills.map((skill) => (
                        <li key={skill.id}>
                            <p>{skill.skill}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>

    );
};