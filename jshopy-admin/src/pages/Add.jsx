import React, { use, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App';

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl+'/api/product/add', formData, {headers:{token}});
      console.log(response.data);
    } catch (error) {

    }
  }

  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='upload-image1'>
            <img className='w-25' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='upload-image' />
            <input onChange={(e) => setImage1(e.target.files[0])} type='file' id='upload-image1' hidden />
          </label>
          <label htmlFor='upload-image2'>
            <img className='w-25' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='upload-image' />
            <input onChange={(e) => setImage2(e.target.files[0])} type='file' id='upload-image2' hidden />
          </label>
          <label htmlFor='upload-image3'>
            <img className='w-25' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='upload-image' />
            <input onChange={(e) => setImage3(e.target.files[0])} type='file' id='upload-image3' hidden />
          </label>
          <label htmlFor='upload-image4'>
            <img className='w-25' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='upload-image' />
            <input onChange={(e) => setImage4(e.target.files[0])} type='file' id='upload-image4' hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Product Name' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Product Description' required />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
            <option value='kids'>Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product SubCategory</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value='topwear'>Topwear</option>
            <option value='bottomwear'>Bottomwear</option>
            <option value='winterwear'>Winterwear</option>
          </select>
        </div>
        <div>
          <p onChange={(e) => setPrice(e.target.value)} value={price} className='mb-2'>Product Price</p>
          <input className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='Price' />
        </div>
      </div>
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={() => setSizes(prev => prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev, 'S'])}>
            <p className={`${sizes.includes('S') ? 'bg-[#8AFFFF]' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M'])}>
            <p className={`${sizes.includes('M') ? 'bg-[#8AFFFF]' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev, 'L'])}>
            <p className={`${sizes.includes('L') ? 'bg-[#8AFFFF]' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL'])}>
            <p className={`${sizes.includes('XL') ? 'bg-[#8AFFFF]' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes('2XL') ? prev.filter(item => item !== '2XL') : [...prev, '2XL'])}>
            <p className={`${sizes.includes('2XL') ? 'bg-[#8AFFFF]' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>2XL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestSeller(prev => !prev)} checked={bestseller} type='checkbox' id='best-seller' />
        <label className='cursor-pointer' htmlFor='best-seller'>Add to bestseller</label>
      </div>
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>Add</button>
    </form>
  )
}

export default Add
