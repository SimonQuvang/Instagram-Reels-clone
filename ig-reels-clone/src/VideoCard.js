import React from "react";
import "./VideoCard.css";

function VideoCard() {
  return (
    <div className="video__card">
      <video
        className="video__player"
        src="https://scontent-cph2-1.cdninstagram.com/v/t50.2886-16/109329692_651954692070420_7176758539549662205_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-cph2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=eIuQ4tgjSZ8AX9spiDu&vs=17935600450385003_902420066&_nc_vs=HBksFQAYJEdCdzloQVlVbk5RSDgxQUNBUDNibXh6ZTk1aGpia1lMQUFBRhUAAsgBABUAGCRHSnZ6aFFZdDhTa0ZiZjBBQU5KZVVRMmZZS0kxYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAm1prjnqyV3D8VAigCQzMsF0BFIgxJul41GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&_nc_rid=d805b9a638&oe=5FE00D52&oh=de750a5c1bef7b7849dd00a1b771b2e6"
        alt="IG reel video"
        loop
      />
    </div>
  );
}

export default VideoCard;
