// admindata.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch updated admin data from the database
export const fetchUpdatedadminData = createAsyncThunk(
  "admin/fetchUpdatedadminData",
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://fuoye-room-backend.onrender.com/admin/getadminByemail/${email}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch admin data");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingadmin: false,
  admindata: [],
  isFeatchingadminfailed: null,
};

const admindataSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    featchingadmin: (state) => {
      state.isFetchingadmin = true;
      state.admindata = [];
      state.isFeatchingadminfailed = null;
    },
    featchingadminSuccessful: (state, action) => {
      state.isFetchingadmin = false;
      state.admindata = action.payload;
      state.isFeatchingadminfailed = null;
    },
    featchingadminfailed: (state, action) => {
      state.isFetchingadmin = false;
      state.admindata = [];
      state.isFeatchingadminfailed = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedadminData.pending, (state) => {
        state.isFetchingadmin = true;
        state.admindata = [];
        state.isFeatchingadminfailed = null;
      })
      .addCase(fetchUpdatedadminData.fulfilled, (state, action) => {
        state.isFetchingadmin = false;
        state.admindata = action.payload;
        state.isFeatchingadminfailed = null;
      })
      .addCase(fetchUpdatedadminData.rejected, (state, action) => {
        state.isFetchingadmin = false;
        state.admindata = [];
        state.isFeatchingadminfailed = action.payload;
      });
  },
});

export default admindataSlice.reducer;
export const { featchingadmin, featchingadminSuccessful, featchingadminfailed } =
  admindataSlice.actions;
