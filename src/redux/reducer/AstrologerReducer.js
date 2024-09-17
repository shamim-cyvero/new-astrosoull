import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const AstrologerSlice = createSlice({
  name: "astrologer",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = true;
      state.astrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    signupFail: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = false;
      state.error = action.payload;
    },

    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = true;
      state.astrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = false;
      state.error = action.payload;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = false;
      state.message = action.payload.message;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = true;
      state.error = action.payload;
    },

    changeAstrologerAvatarRequest: (state) => {
      state.loading = true;
    },
    changeAstrologerAvatarSuccess: (state, action) => {
      state.loading = false;
      state.astrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    changeAstrologerAvatarFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateAstrologerDetailsRequest: (state) => {
      state.loading = true;
    },
    updateAstrologerDetailsSuccess: (state, action) => {
      state.loading = false;
      state.astrologer = action.payload;
      state.message = action.payload.message;
    },
    updateAstrologerDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addNewExpAndEduAstrologerRequest: (state) => {
      state.loading = true;
    },
    addNewExpAndEduAstrologerSuccess: (state, action) => {
      state.loading = false;
      state.astrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    addNewExpAndEduAstrologerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DeleteAstrologerExpRequest: (state) => {
      state.loading = true;
    },
    DeleteAstrologerExpSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DeleteAstrologerExpFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DeleteAstrologerEduRequest: (state) => {
      state.loading = true;
    },
    DeleteAstrologerEduSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    DeleteAstrologerEduFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    loadAstrologerRequest: (state) => {
      state.loading = true;
    },
    loadAstrologerSuccess: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = true;
      state.astrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    loadAstrologerFail: (state, action) => {
      state.loading = false;
      state.isAstrologerAuthenticated = false;
      state.error = action.payload;
    },

    AdminLoadAstrologerRequest: (state) => {
      state.loading = true;
    },
    AdminLoadAstrologerSuccess: (state, action) => {
      state.loading = false;
      state.allastrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    AdminLoadAstrologerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    LoadSingleAstrologerRequest: (state) => {
      state.loading = true;
    },
    LoadSingleAstrologerSuccess: (state, action) => {
      state.loading = false;
      state.SingleAstrologer = action.payload.astrologer;
      // state.message = action.payload.message;
    },
    LoadSingleAstrologerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminDeleteAstrologerRequest: (state) => {
      state.loading = true;
    },
    AdminDeleteAstrologerSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminDeleteAstrologerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminChangeAstrologerRoleRequest: (state) => {
      state.loading = true;
    },
    AdminChangeAstrologerRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminChangeAstrologerRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminDeleteAstrologerReviewRequest: (state) => {
      state.loading = true;
    },
    AdminDeleteAstrologerReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminDeleteAstrologerReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    CreateAstrologerReviewRequest: (state) => {
      state.loading = true;
    },
    CreateAstrologerReviewSuccess: (state, action) => {
      state.loading = false;
      state.AstrologerReviews = action.payload.astrologer;
      state.message = action.payload.message;
    },
    CreateAstrologerReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminActiveLicenseAstrologerRequest: (state) => {
      state.loading = true;
    },
    AdminActiveLicenseAstrologerSuccess: (state, action) => {
      state.loading = false;
      state.SingleAstrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    AdminActiveLicenseAstrologerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminChangeMettingPriceAstrologerRequest: (state) => {
      state.loading = true;
    },
    AdminChangeMettingPriceAstrologerSuccess: (state, action) => {
      state.loading = false;
      state.SingleAstrologer = action.payload.astrologer;
      state.message = action.payload.message;
    },
    AdminChangeMettingPriceAstrologerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signupRequest,
  signupSuccess,
  signupFail,
  loadAstrologerRequest,
  loadAstrologerSuccess,
  loadAstrologerFail,
  loginRequest,
  loginSuccess,
  loginFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  changeAstrologerAvatarFail,
  changeAstrologerAvatarRequest,
  changeAstrologerAvatarSuccess,
  AdminChangeAstrologerRoleFail,
  AdminChangeAstrologerRoleRequest,
  AdminChangeAstrologerRoleSuccess,
  AdminDeleteAstrologerFail,
  AdminDeleteAstrologerRequest,
  AdminDeleteAstrologerSuccess,
  AdminLoadAstrologerFail,
  AdminLoadAstrologerRequest,
  AdminLoadAstrologerSuccess,
  updateAstrologerDetailsFail,
  updateAstrologerDetailsRequest,
  updateAstrologerDetailsSuccess,
  LoadSingleAstrologerRequest,
  LoadSingleAstrologerSuccess,
  LoadSingleAstrologerFail,
  CreateAstrologerReviewRequest,
  CreateAstrologerReviewSuccess,
  CreateAstrologerReviewFail,
  addNewExpAndEduAstrologerFail,
  addNewExpAndEduAstrologerRequest,
  addNewExpAndEduAstrologerSuccess,
  DeleteAstrologerEduRequest,
  DeleteAstrologerEduFail,
  DeleteAstrologerEduSuccess,
  DeleteAstrologerExpFail,
  DeleteAstrologerExpRequest,
  DeleteAstrologerExpSuccess,
  AdminDeleteAstrologerReviewRequest,
  AdminDeleteAstrologerReviewSuccess,
  AdminDeleteAstrologerReviewFail,
  AdminActiveLicenseAstrologerFail,
  AdminActiveLicenseAstrologerRequest,
  AdminActiveLicenseAstrologerSuccess,
  AdminChangeMettingPriceAstrologerFail,
  AdminChangeMettingPriceAstrologerRequest,
  AdminChangeMettingPriceAstrologerSuccess,
} = AstrologerSlice.actions;

export default AstrologerSlice.reducer;
