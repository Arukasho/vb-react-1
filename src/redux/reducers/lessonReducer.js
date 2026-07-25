import {
  GET_LESSONS_SUCCESS,
  ADD_LESSON_SUCCESS,
  UPDATE_LESSON_SUCCESS,
  DELETE_LESSON_SUCCESS,
} from "../actions/lessonActions";

const initialState = [];

export default function lessonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LESSONS_SUCCESS:
      return action.payload;

    case ADD_LESSON_SUCCESS:
      return [action.payload, ...state];

    case UPDATE_LESSON_SUCCESS:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );

    case DELETE_LESSON_SUCCESS:
      return state.filter((lesson) => lesson.id !== action.payload);

    default:
      return state;
  }
}
