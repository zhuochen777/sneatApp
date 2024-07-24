import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "../style/Navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder='Search...'/>
        </div>
        <div className="items">
          <button className='item'>
            <TranslateIcon className='nav-icon'/>
          </button>
          <button className='item'>
            <DarkModeIcon className='nav-icon'/>
          </button>
          <button className='item'>
            <AppsIcon className='nav-icon'/>
          </button>
          <button className='item' style={{position:"relative"}}>
            <NotificationsIcon className='nav-icon'/>
            <div className='notifi-counter' style={{position:"absolute", top:"10px", right:"10px"}}></div>
          </button>
          <div className='item' style={{position:"relative"}}>
            <img src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png" alt="avatar-img" className='avatar'/>
            <div className='status' style={{position:"absolute", bottom:"5px", right:"5px"}}>
              <div className='status-inner'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
