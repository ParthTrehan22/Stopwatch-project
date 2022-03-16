import { useState } from "react";

export default function Stopwatch(props) {
  return (
    <div>
      {props.time[0].h > 9 ? props.time[0].h : "0" + props.time[0].h}:
      {props.time[0].m > 9 ? props.time[0].m : "0" + props.time[0].m}:
      {props.time[0].s > 9 ? props.time[0].s : "0" + props.time[0].s}:
      {props.time[0].ms > 9 ? props.time[0].ms : "0" + props.time[0].ms}
    </div>
  );
}
