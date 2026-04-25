import TopNav from './components/TopNav'
import HeroSection from './sections/HeroSection'
import HowItWorks from './sections/Features'
import About from './sections/About'

export default function App() {
    return (
        <div>
            <TopNav />
            <div className='h-screen flex flex-col mb-20'>
                <HeroSection />
            </div>
            <div className='bg-(--gradient-1)'>
                <HowItWorks />
                <About />
            </div>
        </div>
    )
}