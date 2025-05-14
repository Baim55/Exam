import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux"
import { minusBtn, plusBtn, removeBasket } from '../../redux/basketSlice';
import Button from "@mui/material/Button";

const Basket = () => {
  let { basket } = useSelector((state) => state.basket)
  let dispatch = useDispatch()
  let total = basket.reduce((sum, item) => sum + item.price * item.count, 0)
  return (
    <div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Images</th>
              <th>Title</th>
              <th>Price</th>
              <th>Count</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
            {
              basket && basket.map((item) => (
                <tr>
                  <td>{item.image}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => dispatch(minusBtn(item._id))}>-</button>
                    {item.count}
                    <button onClick={() => dispatch(plusBtn(item._id))}></button></td>
                  <td> <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => dispatch(removeBasket(item._id))}
                  >
                    Remove
                  </Button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <p>Total Price:{total}</p>
      </div>
    </div>
  )
}

export default Basket  