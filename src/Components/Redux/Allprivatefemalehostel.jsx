import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all privatefemalehostel from the database
export const fetchUpdatedAllprivatefemalehosteldata = createAsyncThunk(
  "admin/fetchUpdatedAllprivatefemalehosteldata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://fuoye-room-backend.onrender.com/user/gettingprivatefemalehostel`
      );
      const data = await response.json();
      console.log(response);
      console.log(data);

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch all privatefemalehostel"
        );
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isFetchingAllprivatefemalehostel: false,
  allprivatefemalehostel: [],
  isFetchingAllprivatefemalehostelFailed: null,
};

const allprivatefemalehostelSlice = createSlice({
  name: "allprivatefemalehostel",
  initialState,
  reducers: {
    fetchingAllprivatefemalehostel: (state) => {
      state.isFetchingAllprivatefemalehostel = true;
      state.allprivatefemalehostel = [];
      state.isFetchingAllprivatefemalehostelFailed = null;
    },
    fetchingAllprivatefemalehostelSuccessful: (state, action) => {
      state.isFetchingAllprivatefemalehostel = false;
      state.allprivatefemalehostel = action.payload;
      state.isFetchingAllprivatefemalehostelFailed = null;
    },
    fetchingAllprivatefemalehostelFailed: (state, action) => {
      state.isFetchingAllprivatefemalehostel = false;
      state.allprivatefemalehostel = [];
      state.isFetchingAllprivatefemalehostelFailed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdatedAllprivatefemalehosteldata.pending, (state) => {
        state.isFetchingAllprivatefemalehostel = true;

        state.allprivatefemalehostel = [];
        state.isFetchingAllprivatefemalehostelFailed = null;
      })
      .addCase(
        fetchUpdatedAllprivatefemalehosteldata.fulfilled,
        (state, action) => {
          state.isFetchingAllprivatefemalehostel = false;
          state.allprivatefemalehostel = action.payload.privatefemalehostel;

          state.isFetchingAllprivatefemalehostelFailed = null;
        }
      )
      .addCase(
        fetchUpdatedAllprivatefemalehosteldata.rejected,
        (state, action) => {
          state.isFetchingAllprivatefemalehostel = false;

          state.allprivatefemalehostel = [];
          state.isFetchingAllprivatefemalehostelFailed = action.payload;
        }
      );
  },
});

export default allprivatefemalehostelSlice.reducer;
export const {
  fetchingAllprivatefemalehostel,
  fetchingAllprivatefemalehostelSuccessful,
  fetchingAllprivatefemalehostelFailed,
} = allprivatefemalehostelSlice.actions;
