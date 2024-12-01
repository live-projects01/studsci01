import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    async function fetchblogs(category) {
        try {
            // Send category as a query parameter
            const res = await axios.get(`http://localhost:3000/blogs/category/${category}`);
            console.log(res);
            setBlogs(res.data); // Use the response data to update the state
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }

    return (
        <div  className='bg-gradient-to-r from-blue-800 to-cyan-200 min-h-screen'>
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
    <br></br>
                <br></br>
                
            <div className='mt-14 mx-96 flex justify-between'>
                
            <button className='p-2 font-bold text-md click:bg-blue-800 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-lg ' onClick={() => fetchblogs("Technology")}>Technology</button>
            <button className='p-2 font-bold text-md click:bg-blue-800 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-lg' onClick={() => fetchblogs("Climate")}>Climate</button>
            <button className='p-2 font-bold text-md click:bg-blue-800 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-lg' onClick={() => fetchblogs("Disaster")}>Disaster</button>
            <button className='p-2 font-bold text-md click:bg-blue-800 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-lg'  onClick={() => fetchblogs("Coastal")}>Coastal</button>
            </div>
            <div>
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                        <div key={index} className='p-5 m-5 rounded-sm shadow-lg sm:mx-64 items-center flex flex-col justify-center mb-5 gap-5 bg-blue-100 hover:bg-blue-200 cursor-pointer'>
                            <h1 className='font-bold text-center text-4xl'>{blog.title}</h1>
                            <p className='text-md font-semibold'>{blog.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No blogs available.</p>
                )}
            </div>
        </div>
    );
}

export default Blogs;
