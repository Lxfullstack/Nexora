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
        <div className="bg-(--gradient-1) p-10 mb-10">
            <div className="container mx-auto p-10 rounded bg-white">

                <div className="text-center flex flex-col gap-4 mb-16">
                    <h2 className="text-(--color-primary) font-medium text-5xl">
                        How Nexora Works
                    </h2>
                    <p className="text-xl">
                        A simple marketplace where vendors list products, creators promote them, and everyone earns
                    </p>
                </div>

                {/* Timeline wrapper */}
                <div className="relative">

                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 -translate-x-1/2"></div>

                    <div className="grid grid-cols-2 gap-16">
                        {steps.map((step, index) => (
                            <div key={step.id} className="contents">

                                {/* LEFT CARD */}
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="max-w-md bg-(--features-card-bg) p-4 self-center justify-self-end">
                                            <h3 className="text-3xl mb-3 text-(--color-primary) font-light">
                                                {step.title}
                                            </h3>
                                            <p className="text-(--text-secondary)">
                                                {step.desc}
                                            </p>
                                        </div>

                                        <div className="self-center justify-self-start">
                                            <img src={step.img} alt="products" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="self-center justify-self-end">
                                            <img src={step.img} alt="products" />
                                        </div>

                                        <div className="max-w-md bg-(--features-card-bg) p-4 self-center justify-self-start">
                                            <h3 className="text-3xl mb-3 text-(--color-primary) font-light">
                                                {step.title}
                                            </h3>
                                            <p className="text-(--text-secondary)">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </>
                                )}

                                {/* STEP DOT (absolute, doesn't break layout) */}
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                                     style={{ top: `${index * 420 + 40}px` }}>
                                    <div className="w-10 h-10 rounded-full bg-(--color-primary) text-white flex items-center justify-center font-bold shadow-lg">
                                        {step.id}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}