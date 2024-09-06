import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    createCourseRequest: (state) => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.course = action.payload.course;
      state.message = action.payload.message;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addCourseLectureRequest: (state) => {
      state.loading = true;
    },
    addCourseLectureSuccess: (state, action) => {
      state.loading = false;
      state.course = action.payload.course;
      state.message = action.payload.message;
    },
    addCourseLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addCourseLectureVideoRequest: (state) => {
      state.loading = true;
    },
    addCourseLectureVideoSuccess: (state, action) => {
      state.loading = false;
      state.course = action.payload.course;
      state.message = action.payload.message;
    },
    addCourseLectureVideoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    LoadAllCourseRequest: (state) => {
      state.loading = true;
    },
    LoadAllCourseSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload.course;
      state.message = action.payload.message;
    },
    LoadAllCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    SingleCourseRequest: (state) => {
      state.loading = true;
    },
    SingleCourseSuccess: (state, action) => {
      state.loading = false;
      state.course = action.payload.course;
      state.message = action.payload.message;
    },
    SingleCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    LoadAllCourseByCategoryRequest: (state) => {
      state.loading = true;
    },
    LoadAllCourseByCategorySuccess: (state, action) => {
      state.loading = false;
      state.coursesByCate = action.payload.course;
      state.message = action.payload.message;
    },
    LoadAllCourseByCategoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    CreateCourseReviewRequest: (state) => {
      state.loading = true;
    },
    CreateCourseReviewSuccess: (state, action) => {
      state.loading = false;
      state.CourseReviews = action.payload.course;
      state.message = action.payload.message;
    },
    CreateCourseReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    GetCourseReviewsRequest: (state) => {
      state.loading = true;
    },
    GetCourseReviewsSuccess: (state, action) => {
      state.loading = false;
      state.CourseReviews = action.payload.course;
      state.message = action.payload.message;
    },
    GetCourseReviewsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminDeleteCourseReviewRequest: (state) => {
      state.loading = true;
    },
    AdminDeleteCourseReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminDeleteCourseReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminDeleteCourseRequest: (state) => {
      state.loading = true;
    },
    AdminDeleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminDeleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminDeleteCourseLectureRequest: (state) => {
      state.loading = true;
    },
    AdminDeleteCourseLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminDeleteCourseLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    AdminDeleteCourseLectureVideoRequest: (state) => {
      state.loading = true;
    },
    AdminDeleteCourseLectureVideoSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    AdminDeleteCourseLectureVideoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createCourseSuccess,
  createCourseRequest,
  createCourseFail,
  AdminDeleteCourseRequest,
  AdminDeleteCourseSuccess,
  AdminDeleteCourseFail,
  CreateCourseReviewRequest,
  CreateCourseReviewSuccess,
  CreateCourseReviewFail,
  GetCourseReviewsRequest,
  GetCourseReviewsSuccess,
  GetCourseReviewsFail,
  LoadAllCourseRequest,
  LoadAllCourseSuccess,
  LoadAllCourseFail,
  SingleCourseRequest,
  SingleCourseSuccess,
  SingleCourseFail,
  addCourseLectureRequest,
  addCourseLectureSuccess,
  addCourseLectureFail,
  addCourseLectureVideoRequest,
  addCourseLectureVideoSuccess,
  addCourseLectureVideoFail,
  AdminDeleteCourseLectureRequest,
  AdminDeleteCourseLectureSuccess,
  AdminDeleteCourseLectureFail,
  AdminDeleteCourseLectureVideoRequest,
  AdminDeleteCourseLectureVideoSuccess,
  AdminDeleteCourseLectureVideoFail,
  LoadAllCourseByCategoryRequest,
  LoadAllCourseByCategorySuccess,
  LoadAllCourseByCategoryFail,
  AdminDeleteCourseReviewRequest,
  AdminDeleteCourseReviewSuccess,
  AdminDeleteCourseReviewFail,
} = CourseSlice.actions;

export default CourseSlice.reducer;
