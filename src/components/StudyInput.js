import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { editInputs } from "../store/studysReducer";

function StudyInput({ nextId }) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    id: nextId.current,
    name: "",
    nickName: "",
    email: "",
  });
  const nameInput = useRef();

  const { name, nickName, email } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      id: nextId.current,
      name: "",
      nickName: "",
      email: "",
    });
    nameInput.current.focus();
  };

  const onTransfer = () => {
    nextId.current += 1;
    dispatch(editInputs(inputs));
    onReset();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onChange}
        value={nickName}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button
        onClick={onReset}
        style={{
          appearance: "none",
          border: "1px solid #ff9800",
          backgroundColor: "white",
          borderRadius: 4,
          color: "orange",
          width: "45px",
        }}
      >
        초기화
      </button>
      <button
        onClick={onTransfer}
        style={{
          appearance: "none",
          border: "1px solid #ff9800",
          backgroundColor: "white",
          borderRadius: 4,
          color: "orange",
          width: "45px",
        }}
      >
        전송
      </button>
      <div>
        <b>값: </b>
        {name} ({nickName}) : {email}
      </div>
    </div>
  );
}

export default StudyInput;
