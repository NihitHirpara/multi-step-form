import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Slices/FormSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;


