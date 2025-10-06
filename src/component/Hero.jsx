import React, {useEffect, useState } from 'react';
import './Hero.css'
import ProfilePictureRotator from './ProfilePictureRotator';


const Hero = () =>  {
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const imageList = [
        '/images/profile1.jpg',
        '/images/profile2.jpg',
        '/images/profile3.jpg',
        '/images/profile4.jpg',
        '/images/profile5.jpg'
    ]

    useEffect(() => {
        const titleTimer = setTimeout(() => {
            setShowTitle(true);
        }, 2000); //2-sec delay
        const subtitleTimer = setTimeout(() => {
            setShowSubtitle(true);
        }, 4000);

        return () => 
        clearTimeout(titleTimer, subtitleTimer);
        
    }, []);
    return(
        <section className="hero-section">
            <div className="container">
            <div className="hero-left">
                <h1 className={`hero-title ${showTitle ? 'fade-in' : ''}`}>
                <span className="title-word title-word-1">Hello,</span>
                    <span className="title-word title-word-2">I'm</span>
                    <span className="title-word title-word-3">Njoku Queen </span>
                    <span className="title-word title-word-4">Ujunwa</span>
                </h1>
                <p className={`hero-subtitle ${showSubtitle ? 'slide-up' : ''}`}>
                Cut. Create. Captivate.
                </p>
                <div className="hero-buttons">
                    <a href="#work" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>

            <div className="hero-right">
                <div className="image-wrapper">
                <ProfilePictureRotator images={imageList}  />
                </div>
                
            </div>
            </div>
        </section>
    );
};

export default Hero;
