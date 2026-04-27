import TopNav from './components/TopNav'
import HeroSection from './sections/HeroSection'
import HowItWorks from './sections/Features'
import About from './sections/About'
import Cta from './sections/Cta'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
    return (
        <div>
            <TopNav />
            <div className='lg:h-screen flex flex-col mb-20'>
                <HeroSection />
            </div>
            <div className='bg-(--gradient-1)'>
                <HowItWorks />
                <About />
            </div>
            <Cta />
            <Contact/>
            <Footer />
        </div>
    )
}