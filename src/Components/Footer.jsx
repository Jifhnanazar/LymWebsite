import React from 'react'
import CompanyLogo from '../assets/Logos/Group 51.svg'
import { BsFacebook } from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitter} from'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1640px]  mx-auto p-2 font-dm'>
    <img className='w-24 h-18 mx-4' src={CompanyLogo} alt="company logo" />
    <hr className='mt-2' />
    <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 justify-between  items-center align-middle'>
  
      <div className="flex justify-center"> 
        <ul>
          <li className='my-2 uppercase'>Locations /</li>
          <li>London</li>
          <li>Lisbon</li>
          <li>New York</li>
        </ul>
      </div>
  
      <div className="flex justify-center"> 
        <ul>
          <li className='my-2'>Our Work /</li>
          <li>Case Studies</li>
          <li>Services</li>
          <li>Reports</li>
        </ul>
      </div>
  
      <div className="flex justify-center"> 
        <ul>
          <li className='my-2'>Who We Are /</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
  
      <div className="flex justify-center"> 
        <ul>
          <li className='my-2'>Social /</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>
  
      <div className="flex  items-center justify-center ">
        <div className='mt-7 md:mt-0' >
          <h1 className='mb-5'>        stay up to date</h1>
          <hr  className='mb-2'/>
          <button className='p-2 bg-black text-white '>subscribe</button>
        </div>
      </div>
  
    </div>
    <div className='flex flex-col-reverse items-center justify-between md:flex-row mt-14 text-gray-500 '>
  <div className='mb-3'>© Copyright 2023 LymData. All rights reserved.</div>
  <div className='mb-3'>
    <span>Terms of service</span>
    <span className='mx-4'>Privacy policy</span>
  </div>
  <div className='flex gap-5 mb-3'>
    <span><BsFacebook/></span>
    <span><AiFillInstagram/></span>
    <span><FaTwitter/></span>
  </div>
</div>


  </div>  
  
  
  )
}

export default Footer