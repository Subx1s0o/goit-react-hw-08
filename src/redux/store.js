import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contactsSlice";
// import filtersReducer from "./filtersSlice";
import authReducer from "./auth/slice";
const rootReducer = combineReducers({
  // contacts: contactsReducer,
  // filters: filtersReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
