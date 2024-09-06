import axios from "axios";
import { server } from "../../main";
import {
  AdminLoadAllPaymentFail,
  AdminLoadAllPaymentRequest,
  AdminLoadAllPaymentSuccess,

  ClearPaymentErrorRequest,

  ClearPaymentMessageRequest,

  GetPaymentKeyFail,
  GetPaymentKeyRequest,
  GetPaymentKeySuccess,
  PaymentProcessFail,
  PaymentProcessRequest,
  PaymentProcessSuccess,
} from "../reducer/PaymentReducer";
import toast from "react-hot-toast";

export const GetPaymentKey = (courseId) => async (dispatch) => {
  try {
    dispatch(GetPaymentKeyRequest());

    const { data } = await axios.post(`${server}/payment/key`,
      { courseId },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(GetPaymentKeySuccess(data));
    // console.log(data);
    // toast.success(data.message);
  } catch (error) {
    dispatch(GetPaymentKeyFail(error.message));
    // toast.error(error.message);
    console.log(error);
  }
};

export const PaymentProcess = (price) => async (dispatch) => {
  try {
    dispatch(PaymentProcessRequest());

    const { data } = await axios.post(
      `${server}/payment/process`,
      { price },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(PaymentProcessSuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(PaymentProcessFail(error.message));
    // toast.error(error.response.data.message);
  }
};

export const AdminLoadAllPayment = () => async (dispatch) => {
  try {
    dispatch(AdminLoadAllPaymentRequest());

    const { data } = await axios.get(`${server}/payment/get/all`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(AdminLoadAllPaymentSuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(AdminLoadAllPaymentFail(error.message));
    // toast.error(error.response.data.message);
  }
};

export const ClearPaymentMessage = () => async (dispatch) => {
  dispatch(ClearPaymentMessageRequest()); 
};
export const ClearPaymentError = () => async (dispatch) => {
  dispatch(ClearPaymentErrorRequest()); 
};
