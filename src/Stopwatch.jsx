import { useEffect, useState } from "react";

export default function Stopwatch(props) {
  const [time, setTime] = useState([{ h: 0, m: 0, s: 0, ms: 0 }]);
  var updatedh = 0,
    updatedm = 0,
    updateds = 0,
    updatedms = 0;
  useEffect(() => {
    setInterval(() => {
      updatedms++;
      if (updatedms > 1000) {
        updateds++;
        updatedms = 0;
      }
      if (updateds > 60) {
        updatedm++;
        updateds = 0;
      }
      if (updatedm > 60) {
        updatedh++;
        updatedm = 0;
      }
      setTime({ h: updatedh, m: updatedm, s: updateds, ms: updatedms });
    }, 1);
  }, []);
  return (
    <div>
      {time.h > 9 ? time.h : "0" + time.h}:{time.m > 9 ? time.m : "0" + time.m}:
      {time.s > 9 ? time.s : "0" + time.s}:
      {time.ms > 9 ? time.ms : "0" + time.ms}
    </div>
  );
}
