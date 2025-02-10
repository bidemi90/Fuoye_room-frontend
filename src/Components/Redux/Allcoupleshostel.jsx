import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all coupleshostel from the database
export const fetchUpdatedAllcoupleshosteldata = createAsyncThunk(
  "admin/fetchUpdatedAllcoupleshosteldata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/gettingcoupleshostel`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch all coupleshostel"
        );
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingAllcoupleshostel: false,
  allcoupleshostel: [],
  isFetchingAllcoupleshostelFailed: null,
};

const allcoupleshostelSlice = createSlice({
  name: "allcoupleshostel",
  initialState,
  reducers: {
    fetchingAllcoupleshostel: (state) => {
      state.isFetchingAllcoupleshostel = true;
      state.allcoupleshostel = [];
      state.isFetchingAllcoupleshostelFailed = null;
    },
    fetchingAllcoupleshostelSuccessful: (state, action) => {
      state.isFetchingAllcoupleshostel = false;
      state.allcoupleshostel = action.payload;
      state.isFetchingAllcoupleshostelFailed = null;
    },
    fetchingAllcoupleshostelFailed: (state, action) => {
      state.isFetchingAllcoupleshostel = false;
      state.allcoupleshostel = [];
      state.isFetchingAllcoupleshostelFailed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedAllcoupleshosteldata.pending, (state) => {
        state.isFetchingAllcoupleshostel = true;

        state.allcoupleshostel = [];
        state.isFetchingAllcoupleshostelFailed = null;
      })
      .addCase(
        fetchUpdatedAllcoupleshosteldata.fulfilled,
        (state, action) => {
          state.isFetchingAllcoupleshostel = false;
          state.allcoupleshostel = action.payload.coupleshostel;

          state.isFetchingAllcoupleshostelFailed = null;
        }
      )
      .addCase(
        fetchUpdatedAllcoupleshosteldata.rejected,
        (state, action) => {
          state.isFetchingAllcoupleshostel = false;

          state.allcoupleshostel = [];
          state.isFetchingAllcoupleshostelFailed = action.payload;
        }
      );
  },
});

export default allcoupleshostelSlice.reducer;
export const {
  fetchingAllcoupleshostel,
  fetchingAllcoupleshostelSuccessful,
  fetchingAllcoupleshostelFailed,
} = allcoupleshostelSlice.actions;
