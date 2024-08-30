import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    signupFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    changeUserAvatarRequest: (state) => {
      state.loading = true;
    },
    changeUserAvatarSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    changeUserAvatarFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateUserDetailsRequest: (state) => {
      state.loading = true;
    },
    updateUserDetailsSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.message = action.payload.message;
    },
    updateUserDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    AdminLoadUserRequest: (state) => {
      state.loading = true;
    },
    AdminLoadUserSuccess: (state, action) => {
      state.loading = false;
      state.allUser = action.payload.user;
      state.message = action.payload.message;
    },
    AdminLoadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    AdminLoadSingleUserRequest: (state) => {
      state.loading = true;
    },
    AdminLoadSingleUserSuccess: (state, action) => {
      state.loading = false;
      state.SingleUser = action.payload.user;
      state.message = action.payload.message;
    },
    AdminLoadSingleUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminDeleteUserRequest: (state) => {
      state.loading = true;
    },
    AdminDeleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminDeleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminChangeUserRoleRequest: (state) => {
      state.loading = true;
    },
    AdminChangeUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminChangeUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    UserContactRequest: (state) => {
      state.loading = true;
    },
    UserContactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UserContactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    UserContactByEmailRequest: (state) => {
      state.loading = true;
    },
    UserContactByEmailSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    UserContactByEmailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signupRequest,
  signupSuccess,
  signupFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  loginRequest,
  loginSuccess,
  loginFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  changeUserAvatarFail,
  changeUserAvatarRequest,
  changeUserAvatarSuccess,
  AdminChangeUserRoleFail,
  AdminChangeUserRoleRequest,
  AdminChangeUserRoleSuccess,
  AdminDeleteUserFail,
  AdminDeleteUserRequest,
  AdminDeleteUserSuccess,
  AdminLoadUserFail,
  AdminLoadUserRequest,
  AdminLoadUserSuccess,
  updateUserDetailsFail,
  updateUserDetailsRequest,
  updateUserDetailsSuccess,
  UserContactRequest,
  UserContactFail,
  UserContactSuccess,
  UserContactByEmailRequest,
  UserContactByEmailSuccess,
  UserContactByEmailFail,
  AdminLoadSingleUserRequest,
  AdminLoadSingleUserSuccess,
  AdminLoadSingleUserFail,
} = UserSlice.actions;

export default UserSlice.reducer;
