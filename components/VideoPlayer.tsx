import { useState, useRef, useEffect } from 'react';
import './comp.css'

function VideoPlayer({ src, isPlaying }) {
    const ref = useRef(null);
    const [flag, setFlag] = useState(isPlaying)
    useEffect(() => {
        console.log('flag', flag)
        console.log('isPlaying', isPlaying)
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
        console.log('effect')
    }, [isPlaying]);

    return <video className='myVideo' ref={ref} src={src} loop playsInline />;
}

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
        <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <VideoPlayer
            isPlaying={isPlaying}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
        </>
        );
}


