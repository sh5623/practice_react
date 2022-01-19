import React, { useState, useEffect, useMemo } from "react";
import StudyArrayList from "./StudyArrayList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUsers,
  addUsers,
  removeUsers,
  changeActive,
} from "../store/studysReducer";

function countActiveUsers(users) {
  if (users !== undefined) return users.filter((user) => user.active).length;
  else return 0;
}

function StudyArrays({ userInfo, nextId }) {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const onRemove = (id) => {
    nextId.current -= 1;
    dispatch(removeUsers(id));
  };

  const onToggle = (id) => {
    dispatch(changeActive(id));
  };

  useEffect(() => {
    if (userInfo !== undefined) {
      dispatch(addUsers(userInfo));
    }
  }, [userInfo]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div style={{ marginTop: 10 }}>
      {users.map((user) => (
        <StudyArrayList
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
          key={user.id}
        />
      ))}
      <span>활성화 사용자 수 : {count}</span>
    </div>
  );
}

export default StudyArrays;
