import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/scss/pages/not-found.scss';
import notFoundVideo from '/assets/videos/404.mp4'; 

const NotFound = () => {
  return (
    <div className="not-found-minimal">
      <div className="error-video-container">
        <video 
          src={notFoundVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="error-video"
        />
      </div>
      <div className="error-actions-single">
        <Button 
          as={Link} 
          to="/" 
          variant="primary" 
          className="home-button-single"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
