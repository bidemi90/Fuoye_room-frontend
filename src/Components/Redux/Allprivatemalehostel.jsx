import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all privatemalehostel from the database
export const fetchUpdatedAllprivatemalehosteldata = createAsyncThunk(
  "admin/fetchUpdatedAllprivatemalehosteldata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/gettingprivatemalehostel`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch all privatemalehostel");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingAllprivatemalehostel: false,
  allprivatemalehostel: [],
  isFetchingAllprivatemalehostelFailed: null,
};

const allprivatemalehostelSlice = createSlice({
  name: "allprivatemalehostel",
  initialState,
  reducers: {
    fetchingAllprivatemalehostel: (state) => {
      state.isFetchingAllprivatemalehostel = true;
      state.allprivatemalehostel = [];
      state.isFetchingAllprivatemalehostelFailed = null;
    },
    fetchingAllprivatemalehostelSuccessful: (state, action) => {
      state.isFetchingAllprivatemalehostel = false;
      state.allprivatemalehostel = action.payload;
      state.isFetchingAllprivatemalehostelFailed = null;
    },
    fetchingAllprivatemalehostelFailed: (state, action) => {
      state.isFetchingAllprivatemalehostel = false;
      state.allprivatemalehostel = [];
      state.isFetchingAllprivatemalehostelFailed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedAllprivatemalehosteldata.pending, (state) => {
        state.isFetchingAllprivatemalehostel = true;

        state.allprivatemalehostel = [];
        state.isFetchingAllprivatemalehostelFailed = null;
      })
      .addCase(
        fetchUpdatedAllprivatemalehosteldata.fulfilled,
        (state, action) => {
          state.isFetchingAllprivatemalehostel = false;
          state.allprivatemalehostel = action.payload.privatemalehostel;

          state.isFetchingAllprivatemalehostelFailed = null;
        }
      )
      .addCase(
        fetchUpdatedAllprivatemalehosteldata.rejected,
        (state, action) => {
          state.isFetchingAllprivatemalehostel = false;

          state.allprivatemalehostel = [];
          state.isFetchingAllprivatemalehostelFailed = action.payload;
        }
      );
  },
});

export default allprivatemalehostelSlice.reducer;
export const {
  fetchingAllprivatemalehostel,
  fetchingAllprivatemalehostelSuccessful,
  fetchingAllprivatemalehostelFailed,
} = allprivatemalehostelSlice.actions;
