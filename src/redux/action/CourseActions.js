import axios from "axios";
import { server } from "../../main";
import toast from "react-hot-toast";
import {
  addCourseLectureFail,
  addCourseLectureRequest,
  addCourseLectureSuccess,
  addCourseLectureVideoFail,
  addCourseLectureVideoRequest,
  addCourseLectureVideoSuccess,
  AdminDeleteCourseFail,
  AdminDeleteCourseLectureFail,
  AdminDeleteCourseLectureRequest,
  AdminDeleteCourseLectureSuccess,
  AdminDeleteCourseLectureVideoFail,
  AdminDeleteCourseLectureVideoRequest,
  AdminDeleteCourseLectureVideoSuccess,
  AdminDeleteCourseRequest,
  AdminDeleteCourseReviewFail,
  AdminDeleteCourseReviewRequest,
  AdminDeleteCourseReviewSuccess,
  AdminDeleteCourseSuccess,
  createCourseFail,
  createCourseRequest,
  CreateCourseReviewFail,
  CreateCourseReviewRequest,
  CreateCourseReviewSuccess,
  createCourseSuccess,
  LoadAllCourseByCategoryFail,
  LoadAllCourseByCategoryRequest,
  LoadAllCourseByCategorySuccess,
  LoadAllCourseFail,
  LoadAllCourseRequest,
  LoadAllCourseSuccess,
  SingleCourseFail,
  SingleCourseRequest,
  SingleCourseSuccess,
} from "../reducer/CourseReducer";

export const AdminCreateCourse = (name, description, price, banner, category) => async (dispatch) => {
    try {
      dispatch(createCourseRequest());

      const { data } = await axios.post(
        `${server}/course/admin/create`,
        { name, description, price, banner, category },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(createCourseSuccess(data));
      toast.success(data.message);
    } catch (error) {
      dispatch(createCourseFail(error));
      toast.error(error.message);
    }
  };

export const AdminAddCourseLecture = (name, description, courseId) => async (dispatch) => {
    try {
      dispatch(addCourseLectureRequest());

      const { data } = await axios.put(
        `${server}/course/admin/add/lecture/${courseId}`,
        { name, description },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(addCourseLectureSuccess(data));
      toast.success(data.message);
    } catch (error) {
      dispatch(addCourseLectureFail(error));
      toast.error(error.message);
    }
  };

export const AdminAddCourseLectureVideo = (title, video, courseId, lectureId) => async (dispatch) => {
    try {
      dispatch(addCourseLectureVideoRequest());

      const { data } = await axios.put(
        `${server}/course/admin/add/lecture/video/${courseId}`,
        { title, video, lectureId },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(addCourseLectureVideoSuccess(data));
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      dispatch(addCourseLectureVideoFail(error));
      console.log(error);
      toast.error(error.message);
    }
  };

export const AdminDeleteCourse = (id) => async (dispatch) => {
  try {
    dispatch(AdminDeleteCourseRequest());

    const { data } = await axios.delete(`${server}/course/admin/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(AdminDeleteCourseSuccess(data));
    toast.success(data.message);
  } catch (error) {
    dispatch(AdminDeleteCourseFail(error));
    toast.error(error.message);
  }
};

export const AdminDeleteCourseLecture = (lectureId, courseId) => async (dispatch) => {
    try {
      console.log(lectureId);
      console.log(courseId);
      dispatch(AdminDeleteCourseLectureRequest());

      const { data } = await axios.put(
        `${server}/course/admin/delete/lecture/${courseId}`,
        { lectureId },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(AdminDeleteCourseLectureSuccess(data));
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      dispatch(AdminDeleteCourseLectureFail(error));
      console.log(error);
      // toast.error(error.message);
    }
  };

export const AdminDeleteCourseLectureVideo = (lectureId, courseId,videoId) => async (dispatch) => {
    try {
  
      dispatch(AdminDeleteCourseLectureVideoRequest());

      const { data } = await axios.put(
        `${server}/course/admin/delete/lecture/video/${courseId}`,
        { lectureId,videoId },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(AdminDeleteCourseLectureVideoSuccess(data));
      console.log(data);
      toast.success(data.message);
    } catch (error) {
      dispatch(AdminDeleteCourseLectureVideoFail(error));
      console.log(error);
      // toast.error(error.message);
    }
  };

export const AdminDeleteCourseReview = (reviewId, courseId) => async (dispatch) => {
    try {
    
      dispatch(AdminDeleteCourseReviewRequest());

      const { data } = await axios.put(
        `${server}/course/admin/delete/user/review/${courseId}`,
        { reviewId },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(AdminDeleteCourseReviewSuccess(data));
      toast.success(data.message);
    } catch (error) {
      dispatch(AdminDeleteCourseReviewFail(error));
      console.log(error);
      // toast.error(error.message);
    }
};

export const GetAllCourseDetails = () => async (dispatch) => {
  try {
    dispatch(LoadAllCourseRequest());

    const { data } = await axios.get(`${server}/course/get/all`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(LoadAllCourseSuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(LoadAllCourseFail());
    // toast.error(error.message);
  }
};

export const GetSignleCourseDetails = (courseId) => async (dispatch) => {
  try {
    dispatch(SingleCourseRequest()); 

    const { data } = await axios.get(`${server}/course/get/single/${courseId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    });

    dispatch(SingleCourseSuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(SingleCourseFail(error));
    // toast.error(error.message);
  }
};

export const GetAllCourseDetailsByCategory = (key) => async (dispatch) => {
  try {
    dispatch(LoadAllCourseByCategoryRequest());

    const { data } = await axios.get(`${server}/course/category/${key}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(LoadAllCourseByCategorySuccess(data));
    // toast.success(data.message);
  } catch (error) {
    dispatch(LoadAllCourseByCategoryFail());
    // toast.error(error.message);
  }
};

export const UserCreateCourseReview = (rating, comment,courseId ) => async (dispatch) => {
    try {
      dispatch(CreateCourseReviewRequest());

      const { data } = await axios.put(
        `${server}/course/user/create/review/${courseId}`,
        { rating, comment},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(CreateCourseReviewSuccess(data));
      console.log(data)
      toast.success(data.message);
    } catch (error) {
      dispatch(CreateCourseReviewFail(error.response.data.message));
      // console.log(error.response.data.message)

      toast.error(error.response.data.message);
    }
  };

 