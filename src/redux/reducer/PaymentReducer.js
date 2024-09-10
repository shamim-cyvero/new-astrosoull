import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const PaymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    GetPaymentKeyRequest: (state) => {
      state.payloading = true;
    },
    GetPaymentKeySuccess: (state, action) => {
      state.payloading = false;
      state.Paymentkey = action.payload.key;
      // state.message = action.payload.message;
    },
    GetPaymentKeyFail: (state, action) => {
      state.payloading = false;
      state.Paymentkey = null;
      state.error = action.payload.message;
    },

    PaymentProcessRequest: (state) => {
      state.payloading = true;
    },
    PaymentProcessSuccess: (state, action) => {
      state.payloading = false;
      state.PaymentOrder = action.payload.order;
      state.message = action.payload.message;
    },
    PaymentProcessFail: (state, action) => {
      state.payloading = false;
      state.error = action.payload.message;
    },

    AdminLoadAllPaymentRequest: (state) => {
      state.payloading = true;
    },
    AdminLoadAllPaymentSuccess: (state, action) => {
      state.payloading = false;
      state.payment = action.payload.payments;
      state.totalEarnings = action.payload.totalEarnings;
      state.message = action.payload.message;
    },
    AdminLoadAllPaymentFail: (state, action) => {
      state.payloading = false;
      state.error = action.payload;
    },

    AdminDeletePaymentRequest: (state) => {
      state.payloading = true;
    },
    AdminDeletePaymentSuccess: (state, action) => {
      state.payloading = false;
      state.message = action.payload.message;
    },
    AdminDeletePaymentFail: (state, action) => {
      state.payloading = false;
      state.error = action.payload;
    },

    ClearPaymentMessageRequest: (state, action) => {
      state.message = null;
    },
    ClearPaymentErrorRequest: (state, action) => {
      state.error = null;
    },
  },
});

export const {
  AdminLoadAllPaymentRequest,
  AdminLoadAllPaymentSuccess,
  AdminLoadAllPaymentFail,
  GetPaymentKeyFail,
  GetPaymentKeyRequest,
  GetPaymentKeySuccess,
  PaymentProcessFail,
  PaymentProcessRequest,
  PaymentProcessSuccess,
  ClearPaymentErrorRequest,
  ClearPaymentMessageRequest,
  AdminDeletePaymentFail,
  AdminDeletePaymentRequest,
  AdminDeletePaymentSuccess,
} = PaymentSlice.actions;

export default PaymentSlice.reducer;
