import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all schoolmalehostel from the database
export const fetchUpdatedAllschoolmalehosteldata = createAsyncThunk(
  "admin/fetchUpdatedAllschoolmalehosteldata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://fuoye-room-backend.onrender.com/user/gettingschoolmalehostel`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch all schoolmalehostel");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingAllschoolmalehostel: false,
  allschoolmalehostel: [],
  isFetchingAllschoolmalehostelFailed: null,
};

const allschoolmalehostelSlice = createSlice({
  name: "allschoolmalehostel",
  initialState,
  reducers: {
    fetchingAllschoolmalehostel: (state) => {
      state.isFetchingAllschoolmalehostel = true;
      state.allschoolmalehostel = [];
      state.isFetchingAllschoolmalehostelFailed = null;
    },
    fetchingAllschoolmalehostelSuccessful: (state, action) => {
      state.isFetchingAllschoolmalehostel = false;
      state.allschoolmalehostel = action.payload;
      state.isFetchingAllschoolmalehostelFailed = null;
    },
    fetchingAllschoolmalehostelFailed: (state, action) => {
      state.isFetchingAllschoolmalehostel = false;
      state.allschoolmalehostel = [];
      state.isFetchingAllschoolmalehostelFailed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedAllschoolmalehosteldata.pending, (state) => {
        state.isFetchingAllschoolmalehostel = true;

        state.allschoolmalehostel = [];
        state.isFetchingAllschoolmalehostelFailed = null;
      })
      .addCase(
        fetchUpdatedAllschoolmalehosteldata.fulfilled,
        (state, action) => {
          state.isFetchingAllschoolmalehostel = false;
          state.allschoolmalehostel = action.payload.schoolmalehostel;

          state.isFetchingAllschoolmalehostelFailed = null;
        }
      )
      .addCase(
        fetchUpdatedAllschoolmalehosteldata.rejected,
        (state, action) => {
          state.isFetchingAllschoolmalehostel = false;

          state.allschoolmalehostel = [];
          state.isFetchingAllschoolmalehostelFailed = action.payload;
        }
      );
  },
});

export default allschoolmalehostelSlice.reducer;
export const {
  fetchingAllschoolmalehostel,
  fetchingAllschoolmalehostelSuccessful,
  fetchingAllschoolmalehostelFailed,
} = allschoolmalehostelSlice.actions;
