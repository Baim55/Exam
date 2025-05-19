import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import CreateForm from './CreateForm';
import { deleteProduct, getProducts } from '../../redux/productSlice';

const Admin = () => {
  let { products } = useSelector((state) => state.products)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  })
  return (
    <div className='container'>
      <CreateForm />
      <Table bordered>
        <thead>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((item) => (
              <tr key={item._id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img src={item.image} alt="" style={{ width: "150px" }} />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.description}</td>
                <td><Button variant="danger" onClick={() => dispatch(deleteProduct(item._id))}>Remove</Button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Admin