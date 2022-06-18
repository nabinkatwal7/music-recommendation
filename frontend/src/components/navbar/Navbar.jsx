import React from 'react'
import './Navbar.css'
import {BrowserRouter, Link} from 'react-router-dom'

import {useState} from 'react'

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar"

import {AiOutlineArrowRight,AiOutlineArrowLeft, AiOutlineHome, AiOutlineSearch, AiOutlinePlus, AiOutlineUser,AiOutlineLogout} from "react-icons/ai"
import {BiLibrary} from 'react-icons/bi'

import "react-pro-sidebar/dist/css/styles.css"

export default function Navbar() {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = ()=>{
        menuCollapse?setMenuCollapse(false):setMenuCollapse(true)
    }
  return (
    <div className='navbar'>
        <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
                <div className='logotext'>
                    <p>{menuCollapse?"Musik":"Mussik"}</p>
                </div>
                <div className='closemenu' onClick={menuIconClick}>
                    {menuCollapse?(
                        <AiOutlineArrowRight />
                    ):(
                        <AiOutlineArrowLeft />
                    )}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='square'>
                    <MenuItem active={true} icon={<AiOutlineHome />}>
                        <Link to='/'> Home </Link>
                    </MenuItem>
                    <MenuItem  icon={<AiOutlineSearch/>}>
                        <Link to='/search'>Search</Link> 
                    </MenuItem>
                    <MenuItem icon={<BiLibrary/>}>
                        <Link to='/library'>Library</Link>
                    </MenuItem>
                    <MenuItem icon={<AiOutlinePlus />}>
                        <Link to='/recommendation'>Recommendation</Link>
                    </MenuItem>
                    <MenuItem icon={<AiOutlineUser/>}>
                        <Link to='/user'>User</Link>
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu iconShape='square'>
                    <MenuItem icon={<AiOutlineLogout />}>Log Out</MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    </div>
  )
}
