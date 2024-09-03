import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const PaymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    AdminLoadAllPaymentRequest: (state) => {
      state.loading = true;
    },
    AdminLoadAllPaymentSuccess: (state, action) => {
      state.loading = false;
      state.payment = action.payload.payments;
      state.totalEarnings = action.payload.totalEarnings;
      state.message = action.payload.message;
    },
    AdminLoadAllPaymentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  AdminLoadAllPaymentRequest,
  AdminLoadAllPaymentSuccess,
  AdminLoadAllPaymentFail,
} = PaymentSlice.actions;

export default PaymentSlice.reducer;
