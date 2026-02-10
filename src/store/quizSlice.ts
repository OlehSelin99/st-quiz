import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resetTrigger: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    reset: (state) => {
      state.resetTrigger += 1;
    },
  },
});

export const { reset } = quizSlice.actions;
export default quizSlice.reducer;
