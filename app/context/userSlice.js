/* This code snippet is creating a Redux slice using the `createSlice` function from the
`@reduxjs/toolkit` package. */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export default userSlice.reducer;
