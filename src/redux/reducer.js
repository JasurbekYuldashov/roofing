/* eslint-disable prettier/prettier */
import { combineReducers } from "redux";

import user from "./user"

const RootReducer = combineReducers({
    user:user,
});

export default RootReducer;
