import img1 from "../assets/images/features-img/features-2.svg"
import img2 from "../assets/images/features-img/features-3.svg"
import img3 from "../assets/images/features-img/features-6.svg"

const steps = [
    {
        id: 1,
        title: "List Your Products",
        desc: "Vendors upload products, set prices,and choose commission rates for creators",
        img: img1
    },
    {
        id: 2,
        title: "Creators Promote Products",
        desc: "Creators browse the marketplace and generate affiliate links to share online.",
        img: img2
    },
    {
        id: 3,
        title: "Earn From Every Sale",
        desc: "When customers buy through a creator’s link, vendors sell products and creators earn commission",
        img: img3
    }
]

export default function HowItWorks() {
    return (
        <div className="bg-(--gradient-1) p-0 lg:p-10 mb-10">
            <div className="container mx-auto p-4 lg:p-10 rounded bg-white">

                <div className="text-center flex flex-col gap-4 mb-16">
                    <h2 className="text-(--color-primary) font-medium text-3xl md:text-5xl">
                        How Nexora Works
                    </h2>
                    <p className="text-lg md:text-xl">
                        A simple marketplace where vendors list products, creators promote them, and everyone earns
                    </p>
                </div>

                {/* Timeline wrapper */}
                <div className="relative">

                    {/* Vertical line */}
                    <div className="hidden lg:block lg:absolute lg:left-1/2 lg:top-0 lg:h-full lg:w-0.5 lg:bg-gray-300 lg:-translate-x-1/2"></div>

                    <div className="space-y-20">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={step.id}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 items-center relative"
                                >
                                    {/* STEP DOT (center line style) */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-(--color-primary)
                                     text-white items-center justify-center font-bold shadow-lg">
                                        {step.id}
                                    </div>

                                    {/* CARD */}
                                    <div
                                        className={`
                                            max-w-md bg-(--features-card-bg) p-2 lg:p-6
                                            ${isEven ? "md:order-1 md:justify-self-end" : "md:order-2 md:justify-self-start"}
                                        `}
                                    >
                                        <h3 className="text-2xl md:text-3xl mb-3 text-(--color-primary) font-bold">
                                            {step.title}
                                        </h3>
                                        <p className="text-(--text-secondary)">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* IMAGE */}
                                    <div
                                        className={`
                                            ${isEven ? "md:order-2 md:justify-self-start" : "md:order-1 md:justify-self-end"}
                                        `}
                                    >
                                        <img src={step.img} alt={step.title} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}