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

    UserEnrolledCheckRequest: (state) => {
      state.loading = true;
    },
    UserEnrolledCheckSuccess: (state, action) => {
      state.loading = false;
      state.isEnrolled = action.payload;
      state.message = action.payload?.message;
    },
    UserEnrolledCheckFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    MeetingPaymentProcessRequest: (state) => {
      state.loading = true;
    },
    MeetingPaymentProcessSuccess: (state, action) => {
      state.loading = false;
      state.MeetingPaymentOrder = action.payload.order;
      state.message = action.payload.message;
    },
    MeetingPaymentProcessFail: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    GetMeetingPaymentKeyRequest: (state) => {
      state.loading = true;
    },
    GetMeetingPaymentKeySuccess: (state, action) => {
      state.loading = false;
      state.MeetingPaymentkey = action.payload.key;
      // state.message = action.payload.message;
    },
    GetMeetingPaymentKeyFail: (state, action) => {
      state.loading = false;
      state.MeetingPaymentkey = null;
      state.error = action.payload.message;
    },

    GetUserAndEnrolledUserRequest: (state) => {
      state.loading = true;
    },
    GetUserAndEnrolledUserSuccess: (state, action) => {
      state.loading = false;
      state.statsData = action.payload.statsData;
      state.usersCount = action.payload.usersCount;
      state.enrolledUsersCount = action.payload.enrolledUsersCount;

      state.usersPercentage = action.payload.usersPercentage;
      state.enrolledUsersPercentage = action.payload.enrolledUsersPercentage;

      state.usersProfit = action.payload.usersProfit;
      state.enrolledUsersProfit = action.payload.enrolledUsersProfit;
    },
    GetUserAndEnrolledUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
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
  UserEnrolledCheckFail,
  UserEnrolledCheckRequest,
  UserEnrolledCheckSuccess,
  MeetingPaymentProcessFail,
  MeetingPaymentProcessRequest,
  MeetingPaymentProcessSuccess,
  GetMeetingPaymentKeyFail,
  GetMeetingPaymentKeyRequest,
  GetMeetingPaymentKeySuccess,
  GetUserAndEnrolledUserFail,
  GetUserAndEnrolledUserRequest,
  GetUserAndEnrolledUserSuccess,
} = UserSlice.actions;

export default UserSlice.reducer;
