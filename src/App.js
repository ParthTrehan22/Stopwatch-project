import "./styles.css";
import Stopwatch from "./Stopwatch";
import { useEffect, useState } from "react";

export default function App() {
  const [stopwatches, setStopwatches] = useState([]);
  useEffect(() => {
    setStopwatches((prevState) => [...prevState, <Stopwatch></Stopwatch>]);
  }, []);
  let handleAdd = function () {
    setStopwatches((prevState) => [...prevState, <Stopwatch></Stopwatch>]);
  };
  return (
    <div className="App">
      {stopwatches.map((val) => {
        return val;
      })}
      <button onClick={handleAdd}>Add Stopwatch</button>
    </div>
  );
}
