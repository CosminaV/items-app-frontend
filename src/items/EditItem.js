import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

function EditItem() {
  let navigate = useNavigate()
  const [item, setItem] = useState({
    name:"",
    description:"",
    price: ""
  })

  const {id} = useParams()

  const {name, description, price} = item

  const onInputChange = (evt) => {
    setItem({...item, [evt.target.name] : evt.target.value})
  }

  const editItem = async (evt) => {
    evt.preventDefault()
    await axios.put(`http://localhost:8080/items/${id}`, item)
    navigate("/")
  }

  //show the data of the current in editing item
  useEffect(() => {
    getItem()
  }, [])

  const getItem = async () => {
    const result = await axios.get(`http://localhost:8080/items/${id}`)
    setItem(result.data)
  }

  return (
    <div className='container add-user'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Edit product</h2>
          <div className='mb-3'>
            <input type='text' className='form-control' placeholder='Enter the name of the product' name="name" value={name}
              onChange={(evt) => onInputChange(evt)}></input>
          </div>
          <div className='mb-3'>
            <input type='text' className='form-control' placeholder='Enter the description of the product' name="description" value={description}
              onChange={(evt) => onInputChange(evt)}></input>
          </div>
          <div className='mb-3'>
            <input type='text' className='form-control' placeholder='Enter the price of the product' name="price" value={price} 
              onChange={(evt) => onInputChange(evt)}></input>
          </div>
          <button type='submit' className='btn save-add-item mx-2' onClick={(evt) => editItem(evt)}>Save</button>
          <Link className='btn cancel-add-item mx-2' to="/">Cancel</Link>
        </div>
      </div>
    </div>
  )
}

export default EditItem