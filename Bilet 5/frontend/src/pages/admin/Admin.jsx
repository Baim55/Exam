import React, { useEffect } from 'react'
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/productSlice';
import CreateForm from './CreateForm';

const Admin = () => {

  let { products } = useSelector((state) => state.products);

  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  })
  return (
    <div className="container">
      <CreateForm/>
      <Table bordered className="table">
        <thead>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item._id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img src={item.image} alt="" style={{ width: "150px" }} />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                
                <td>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => dispatch(deleteProduct(item._id))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Admin