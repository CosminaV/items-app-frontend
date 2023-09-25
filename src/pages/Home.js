import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function Home() {
    const [items, setItems] = useState([])

    const getItems = async () => {
        const response = await axios.get("http://localhost:8080/items")
        setItems(response.data)
    }

    const {id} = useParams()

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:8080/items/${id}`)
        getItems()
    }

    useEffect(() => {
        getItems()
    }, [])

  return (
    <div className='items-container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    {/* <th scope="col">Description</th> */}
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <tr>
                            <td key={index}>{index+1}</td>
                            <td>{item.name}</td>
                            {/* <td>{item.description}</td> */}
                            <td><strong>{item.price} lei</strong></td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/viewItem/${item.id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to = {`/editItem/${item.id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={() => deleteItem(item.id)}>Delete</button>
                            </td>
                            </tr>
                         ) )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
