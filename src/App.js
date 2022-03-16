import "./styles.css";
import Stopwatch from "./Stopwatch";
import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState([{ h: 0, m: 0, s: 0, ms: 0 }]);
  const [stopwatches, setStopwatches] = useState([]);
  useEffect(() => {
    setStopwatches((prevState) => [
      ...prevState,
      <Stopwatch time={time}></Stopwatch>
    ]);
  }, []);
  let handleAdd = function () {
    setStopwatches((prevState) => [
      ...prevState,
      <Stopwatch time={time}></Stopwatch>
    ]);
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
