import heroImage from '../assets/images/home1.jpg'

function HeroSection() {
    return (
        <section class="hero-banner">
            <div class="hero-image">
                <img src={heroImage} alt="hero-banner" />
                <div class="overlay"></div>

                <div class="banner-content">
                    <div class="hero-words">
                        <h1 class="banner-title">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
                        <p class="banner-paragraph">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
                    </div>
                    <button class="banner-button">Temukan Video Course untuk Dipelajari!</button>
                </div>

            </div>
        </section>
    )
}

export default HeroSection;