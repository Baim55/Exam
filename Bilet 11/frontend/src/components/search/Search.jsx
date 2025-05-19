import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts, searchProduct } from '../../redux/productSlice'

const Search = () => {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div>
      <input
        type="text"
        style={{ padding: "5px 10px" }}
        placeholder='Search'
        onChange={(e) => dispatch(searchProduct(e.target.value))} />
    </div>
  )
}

export default Search