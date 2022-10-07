import { configureStore } from '@reduxjs/toolkit';
import emojiReducer from './reduxHome/ApiEmojis';

const store = configureStore({
  reducer: {
    emojis: emojiReducer,
  },
});

export default store;
