import { createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/Lists/List";
import { useEffect, useState } from "react";
import Button from "./components/Button/Button";

const username = "sanaali";
const key = "1ba70ac989c045888d7210602241011&q=";
const coordinates = {
  north: "44.1",
  south: "-9.9",
  east: "-22.4",
  west: "55.2",
};
const coordinatesString = Object.entries(coordinates)
  .map(([dir, coord]) => {
    return `${dir}=${coord}`;
  })
  .join("&");
const lang = "de";
const maxRow = 1000;
const weatherApiURL = `http://api.weatherapi.com/v1/current.json?key=${key}`;
const citiesApiURL = `http://api.geonames.org/citiesJSON?${coordinatesString}&lang=${lang}&maxRows=${maxRow}&username=${username}`;

export const ThemeContext = createContext();

function App() {
  const [show, setShow] = useState(false); // tuple in datastructure [1,2], array destructuring
  const [cities, setCities] = useState([]); // states will only be created during the initial mounting phase.
  const listItems = [1, 2, 3, 4, 5]; // a variable will get created every single time your component re-renders.
  // because this is not a state but a normal variable.

  // componentDidMount
  useEffect(() => {
    // console.log("component did mount");
  }, []);

  // any hook will get executed in the same order it is defined.
  useEffect(() => {
    // this useEffect will get called only once - componentDidUpdate
    // setTimeout(() => {
    // console.log("1st effect is called", String(show));
    // },5000)
    // if(show){
    //   setTimeout(() => {
    //     fetch(citiesApiURL).then((response) => {
    //       return response.json()
    //     }).then((response) => {
    //       setCities(response.geonames.map(geo => geo.name))
    //     }).catch((error)=> {
    //       console.log('error',error)
    //     })
    //   },5000)
    // }
  }, [show]);

  useEffect(() => {
    // during initial mounting phase - componentDidMount
    // console.log("2nd effect is called");
  }, [cities]);

  useEffect(() => {
    // during initial mounting phase - componentDidMount
    // console.log("3nd effect is called");
  }, [listItems]);

  // console.log("re-render");

  return (
    <div>
      <ThemeContext.Provider value={{ abc: "123", bcd: "345" }}>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {show && <List items={listItems} />}
          <div>
            {cities.map((city) => {
              return <span key={city}>{city}</span>;
            })}
          </div>
          <button onClick={() => setShow(!show)}>Toggle display</button>
        </header>
      </ThemeContext.Provider>
      <Button />
    </div>
  );
}

export default App;
