import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const baseStyle =
    "flex items-center md:justify-start justify-center gap-4 px-3 md:px-6 py-4 rounded-xl border transition-all duration-200"

  const activeStyle =
    "border-l-4 border-black bg-gray-50"

  const inactiveStyle =
    "border-gray-200 text-gray-600 hover:bg-gray-50"
  return (
    <div className='w-[70px] md:w-[240px] min-h-screen border-r bg-white shadow-sm'>

      <div className='flex flex-col gap-4 pt-6 px-2'>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <img
            className='w-6 h-6 md:opacity-100 opacity-70'
            src={assets.add_icon}
            alt=""
          />
          <p className='hidden md:block font-medium'>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <img
            className='w-6 h-6 md:opacity-100 opacity-70'
            src={assets.list_icon}
            alt=""
          />
          <p className='hidden md:block font-medium'>List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <img
            className='w-6 h-6 md:opacity-100 opacity-70'
            src={assets.order_icon}
            alt=""
          />
          <p className='hidden md:block font-medium'>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar