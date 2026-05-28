function LessonCard({ lesson }) {
    return (
        <div className="lesson">
            <div className="flex-style1">
                <img src={lesson.thumbnail} alt={lesson.title} className="lesson-thumbnail" />
                <div className="flex-style2">
                    <div className="lesson-caption">
                        <h3>{lesson.title}</h3>
                        <p>{lesson.description}</p>
                    </div>              
                    <div className="lecture-author">
                        <img src={lesson.creator.avatar} alt={lesson.creator.name} className="author-avatar" />
                        <div className="author-detail">
                            <p className="author-name">{lesson.creator.name}</p>
                            <p className="author-title">{lesson.creator.title} <span className="di-company">di {lesson.creator.company}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rating">
                <img src={lesson.ratingImage} alt="rating-star" />
                <p className="score">{lesson.rating} ({lesson.reviews})</p>
                <p className="price">Rp {lesson.price}</p>
            </div>
        </div>
    )
}

export default LessonCard;