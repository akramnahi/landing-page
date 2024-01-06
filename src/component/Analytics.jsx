import React from 'react'
import Laptop from '../assets/Laptop.jpg'
import Laptop1 from '../assets/background-bleu-black/laptop1.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto my-4 transform transition-transform transition-duration-300 ease-in-out hover:scale-105' src={Laptop1} alt='/' />
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>YOUR GATEWAY TO CUTTING-EDGE SOLUTIONS</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Welcome to RESERVEASERVECE</h1>
        <p>
        As a premier service selling platform, InnovateHub is dedicated to transforming your experience by offering 
        a curated range of cutting-edge services tailored to meet your unique needs. Whether you're a small business 
        owner seeking to optimize operations, a freelancer in search of productivity-enhancing tools, or a tech 
        enthusiast hungry for the latest advancements, InnovateHub is your trusted partner. Our platform brings 
        together a handpicked selection of services, ensuring you access only the best in class. Explore a world 
        of possibilities, elevate your ventures, and embrace innovation with InnovateHub. Your success journey starts here!
        </p>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default Analytics