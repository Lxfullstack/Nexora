import logo from '../assets/images/nexoraLogo.svg'
import searchBotton from '../assets/images/searchIcon.svg'


export default function TopNav() {
    return (
       <nav className="bg-white sticky z-55 top-0">
            <div className="container  mx-auto flex items-center justify-between  py-4">
                <div className='flex gap-10'>
                    <a href="#"><img src={logo} alt="Nexora Logo"/></a>
                    <div className="search-container flex  justify-between gap-2 w-96 border border-neutral-400  px-4 py-1 ">
                        <input type="text" placeholder='Search a product in nexora' 
                        className='product-search flex-1 border-none focus:outline-none'/>
                        <button className='search-btn '><img src={searchBotton} alt="search button" /></button>
                    </div>
                    <div className="nav-links flex items-center justify-between gap-14">
                        <a href="#">Marketplace</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <button className='flex justify-center items-center px-4 py-3 bg-(--color-primary) text-white rounded'>
                    Get Started
                </button>
            </div>
       </nav>
    )
} 