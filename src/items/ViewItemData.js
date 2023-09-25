import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'

function ViewItemData() {
    let navigate = useNavigate()

    const arrowStyle = {
        cursor: 'pointer'
    }

    const [item, setItem] = useState({
        name:"",
        description:"",
        price:""
    })

    const {id} = useParams()

    useEffect(() => {
        getItem()
    }, [])

    const getItem = async () => {
        const response = await axios.get(`http://localhost:8080/items/${id}`)
        setItem(response.data)
    }

  return (
    <div className='container add-user'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Item data</h2>

            <div className='card'>
                <div className='card-header'>
                    Details of item id:
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Name:</b>
                            {item.name}
                        </li>
                        <li className='list-group-item'>
                            <b>Description:</b>
                            {item.description}
                        </li>
                        <li className='list-group-item'>
                            <b>Price:</b>
                            {item.price}
                        </li>
                    </ul> 
                </div>
            </div>
            <MdArrowBack className="go-back" onClick={() => navigate("/")} style={arrowStyle}></MdArrowBack>
        </div>
    </div>
</div>
  )
}

export default ViewItemData
