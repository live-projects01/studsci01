import React, { useState } from 'react';
import im2 from '../assets/Screenshot 2024-09-22 185411.png'
import im3 from '../assets/Screenshot 2024-09-14 151740.png'
import im4 from '../assets/Screenshot 2024-05-05 114314.png'
import ss_hp_latest_1 from '../assets/ss_hp_latest_1.jpg'
import ss_hp_latest_2 from '../assets/ss_hp_latest_2.jpg'
import latest_1 from '../assets/image.png'
import Latest from '../components/Latest';
export default function Gallery() {

    
    const [index,setIndex]= useState(0)
    const [imageLinks, setImageLinks]= useState([latest_1, ss_hp_latest_2,im3,im4])
    //const headings = ["INITIATIVE LAUNCH WITH A POSTER","LLAMA MEME","TRUMP HEADLINES","MULTI-TASKER MAN"]
    //const [animateIndex, setA] = useState(0)
    const description= [{title: "Student-scientist Workshop Alva's Moodubidire, Mangalore", desc: "A workshop on “Coast and Climate Change” was successfully conducted at Alva’s College, Moodubidire, Mangalore on November 15, 2024. Led by a research team from the National Institute of Advanced Studies (NIAS), the workshop engaged a group of 60 students from Alva’s College. The workshop aimed to foster a collaborative learning environment, with the research team demonstrating key parameters of climate change and coastal monitoring. This inspiring experience motivated the students to establish student-scientist clubs at various coastal schools across Karnataka. The active participation of both students and college management contributed significantly to the workshop’s success. "}
       ,{title: "Student-scientist Workshop Alva's Moodubidire, Mangalore", desc: "A workshop on “Coast and Climate Change” was successfully conducted at Alva’s College, Moodubidire, Mangalore on November 15, 2024. Led by a research team from the National Institute of Advanced Studies (NIAS), the workshop engaged a group of 60 students from Alva’s College. The workshop aimed to foster a collaborative learning environment, with the research team demonstrating key parameters of climate change and coastal monitoring. This inspiring experience motivated the students to establish student-scientist clubs at various coastal schools across Karnataka. The active participation of both students and college management contributed significantly to the workshop’s success. "},
       {title: "Student-scientist Workshop Alva's Moodubidire, Mangalore", desc: "A workshop on “Coast and Climate Change” was successfully conducted at Alva’s College, Moodubidire, Mangalore on November 15, 2024. Led by a research team from the National Institute of Advanced Studies (NIAS), the workshop engaged a group of 60 students from Alva’s College. The workshop aimed to foster a collaborative learning environment, with the research team demonstrating key parameters of climate change and coastal monitoring. This inspiring experience motivated the students to establish student-scientist clubs at various coastal schools across Karnataka. The active participation of both students and college management contributed significantly to the workshop’s success. "}
    ]

    async function goNext(){

        setIndex((index+1)%(imageLinks.length))
        console.log(index)
        console.log(description[index].title)
       
    }
    function goBack(){
        setIndex((index-1)%(imageLinks.length) >=0 ? (index-1)%(imageLinks.length): (imageLinks.length)+((index-1)%(imageLinks.length)))
        
    }
    function transitionFunc(){
        console.log("Hello")
    }
   
      return(

        <>
            {/* <div className='flex flex-col justify-center  min-h-80 w-full rounded-lg'>
            <div className='grid grid-cols-12 md:gap-1 mt-5 '>

            <div className='items-center md:col-span-1 col-span-2 flex flex-col justify-center items-center mx-5'>
                <button className='bg-white rounded-full shadow-md p-6 cursor-pointer hover:bg-blue-100  ' onClick={goBack}>
                Back
                </button>
                </div>
                <div className='bg-white rounded-lg shadow-md min-h-64 md:col-span-10 col-span-8 w-auto md:w-full'>
                        <div className='items-center flex flex-col justify-center gap-5'>
                        
                        

                        <div className='md:grid md:grid-cols-5 flex flex-col justify-center mt-4'>
                            <div className='flex justify-center md:col-span-3'>
                        <img className='md:pr-3 md:pl-2 md:pb-2 ' src={imageLinks[index]}></img>
                        </div>
                        <div className='mt-2 md:col-span-2 p-2'>
                            <h2 className=' text-3xl font-semibold text-center md:ml-5'>{description[index].title}</h2>
                            <p className='md:mt-6 md:mb-2 md:ml-6 text-center p-1'>{description[index].desc}</p>
                            
                        </div>
                        </div>
                        </div>
                        
                        



                </div>
                <div className='items-center md:col-span-1 col-span-2 flex flex-col justify-center items-center mx-5'>
                <button className='bg-white rounded-full shadow-md p-6 cursor-pointer hover:bg-blue-100  ' onClick={goNext}>
                Next
                </button>
                </div>
                

            </div>
            </div> */}

            <Latest slides={[
  {
    image: latest_1,
    title: "Student-scientist Workshop Alva's Moodubidire, Mangalore",
    description: "A workshop on “Coast and Climate Change” was successfully conducted at Alva’s College, Moodubidire, Mangalore on November 15, 2024. Led by a research team from the National Institute of Advanced Studies (NIAS), the workshop engaged a group of 60 students from Alva’s College. The workshop aimed to foster a collaborative learning environment, with the research team demonstrating key parameters of climate change and coastal monitoring. This inspiring experience motivated the students to establish student-scientist clubs at various coastal schools across Karnataka. The active participation of both students and college management contributed significantly to the workshop’s success."
  }
  
  // More slides...
]} />
        </>
      )
}
