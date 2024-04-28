import {Link} from 'react-router-dom'
import { assets } from '../assets/assets'


const SideBar = () => {
    
  return (
      <div className=' w-[100%]   '>
          <div className=' flex justify-between mt-5 border border-r-[#f1f1f1]'> 
            <Link  to='/add'>
                <div className='flex justify-between p-5 gap-10 hover:bg-[#f1f1f1]'>
                    <img src={assets.add_icon} alt='' />
                    <p>Add Items</p>
                </div>
            </Link>
            <Link  to='/list'>
                <div className='flex items-center  p-5 gap-10 hover:bg-[#f1f1f1]'>
                    <img src={assets.order_icon} alt='' /> 
                    <p>List Items</p>
                </div>
            </Link>
            <Link  to='/order'>
              <div className='flex items-center  p-5 gap-10 hover:bg-[#f1f1f1]'>
                <img src={assets.order_icon} alt='' />
                <p> Orders</p>
             </div>
            </Link>
          </div>
          
    </div>
  )
}

export default SideBar