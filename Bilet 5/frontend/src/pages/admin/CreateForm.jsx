import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postProduct } from "../../redux/productSlice";
import "./CreateForm.css"

const CreateForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      description: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(postProduct(values));
      resetForm({ values: "" });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
      />

      <label htmlFor="email">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="email">Description</label>
      <input
        id="desctription"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default CreateForm;
