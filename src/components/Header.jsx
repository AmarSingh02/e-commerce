import React from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router';
import { selectTotalCount } from '../redux/CounterSlice';

const Header = () => {

    
   const totalCount = useSelector(selectTotalCount);
   const navigate=useNavigate();
   const handleViewCart=()=>{
    navigate('/cart')
   }
  return (
 <header>
    
<div className="flex justify-between shadow-md p-4 bg-white fixed top-0 left-0 right-0 z-50">
        <div className="logo">
            Shopping
        </div>
        <div className="view-cart">
         <h3 onClick={handleViewCart} className='cursor-pointer'> cart   {totalCount > 0 && (
        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
          {totalCount}
        </span>
      )}</h3>
         
        
        </div>
    </div>
 </header>
  )
}

export default Header
