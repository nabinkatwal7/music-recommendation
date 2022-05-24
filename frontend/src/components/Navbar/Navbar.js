import React from 'react'
import './Navbar.css'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';

function Navbar() {
  return (
    <div className='nav'>
        <ul className='nav-items'>
            <li>
                <HomeIcon />
                <p>Home</p>
            </li>
            <li>
                <SearchIcon />
                <p>Search</p>
            </li>
            <li>
                <LibraryMusicIcon />
                <p>Your Library</p>
            </li>
            <li>
                <AccountCircleIcon />
                <p>User</p>
            </li>
            <li>
                <AddIcon />
                <p>Recommended</p>
            </li>
        </ul>
    </div>
  )
}

export default Navbar