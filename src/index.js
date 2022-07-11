// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
// import animals from "./data.js";
import cars from "./practice.js";

// var first = animals[0].name;
// var second = animals[1].name;
// const [cat, dog] = animals;
// const {sound, name, feeding: {food, water}} = cat;
// console.log(first, cat, name, sound, food);

// console.log(cars);
const [honda, tesla] = cars;
// console.log(honda);
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
// console.log(coloursByPopularity[0], speedStats.topSpeed);
// const hondaTopColour = coloursByPopularity[0];
// const hondaTopSpeed = speedStats.topSpeed;

const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
// const teslaTopColour = teslaColour[0];
// const teslaTopSpeed = teslaStats.topSpeed

console.log(hondaTopColour, hondaTopSpeed);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
