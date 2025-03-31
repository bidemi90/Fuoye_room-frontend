// userdata.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch updated user data from the database
export const fetchUpdatedUserData = createAsyncThunk(
  "user/fetchUpdatedUserData",
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://fuoye-room-backend.onrender.com/user/getUserByemail/${email}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch user data");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchinguser: false,
  userdata: [],
  isFeatchinguserfailed: null,
};

const userdataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    featchinguser: (state) => {
      state.isFetchinguser = true;
      state.userdata = [];
      state.isFeatchinguserfailed = null;
    },
    featchinguserSuccessful: (state, action) => {
      state.isFetchinguser = false;
      state.userdata = action.payload;
      state.isFeatchinguserfailed = null;
    },
    featchinguserfailed: (state, action) => {
      state.isFetchinguser = false;
      state.userdata = [];
      state.isFeatchinguserfailed = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedUserData.pending, (state) => {
        state.isFetchinguser = true;
        state.userdata = [];
        state.isFeatchinguserfailed = null;
      })
      .addCase(fetchUpdatedUserData.fulfilled, (state, action) => {
        state.isFetchinguser = false;
        state.userdata = action.payload;
        state.isFeatchinguserfailed = null;
      })
      .addCase(fetchUpdatedUserData.rejected, (state, action) => {
        state.isFetchinguser = false;
        state.userdata = [];
        state.isFeatchinguserfailed = action.payload;
      });
  },
});

export default userdataSlice.reducer;
export const { featchinguser, featchinguserSuccessful, featchinguserfailed } =
  userdataSlice.actions;
