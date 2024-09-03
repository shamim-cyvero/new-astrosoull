import axios from "axios";
import { server } from "../../main";
import { AdminLoadAllPaymentFail, AdminLoadAllPaymentRequest, AdminLoadAllPaymentSuccess } from "../reducer/PaymentReducer";



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