import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiPython, SiSupabase, SiEslint, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div>
                <h2>About Me</h2>
                <p>Hello! My name is Archie! Here is a small website built in ReactJS to house some of the quick links regarding me. Here you will find some links to my projects and more. Since starting the School of Code, I have learnt many things regarding different languages and coding practices. I have come to be a versatile all-rounder and I appreciate everyone taking the time to read this.</p>
            </div>
            <div className="tech-stack">
                <h2>My tech stack</h2>
                <div className="tech-icons">
                    <div className="tech-item">
                        <FaHtml5 className="tech-icon" title="HTML5" />
                        <p>HTML5</p>
                    </div>
                    <div className="tech-item">
                        <FaCss3Alt className="tech-icon" title="CSS3" />
                        <p>CSS3</p>
                    </div>
                    <div className="tech-item">
                        <FaJsSquare className="tech-icon" title="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="tech-item">
                        <SiTypescript className="tech-icon" title="TypeScript" />
                        <p>TypeScript</p>
                    </div>
                    <div className="tech-item">
                        <SiPython className="tech-icon" title="Python" />
                        <p>Python</p>
                    </div>
                    <div className="tech-item">
                        <SiPostgresql className="tech-icon" title="SQL" />
                        <p>SQL</p>
                    </div>
                    <div className="tech-item">
                        <SiSupabase className="tech-icon" title="Supabase" />
                        <p>Supabase</p>
                    </div>
                    <div className="tech-item">
                        <FaGithub className="tech-icon" title="GitHub" />
                        <p>GitHub</p>
                    </div>
                    <div className="tech-item">
                        <FaDocker className="tech-icon" title="Docker" />
                        <p>Docker</p>
                    </div>
                    <div className="tech-item">
                        <SiEslint className="tech-icon" title="ESLint" />
                        <p>ESLint</p>
                    </div>
                    <div className="tech-item">
                        <FaReact className="tech-icon" title="ReactJS" />
                        <p>ReactJS</p>
                    </div>
                    <div className="tech-item">
                        <FaNodeJs className="tech-icon" title="Node.js" />
                        <p>Node.js</p>
                    </div>
                    <div className="tech-item">
                        <SiNextdotjs className="tech-icon" title="Next.js" />
                        <p>Next.js</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
