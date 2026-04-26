import arrowht from '../assets/images/arrowwhite.svg'
import arrowprim from '../assets/images/arrowprim.svg'
import creatingbtn from '../assets/images/creatingbtn.svg'
import sellingbtn from '../assets/images/sellingbtn.svg'
import check from '../assets/images/check.svg'




export default function Cta() {
    return (
        <section className="bg-(--gradient-5) border border-(--cta-bg) p-4">
            <div className="container mx-auto p-4 flex flex-col gap-8 items-center justify-start">
                <div>
                    <h2 className="text-center font-bold text-5xl mb-4">Start Growing with <span className="text-(--color-primary)">Nexora</span> Today</h2>
                    <p className="text-center text-xl leading-5">Join vendors selling products and creators earning commissions on our platform. <br />
                        Build your business and grow your income with Nexora.</p>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="flex gap-4 justify-between items-center text-sm rounded-xl border border-(--color-primary)
                     text-white px-6 py-4 bg-(--color-primary)"> <img src={sellingbtn} />Start Selling <img src={arrowht}/></a>
                    <a href="#" className="flex gap-4 justify-between items-center text-sm text-(--color-primary) bg-white rounded-xl border border-(--color-primary)
                     px-6 py-4 bg-()"><img src={creatingbtn}/> Start Creating <img src={arrowprim}/></a>
                </div>
                <div className='flex justify-between gap-6'>
                    <p className='flex gap-2 justify-between items-center'><img src={check}/> Free to join</p>
                    <p className='flex gap-2 justify-between items-center'><img src={check}/> No credit Card required</p>
                    <p className='flex gap-2 justify-between items-center'><img src={check}/> Start earning instantly</p>
                </div>
            </div>
        </section>
    )
}