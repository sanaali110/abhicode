import { useContext } from "react";
import { ThemeContext } from "../../App";

const Button = (text, onClick) => {
  const themeContext = useContext(ThemeContext);
  console.log("inside button", themeContext);
  return <button onClick={onClick}>+</button>;
};

export default Button;
