import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../css/crud.css";

import LessonCardCRUD from "../components/LessonCardCRUD";
import LessonFormCRUD from "../components/LessonFormCRUD";

import {
  getLessons,
  createLesson,
  updateLesson,
  deleteLesson,
} from "../api/lessonsAPI";

export default function CRUDPage() {
  const [lessons, setLessons] = useState([]);
  const [editLesson, setEditLesson] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    loadLessons();
  }, []);

  async function loadLessons() {
    try {
      const data = await getLessons();
      setLessons(data);
    } catch (err) {
      console.error(err);
    }
  }

  function notify(message) {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 2500);
  }

  async function handleAdd(form) {
    try {
      const lesson = await createLesson(form);

      setLessons((prev) => [lesson, ...prev]);

      notify("Pelajaran ditambahkan");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleUpdate(form) {
    try {
      const lesson = await updateLesson(editLesson.id, form);

      setLessons((prev) =>
        prev.map((item) =>
          item.id === lesson.id ? lesson : item
        )
      );

      setEditLesson(null);

      notify("Pelajaran diperbarui");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteLesson(id);

      setLessons((prev) =>
        prev.filter((lesson) => lesson.id !== id)
      );

      notify("Pelajaran dihapus");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <main className="page">
        <h1 className="page__heading">Admin Page</h1>

        <p className="page__subheading">
          Kelola Kelas
        </p>

        <Link to="/">
          <button
            className="admin-button"
            type="button"
          >
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
              onDelete={() =>
                handleDelete(lesson.id)
              }
            />
          ))}
        </div>
      </main>

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </>
  );
}