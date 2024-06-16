import './Background.css';
import gif1 from "../../assets/interstellar.gif";
import img1 from "../../assets/cinema_background.jpg";
import audio from "../../assets/bgm.mp3";

const Background = ({ playStatus, messCount }) => {
  return (
    <div>
      {playStatus && (
        <audio id="audio" loop autoPlay>
          <source src={audio} type="audio/mpeg" />
        </audio>
      )}
      {messCount === 0 && <img src={img1} className='background' alt='' />}
      {messCount === 1 && <img src={gif1} className='background' alt='Interstellar' />}
      {messCount === 2 && <img src={gif1} className='background' alt='background gif' />}
      {messCount === 3 && <img src={gif1} className='background' alt='background gif' />}
    </div>
  );
};

export default Background;
