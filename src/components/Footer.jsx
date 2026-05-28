import videoLogo from '../assets/images/logo-videobelajar.png'
import vectorIcon from '../assets/images/vector.png'
import linkedinIcon from '../assets/images/linkedin.png'
import facebookIcon from '../assets/images/facebook.png'
import instagramIcon from '../assets/images/instagram.png'
import twitterIcon from '../assets/images/twitter.png'

function Footer () {
    return (
        <>
            <div className="upper-footer">
            <div className="upper-left-footer">
                <div className="footer-logo">
                    <img src={videoLogo} alt="videobelajar logo" />
                </div>
                <div className="footer-description">
                    <div className="gali-potensi"><p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p></div>
                    <div className="address">
                        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p></div>
                    <div className="phone">
                        <p>+62-877-7123-1234</p></div>
                </div>
            </div>
            

            <div className="upper-right-footer">
                <div className="left-row">
                    <div className="row1-first-item"><a href="#">Kategori</a><img src={vectorIcon} alt="vector" /></div>
                    <div className="row1-item"><a href="#">Digital & Teknologi</a></div>
                    <div className="row1-item"><a href="#">Pemasaran</a></div>
                    <div className="row1-item"><a href="#">Manajemen Bisnis</a></div>
                    <div className="row1-item"><a href="#">Pengembangan Diri</a></div>
                    <div className="row1-item"><a href="#">Desain</a></div>
                </div>

                <div className="middle-row">
                    <div className="row2-first-item"><a href="#">Perusahaan</a><img src={vectorIcon} alt="vector" /></div>
                    <div className="row2-item"><a href="#">Tentang Kami</a></div>
                    <div className="row2-item"><a href="#">FAQ</a></div>
                    <div className="row2-item"><a href="#">Kebijakan Privasi</a></div>
                    <div className="row2-item"><a href="#">Ketentuan Layanan</a></div>
                    <div className="row2-item"><a href="#">Bantuan</a></div>
                </div>

                <div className="right-row">
                    <div className="row3-first-item"><a href="#">Komunitas</a><img src={vectorIcon} alt="vector" /></div>
                    <div className="row3-item"><a href="#">Tim Sukses</a></div>
                    <div className="row3-item"><a href="#">Blog</a></div>
                </div>
            </div>
        </div>

        <div className="middle-footer"></div>

        <div className="lower-footer">
            <p className="copyright">@2023 Gerobak Sayur All Rights Reserved.</p>
            <div className="social-media">
                <a href="#"><img src={linkedinIcon} alt="linkedin" /></a>
                <a href="#"><img src={facebookIcon} alt="facebook" /></a>
                <a href="#"><img src={instagramIcon} alt="instagram" /></a>
                <a href="#"><img src={twitterIcon} alt="twitter" /></a>
            </div>
        </div>
        
    </>
    )
}

export default Footer;