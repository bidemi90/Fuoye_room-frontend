import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userdata from "./userdata";
import Allschoolmalehostel from "./Allschoolmalehostel";
import Allschoolfemalehostel from "./Allschoolfemalehostel";
import Allprivatemalehostel from "./Allprivatemalehostel"
import Allprivatefemalehostel from "./Allprivatefemalehostel"
import admindata from "./admindata";
import alluserdata from "./alluserdata";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userdata: userdata,
  admindata: admindata,
  // 
  alluserdata: alluserdata,
// 
  Allschoolmalehostel: Allschoolmalehostel,
  Allschoolfemalehostel: Allschoolfemalehostel,
  // 
  Allprivatemalehostel: Allprivatemalehostel,
  Allprivatefemalehostel: Allprivatefemalehostel,
  // Add other reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(Store);
