import LessonCard from './LessonCard.jsx';
import { useState, useEffect } from "react";
import axios from "axios";

const PROJECT_SECRET = import.meta.env.VITE_PROJECT_SECRET;

function LessonSection() {
    const [lessons, setLessons] = useState([]);
    
      useEffect(() => {
        async function fetchLessons() {
          try {
            const response = await axios.get(
              `https://${PROJECT_SECRET}.mockapi.io/api/vb/lessons`
            );
    
            console.log(response.data);
            setLessons(response.data);
          } catch (err) {
            console.error(err);
          }
        }
    
        fetchLessons();
      }, []);

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