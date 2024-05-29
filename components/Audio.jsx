// components/AudioPlayer.js
import { useRef, useEffect } from "react";
import Unmute from "@/public/medium-volume.png";
import Mute from "@/public/mute.png";
import Image from "next/image";
const AudioPlayer = ({ Audio }) => {
  console.log(Audio);
  const { isMuted, setIsMuted } = Audio;
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (isMuted == false) {
      audioRef.current.muted = false;
    }
  }, [isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.muted = true; // Ensure the audio starts muted
    }
  }, []);

  return (
    <div className="fixed top-4 right-4 md:right-[21vw] z-50">
      <audio ref={audioRef} src="/nasyid.mp3" loop />
      <button
        onClick={toggleMute}
        className="bg-amber-600 text-white p-3 rounded-full shadow-lg"
      >
        {isMuted ? (
          <Image src={Unmute} alt="mute" width={20} />
        ) : (
          <Image src={Mute} alt="mute" width={20} />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
