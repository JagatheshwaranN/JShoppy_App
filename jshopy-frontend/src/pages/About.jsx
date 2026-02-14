import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='about' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Jshoppy was built on a bold vision — to redefine the modern online shopping experience. Born from innovation and driven by technology, we set out to create a platform that blends simplicity, speed, and sophistication. Every detail of Jshoppy is thoughtfully designed to make discovering and purchasing products seamless, secure, and genuinely enjoyable.</p>
          <p>We curate a refined selection of high-quality products that align with today’s dynamic lifestyles. From contemporary fashion to everyday essentials, our collections are sourced with precision and purpose, ensuring both value and reliability. At Jshoppy, we’re not just selling products — we’re building a smarter, more elevated way to shop.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Jshoppy, our mission is to empower customers with choice, convenience, and complete confidence in every purchase. We are committed to delivering a seamless digital shopping experience that feels intuitive, secure, and effortless — from discovery to doorstep.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='flex-1 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality You Can Trust</b>
          <p className='text-gray-600'>At Jshoppy, every product is carefully selected and evaluated to meet our high standards of quality and reliability. We partner with trusted suppliers to ensure that what you receive reflects durability, performance, and real value.</p>
        </div>
        <div className='flex-1 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Effortless Convenience</b>
          <p className='text-gray-600'>We’ve designed Jshoppy to deliver a smooth and intuitive shopping experience from start to finish. From easy browsing to secure checkout and timely delivery, convenience is built into every step.</p>
        </div>
        <div className='flex-1 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Dedicated Customer Support</b>
          <p className='text-gray-600'>Our team is committed to providing responsive and dependable assistance whenever you need it. Your satisfaction is our priority, and we work diligently to ensure every interaction is seamless and supportive.</p>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About
