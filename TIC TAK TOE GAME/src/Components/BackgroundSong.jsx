import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleInteraction = () => {
      setIsMuted(false);
      audioRef.current.play();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    audioRef.current.play().catch(() => {
      window.addEventListener('click', handleInteraction);
      window.addEventListener('keydown', handleInteraction);
    });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return <audio ref={audioRef} src={src} loop muted={isMuted} hidden />;
};

export default BackgroundMusic;
