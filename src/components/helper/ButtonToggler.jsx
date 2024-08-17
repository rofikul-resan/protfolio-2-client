import { useState } from "react";

const ButtonToggler = ({ icon1, icon2, intCount, className }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [count, setCount] = useState(intCount);

  const toggleHandler = () => {
    setCount(parseInt(count) + 1);
    setIsToggled(!isToggled);
  };

  return (
    <div className={`text-white flex mx-auto w-fit ${className}`}>
      <button onClick={toggleHandler}>{isToggled ? icon2 : icon1}</button>
      <span className="ml-2">{count}</span>
    </div>
  );
};

export default ButtonToggler;
