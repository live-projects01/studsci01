import React from 'react'
import im1 from '../../src/images/beach1.jpeg'
function Landing() {
    
  return (
    <>
    <div className='fixed h-14 shadow-md top-0 w-full bg-gradient-to-b from-cyan-200 to-white z-50 '>
        <div className='flex justify-between items-center'>

            <div className='cursor-pointer  p-2 m-2 text-blue-800   font-bold text-xl'>Student Scientist</div>
            <div className='flex justify-between'>
                <button className=' p-2 m-2 text-blue-800 font-semibold'>SignIn</button>
                <button className=' p-2 m-2 text-blue-800 font-semibold'>Blogs</button>
                <button className=' p-2 m-2 text-blue-800 font-semibold'>About</button>
                <button className=' p-2 m-2 text-blue-800 font-semibold'>Contact</button>
                <button className=' p-2 m-2 text-blue-800 font-semibold'>Games</button>
                <button className=' p-2 m-2 text-blue-800 font-semibold'>Climate Connect</button>
            </div>
        </div>
    </div>
    <div className='min-h-screen w-full  mt-14 bg-gradient-to-t from-cyan-500 to-blue-800 '>
        <div className=' h-64 flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold text-8xl text-center'>Climate Landing Page</h1>
        </div>
        <div className='m-3 mb-10 p-3 bg-white mx-64 rounded-xl opacity-45 h-3/5 text-center flex flex-col justify-center text-blue-900 text-xl '>
            <p className='p-2'>
            Climate change is one of the most pressing issues of our time, impacting ecosystems, weather patterns, and communities across the globe. Driven largely by human activities such as the burning of fossil fuels, deforestation, and industrial processes, climate change results in an increase in greenhouse gases like carbon dioxide in the atmosphere. This buildup traps heat, leading to global warming and causing shifts in climate systems. The consequences are widespread and severe: rising sea levels threaten coastal regions, extreme weather events like hurricanes and droughts are becoming more frequent, and biodiversity loss is accelerating as species struggle to adapt to rapidly changing habitats. Additionally, climate change has far-reaching effects on human health, food security, and economic stability, especially in vulnerable regions. Addressing climate change requires coordinated global action to reduce emissions, adopt sustainable practices, and invest in renewable energy sources, aiming to create a future where both people and nature can thrive in a stable, balanced environment.
            </p>
        </div>
        <div className='m-10 mb-10 p-10 bg-white mx-64 rounded-xl opacity-45 h-3/5 text-center flex flex-col justify-center text-blue-900 text-xl '>
            <p className='p-2'>
            Climate change is one of the most pressing issues of our time, impacting ecosystems, weather patterns, and communities across the globe. Driven largely by human activities such as the burning of fossil fuels, deforestation, and industrial processes, climate change results in an increase in greenhouse gases like carbon dioxide in the atmosphere. This buildup traps heat, leading to global warming and causing shifts in climate systems. The consequences are widespread and severe: rising sea levels threaten coastal regions, extreme weather events like hurricanes and droughts are becoming more frequent, and biodiversity loss is accelerating as species struggle to adapt to rapidly changing habitats. Additionally, climate change has far-reaching effects on human health, food security, and economic stability, especially in vulnerable regions. Addressing climate change requires coordinated global action to reduce emissions, adopt sustainable practices, and invest in renewable energy sources, aiming to create a future where both people and nature can thrive in a stable, balanced environment.
            </p>
        </div>
        <div className='h-64 grid grid-cols-8 gap-2'>
            <div className='col-span-3'>
                <img src={im1} className='ml-20 p-2 h-52 w-50' alt='Beach Image'/>
            </div>
            <div className='h-52 mr-10 col-span-5 bg-white rounded-md opacity-40 text-blue-900 text-center'>
                <p className='p-2 font-semibold text-xl'>The coastal region is the area where land meets the ocean, characterized by unique ecosystems and diverse landscapes. These areas often feature sandy beaches, rocky shorelines, and vibrant marine life. Coastal regions play a crucial role in supporting local economies, especially through tourism, fishing, and shipping industries. Additionally, they provide essential habitats for wildlife and are important for climate regulation. However, they are also vulnerable to environmental challenges such as erosion, rising sea levels, and pollution, making their preservation vital for future generations.</p>
            </div>
        </div>
        <div className='h-64 grid grid-cols-8 gap-2'>
            <div className='col-span-3'>
                <img src={im1} className='ml-20 p-2 h-52 w-50' alt='Beach Image'/>
            </div>
            <div className='h-52 mr-10 col-span-5 bg-white rounded-md opacity-40 text-blue-900 text-center'>
                <p className='p-2 font-semibold text-xl'>The coastal region is the area where land meets the ocean, characterized by unique ecosystems and diverse landscapes. These areas often feature sandy beaches, rocky shorelines, and vibrant marine life. Coastal regions play a crucial role in supporting local economies, especially through tourism, fishing, and shipping industries. Additionally, they provide essential habitats for wildlife and are important for climate regulation. However, they are also vulnerable to environmental challenges such as erosion, rising sea levels, and pollution, making their preservation vital for future generations.</p>
            </div>
        </div>
        <div className='h-64 grid grid-cols-8 gap-2'>
            <div className='col-span-3'>
                <img src={im1} className='ml-20 p-2 h-52 w-50' alt='Beach Image'/>
            </div>
            <div className='h-52 mr-10 col-span-5 bg-white rounded-md opacity-40 text-blue-900 text-center'>
                <p className='p-2 font-semibold text-xl'>The coastal region is the area where land meets the ocean, characterized by unique ecosystems and diverse landscapes. These areas often feature sandy beaches, rocky shorelines, and vibrant marine life. Coastal regions play a crucial role in supporting local economies, especially through tourism, fishing, and shipping industries. Additionally, they provide essential habitats for wildlife and are important for climate regulation. However, they are also vulnerable to environmental challenges such as erosion, rising sea levels, and pollution, making their preservation vital for future generations.</p>
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
                        <h1>FAQs</h1>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1>Twitter</h1>
                        <h1>Instagram</h1>
                        <h1>Facebook</h1>
                    </div>
                </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Landing