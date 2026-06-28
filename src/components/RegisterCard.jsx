import eyeOff from '../assets/images/hide.png'
import eyeOn from '../assets/images/view.png'
import DarkGreenButton from './DarkGreenButton';
import GoogleButton from './GoogleButton';
import LightGreenButton from './LightGreenButton';
import {useState} from 'react';

function RegisterCard() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <main className="form-container">
            <form action="#" className="flex-container-1">

                <h2>Pendaftaran Akun</h2>
                <p className="yuk">Yuk, daftarkan akunmu sekarang juga!</p>
                
                <div className="input username-block">
                    <label for="username">Nama Lengkap <span className="required-asterisk">*</span></label>
                    <input type="text" className="username" name="username" required />
                </div>

                <div className="input email-block">
                    <label for="email">E-mail <span className="required-asterisk">*</span></label>
                    <input type="email" className="email" name="email" required />
                </div>  

                <div className="input gender-select">
                    <label for="gender">Jenis Kelamin <span className="required-asterisk">*</span></label>
                    <select name="gender" className="gender">
                        <optgroup label="Jenis Kelamin">
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                        </optgroup>
                    </select>
                </div>
                
                <div className="input phonenumber">
                    <label>No.Hp <span className="required-asterisk">*</span></label>
                    <div className="phone-row">
                        <select name="country" className="country">
                            <optgroup label="Pilih Negara">
                                <option value="Indonesia">+62</option>
                            </optgroup>
                        </select>
                        <input type="tel" className="phone" name="phone" required />
                    </div>
                </div>

                <div className="input password-input">
                    <label for="password">Kata Sandi <span className="required-asterisk">*</span></label>
                    <div className="masuk-wrapper">
                        <input type="password" className="password" name="password" required />
                        <img src={eyeLogo} alt="toggle-view" className="toggle-icon" />
                    </div>
                </div>

                <div className="input password-input">
                    <label for="password">Konfirmasi Kata Sandi <span className="required-asterisk">*</span></label>
                    <div className="masuk-wrapper">
                        <input type={isPasswordVisible ? "text" : "password"} className="password" name="password" required />
                        <img 
                            src={isPasswordVisible ? eyeOn : eyeOff} 
                            alt="toggle-view" 
                            className="toggle-icon" 
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        />
                    </div>
                </div>
                
                <div className="daftar-masuk-container">
                    <DarkGreenButton text="Daftar" />
                    <LightGreenButton text="Masuk" />
                </div>

                <div className="divider">
                <span>atau</span>
                </div>

                <GoogleButton text="Daftar" />
                
            </form>
        </main>
    );
}

export default RegisterCard;