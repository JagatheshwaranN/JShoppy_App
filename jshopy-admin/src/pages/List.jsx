import { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import axios from 'axios'
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  const removeListProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      <p className='mb-2'>All Products</p>
      <div className='flex flex-col gap-2'>
        {/* ------------- List Table Title ------------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Product Image</b>
          <b>Product Name</b>
          <b>Category</b>
          <b>SubCategory</b>
          <b>Price</b>
          <b>Sizes</b>
          <b>BestSeller</b>
          <b className='text-center'>Actions</b>
        </div>
        {/* ------------- Product List ------------- */}
        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-12' src={item.image[0]} alt='prod-image' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.subCategory}</p>
              <p>{currency}{item.price}</p>
              {/* <p>{Array.isArray(item.sizes) ? item.sizes.join(', ') : item.sizes}</p> */}
              <p>
                <div className="flex gap-1">
                  {item.sizes.map((size, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-200 rounded text-xs">
                      {size}
                    </span>
                  ))}
                </div>
              </p>
              <p>{item.bestseller === true ? 'Yes' : 'No'}</p>
              <button onClick={() => removeListProduct(item._id)} className='bg-red-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Delete</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
