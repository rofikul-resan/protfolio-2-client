import Lottie from "lottie-react";
import sendAnimation from "../assets/send-animation.json";
const SendAnimation = () => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <Lottie
        animationData={sendAnimation}
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default SendAnimation;
