import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2>About Me</h2>
                <p className="about-bio">
                    I’m a video editor, animator, and content creator specializing in commercials, podcasts,
                    YouTube shows, and social media campaigns. I help brands and creators turn raw footage
                    into polished, engaging content that captures attention and drives results.
                </p>
                <p className="about-bio">
                    I’ve worked with brands like G.U.O. Transport, The Nines, and Blueline Care Consult (UK),
                    delivering projects that balance creativity with professionalism.
                </p>
                <h3 className="about-tagline">Cut. Create. Captivate.</h3>

                <div className="skills-section">
                    <h4>Skills & Expertise</h4>
                    <ul>
                        <li>Video Editing (Commercials, Podcasts, YouTube)</li>
                        <li>Animation & Motion Graphics</li>
                        <li>Green Screen Editing</li>
                        <li>Content Creation</li>
                        <li>Social Media Management</li>
                    </ul>
                    <h4>Tools I Use</h4>
                    <ul>
                        <li>Adobe Premiere Pro</li>
                        <li>DaVinci Resolve</li>
                        <li>Canva</li>
                        <li>CapCut</li>
                        <li>YouTube Studio</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default About;