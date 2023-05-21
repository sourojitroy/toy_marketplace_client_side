import React from 'react';
import Background from './Background';
import Marquee from './Marquee';
import PhotoGallery from './PhotoGallery';
import ToysAll from './Toys/ToysAll';

const Home = () => {
    return (
        <div>
            
          <Background></Background>
          <PhotoGallery></PhotoGallery>
          <ToysAll></ToysAll>
        </div>
    );
};

export default Home;