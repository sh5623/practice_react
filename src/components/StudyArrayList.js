import React from "react";

function StudyArrayList({ user }) {
  return (
    <div>
      <b>
        {user.id}. {user.name} ({user.nickName})
      </b>{" "}
      <span>: {user.email}</span>
    </div>
  );
}

export default StudyArrayList;
