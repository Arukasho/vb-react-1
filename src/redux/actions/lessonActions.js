import {
  getLessons,
  createLesson,
  updateLesson,
  deleteLesson,
} from "../../api/lessonsAPI";

export const GET_LESSONS_SUCCESS = "GET_LESSONS_SUCCESS";
export const ADD_LESSON_SUCCESS = "ADD_LESSON_SUCCESS";
export const UPDATE_LESSON_SUCCESS = "UPDATE_LESSON_SUCCESS";
export const DELETE_LESSON_SUCCESS = "DELETE_LESSON_SUCCESS";

export function fetchLessons() {
  return async (dispatch) => {
    try {
      const data = await getLessons();
      dispatch({ type: GET_LESSONS_SUCCESS, payload: data });
    } catch (err) {
      console.error(err);
    }
  };
}

export function addLesson(form) {
  return async (dispatch) => {
    const lesson = await createLesson(form);
    dispatch({ type: ADD_LESSON_SUCCESS, payload: lesson });
    return lesson;
  };
}

export function editLessonThunk(id, form) {
  return async (dispatch) => {
    const lesson = await updateLesson(id, form);
    dispatch({ type: UPDATE_LESSON_SUCCESS, payload: lesson });
    return lesson;
  };
}

export function removeLesson(id) {
  return async (dispatch) => {
    await deleteLesson(id);
    dispatch({ type: DELETE_LESSON_SUCCESS, payload: id });
  };
}
