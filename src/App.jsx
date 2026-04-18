import TopNav from './components/TopNav'
import HeroSection from './components/HeroSection'


export default function App() {
    return (
        <div className=''>
            <div className='h-screen flex flex-col'>
                <TopNav />
                <HeroSection />
            </div>
        </div>
    )
}