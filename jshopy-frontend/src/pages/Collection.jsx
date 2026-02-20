import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const categoryValue = e.target.value;
    if (category.includes(categoryValue)) {
      setCategory(prev => prev.filter((item) => item !== categoryValue));
    }
    else {
      setCategory(prev => [...prev, categoryValue]);
    }
  }

  const toggleSubCategory = (e) => {
    const subCategoryValue = e.target.value;
    if (subCategory.includes(subCategoryValue)) {
      setSubCategory(prev => prev.filter((item) => item !== subCategoryValue));
    }
    else {
      setSubCategory(prev => [...prev, subCategoryValue]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilteredProducts(productsCopy);
  }

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();
    switch (sortType) {
      case 'priceLowHigh':
        setFilteredProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'priceHighLow':
        setFilteredProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  // useEffect(() => {
  //   setFilteredProducts(products);
  // }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  // useEffect(() => {
  //   console.log(subCategory);
  // }, [subCategory]);

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filter Options 1*/}
        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
            <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt='Dropdown Icon' />
          </p>
          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='font-medium mb-3 text-sm'>Categories</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' id='men' value={'Men'} onChange={toggleCategory} />Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' id='women' value={'Women'} onChange={toggleCategory} />Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' id='kids' value={'Kids'} onChange={toggleCategory} />Kids
              </p>
            </div>
          </div>
          {/* Subcategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='font-medium mb-3 text-sm'>Type</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' id='men' value={'Topwear'} onChange={toggleSubCategory} />Topwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' id='women' value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' id='kids' value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Filter Options 2*/}
        {/* <div className='w-full sm:w-1/4'>
          <h2 className='text-lg font-semibold mb-4'>Filters</h2>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <input subCategory="checkbox" id="filter1" />
              <label htmlFor="filter1">Filter 1</label>
            </div>
            <div className='flex items-center gap-2'>
              <input subCategory="checkbox" id="filter2" />
              <label htmlFor="filter2">Filter 2</label>
            </div>
          </div>
        </div>

        {/* Product Grid 
        <div className='w-full sm:w-3/4'>
          <h2 className='text-lg font-semibold mb-4'>Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {products.map((product, index) => (
              <div key={index} className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300'>
                <img src={product.image} alt={product.name} className='w-full h-48 object-cover rounded-md' />
                <h3 className='font-medium mt-2'>{product.name}</h3>
                <p className='text-gray-600'>${product.price}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Right Side Content */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Product Sort */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort By: Relevant</option>
              <option value="priceLowHigh">Sort By: Low to High</option>
              <option value="priceHighLow">Sort By: High to Low</option>
            </select>
          </div>
          {/* Map Products */}
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {/* {filteredProducts.map((product, index) => (
              <div key={index} className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300'>
                <img src={product.image} alt={product.name} className='w-full h-48 object-cover rounded-md' />
                <h3 className='font-medium mt-2'>{product.name}</h3>
                <p className='text-gray-600'>${product.price}</p>
              </div>
            ))}  */}
            {
              filteredProducts.map((product, index) => (
                <div key={index} className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300'>
                  <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Collection
