import React, { useRef } from "react";
import StudyInput from "./StudyInput";
import StudyArrays from "./StudyArrays";
import Algorithm from "./Algorithm";
import { useSelector } from "react-redux";
import { selectInputs } from "../store/studysReducer";

function Studys() {
  const userInfo = useSelector(selectInputs);
  const StudyArraysComponent = () => {
    if (userInfo.name !== "") {
      return <StudyArrays userInfo={userInfo} />;
    } else {
      return <StudyArrays />;
    }
  };

  const nextId = useRef(4);

  return (
    <div style={{ marginTop: 10 }}>
      <Algorithm />
      <h3>Input Ex</h3>
      <hr />
      <StudyInput nextId={nextId} />
      <h3 style={{ marginTop: 40 }}>Array Ex</h3>
      <hr />
      <StudyArraysComponent />
    </div>
  );
}

export default Studys;
