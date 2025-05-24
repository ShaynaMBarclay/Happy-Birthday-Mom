import { useRef, useState } from 'react';
import EnvelopeScreen from './EnvelopeScreen';
import BirthdayScreen from './BirthdayScreen';
import birthdaySong from './assets/music.mp3';
import './App.css';

function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked — user must interact again.");
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={birthdaySong} loop />
      {!opened ? <EnvelopeScreen onOpen={handleOpen} /> : <BirthdayScreen />}
    </>
  );
}

export default App;