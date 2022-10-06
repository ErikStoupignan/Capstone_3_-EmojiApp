import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Download the information from the API
const getEmojis = createAsyncThunk('users/getEmojis', async (value = '/all/') => {
  const response = await fetch(`https://emojihub.herokuapp.com/api${value}`);
  const emojisList = await response.json();

  return emojisList;
});

const initialState = [];

// Create function to combine all the information with the reducers
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
