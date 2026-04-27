import shoppingWoman from '../assets/images/shopping-woman.svg'
import creating from '../assets/images/creating.svg'
import selling from '../assets/images/selling.svg'
import techHub from '../assets/images/techhub.svg'
import chart from '../assets/images/chart.svg'
import boat from '../assets/images/boat.svg'



export default function HeroSection() {
    return (
        <section className="hero-section flex-1 container mx-auto px-5 lg:px-10 pt-10 rounded-lg 
        bg-linear-to-r from-(--gradient-1) via-(--gradient-2) via-(-gradient-3) to-(--gradient-4)
        grid grid-cols-1 lg:grid-cols-2">
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-3xl text-center md:text-5xl lg:text-6xl lg:text-left tracking-tighter text-pretty'>
                    Where <span className='text-(--color-primary)'>Vendors</span> & <span className='text-(--color-primary)'>Creators</span> Grow Together</h1>
                    <p className='text-lg text-center md:text-2xl lg:text-left text-pretty leading-7'>Sell smarter, create freely, and connect with a community built for growth</p>
                    <div className='flex gap-4 justify-center lg:justify-start mb-4'>
                        <a href="#" className='rounded gap-2 border border-(--color-primary) text-white flex justify-between items-center
                        px-1.5 py-2.5  md:px-3.5 md:py-5 bg-(--color-primary)'>Start Selling <img src={selling} alt="" /></a>
                        <a href="" className='rounded gap-2 text-(--color-primary) border border-(--color-primary) 
                        flex justify-between items-center md:px-3.5 md:py-5 bg-white'>Start Creating  <img src={creating} alt="" /></a>
                    </div>
                </div>
                <div>
                    <div className='analytics rounded bg-white text-center p-6 flex items-center justify-between'>
                        <div className='px-4'><p className='text-left font-bold lg:text-2xl'>10k</p><span>Products</span></div>
                        <div className='border-x px-8'><p className='font-bold lg:text-2xl'>3k</p><span>Creators</span></div>
                        <div className='border-r pr-8'><p className='font-bold lg:text-2xl'>1.2k</p><span>Vendors</span></div>
                        <div className='px-4'><p className='font-bold lg:text-2xl'>$2M</p><span>Earned</span></div>
                    </div>
                    <p className='text-center m-4'>Trusted by creators and vendors worldwide</p>
                </div>
            </div>
            <div className='relative'>
                <img className='lg:max-h-240 lg:absolute relative bottom-0'  src={shoppingWoman} alt="woman shopping" />
                <div className='hero-cards absolute top-30 left-0 w-full h-3/4'>
                    <div className="absolute top-10 left-10 bg-white/50 backdrop-blur-lg p-4 rounded-md text-sm flex flex-col gap-2">
                        <p>Wireless Earbuds</p>
                        <p>$45</p>
                        <p>Commision: 30% </p>
                        <span className='flex gap-4'><img src={techHub} alt="tech" /><p>techhub</p></span>
                    </div>
                    <div className="absolute top-16 right-10 bg-white/50 backdrop-blur-sm p-4 rounded-md text-sm flex">
                        <span><img src={boat} alt="tech" /></span>
                        <div>
                            <p>Earned today</p>
                            <p className='flex gap-1'>$45 <span className='text-green-400'>+$120</span></p>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-lg p-4 rounded-md text-sm">
                        <p>Your Commision</p>
                        <span className='flex items-center gap-4 text-3xl font-bold'>40% <img src={chart} alt="tech" /></span>
                        <p className='flex'>Product price: <span>$50</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}