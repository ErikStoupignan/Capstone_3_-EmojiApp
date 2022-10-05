import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const apiURL = 'https://emojihub.herokuapp.com/api/all/group_plant_flower';

// Download the information from the API
const getEmojis = createAsyncThunk('users/getEmojis', async (value = '/all/') => {
  const response = await fetch(`https://emojihub.herokuapp.com/api${value}`);
  const emojisList = await response.json();

  if (emojisList.length === undefined) {
    const array = [];
    array.push(emojisList);
    return array;
  }

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
