import React from 'react'

function Signup() {
  return (
    <div className='bg-gradient-to-r from-blue-800 to-cyan-200'>
    <div className='fixed h-14 shadow-md top-0 w-full bg-gradient-to-b from-cyan-200 to-white z-50 '>
        <div className='flex justify-between items-center'>
            <div className='cursor-pointer p-2 m-2 text-blue-800 font-bold text-xl'>Student Scientist</div>
            <div className='flex justify-between'>
                <button className='p-2 m-2 text-blue-800 font-semibold'>SignIn</button>
                <button className='p-2 m-2 text-blue-800 font-semibold'>Blogs</button>
                <button className='p-2 m-2 text-blue-800 font-semibold'>About</button>
                <button className='p-2 m-2 text-blue-800 font-semibold'>Contact</button>
                <button className='p-2 m-2 text-blue-800 font-semibold'>Games</button>
                <button className='p-2 m-2 text-blue-800 font-semibold'>Climate Connect</button>
            </div>
        </div>
    </div>
    
    {/* Adjusted margin-top */}
    <div className='min-h-screen w-full mt-14'>
        <div className='flex flex-col justify-center'>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        <div className='h-auto flex flex-col justify-center items-center gap-4 mx-64 rounded-xl shadow-md bg-white'>
            
            <h1 className='text-5xl font-bold text-blue-800 mb-10 py-3 px-4 mt-10'>Sign In</h1>
            <input className='p-3 m-2 rounded-lg shadow-sm outline w-1/4' placeholder='Email'/>
            <input className='p-3 m-2 rounded-lg shadow-sm outline w-1/4' placeholder='Password' type='password'/>
            <button className='p-5 m-2 rounded-xl shadow-sm hover:outline mb-20 bg-blue-200 hover:bg-blue-800 px-10 hover:text-white text-blue-800'>Sign In</button>
        </div>
        </div>
        

        
    </div>
    <div className='h-44 grid grid-cols-2 gap-2'>
            
            <div className='bg-white opacity-40'>
                <h1>Quick Links</h1>
            </div>
            <div className='bg-white opacity-40 grid grid-cols-2'>
                <div className='flex flex-col justify-between'>
                    <h1>Terms</h1>
                    <h1>Licenses</h1>
                    <h1>Support</h1>
                    <h1 className='p-5'>FAQs</h1>
                </div>
                <div className='flex flex-col justify-between'>
                    <h1>Twitter</h1>
                    <h1>Instagram</h1>
                    <h1 className='p-5'>Facebook</h1>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Signup
