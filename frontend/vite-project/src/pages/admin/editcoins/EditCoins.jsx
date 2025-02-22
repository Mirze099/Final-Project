import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "antd";

export default function EditCoins() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: "",
    symbol: "",
    current_price: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((response) => {
        setInitialValues(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  function handleEdit(values) {
    axios
      .put(`http://localhost:3000/product/${id}`, values)
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Product successfully updated",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => navigate(-1))
      .catch((err) => console.error(err));
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    symbol: Yup.string()
      .min(3, "Too Short!")
      .max(80, "Too Long!")
      .required("Required"),
    current_price: Yup.number()
      .positive("Price must be positive")
      .min(3, "Price must be 3 dollars or more")
      .required("Required"),
    image: Yup.string().required("Required").url("Coins image should be url"),
  });

  return (
    <div className="bg-white h-full">
      <div className="mainss">
        <h1>Edit Product</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          enableReinitialize
          onSubmit={(values) => handleEdit(values)}
        >
          {({ errors, touched }) => (
            <Form className="add-form">
              <Field name="name" className="field" placeholder="Name" />
              {errors.name && touched.name ? (
                <Alert severity="error" className="alertt">
                  {errors.name}
                </Alert>
              ) : null}
              <Field name="symbol" className="field" placeholder="Symbol" />
              {errors.symbol && touched.symbol ? (
                <Alert severity="error" className="alertt">
                  {errors.symbol}
                </Alert>
              ) : null}
              <Field
                name="current_price"
                className="field"
                placeholder="Price"
              />
              {errors.current_price && touched.current_price ? (
                <Alert severity="error" className="alertt">
                  {errors.current_price}
                </Alert>
              ) : null}

              <Field name="image" className="field" placeholder="Image" />
              {errors.image && touched.image ? (
                <Alert severity="error" className="alertt">
                  {errors.image}
                </Alert>
              ) : null}

              <Button type="primary" htmlType="submit">
                UPDATE PRODUCT
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
