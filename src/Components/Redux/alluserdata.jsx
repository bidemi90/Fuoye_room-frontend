import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all user from the database
export const fetchUpdatedalluserdata = createAsyncThunk(
  "admin/fetchUpdatedalluserdata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://fuoye-room-backend.onrender.com/user/gettingalluserdata`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch all user ");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingalluser: false,
  alluser: [],
  isFetchingalluserFailed: null,
};

const alluserSlice = createSlice({
  name: "alluser",
  initialState,
  reducers: {
    fetchingalluser: (state) => {
      state.isFetchingalluser = true;
      state.alluser = [];
      state.isFetchingalluserFailed = null;
    },
    fetchingalluserSuccessful: (state, action) => {
      state.isFetchingalluser = false;
      state.alluser = action.payload;
      state.isFetchingalluserFailed = null;
    },
    fetchingalluserFailed: (state, action) => {
      state.isFetchingalluser = false;
      state.alluser = [];
      state.isFetchingalluserFailed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedalluserdata.pending, (state) => {
        state.isFetchingalluser = true;
        state.alluser = [];
        state.isFetchingalluserFailed = null;
      })
      .addCase(
        fetchUpdatedalluserdata.fulfilled,
        (state, action) => {
          state.isFetchingalluser = false;
          state.alluser = action.payload.alluserdata;
          state.isFetchingalluserFailed = null;
        }
      )
      .addCase(
        fetchUpdatedalluserdata.rejected,
        (state, action) => {
          state.isFetchingalluser = false;
          state.alluser = [];
          state.isFetchingalluserFailed = action.payload;
        }
      );
  },
});

export default alluserSlice.reducer;
export const {
  fetchingalluser,
  fetchingalluserSuccessful,
  fetchingalluserFailed,
} = alluserSlice.actions;
