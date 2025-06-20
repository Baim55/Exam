import React from "react";
import "./Basket.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";
import { minusBtn, plusBtn, removeBasket } from "../../redux/BasketSlice";

const Basket = () => {
  let { basket } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  let total = basket.reduce((sum, item) => sum + item.price * item.count, 0);
  return (
    <div className="container">
      <Table bordered className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((item) => (
              <tr key={item._id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img src={item.image} alt="" style={{ width: "150px" }} />
                </td>
                <td>{item.title}</td>
                <td>${item.price}0</td>
                <td>
                  <button
                    className="basket-btn"
                    disabled={item.count === 1}
                    onClick={() => dispatch(minusBtn(item._id))}
                  >
                    -
                  </button>
                  {item.count}
                  <button
                    className="basket-btn"
                    onClick={() => dispatch(plusBtn(item._id))}
                  >
                    +
                  </button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => dispatch(removeBasket(item._id))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <p style={{ fontSize: "25px" }}>TotalPrice: ${total}</p>
    </div>
  );
};

export default Basket;
