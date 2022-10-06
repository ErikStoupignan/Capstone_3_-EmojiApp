import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

const getEmojis = createAsyncThunk('users/getEmojis', async (value = '/all/') => {
  const response = await fetch(`https://emojihub.herokuapp.com/api${value}`);
  const emojisList = await response.json();
  return emojisList;
});

const emojisSlice = createSlice({
  name: 'Emojis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmojis.fulfilled, (state, action) => action.payload);
  },
});

const { action, reducer } = emojisSlice;
export { action, getEmojis };
export default reducer;
