import React from 'react'
import IconInfo from './IconInfo'
import IconEmail from '../Icons/IconEmail'
import IconPhone from '../Icons/IconPhone'


 function ReachOut() {
  return (
    <div className='xl:container mx-auto mb-32'>
        <div className='flex justify-center' style={{background: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(252,70,107,1) 100%)', height: '250px'}}>
            <h1 className='text-5xl sm:text-7xl text-white uppercase pt-12'>Contact</h1>
        </div>
        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 mx-auto'>
                    <IconInfo icon={<IconEmail />} text="Info@lymdata.com" />
                    <IconInfo icon={<IconPhone />} text="+91-9446054134" />
                </div>
                <div>
                    <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700"
          >
            Send Message
          </button>
        </form>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default ReachOut

 