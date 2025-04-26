import { useContext } from "react";
import { ThemeContext } from "../../App";
import ListItem from "./ListItem";

const List = ({ items }) => {
  const themeContext = useContext(ThemeContext);
  console.log("theme context", themeContext);
  return (
    <div>
      {items.map((item) => {
        return <ListItem key={item} text="add" />;
      })}
    </div>
  );
};

export default List;
