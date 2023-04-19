import React, { useEffect, useState } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import CategoriesBar from './CategoriesBar';
import Video from './Video';
import data from './data.json'
import {FaBars} from 'react-icons/fa';
import {MdNotifications, MdApps} from 'react-icons/md';
import './Header.scss'


function Subscription() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
   <>
      <div className='border border-dark header'>
      <FaBars
      className='header_menu' 
      size={26}
      />
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/180px-YouTube_full-color_icon_%282017%29.svg.png"
      alt=''
      className='header_logo'
      />
      <form>
        <input type="text" placeholder='Search' onChange={(event) => {setSearchTerm(event.target.value)}} />
  
       
      </form>
      <div className='header_icons'>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img 
        src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
        alt=''
        />
      </div>
    </div>
        <CategoriesBar/>
  
        </>
  )
}

export default Subscription