import React from "react";
import { useFormik } from "formik";
import "./CreateForm.css";
import { useDispatch } from "react-redux";
import { postProduct } from "../../redux/productSlice";

const CreateForm = () => {
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      price: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(postProduct(values));
      resetForm({ values: "" });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="image">Image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateForm;
