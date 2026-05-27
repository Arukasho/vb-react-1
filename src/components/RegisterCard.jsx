import eyeLogo from '../assets/images/eye-off.png'

function RegisterCard() {
    return (
        <main class="form-container">
        <form action="#" class="flex-container-1">

            <h2>Pendaftaran Akun</h2>
            <p class="yuk">Yuk, daftarkan akunmu sekarang juga!</p>
            
            <div class="username-block">
                <label for="username">Nama Lengkap <span class="required-asterisk">*</span></label>
                <input type="text" class="username" name="username" required />
            </div>

            <div class="email-block">
                <label for="email">E-mail <span class="required-asterisk">*</span></label>
                <input type="email" class="email" name="email" required />
            </div>  

            
            <label for="gender">Jenis Kelamin <span class="required-asterisk">*</span></label>
            <select name="gender" class="gender">
                <optgroup label="Jenis Kelamin">
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
                </optgroup>
            </select>
            
            <div class="phonenumber">
                <label>No.Hp <span class="required-asterisk">*</span></label>
                <div class="phone-row">
                    <select name="country" class="country">
                        <optgroup label="Pilih Negara">
                            <option value="Indonesia">+62</option>
                        </optgroup>
                    </select>
                    <input type="tel" class="phone" name="phone" required />
                </div>
            </div>

            <div class="password-input">
                <label for="password">Kata Sandi <span class="required-asterisk">*</span></label>
                <div class="masuk-wrapper">
                    <input type="password" class="password" name="password" required />
                    <img src={eyeLogo} alt="toggle-view" class="toggle-icon" />
                </div>
            </div>

            <div class="password-input">
                <label for="password">Konfirmasi Kata Sandi <span class="required-asterisk">*</span></label>
                <div class="masuk-wrapper">
                    <input type="password" class="password" name="password" required />
                    <img src={eyeLogo} alt="toggle-view" class="toggle-icon" />
                </div>
            </div>
            
            <div class="daftar-masuk-container">
                <button type="submit" class="register-button">Daftar</button>
                <button type="submit" class="login-button">Masuk</button>
            </div>

            <div class="divider">
            <span>atau</span>
            </div>

            <button class="google-button-container" >
                <img class="google-logo" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
                <span class="daftar-google">Daftar dengan Google</span>
            </button>
            
        </form>
    </main>
    );
}

export default RegisterCard;