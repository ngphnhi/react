import React from 'react';
import './App.css'
import ReactPlayer from 'react-player';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const MyClip = ({ title, description, source_clip }) => {
  return (
    <div className="clip">
      <ReactPlayer url={source_clip} controls className="clip-video" />
      {title && (
        <div className="title-rating">
          <h3>{title}</h3>
        </div>
      )}
      {title && (
        <Rating 
          initialRating={3} 
          fullSymbol={<FaStar color='#ffc107'/>}
          readonly
          stop={3}
        />
      )}
      <p>{description}</p>
    </div>
  );
}

export default MyClip;



