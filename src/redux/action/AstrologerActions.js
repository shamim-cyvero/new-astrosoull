import axios from "axios";
import { server } from "../../main";
import {
  addNewExpAndEduAstrologerFail,
  addNewExpAndEduAstrologerRequest,
  addNewExpAndEduAstrologerSuccess,
  AdminDeleteAstrologerFail,
  AdminDeleteAstrologerRequest,
  AdminDeleteAstrologerReviewFail,
  AdminDeleteAstrologerReviewRequest,
  AdminDeleteAstrologerReviewSuccess,
  AdminDeleteAstrologerSuccess,
  AdminLoadAstrologerFail,
  AdminLoadAstrologerRequest,
  AdminLoadAstrologerSuccess,
  changeAstrologerAvatarFail,
  changeAstrologerAvatarRequest,
  changeAstrologerAvatarSuccess,
  CreateAstrologerReviewFail,
  CreateAstrologerReviewRequest,
  CreateAstrologerReviewSuccess,
  DeleteAstrologerEduFail,
  DeleteAstrologerEduRequest,
  DeleteAstrologerEduSuccess,
  DeleteAstrologerExpFail,
  DeleteAstrologerExpRequest,
  DeleteAstrologerExpSuccess,
  loadAstrologerFail,
  loadAstrologerRequest,
  loadAstrologerSuccess,
  LoadSingleAstrologerFail,
  LoadSingleAstrologerRequest,
  LoadSingleAstrologerSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  signupFail,
  signupRequest,
  signupSuccess,
  updateAstrologerDetailsFail,
  updateAstrologerDetailsRequest,
  updateAstrologerDetailsSuccess,

} from "../reducer/AstrologerReducer";
import toast from "react-hot-toast";

export const signupAstrologer = (name, phone, email, password) => async (dispatch) => {
  try {
    dispatch(signupRequest());

    const { data } = await axios.post(
      `${server}/astrologer/signup`,
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
    dispatch(signupFail(error.message));
    toast.error(error.response.data.message);

    // console.log(error?.response?.data?.message);
    // console.log(error);
  }
};

export const LoginAstrologer = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const { data } = await axios.post(
      `${server}/astrologer/login`,
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
    dispatch(loginFail(error.message));
    toast.error(error.response.data.message);
  }
};

export const LogoutAstrologer = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());

    const { data } = await axios.get(`${server}/astrologer/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(logoutSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(logoutFail(error.message));
    toast.error(error.response.data.message);
  }
};

export const LoadAstrologer = () => async (dispatch) => {
  try {
    dispatch(loadAstrologerRequest());

    const { data } = await axios.get(`${server}/astrologer/profile`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(loadAstrologerSuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(loadAstrologerFail(error.message));
    // toast.error(error.response.data.message);
  }
};

export const ChangeAvatarAstrologer = (avatar) => async (dispatch) => {
  try {
    dispatch(changeAstrologerAvatarRequest());

    const { data } = await axios.put(
      `${server}/astrologer/update/avatar`,
      { avatar },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(changeAstrologerAvatarSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(changeAstrologerAvatarFail(error.message));
    toast.error(error.response.data.message);
  }
};

export const UpdateAstrologerDetails = (name, phone, email, address,about) => async (dispatch) => {
    try {
      dispatch(updateAstrologerDetailsRequest()); 

      const { data } = await axios.put(
        `${server}/astrologer/update/profile`,
        { name, phone, email, address,about},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(updateAstrologerDetailsSuccess(data));
      toast.success(data.message);
    } catch (error) {
      dispatch(updateAstrologerDetailsFail(error.message));
      toast.error(error.response.data.message);
    }
};

export const AstrologerAddNewExpAndEdu= (education, experience ) => async (dispatch) => {
  try {
    dispatch(addNewExpAndEduAstrologerRequest()); 

    console.log(education)
    console.log(experience)

    const { data } = await axios.put(
      `${server}/astrologer/new/expandedu`,
      { education, experience  },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(addNewExpAndEduAstrologerSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(addNewExpAndEduAstrologerFail(error.message));
    toast.error(error.response.data.message);
  }
};

export const AstrologerDeleteExp= (expId) => async (dispatch) => {
  try {
    dispatch(DeleteAstrologerExpRequest()); 

    // alert(` api ${expId}`)

    const { data } = await axios.delete(`${server}/astrologer/delete/exp/${expId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(DeleteAstrologerExpSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(DeleteAstrologerExpFail(error.message));
    toast.error(error.response.data.message);
  }
};

export const AstrologerDeleteEdu= (eduId) => async (dispatch) => {
  try {
    dispatch(DeleteAstrologerEduRequest()); 

    // alert(` api ${expId}`)

    const { data } = await axios.delete(`${server}/astrologer/delete/edu/${eduId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(DeleteAstrologerEduSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(DeleteAstrologerEduFail(error.message));
    toast.error(error.response.data.message);
  }
};



export const AdminLoadAllAstrologer = () => async (dispatch) => {
  try {
    dispatch(AdminLoadAstrologerRequest());

    const { data } = await axios.get(`${server}/astrologer/get/all`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(AdminLoadAstrologerSuccess(data));
    // toast.success(data.message);

  } catch (error) {
    dispatch(AdminLoadAstrologerFail(error.message));
    // toast.error(error.response.data.message);

  }
};

export const LoadSingleAstrologerDetails = (id) => async (dispatch) => {
  try {
    dispatch(LoadSingleAstrologerRequest());

    const { data } = await axios.get(`${server}/astrologer/get/single/${id}`, { 
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(LoadSingleAstrologerSuccess(data));
    // toast.success(data.message);

  } catch (error) {
    dispatch(LoadSingleAstrologerFail(error.message));
    toast.error(error.response.data.message);

  }
};

export const UserCreateAstrologerReview = (rating, comment,astrologerId ) => async (dispatch) => {
  try {
    dispatch(CreateAstrologerReviewRequest());

    const { data } = await axios.put(
      `${server}/astrologer/create/user/review/${astrologerId}`,
      { rating, comment},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(CreateAstrologerReviewSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(CreateAstrologerReviewFail(error.message));
    toast.error(error.message);
  }
};

export const AdminDeleteAstrologerReview = (reviewId, astrologerId) => async (dispatch) => {
  try {
  
    dispatch(AdminDeleteAstrologerReviewRequest());

    const { data } = await axios.put(
      `${server}/astrologer/admin/delete/user/review/${astrologerId}`,
      { reviewId },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(AdminDeleteAstrologerReviewSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(AdminDeleteAstrologerReviewFail(error.message));
    console.log(error);
    // toast.error(error.message);
  }
};

// ------------------admin api------------------------- 

export const AdminDeleteAstrologer = (astrologerId) => async (dispatch) => {
  try {
    dispatch(AdminDeleteAstrologerRequest());

    const { data } = await axios.delete(`${server}/astrologer/admin/delete/${astrologerId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(AdminDeleteAstrologerSuccess(data));
    toast.success(data.message);

  } catch (error) {
    dispatch(AdminDeleteAstrologerFail(error.message));
    toast.error(error.response.data.message);

  }
};


