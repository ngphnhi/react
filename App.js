import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import MyClip from './MyClip';
import Footer from './Footer';
import './Header.css';

const App = () => {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    fetch('/MyClip.json')
      .then(response => response.json())
      .then(data => setClips(data))
      .catch(error => console.error('Error fetching clips:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
      <div className='first-clip'>
          <h3>My Clip</h3>
          <MyClip
            source_clip="https://www.youtube.com/watch?v=hMPK2vNXr-E"
          />
        </div>
        <div className="clip-container">
          {clips.map((clip, index) => (
            <MyClip
              key={index}
              title={clip.title}
              rating={clip.rating}
              description={clip.description}
              start={clip.start}
              source_clip={clip.source_clip}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

