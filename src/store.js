import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './reduxSlice/quizSlice';

export const store = configureStore({
  reducer: {
    quiz:quizReducer,
  },
})