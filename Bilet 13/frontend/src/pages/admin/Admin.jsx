import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from "../../redux/productSlice";
import CreateForm from "./createForm";

const Admin = () => {

  let { products } = useSelector((state) => state.products)
  
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getProducts())
    })
  return (
    <div className="container">
      <CreateForm/>
      <Table bordered>
        <thead>
          <tr>
            <th>Image</th>
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
  );
};

export default Admin;
