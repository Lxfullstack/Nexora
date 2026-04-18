import shoppingWoman from '../assets/images/shopping-woman.svg'
import creating from '../assets/images/creating.svg'
import selling from '../assets/images/selling.svg'

export default function HeroSection() {
    return (
        <section className="hero-section flex-1 container mx-auto px-4 rounded-lg mb-4  
        bg-linear-to-r from-(--gradient-1) via-(--gradient-2) via-(-gradient-3) to-(--gradient-4)
        grid grid-cols-2">
            <div>
                <h1>Where <span>Vendors</span> & <span>Creators</span> Grow Together</h1>
                <p>Sell smarter, create freely, and connect with a community built for growth</p>
                <div className='flex gap-4'>
                    <a href="#" className='flex justify-between items-center bg-(--color-primary)'>Start Selling <img src={selling} alt="" /></a>
                    <a href="" className='flex justify-between items-center bg-white'>Start Creating  <img src={creating} alt="" /></a>
                </div>
            </div>
            <div>
                <img className='max-h-240' src={shoppingWoman} alt="woman shopping" />
            </div>
        </section>
    )
}