import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { RestaurantReducer } from "./reducers/RestaurantReducer";
const rootReducer = combineReducers({
  RestaurantReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
