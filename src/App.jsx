import TopNav from './components/TopNav'
import HeroSection from './sections/HeroSection'
import HowItWorks from './sections/Features'
import About from './sections/About'

export default function App() {
    return (
        <div>
            <div className='h-screen flex flex-col mb-20'>
                <TopNav />
                <HeroSection />
            </div>
            <HowItWorks />
            <About />
        </div>
    )
}