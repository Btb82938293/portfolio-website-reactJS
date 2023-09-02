import React from "react";
import "./Pre.css"


export default function Pre(props) {
  return <div className={props.load ? "preloader" : "preloader-none"}></div>;
}