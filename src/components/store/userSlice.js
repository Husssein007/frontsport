import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch user account
export const fetchAccount = createAsyncThunk("auth/fetchAccount", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("http://localhost:4000/auth/myaccount", {
    headers: { Authorization: token },
  });
  return response.data;
});

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // User object will hold the fetched data                          
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null; // Reset user data on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Update user data
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
