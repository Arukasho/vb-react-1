import newsletterImage from '../assets/images/newsletter.jpg';

function NewsletterSection() {
    return (
        <section class="newsletter-banner">
            <div class="newsletter-image">
                <img src={newsletterImage} alt="newsletter-banner" />
                <div class="overlay"></div>

                <div class="newsletter-content">
                    <div class="newsletter-words">
                        <p class="newsletter-title">NEWSLETTER</p>
                        <div class="container1">
                            <h1 class="mau-belajar">Mau Belajar Lebih Banyak?</h1>
                            <p class="newsletter-paragraph">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
                        </div>
                    </div>

                    <form action="#" method="POST" class="newsletter-form">
                        <input type="email" name="email" class="email-subscribe" placeholder="Masukkan Emailmu" /> 
                        <button class="subscribe-button">Subscribe</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default NewsletterSection;