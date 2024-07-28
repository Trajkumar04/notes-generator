import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './components/VideoPlayer';
import getYouTubeID from 'get-youtube-id';
import './App.css';

function App() {

  const [videoId, setVideoId] = useState("");
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const videoId = getYouTubeID(event.target.value);
    if(videoId) {
      setVideoId(videoId);
    }
    console.log(videoId);
  }

  return (
    <div className="split-container">
      <div className="split bg-red-custom">
        <h1 className='text-center'>QwickNotes</h1>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter YouTube URL'
            onChange={handleChange}
          />
        </div>
        {videoId && <VideoPlayer videoId={videoId} />}
      </div>
      <div className="split bg-blue-custom">
        <div className='p-4'>
          <h2>Notes</h2>
          <ul>
            <li>Test Note 1</li>
            <li>Test Note 2</li>
            <li>Test Note 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App

// Test Video Link: https://www.youtube.com/watch?v=I9gLrRwLFCs
