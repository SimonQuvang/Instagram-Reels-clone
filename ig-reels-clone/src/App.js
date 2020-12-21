import "./App.css";
import VideoCard from "./VideoCard";
import VideoFooter from "./VideoFooter";

function App() {
    return (
        <div className="app">
            <div className="app__top">
                <img
                    className="app__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                    alt=""
                ></img>
                <h1>Reels</h1>
            </div>

            <div className="app__videos">
                <VideoCard
                    channel="SimonQuvang"
                    avatarSrc="https://weneedfun.com/wp-content/uploads/2016/07/Cute-Girl-Profile-pictures-For-Facebook-14.jpg"
                    videoSrc={
                        "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    }
                    song="Test song by testy test"
                    likes={509}
                    shares={30}
                />
                <VideoFooter />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}

export default App;
