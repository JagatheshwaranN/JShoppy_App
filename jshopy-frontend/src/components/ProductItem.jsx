import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import {Link} from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out'/>
      </div>
      {/* <h3 className='font-medium mt-2'>{name}</h3>
      <p className='text-gray-500 mt-1'>{currency}{price}</p> */}
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
