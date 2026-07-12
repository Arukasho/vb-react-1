function Stars({ rating }) {
  return (
    <div className="lesson-card__stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`star${i <= Math.round(rating) ? " star--filled" : ""}`}>★</span>
      ))}
    </div>
  );
}

function LessonCard({ lesson }) {
    const formattedPrice = `Rp ${Number(lesson.price).toLocaleString("id-ID").replace(/\./g, ".")}`;

    return (
    <div className="lesson">
      <div className="flex-style1">
        <img className="lesson-thumbnail" src={lesson.thumbnail} alt={lesson.title} />
        <div className="flex-style2">
            <div className="lesson-caption">
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
            </div> 

            <div className="lecture-author">
                <img className="author-avatar" src={lesson.creatorAvatar} alt={lesson.creatorAvatar} />
                <div className="author-detail">
                    <p className="author-name">{lesson.creatorName}</p>
                    <p className="author-title">{lesson.creatorTitle} <span className="di-company">di {lesson.creatorCompany}</span></p>
                </div>
            </div>
        </div>
      </div>

        <div className="rating">
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Stars rating={3.5} />
            <span className="score">3.5 (86)</span>
          </div>
          <span className="price">{formattedPrice}</span>
        </div>
    </div>
    )
}

export default LessonCard;