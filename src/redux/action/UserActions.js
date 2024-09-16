import axios from "axios";
import { server } from "../../main";
import {
  AdminDeleteUserFail,
  AdminDeleteUserRequest,
  AdminDeleteUserSuccess,
  AdminLoadSingleUserFail,
  AdminLoadSingleUserRequest,
  AdminLoadSingleUserSuccess,
  AdminLoadUserFail,
  AdminLoadUserRequest,
  AdminLoadUserSuccess,
  changeUserAvatarFail,
  changeUserAvatarRequest,
  changeUserAvatarSuccess,
  GetMeetingPaymentKeyFail,
  GetMeetingPaymentKeyRequest,
  GetMeetingPaymentKeySuccess,
  GetUserAndEnrolledUserFail,
  GetUserAndEnrolledUserRequest,
  GetUserAndEnrolledUserSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  MeetingPaymentProcessFail,
  MeetingPaymentProcessRequest,
  MeetingPaymentProcessSuccess,
  signupFail,
  signupRequest,
  signupSuccess,
  updateUserDetailsFail,
  updateUserDetailsRequest,
  updateUserDetailsSuccess,
  UserContactByEmailFail,
  UserContactByEmailRequest,
  UserContactByEmailSuccess,
  UserContactFail,
  UserContactRequest,
  UserContactSuccess,
  UserEnrolledCheckFail,
  UserEnrolledCheckRequest,
  UserEnrolledCheckSuccess,
} from "../reducer/UserReducer";
import toast from "react-hot-toast"; 

export const signup = (name, phone, email, password) => async (dispatch) => {
  try {
    dispatch(signupRequest());

    const { data } = await axios.post(
      `${server}/user/signup`,
      { name, phone, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(signupSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(signupFail(error));
    toast.error(error.response.data.message);

    // console.log(error?.response?.data?.message);
    // console.log(error);
  }
};

export const LoginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const { data } = await axios.post(
      `${server}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(loginSuccess(data));

    toast.success(data.message);
  } catch (error) {
    dispatch(loginFail(error));
    toast.error(error.response.data.message);
  }
};

export const LogoutUser = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());

    const { data } = await axios.get(`${server}/user/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(logoutSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(logoutFail(error));
    toast.error(error.response.data.message);
  }
};

export const LoadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(`${server}/user/profile`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(loadUserSuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(loadUserFail(error.message));
    // toast.error(error.response.data.message);
  }
};

export const ChangeAvatarUser = (avatar) => async (dispatch) => {
  try {
    dispatch(changeUserAvatarRequest());

    const { data } = await axios.put(
      `${server}/user/update/avatar`,
      { avatar },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(changeUserAvatarSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(changeUserAvatarFail(error.message));
    toast.error(error.response.data.message);
  }
};

export const UpdateUserDetails = (name, phone, email, address) => async (dispatch) => {
    try {
      dispatch(updateUserDetailsRequest());

      const { data } = await axios.put(
        `${server}/user/update/profile`,
        { name, phone, email, address },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(updateUserDetailsSuccess(data));
      toast.success(data.message);
    } catch (error) {
      dispatch(updateUserDetailsFail(error.message));
      toast.error(error.response.data.message);
    }
};



// ------------------admin api-------------------------
export const AdminLoadAllUser = () => async (dispatch) => {
  try {
    dispatch(AdminLoadUserRequest());

    const { data } = await axios.get(`${server}/user/admin/get/all`, {
      headers: {
        "Content-Type": "application/json", 
      },
      withCredentials: true,
    });

    dispatch(AdminLoadUserSuccess(data));
    // toast.success(data.message);

  } catch (error) {
    dispatch(AdminLoadUserFail(error.message));
    // toast.error(error.response.data.message);

  }
};

export const AdminLoadSingleUser = (userId) => async (dispatch) => {
  try {
    dispatch(AdminLoadSingleUserRequest());

    const { data } = await axios.get(`${server}/user/admin/get/single/${userId}`, {
      headers: {
        "Content-Type": "application/json", 
      },
      withCredentials: true,
    });

    dispatch(AdminLoadSingleUserSuccess(data));
    // toast.success(data.message);

  } catch (error) {
    dispatch(AdminLoadSingleUserFail(error.message));
    // toast.error(error.response.data.message);

  }
};

export const AdminDeleteUser = (userId) => async (dispatch) => {
  try {
    dispatch(AdminDeleteUserRequest());

    const { data } = await axios.delete(`${server}/user/admin/delete/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(AdminDeleteUserSuccess(data));
    toast.success(data.message);

  } catch (error) {
    dispatch(AdminDeleteUserFail(error.message));
    toast.error(error.response.data.message);

  }
};

export const AdminLoadUserAndEnrolledUser = () => async (dispatch) => {
  try {
    dispatch(GetUserAndEnrolledUserRequest());

    const { data } = await axios.get(`${server}/user/admin/get/stats`, {
      headers: {
        "Content-Type": "application/json", 
      },
      withCredentials: true,
    });

    dispatch(GetUserAndEnrolledUserSuccess(data));
    // toast.success(data.message);

  } catch (error) {
    dispatch(GetUserAndEnrolledUserFail(error.message));
    // toast.error(error.response.data.message);

  }
};



export const UserContact = (name, email, phone,message,subject) => async (dispatch) => {
  try {
    dispatch(UserContactRequest());

    const { data } = await axios.post(
      `${server}/user/contact`,
      { name, email, phone,message,subject},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(UserContactSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(UserContactFail(error.message));
    toast.error(error.response.data.message);

    // console.log(error?.response?.data?.message);
    // console.log(error);
  }
};

export const UserContactByEmail = ( email) => async (dispatch) => {
  try {
    dispatch(UserContactByEmailRequest());

    const { data } = await axios.post(
      `${server}/user/contact/email`,
      { email},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(UserContactByEmailSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(UserContactByEmailFail(error.message));
    toast.error(error.response.data.message);

    // console.log(error?.response?.data?.message);
    // console.log(error);
  }
};


export const UserEnrolled = ( courseId) => async (dispatch) => {
  try {
    dispatch(UserEnrolledCheckRequest());
    alert(courseId)

    const { data } = await axios.post(
      `${server}/user/enrolled/course`,
      { courseId},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(UserEnrolledCheckSuccess(data));
    console.log(data)
    // toast.success(data.message);
  } catch (error) {
    dispatch(UserEnrolledCheckFail(error.message));
    // toast.error(error.message);

  }
};

// ------------------Meeting payment api----------------------------
export const GetMeetingPaymentKey = () => async (dispatch) => {
  try {
    dispatch(GetMeetingPaymentKeyRequest());

    const { data } = await axios.get(`${server}/user/get/key/meeting/payment`,
   
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(GetMeetingPaymentKeySuccess(data));
    // console.log(data);
    // toast.success(data.message);
  } catch (error) {
    dispatch(GetMeetingPaymentKeyFail(error.message));
    toast.error(error.response.data.message);
    // console.log(error);
  }
};

export const PaymentProcess = (price) => async (dispatch) => {
  try {
    dispatch(MeetingPaymentProcessRequest());

    const { data } = await axios.post(
      `${server}/user/meeting/payment/process`,
      { price },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(MeetingPaymentProcessSuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(MeetingPaymentProcessFail(error.message));
    // toast.error(error.response.data.message);
  }
};
