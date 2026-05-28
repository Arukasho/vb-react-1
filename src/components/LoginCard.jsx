import eyeLogo from '../assets/images/eye-off.png'
import DarkGreenButton from './DarkGreenButton';
import GoogleButton from './GoogleButton';
import LightGreenButton from './LightGreenButton';

function LoginCard() {
    return (
        <main className="form-container">
            <form action="#" className="flex-container-1">

                <h2>Masuk ke Akun</h2>
                <p className="yuk">Yuk, lanjutin belajarmu di video belajar.</p>
                

                <div className="input email-block">
                    <label for="email">E-mail <span className="required-asterisk">*</span></label>
                    <input type="email" className="email" name="email" required />
                </div>  


                <div className="input password-input">
                    <label for="password">Kata Sandi <span className="required-asterisk">*</span></label>
                    <div className="masuk-wrapper">
                        <input type="password" className="password" name="password" required />
                        <img src={eyeLogo} alt="toggle-view" className="toggle-icon" />
                    </div>
                    <a href="forget-password.html" className="forget-password">Lupa Password?</a>
                </div>
                
                <div className="daftar-masuk-container">
                    <DarkGreenButton text="Masuk" />
                    <LightGreenButton text="Daftar" />
                </div>

                <div className="divider">
                    <span>atau</span>
                </div>

                <GoogleButton text="Masuk" />
            
            </form>
        </main>
    );
}

export default LoginCard;