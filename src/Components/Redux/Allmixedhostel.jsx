import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all mixedhostel from the database
export const fetchUpdatedAllmixedhosteldata = createAsyncThunk(
  "admin/fetchUpdatedAllmixedhosteldata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/gettingmixedhostel`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch all mixedhostel"
        );
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingAllmixedhostel: false,
  allmixedhostel: [],
  isFetchingAllmixedhostelFailed: null,
};

const allmixedhostelSlice = createSlice({
  name: "allmixedhostel",
  initialState,
  reducers: {
    fetchingAllmixedhostel: (state) => {
      state.isFetchingAllmixedhostel = true;
      state.allmixedhostel = [];
      state.isFetchingAllmixedhostelFailed = null;
    },
    fetchingAllmixedhostelSuccessful: (state, action) => {
      state.isFetchingAllmixedhostel = false;
      state.allmixedhostel = action.payload;
      state.isFetchingAllmixedhostelFailed = null;
    },
    fetchingAllmixedhostelFailed: (state, action) => {
      state.isFetchingAllmixedhostel = false;
      state.allmixedhostel = [];
      state.isFetchingAllmixedhostelFailed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedAllmixedhosteldata.pending, (state) => {
        state.isFetchingAllmixedhostel = true;

        state.allmixedhostel = [];
        state.isFetchingAllmixedhostelFailed = null;
      })
      .addCase(
        fetchUpdatedAllmixedhosteldata.fulfilled,
        (state, action) => {
          state.isFetchingAllmixedhostel = false;
          state.allmixedhostel = action.payload.mixedhostel;

          state.isFetchingAllmixedhostelFailed = null;
        }
      )
      .addCase(
        fetchUpdatedAllmixedhosteldata.rejected,
        (state, action) => {
          state.isFetchingAllmixedhostel = false;

          state.allmixedhostel = [];
          state.isFetchingAllmixedhostelFailed = action.payload;
        }
      );
  },
});

export default allmixedhostelSlice.reducer;
export const {
  fetchingAllmixedhostel,
  fetchingAllmixedhostelSuccessful,
  fetchingAllmixedhostelFailed,
} = allmixedhostelSlice.actions;
