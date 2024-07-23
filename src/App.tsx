import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './components/VideoPlayer';
import getYouTubeID from 'get-youtube-id';

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
    <div>
      <h1>QwickNotes</h1>
      <input type="text" onChange={handleChange} required placeholder="Enter a YouTube URL" />
      {videoId && <VideoPlayer videoId={videoId} />}
    </div>
  )
}

export default App
