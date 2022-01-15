import { createSlice } from "@reduxjs/toolkit";

export const studysSlice = createSlice({
  name: "studys",
  initialState: {
    inputs: {
      id: 0,
      name: "",
      nickName: "",
      email: "",
    },
    users: [
      {
        id: 1,
        name: "seungHo",
        nickName: "Hoh",
        email: "sh5623789@naver.com",
      },
      {
        id: 2,
        name: "Ahram",
        nickName: "RamRam",
        email: "sandy9233@naver.com",
      },
      {
        id: 3,
        name: "Bambi",
        nickName: "BBamBBi",
        email: "nothingElse",
      },
    ],
  },
  reducers: {
    editInputs: (state, action) => {
      state.inputs = action.payload;
    },
    addUsers: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
    removeUsers: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { editInputs, addUsers, removeUsers } = studysSlice.actions;
export default studysSlice.reducer;
export const selectInputs = (state) => state.studys.inputs;
export const selectUsers = (state) => state.studys.users;
