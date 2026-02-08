import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt="Jshoppy Logo" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>Jshoppy</p>
                    <p className='text-gray-400 mt-3'>Your one-stop shop for all your shopping needs. We offer a wide range of products at competitive prices, with fast and reliable shipping.</p>
                </div>
                {/* Type 1 Footer */}
                {/* <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>Home</li>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>About Us</li>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>Delivery</li>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>+1 (123) 456-7890</li>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>contact@jshoppy.com</li>
                    </ul>
                </div> */}
                {/* Type 2 Footer */}
                <div>
                    <h3 className='font-semibold mb-4'>Quick Links</h3>
                    <ul className='text-gray-600'>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>Home</li>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>Shop</li>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>About Us</li>
                        <li className='mb-2 cursor-pointer hover:text-gray-800 transition-colors duration-300'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold mb-4'>Contact Us</h3>
                    <p className='text-gray-600 mb-2'>123 Main Street, Anytown, USA</p>
                    <p className='text-gray-600 mb-2'>Email: info@jshoppy.com</p>
                    <p className='text-gray-600 mb-2'>Phone: (123) 456-7890</p>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>&copy; 2026 Jshoppy. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
