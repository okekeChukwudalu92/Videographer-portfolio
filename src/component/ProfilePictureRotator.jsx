import { useEffect, useState } from 'react';
import './ProfilePictureRotator.css';

const ProfilePictureRotator = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    
      <img
        src={images[currentIndex]}
        alt="Profile"
        className="fade-in hero-image"
      />

  );
};

export default ProfilePictureRotator;


