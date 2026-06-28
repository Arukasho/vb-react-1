const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80",
  "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&q=80",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&q=80",
  "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
];

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
  const imgSrc = PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];
  const initials = lesson.author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const formattedPrice = `Rp ${Number(lesson.price).toLocaleString("id-ID").replace(/\./g, ".")}`;

  return (
    <div className="lesson-card">
      <img className="lesson-card__thumb" src={imgSrc} alt={lesson.title} />
      <div className="lesson-card__body">
        <h3 className="lesson-card__title">{lesson.title}</h3>
        <p className="lesson-card__desc">{lesson.description}</p>

        <div className="lesson-card__author">
          <div className="lesson-card__author-avatar">{initials}</div>
          <div>
            <p className="lesson-card__author-name">{lesson.author}</p>
            <p className="lesson-card__author-role">
              {lesson.authorRole} <strong>di Gojek</strong>
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