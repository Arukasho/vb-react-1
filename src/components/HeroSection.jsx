import heroImage from '../assets/images/home1.jpg'

function HeroSection() {
    return (
        <section className="hero-banner">
            <div className="hero-image">
                <img src={heroImage} alt="hero-banner" />
                <div className="overlay"></div>

                <div className="banner-content">
                    <div className="hero-words">
                        <h1 className="banner-title">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
                        <p className="banner-paragraph">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
                    </div>
                    <button className="banner-button">Temukan Video Course untuk Dipelajari!</button>
                </div>

            </div>
        </section>
    )
}

export default HeroSection;