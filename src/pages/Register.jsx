import logo from '../assets/images/nexoraLogo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'



export default function Register() {
    const [selectedRole, setSelectedRole] = useState('vendor');
    const roles = ['buyer','creator','vendor'];

    async function signUp(formdata) {
        const data = Object.fromEntries(formdata);
        console.log(data);
    }

    return (
        <main className="h-screen bg-(--features-card-bg) md:bg-white">
            <div className='container mx-auto md:my-8 p-4 lg:max-w-md md:w-4/5 bg-(--features-card-bg)'>
                <div className='flex flex-col justify-center items-center mb-4'>
                    <Link to="/"><img src={logo} alt="nexora logo" /></Link>
                    <h1 className="text-2xl font-bold">Create your account</h1>
                    <p className='text-sm'>Start selling and promoting today</p>
                </div>
                <form action={signUp} className='flex flex-col gap-3'>
                    <div className="input-cont flex flex-col">
                        <label htmlFor="fullname" className='text-sm'>Full name</label>
                        <input className='border rounded border-gray-200 px-4 py-2 bg-white' type="text" name='fullname' />
                    </div>
                    <div className="input-cont flex flex-col">
                        <label htmlFor="username" className='text-sm'>Prefered username</label>
                        <input className='border rounded border-gray-200 px-4 py-2 bg-white' type="text" name='username'/>
                    </div>
                    <div className="input-cont flex flex-col">
                        <label htmlFor="email" className='text-sm'>Email</label>
                        <input className='border rounded border-gray-200 px-4 py-2 bg-white' type="text" name='email'/>
                    </div>
                    <div className="input-cont flex flex-col">
                        <label htmlFor="password" className='text-sm'>Password</label>
                        <input className='border rounded border-gray-200 px-4 py-2 bg-white' type="text" name='password'/>
                    </div>
                    <div className="input-cont flex flex-col">
                        <label htmlFor="firstName" className='text-sm'>Confirm Password</label>
                        <input className='border rounded border-gray-200 px-4 py-2 bg-white' type="text" name='confirmation'/>
                    </div>
                    <div>
                        <p className='text-sm mb-2'>I want to join as a</p>
                        {/* Hidden input for storing the selected role*/}
                        <input 
                            type="hidden"
                            name='role'
                            value={selectedRole}
                         />
                        <div className='flex justify-between items-center gap-2'>
                            {roles.map((role)=>(
                            <button // controls the selection of the roles
                            className={`flex justify-center items-center text-sm flex-1 px-4 py-2 border border-(--color-primary) rounded
                                ${selectedRole == role? 'bg-(--color-primary) text-white':'bg-white text-(--color-primary)'}`}
                            type='button'
                            key={role}
                            onClick={()=>{setSelectedRole(role)
                                        console.log(selectedRole)
                                    }}
                            >
                                {role}
                        
                            </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        {/* conditional rendering of the business name  if vendor is selected*/}
                        {selectedRole === 'vendor'? 
                        <div className="input-cont flex flex-col">
                            <label htmlFor="businessName" className='text-sm'>Business name</label>
                            <input className='border rounded border-gray-200 px-4 py-2 bg-white' type="text" name='businessName' id='businessName'/>
                        </div> :null}
                    </div>
                    <button type='submit' className='border rounded border-gray-200 py-2 bg-(--color-primary) text-white'>Submit</button>
                    <div className='flex justify-center gap-1'>
                        <p>Already have an account ?</p><Link className='text-(--color-primary)' to='/login'>Login</Link>
                    </div>
                </form>            
            </div>
        </main>
    )
}