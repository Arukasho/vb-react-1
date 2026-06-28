import { useState } from "react";

const empty = { title: "", description: "", author: "", authorRole: "", price: "" };

export default function LessonFormCRUD({ onAdd, editLesson, onUpdate, onCancel }) {
  const [form, setForm] = useState(editLesson || empty);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;
    if (editLesson) {
      onUpdate(form);
    } else {
      onAdd(form);
    }
    setForm(empty);
  }

  return (
    <div className="form-section">
      <p className="form-section__title">
        {editLesson ? "Edit pelajaran" : "Tambah pelajaran baru"}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label>Judul pelajaran *</label>
            <input
              type="text"
              placeholder="Mis. Big 4 Auditor Financial Analyst"
              value={form.title}
              onChange={set("title")}
              required
            />
          </div>
          <div className="form-field">
            <label>Harga (Rp) *</label>
            <input
              type="number"
              placeholder="300000"
              value={form.price}
              onChange={set("price")}
              required
              min={0}
            />
          </div>
        </div>

        <div className="form-field form-field--full" style={{ marginBottom: 16 }}>
          <label>Deskripsi pelajaran</label>
          <textarea
            placeholder="Mulai transformasi dengan instruktur profesional..."
            value={form.description}
            onChange={set("description")}
          />
        </div>

        <div className="form-row">
          <div className="form-field">
            <label>Nama instruktur *</label>
            <input
              type="text"
              placeholder="Mis. Jenna Ortega"
              value={form.author}
              onChange={set("author")}
              required
            />
          </div>
          <div className="form-field">
            <label>Jabatan instruktur</label>
            <input
              type="text"
              placeholder="Mis. Senior Accountant"
              value={form.authorRole}
              onChange={set("authorRole")}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn--primary">
            {editLesson ? "Simpan perubahan" : "Tambah pelajaran"}
          </button>
          {editLesson && (
            <button type="button" className="btn btn--secondary" onClick={onCancel}>
              Batal
            </button>
          )}
        </div>
      </form>
    </div>
  );
}