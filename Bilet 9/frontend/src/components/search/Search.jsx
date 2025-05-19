import React from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../redux/productSlice";
import "./Search.css"

const Search = () => {
  let dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => dispatch(searchProduct(e.target.value))}
      />
    </div>
  );
};

export default Search;
