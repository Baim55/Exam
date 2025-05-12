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
        value={formik.values.imsge}
      />
      <label htmlFor="image">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor="image">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateForm;
