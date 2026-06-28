import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'
import HeroSection from '../components/HeroSection.jsx';
import LessonSection from '../components/LessonSection.jsx';
import NewsletterSection from '../components/NewsletterSection.jsx';
import Footer from '../components/Footer.jsx';
import '../css/home.css'

function HomePage() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <HeroSection />
        <Link to="/crud">
          <button type="button" className="admin-button">
            Go to Admin Page
          </button>
        </Link>
        <LessonSection />
        <NewsletterSection />
      </main>

      <footer>
        <Footer />
      </footer>
    
    
    </>
  )
}

export default HomePage;