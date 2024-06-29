/* This code snippet is setting up a Redux store using the Redux Toolkit library. It imports the
`configureStore` function from `@reduxjs/toolkit` and a user reducer from a file named
`userSlice.js`. It then creates a Redux store using the `configureStore` function, passing in the
user reducer to be used as part of the store's state management. Finally, it exports the created
store as the default export of the module. */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
