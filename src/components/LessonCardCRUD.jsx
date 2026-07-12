function Stars({ rating }) {
  return (
    <div className="lesson-card__stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`star${i <= Math.round(rating) ? " star--filled" : ""}`}>★</span>
      ))}
    </div>
  );
}

export default function LessonCardCRUD({ lesson, index, onEdit, onDelete }) {
  const formattedPrice = `Rp ${Number(lesson.price).toLocaleString("id-ID").replace(/\./g, ".")}`;

  return (
    <div className="lesson-card">
      <img className="lesson-card__thumb" src={lesson.thumbnail} alt={lesson.title} />
      <div className="lesson-card__body">
        <h3 className="lesson-card__title">{lesson.title}</h3>
        <p className="lesson-card__desc">{lesson.description}</p>

        <div className="lesson-card__author">
          <img className="lesson-card__author-avatar" src={lesson.creatorAvatar} alt={lesson.creatorAvatar} />
          <div>
            <p className="lesson-card__author-name">{lesson.creatorName}</p>
            <p className="lesson-card__author-role">
              {lesson.creatorTitle} <strong>{lesson.creatorCompany}</strong>
            </p>
          </div>
        </div>

        <div className="lesson-card__footer">
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Stars rating={3.5} />
            <span className="lesson-card__rating-count">3.5 (86)</span>
          </div>
          <span className="lesson-card__price">{formattedPrice}</span>
        </div>
        <div className="lesson-card__actions">
            <button className="btn btn--secondary btn--sm" onClick={onEdit}>Edit</button>
            <button className="btn btn--danger btn--sm" onClick={onDelete}>Hapus</button>
        </div>
      </div>

    </div>
  );
}