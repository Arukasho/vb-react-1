import videoLogo from '../assets/images/logo-videobelajar.png'
import menuLogo from '../assets/images/menu-pop.png'
import profileLogo from '../assets/images/profile1.png'

function NavBar() {
    return (
        <>
            <div className="header-left">
                <img src={videoLogo} alt="videobelajar logo" className="nav-videobelajar-logo"/>
                <img src={menuLogo} alt="menu-pop" className="menu-pop" />
                <a href="#">Kategori</a>
            </div>
            <div className="header-right">
                <a href="#"><img src={profileLogo} alt="profile logo" /></a>
            </div>
        </>
    );
}

export default NavBar;