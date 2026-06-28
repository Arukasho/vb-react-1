import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "../css/crud.css";
import LessonCardCRUD from "../components/LessonCardCRUD";
import LessonFormCRUD from "../components/LessonFormCRUD";
import lessons from '../lessondata.js'

const SEED = lessons.map((lesson, index) => ({
  ...lesson,
  price: Number(lesson.price),
}));

let nextId = SEED.length + 1;

export default function App() {
  const [lessons, setLessons] = useState(() => {
    try {
      const saved = localStorage.getItem("vb_lessons");
      return saved ? JSON.parse(saved) : SEED;
    } catch {
      return SEED;
    }
  });
  const [editLesson, setEditLesson] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("vb_lessons", JSON.stringify(lessons));
  }, [lessons]);

  function notify(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }

  function handleAdd(form) {
    setLessons((prev) => [{ id: nextId++, ...form, price: Number(form.price) }, ...prev]);
    notify("Pelajaran ditambahkan");
  }

  function handleUpdate(form) {
    setLessons((prev) =>
      prev.map((l) => (l.id === editLesson.id ? { ...l, ...form, price: Number(form.price) } : l))
    );
    setEditLesson(null);
    notify("Pelajaran diperbarui");
  }

  function handleDelete(id) {
    setLessons((prev) => prev.filter((l) => l.id !== id));
    notify("Pelajaran dihapus");
  }

  return (
    <>
      <main className="page">
        <h1 className="page__heading">Admin Page</h1>
        <p className="page__subheading">Kelola Kelas</p>
        <Link to="/">
          <button type="button" className="admin-button">
            Go to Home
          </button>
        </Link>

        <LessonFormCRUD
          onAdd={handleAdd}
          editLesson={editLesson}
          onUpdate={handleUpdate}
          onCancel={() => setEditLesson(null)}
        />

        <div className="card-grid">
          {lessons.map((lesson, i) => (
            <LessonCardCRUD
              key={lesson.id}
              lesson={lesson}
              index={i}
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