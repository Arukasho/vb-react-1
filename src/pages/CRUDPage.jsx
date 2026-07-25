import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/crud.css";

import LessonCardCRUD from "../components/LessonCardCRUD";
import LessonFormCRUD from "../components/LessonFormCRUD";

import {
  fetchLessons,
  addLesson,
  editLessonThunk,
  removeLesson,
} from "../redux/actions/lessonActions"; // sesuaikan path

export default function CRUDPage() {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);

  const [editLesson, setEditLesson] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);

  function notify(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }

  async function handleAdd(form) {
    try {
      await dispatch(addLesson(form));
      notify("Pelajaran ditambahkan");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleUpdate(form) {
    try {
      await dispatch(editLessonThunk(editLesson.id, form));
      setEditLesson(null);
      notify("Pelajaran diperbarui");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    try {
      await dispatch(removeLesson(id));
      notify("Pelajaran dihapus");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <main className="page">
        <h1 className="page__heading">Admin Page</h1>
        <p className="page__subheading">Kelola Kelas</p>

        <Link to="/">
          <button className="admin-button" type="button">
            Go to Home
          </button>
        </Link>

        <LessonFormCRUD
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onCancel={() => setEditLesson(null)}
          editLesson={editLesson}
        />

        <div className="card-grid">
          {lessons.map((lesson, index) => (
            <LessonCardCRUD
              key={lesson.id}
              lesson={lesson}
              index={index}
              onEdit={() => setEditLesson(lesson)}
              onDelete={() => handleDelete(lesson.id)}
            />
          ))}
        </div>
      </main>

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}