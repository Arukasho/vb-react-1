import eyeLogo from '../assets/images/eye-off.png'

function LoginCard() {
    return (
        <main class="form-container">
            <form action="#" class="flex-container-1">

                <h2>Masuk ke Akun</h2>
                <p class="yuk">Yuk, lanjutin belajarmu di video belajar.</p>
                

                <div class="email-block">
                    <label for="email">E-mail <span class="required-asterisk">*</span></label>
                    <input type="email" class="email" name="email" required />
                </div>  


                <div class="password-input">
                    <label for="password">Kata Sandi <span class="required-asterisk">*</span></label>
                    <div class="masuk-wrapper">
                        <input type="password" class="password" name="password" required />
                        <img src={eyeLogo} alt="toggle-view" class="toggle-icon" />
                    </div>
                    <a href="forget-password.html" class="forget-password">Lupa Password?</a>
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

export default LoginCard;