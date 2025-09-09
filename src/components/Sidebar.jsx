import React from 'react';
import { NavLink } from 'react-router';


const Sidebar = () => {
  return (
    <aside className="w-36 shadow-md text-white h-screen p-3 fixed z-50  bg-white">
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `relative p-2 rounded hover:bg-blue-400 
             after:absolute after:left-0 after:top-0 after:w-[3px] after:h-full 
             ${isActive ? 'after:bg-blue-500 ' : 'after:bg-transparent'}`
          }
        >
          Product
        </NavLink>

         <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative p-2 rounded hover:bg-blue-400 
             after:absolute after:left-0 after:top-0 after:w-[3px] after:h-full 
             ${isActive ? 'after:bg-blue-500 ' : 'after:bg-transparent'}`
          }
        >
        View Cart
        </NavLink>
        <NavLink
          to="/pratice"
          className={({ isActive }) =>
            `relative p-2 rounded hover:bg-blue-400 
             after:absolute after:left-0 after:top-0 after:w-[3px] after:h-full 
             ${isActive ? 'after:bg-blue-500 ' : 'after:bg-transparent'}`
          }
        >
      Pratice 
        </NavLink>

       
      </nav>
    </aside>
  );
};

export default Sidebar;
