import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FrontCard = (props) => {

    const Validate = yup.object().shape({
        logEmail: yup
          .string()
          .min(3)
          .email("فرمت ایمیلی که وارد کرده اید اشتباه است")
          .required("لطفا فیلد نام را پر کنید"),
          logPassword: yup
          .string()
          .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
          .required("لطفا فیلد نام خانوادگی را پر کنید"),
      });
    

  const formik = useFormik({
    initialValues: {
      logEmail: "",
      logPassword: "",
    },
    validationSchema: Validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const notify = (text) => toast(text);
  return (
      <div className="front face">
      <div className="card-container">
        <form onSubmit={formik.handleSubmit}>
          <h2>ورود</h2>
          <p>
            نام کاربری و گذرواژه خود را وارد کنید و بر روی دکمه ورود کلیک کنید
            تا وارد شوید
          </p>

          <input
            type="email"
            name="logEmail"
            id="logEmail"
            onChange={formik.handleChange}
            value={formik.values.logEmail}
            placeholder="پست الکترونیک"
          />
          <input
            type="password"
            name="logPassword"
            id="logPassword"
            onChange={formik.handleChange}
            value={formik.values.logPassword}
            placeholder="گذرواژه"
          />
          <button type="submit">ورود</button>
          <a className="flip" onClick={props.onFlip}>
            حسابی نداری؟ ثبت نام کن
          </a>
        </form>
      </div>
    </div>
  );
};

export default FrontCard;
