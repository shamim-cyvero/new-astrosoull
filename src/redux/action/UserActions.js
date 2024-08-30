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
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
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
    dispatch(loadUserFail(error));
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
    dispatch(changeUserAvatarFail(error));
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
      dispatch(updateUserDetailsFail(error));
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
    dispatch(AdminLoadUserFail(error));
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
    dispatch(AdminLoadSingleUserFail(error));
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
    dispatch(AdminDeleteUserFail(error));
    toast.error(error.response.data.message);

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
    dispatch(UserContactFail(error));
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
    dispatch(UserContactByEmailFail(error));
    toast.error(error.response.data.message);

    // console.log(error?.response?.data?.message);
    // console.log(error);
  }
};


