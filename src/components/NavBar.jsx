import React from 'react'
import {assets} from '../assets/assets'
const NavBar = () => {
  return (
      <div className='flex justify-between max-w-[100vw] p-10 border border-b-[#f1f1f1]'>
          <img src={assets.logo} alt="" />
          <img src={assets.profile_image} alt="" className='w-[60px] h-[60px]' />
          
    </div>
  )
}

export default NavBar