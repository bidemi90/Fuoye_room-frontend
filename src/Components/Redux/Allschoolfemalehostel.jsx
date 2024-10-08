import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all schoolfemalehostel from the database
export const fetchUpdatedAllschoolfemalehosteldata = createAsyncThunk(
  "admin/fetchUpdatedAllschoolfemalehosteldata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/gettingschoolfemalehostel`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch all schoolfemalehostel"
        );
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingAllschoolfemalehostel: false,
  allschoolfemalehostel: [],
  isFetchingAllschoolfemalehostelFailed: null,
};

const allschoolfemalehostelSlice = createSlice({
  name: "allschoolfemalehostel",
  initialState,
  reducers: {
    fetchingAllschoolfemalehostel: (state) => {
      state.isFetchingAllschoolfemalehostel = true;
      state.allschoolfemalehostel = [];
      state.isFetchingAllschoolfemalehostelFailed = null;
    },
    fetchingAllschoolfemalehostelSuccessful: (state, action) => {
      state.isFetchingAllschoolfemalehostel = false;
      state.allschoolfemalehostel = action.payload;
      state.isFetchingAllschoolfemalehostelFailed = null;
    },
    fetchingAllschoolfemalehostelFailed: (state, action) => {
      state.isFetchingAllschoolfemalehostel = false;
      state.allschoolfemalehostel = [];
      state.isFetchingAllschoolfemalehostelFailed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedAllschoolfemalehosteldata.pending, (state) => {
        state.isFetchingAllschoolfemalehostel = true;

        state.allschoolfemalehostel = [];
        state.isFetchingAllschoolfemalehostelFailed = null;
      })
      .addCase(
        fetchUpdatedAllschoolfemalehosteldata.fulfilled,
        (state, action) => {
          state.isFetchingAllschoolfemalehostel = false;
          state.allschoolfemalehostel = action.payload.schoolfemalehostel;

          state.isFetchingAllschoolfemalehostelFailed = null;
        }
      )
      .addCase(
        fetchUpdatedAllschoolfemalehosteldata.rejected,
        (state, action) => {
          state.isFetchingAllschoolfemalehostel = false;

          state.allschoolfemalehostel = [];
          state.isFetchingAllschoolfemalehostelFailed = action.payload;
        }
      );
  },
});

export default allschoolfemalehostelSlice.reducer;
export const {
  fetchingAllschoolfemalehostel,
  fetchingAllschoolfemalehostelSuccessful,
  fetchingAllschoolfemalehostelFailed,
} = allschoolfemalehostelSlice.actions;
