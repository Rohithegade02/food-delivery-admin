import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const Add = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    category: ''
  })
  const onChangeSubmit = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({
     ...data,
      [name]: value
    })
  }
  const onhandleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('price', Number(data.price))
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('image', image)
    try {
      const response=await axios.post('https://food-delivery-phdh.onrender.com/api/v1/food/new', formData)

      if (response.data.success) {
        setData({
          name: '',
          description: '',
          price: '',
          category: 'Salad'
        })
        setImage(false)
       toast.success("item added successfully")
     }
    } catch (err) {
      console.log(err)
      toast.error("item not added")
}
  }
 
  return (
    <div className=' m-5'>
      <form className='flex flex-col  gap-3' onSubmit={onhandleSubmit}>
        <div >
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt='' className='h-[150px] w-[150px]'/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
        </div>
        <div>
          <p>Product name</p>
          <input onChange={onChangeSubmit} value={data.name} type='text' placeholder='Product name' name='name' className='p-3 border border-[#f1f1f1]'/>
        </div>
        <div>
          <p>Product description</p>
          <textarea onChange={onChangeSubmit} value={data.description} type='text' className='p-3 border border-[#f1f1f1]' placeholder='Product description' name='description' rows='7'/>
        </div>
        <div>
          <p>Product category</p>
          <select name='category' onChange={onChangeSubmit} value={data.category} className='p-3 border border-[#f1f1f1]'>
            <option value='Salad' className='p-3 '>Salad</option>
            <option value='Rolls'>Rolls</option>
            <option value='Desert'>Desert</option>
            <option value='Sandwich'>Sandwich</option>
            <option value='Cake'>Cake</option>
            <option value='Pure Veg'>Pure Veg</option>
            <option value='Pasta'>Pasta</option>
            <option value='Noodles'>Noodles</option>
         </select>
        </div>
        <div>
          <p>Product price</p>
          <input type='number' value={data.price} onChange={onChangeSubmit} name='price' placeholder='$20' className='p-3 border border-[#f1f1f1]'/>
        </div>
        <button className='bg-[tomato] text-white w-[20%] p-3 rounded-lg'>Add</button>
      </form>
    </div>
  )
}

export default Add