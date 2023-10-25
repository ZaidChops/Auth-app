import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registeruser.pending, (state, action) => {
        state.isLoading = true;
        state.message = "";
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registeruser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "";
      })
      .addCase(registeruser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logoutuser.fulfilled, (state,action) => {
        state.user = null;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.user=action.payload;   
        state.isSuccess=true   
        state.isError=false
        state.message=""  
      })
      .addCase(loginUser.rejected,(state,action)=>{
        state.isError=true
        state.message=action.payload
      })
  },
});

export default authSlice.reducer;

export const registeruser = createAsyncThunk(
  "RESISTER/USER",
  async (formData, thunkAPI) => {
    try {
      return await authService.register(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutuser = createAsyncThunk("LOGOUT/USER", async () => {
  localStorage.removeItem("user");
});

export const loginUser = createAsyncThunk("LOGIN/USER", async (loginData, thunkAPI) => {
  try {
    return await authService.login(loginData)
  } catch (error) {
    const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
  }
});
