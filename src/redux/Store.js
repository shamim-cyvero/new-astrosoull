import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserReducer";
import AstrologerReducer from "./reducer/AstrologerReducer";
import CourseReducer from "./reducer/CourseReducer";

const Store = configureStore({
  reducer: {
    userContainer: UserReducer,
    astrologerContainer: AstrologerReducer,
    courseContainer: CourseReducer,
  },
  // preloadedState: initialState,
});

export default Store;
