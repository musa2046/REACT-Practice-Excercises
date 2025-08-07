import "./styles.css";
import cars from "./practice"


export default function App() {

let [ honda, tesla] = cars

let {coloursByPopularity : [hondaTopColour], speedStats :{ topSpeed : hondaTopSpeed}} = honda;
// let {topSpeed : hondaTopSpeed} = hondaSpeedStats;

let {coloursByPopularity : [ teslaTopColour] , speedStats :{topSpeed : teslaTopSpeed}} = tesla;
// let {topSpeed : teslaTopSpeed} = teslaSpeedStats

  return (
    <div className="App">
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
      </table>
    </ div>
  );
}
