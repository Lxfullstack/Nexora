import aboutimg from "../assets/images/about.svg"
import img1 from '../assets/images/about-images/vendors.svg'
import img2 from '../assets/images/about-images/creators.svg'
import img3 from '../assets/images/about-images/buyers.svg'


const cardData = [
    {
        id: 1,
        img: img1,
        title: "For Vendors",
        desc: "Automatic fufilment and reach new audiences instantly."
    },
    {
        id: 2,
        img: img2,
        title: "For Creators",
        desc: "Curate products and monetize your audience easily."
    },
    {
        id: 3,
        img: img3,
        title: "For Buyers",
        desc: "Discover unique products backed by trusted creators."
    }
]


export default function About() {
    return (
        <section className="bg-linear-to-t  from-(--gradient-5) to-(--gradient-1)">
            <div className="container mx-auto">
                <h2 className="text-center mb-6 text-(--color-primary) text-4xl">About Nexora</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <div className="flex flex-col justify-evenly self-start gap-16">
                       <div className="flex flex-col gap-4">
                         <h3 className="text-5xl  font-bold text-pretty">Built for vendors and creators to <span className="text-(--color-primary)">grow together</span></h3>
                            <p className="text-xl">Nexora is the premier drop-shipping and creator marketplace designed to 
                            seamlessly connect innovative vendors with influential creators. 
                            We provide the tools, automation, and ecosystem to scale your business effortlessly.</p>
                       </div>
                        <div className="grid grid-cols-3 gap-4">
                            {cardData.map((card) => (
                                <div key={card.id} className="bg-white p-4 rounded-xl flex flex-col gap-2">
                                    <img src={card.img} alt="vendors" className="justify-self-start self-start" />
                                    <h4 className="text-lg">{card.title}</h4>
                                    <p className="text-xs text-pretty">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm rounded-xl border border-(--color-primary) text-white px-8 py-4 bg-(--color-primary)">Start Creating</a>
                            <a href="#" className="text-sm text-(--color-primary) rounded-xl border border-(--color-primary) px-8 py-4 bg-()">Start Earning</a>
                        </div>
                    </div>
                    <div className="justify-self-end"><img src={aboutimg} alt="images" /></div>
                </div>
            </div>
        </section>
    )
}