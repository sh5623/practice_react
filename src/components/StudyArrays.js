import React, { useEffect } from "react";
import StudyArrayList from "./StudyArrayList";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, editUsers } from "../store/studysReducer";

function StudyArrays({ userInfo }) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    if (userInfo !== undefined) {
      dispatch(editUsers(userInfo));
    }
  }, [userInfo]);

  return (
    <div style={{ marginTop: 10 }}>
      {users.map((user) => (
        <StudyArrayList user={user} key={user.id} />
      ))}
    </div>
  );
}

export default StudyArrays;
