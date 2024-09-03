import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserReducer";
import AstrologerReducer from "./reducer/AstrologerReducer";
import CourseReducer from "./reducer/CourseReducer";
import PaymentReducer from "./reducer/PaymentReducer";

const Store = configureStore({
  reducer: {
    userContainer: UserReducer,
    astrologerContainer: AstrologerReducer,
    courseContainer: CourseReducer,
    paymentContainer: PaymentReducer,
  },
  // preloadedState: initialState,
});
export default Store;
