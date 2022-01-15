import React from "react";

function StudyArrayList({ user, onRemove }) {
  return (
    <div>
      <b>
        {user.id}. {user.name} ({user.nickName})
      </b>{" "}
      <span>: {user.email}</span>
      <button
        onClick={() => onRemove(user.id)}
        style={{
          appearance: "none",
          border: "1px solid #ff9800",
          backgroundColor: "white",
          borderRadius: 4,
          color: "orange",
          width: "35px",
          marginLeft: 3,
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default StudyArrayList;
