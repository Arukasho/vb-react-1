import newsletterImage from '../assets/images/newsletter.jpg';

function NewsletterSection() {
    return (
        <section className="newsletter-banner">
            <div className="newsletter-image">
                <img src={newsletterImage} alt="newsletter-banner" />
                <div className="overlay"></div>

                <div className="newsletter-content">
                    <div className="newsletter-words">
                        <p className="newsletter-title">NEWSLETTER</p>
                        <div className="container1">
                            <h1 className="mau-belajar">Mau Belajar Lebih Banyak?</h1>
                            <p className="newsletter-paragraph">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
                        </div>
                    </div>

                    <form action="#" method="POST" className="newsletter-form">
                        <input type="email" name="email" className="email-subscribe" placeholder="Masukkan Emailmu" /> 
                        <button className="subscribe-button">Subscribe</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default NewsletterSection;