import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
    const videoRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            //Stop the video
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            // Play the video
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };
    return (
        <div className="video__card">
            <VideoHeader />
            <video ref={videoRef} onClick={onVideoPress} className="video__player" src={url} alt="IG reel video" loop />
            <VideoFooter />
        </div>
    );
}

export default VideoCard;
