import idle from "../assets/mascot/idle.png";
import focus from "../assets/mascot/focus.png";
import coverEyes from "../assets/mascot/cover-eyes.png";
import sad from "../assets/mascot/sad.png";
import happy from "../assets/mascot/happy.png";

const mascotMap = {
  idle,
  focus,
  cover: coverEyes,
  sad,
  happy,
};

const WellBotMascot = ({ mood }) => {
  return (
    <div className="mascot-wrapper">
      <img
        src={mascotMap[mood] || idle}
        alt="WellBot Mascot"
        className={`mascot-img ${mood}`}
      />
    </div>
  );
};

export default WellBotMascot;
