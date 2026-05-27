import LessonCard from './LessonCard.jsx';
import lessons from '../lessondata.js'

function LessonSection() {
    return (
        <section class="lessons-collection">
            <div class="collection-title-group">
                <h1 class="collection-title">Koleksi Video Pembelajaran Unggulan</h1>
                <p class="explore-yuk">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            </div>
            <div class="menu-bar">
                <div class="item" id="all-class">Semua Kelas</div>
                <div class="item">Pemasaran</div>
                <div class="item">Desain</div>
                <div class="item">Pengembangan Diri</div>
                <div class="item">Bisnis</div>
            </div>
            <div class="menu-bar-slider"></div>
            
            <div class="lessons-container">
                {lessons.map(lesson => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                ))}
            </div>

        </section>
    )
}

export default LessonSection;