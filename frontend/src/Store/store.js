import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {listSlice} from "../Reducer/listSliceReducer";
import { userSlice } from "../Reducer/UserReducer";
const rootReducer = combineReducers({
    list:listSlice.reducer,
    user:userSlice.reducer,
})


export const store = configureStore({
    reducer:rootReducer,
})
