function LessonCard({ lesson }) {
    return (
        <div class="lesson">
                    <div class="flex-style1">
                        <img src={lesson.thumbnail} alt={lesson.title} class="lesson-thumbnail" />
                        <div class="flex-style2">
                            <div class="lesson-caption">
                                <h3>{lesson.title}</h3>
                                <p>{lesson.description}</p>
                            </div>              
                            <div class="lecture-author">
                                <img src={lesson.creator.avatar} alt={lesson.creator.name} class="author-avatar" />
                                <div class="author-detail">
                                    <p class="author-name">{lesson.creator.name}</p>
                                    <p class="author-title">{lesson.creator.title} <span class="di-company">di {lesson.creator.company}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rating">
                        <img src={lesson.ratingImage} alt="rating-star" />
                        <p class="score">{lesson.rating} ({lesson.reviews})</p>
                        <p class="price">Rp {lesson.price}</p>
                    </div>
                </div>
    )
}

export default LessonCard;