import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import lessonReducer from "./reducers/lessonReducer";

const rootReducer = combineReducers({
  lessons: lessonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
