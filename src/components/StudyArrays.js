import React, { useEffect } from "react";
import StudyArrayList from "./StudyArrayList";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, addUsers, removeUsers } from "../store/studysReducer";

function StudyArrays({ userInfo, nextId }) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const onRemove = (id) => {
    nextId.current -= 1;
    dispatch(removeUsers(id));
  };

  useEffect(() => {
    if (userInfo !== undefined) {
      dispatch(addUsers(userInfo));
    }
  }, [userInfo]);

  return (
    <div style={{ marginTop: 10 }}>
      {users.map((user) => (
        <StudyArrayList user={user} onRemove={onRemove} key={user.id} />
      ))}
    </div>
  );
}

export default StudyArrays;
