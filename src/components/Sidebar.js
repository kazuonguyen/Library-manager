import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideMenuData';
import './Sidebar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar' >
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars className="icons"  onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex:'10'}}>
          <ul className='nav-menu-items'   >
            <li  className='navbar-toggle'>
              <Link onClick={showSidebar} to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose className="icons"  />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link onClick={showSidebar}  to={item.path}>
                    {item.icon}&nbsp;
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Navbar;