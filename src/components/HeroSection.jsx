import shoppingWoman from '../assets/images/shopping-woman.svg'
import creating from '../assets/images/creating.svg'
import selling from '../assets/images/selling.svg'

export default function HeroSection() {
    return (
        <section className="hero-section flex-1 container mx-auto px-4 pt-10 rounded-lg mb-4  
        bg-linear-to-r from-(--gradient-1) via-(--gradient-2) via-(-gradient-3) to-(--gradient-4)
        grid grid-cols-2">
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-6xl tracking-tighter text-pretty'>
                    Where <span className='text-(--color-primary)'>Vendors</span> & <span className='text-(--color-primary)'>Creators</span> Grow Together</h1>
                    <p className='text-2xl text-pretty leading-7'>Sell smarter, create freely, and connect with a community built for growth</p>
                    <div className='flex gap-4'>
                        <a href="#" className='rounded gap-2 border border-(--color-primary) text-white flex justify-between items-center
                        px-3.5 py-5 bg-(--color-primary)'>Start Selling <img src={selling} alt="" /></a>
                        <a href="" className='rounded gap-2 text-(--color-primary) border border-(--color-primary) 
                        flex justify-between items-center px-3.5 py-5 bg-white'>Start Creating  <img src={creating} alt="" /></a>
                    </div>
                </div>
                <div>
                    <div className='analytics rounded bg-white text-center p-6 flex items-center justify-between'>
                        <div className='px-4'><p className='text-left font-bold text-2xl'>10k</p><span>Products</span></div>
                        <div className='border-x px-8'><p className='font-bold text-2xl'>3k</p><span>Creators</span></div>
                        <div className='border-r pr-8'><p className='font-bold text-2xl'>1.2k</p><span>Vendors</span></div>
                        <div className='px-4'><p className='font-bold text-2xl'>$2M</p><span>Earned</span></div>
                    </div>
                    <p className='text-center m-4'>Trusted by creators and vendors worldwide</p>
                </div>
            </div>
            <div>
                <img className='max-h-240' src={shoppingWoman} alt="woman shopping" />
            </div>
        </section>
    )
}