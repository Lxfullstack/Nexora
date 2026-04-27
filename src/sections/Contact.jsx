import email from '../assets/images/contact/email.svg'
import help from '../assets/images/contact/help.svg'
import media from '../assets/images/contact/media.svg'
import inst from '../assets/images/social-media/instagram.svg'
import twitter from '../assets/images/social-media/twitterx.svg'
import linkedin from '../assets/images/social-media/linkedin.svg'


export default function Contact() {
    return (
        <section className="bg-white py-8" >
            <div className="container mx-auto p-4 flex flex-col gap-4 justify-center">
                <h2 className='text-center text-(--color-primary) text-4xl font-bold'>Get in Touch with Nexora</h2>
                <p className='text-center text-lg'>Have questions or need support? We'd love to hear from you</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex flex-col gap-8'>
                        <div className='bg-(--features-card-bg) flex gap-4 p-4 justify-start items-start rounded-xl'>
                            <img src={email} alt="email logo" />
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-bold text-lg'>Support email</h4>
                                <p className='text-sm'>Get direct support from our team</p>
                                <p className='text-sm text-(--color-primary)'>support@nexora.com</p>
                            </div>
                        </div>
                        <div className='bg-(--features-card-bg) flex gap-4 p-4 justify-start items-start rounded-xl'>
                            <img src={help} alt="help" />
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-bold text-lg'>Help Center</h4>
                                <p className='text-sm'>Browse FAQs and guides</p>
                                <p className='text-sm text-(--color-primary)'>Visit Help Center →</p>
                            </div>
                        </div>
                        <div className='bg-(--features-card-bg) flex gap-4 p-4 justify-start items-start rounded-xl'>
                            <img src={media} alt="media" />
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-bold text-lg'>Social Media</h4>
                                <p className='text-sm'>Follow us for updates</p>
                                <div className='flex justify-between'>
                                    <a href="#"><img src={twitter} alt="twitter" /></a>
                                    <a href="#"><img src={inst} alt="inst" /></a>
                                    <a href="#"><img src={linkedin} alt="linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className=' flex flex-col'>
                        <form action="" className='flex flex-col  gap-4'>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="username">Name</label>
                                <input  className="border border-gray-300 py-2 px-4 rounded-xl"  type="text" name="username" id="username"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" >Email</label>
                                <input  className="border border-gray-300 py-2 px-4 rounded-xl"  type="email" name="email" id="email"/>
                            </div>    
                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject">Subject</label>
                                <input   className="border border-gray-300 py-2 px-4 rounded-xl" name="subject" type="text" id="subject"/>
                            </div>    
                            <div className="flex flex-col gap-2">
                                <label  htmlFor="message">Message</label>
                                <textarea  name="message" className="resize-none border border-gray-300 py-2 px-4 rounded-xl h-30"  id="message"></textarea>
                            </div>
                            <button className='bg-(--color-primary) text-white py-2 px-4 rounded-xl'>Send message</button>        
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}