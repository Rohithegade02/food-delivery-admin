import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'

const List = () => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    const response = await axios.get('https://food-delivery-phdh.onrender.com/api/v1/food/get');

    if (response.data.success) {
      setList(response.data.foodItems)
    } else {
      toast.error("error getting food")
    }
  }
  const removeFood = async(id) => { 
await   axios.delete(`https://food-delivery-phdh.onrender.com/api/v1/food/${id}`)
     .then(response => {
        if (response.data.success) {
          toast.success("food deleted")
          fetchList()
        } else {
          toast.error("error deleting food")
        }
      })
  }
  useEffect(() => {
    fetchList()
  },[])
  return (
    <div className=''>
      <p className='font-bold text-[20px]'>All Food List</p>
      <div className='flex justify-between border border-[#f1f1f1] py-5 px-5 mx-5'>
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <div>
        {
          list.map((item, index) => {
            return (
              <div key={index} className='flex justify-between  py-5 mb-5 border border-b-[#f1f1f1] mx-5 px-5'>
                <img src={ `https://food-delivery-phdh.onrender.com/images/`+ item.image} className='w-[100px] h-[100px]' alt='' />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <p onClick={()=>removeFood(item._id)}>x</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List