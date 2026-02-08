import React from 'react'

const NewsLetter = () => {

    const onsubmitHandler = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send email to backend)
        //alert('Thank you for subscribing!');
    }

    return (
        // <div className='bg-gray-100 py-10 text-center'>
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe to our Newsletter</p>
            <p className='text-gray-400 mt-3'>Subscribe to our newsletter and get 10% off your first purchase!</p>
            <form onSubmit={onsubmitHandler} className='mt-6 flex justify-center gap-2'>
                <input type="email" placeholder='Enter your email' className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400' />
                <button type='submit' className='px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300'>Subscribe</button>
            </form>
            {/* <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
            </form> */}
        </div>
    )
}

export default NewsLetter
