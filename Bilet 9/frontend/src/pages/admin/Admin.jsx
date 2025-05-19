import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { deleteProduct, getProducts } from "../../redux/productSlice";
import CreateForm from "./CreateForm";

const Admin = () => {
  let { products } = useSelector((state) => state.products);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });
  return (
    <div className="container">
      <CreateForm />
      <Table bordered style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
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
                <td>${item.price}.00</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    variant="danger"
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
