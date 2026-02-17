import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='upload-image1'>
            <img className='w-25' src={assets.upload_area} alt='upload-image' />
            <input type='file' id='upload-image1' hidden />
          </label>
          <label htmlFor='upload-image2'>
            <img className='w-25' src={assets.upload_area} alt='upload-image' />
            <input type='file' id='upload-image2' hidden />
          </label>
          <label htmlFor='upload-image3'>
            <img className='w-25' src={assets.upload_area} alt='upload-image' />
            <input type='file' id='upload-image3' hidden />
          </label>
          <label htmlFor='upload-image4'>
            <img className='w-25' src={assets.upload_area} alt='upload-image' />
            <input type='file' id='upload-image4' hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Product Name' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Product Description' required />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2'>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
            <option value='kids'>Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product SubCategory</p>
          <select className='w-full px-3 py-2'>
            <option value='topwear'>Topwear</option>
            <option value='bottomwear'>Bottomwear</option>
            <option value='winterwear'>Winterwear</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='Price' />
        </div>
      </div>
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>2XL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input type='checkbox' id='best-seller' />
        <label className='cursor-pointer' htmlFor='best-seller'>Add to bestseller</label>
      </div>
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>Add</button>
    </form>
  )
}

export default Add
