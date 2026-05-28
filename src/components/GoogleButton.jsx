function GoogleButton({text}) {
    return (
        <button className="google-button-container" >
            <img className="google-logo" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
            <span className="daftar-google">{text} dengan Google</span>
        </button>
    )
}

export default GoogleButton;