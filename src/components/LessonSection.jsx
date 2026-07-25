import LessonCard from './LessonCard.jsx';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../redux/actions/lessonActions";

function LessonSection() {
    const dispatch = useDispatch();
    const lessons = useSelector((state) => state.lessons);

    useEffect(() => {
        dispatch(fetchLessons());
    }, [dispatch]);

    return (
        <section className="lessons-collection">
            <div className="collection-title-group">
                <h1 className="collection-title">Koleksi Video Pembelajaran Unggulan</h1>
                <p className="explore-yuk">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            </div>
            <div className="menu-bar">
                <div className="item" id="all-class">Semua Kelas</div>
                <div className="item">Pemasaran</div>
                <div className="item">Desain</div>
                <div className="item">Pengembangan Diri</div>
                <div className="item">Bisnis</div>
            </div>
            <div className="menu-bar-slider"></div>

            <div className="lessons-container">
                {lessons.map(lesson => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                ))}
            </div>

        </section>
    )
}

export default LessonSection;