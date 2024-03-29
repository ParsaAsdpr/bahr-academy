import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { TextBox } from "../common/Input";
import RegisterUser from "../../core/services/api/auth/Login.api";
import { useNavigate } from "react-router-dom";

const FrontCard = (props) => {

  const history = useNavigate();

  const Validate = yup.object().shape({
    logEmail: yup
      .string("ایمیل باید به صورت انگلیسی باشد")
      .min(7, "ایمیل باید بیشتر از ۷ حرف باشد")
      .email("فرمت ایمیلی که وارد کرده اید اشتباه است")
      .required("لطفا فیلد ایمیل را پر کنید"),
    logPassword: yup
      .string("رمز عبور باید به صورت انگلیسی باشد")
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد گذرواژه را پر کنید"),
  });

  const formik = useFormik({
    initialValues: {
      logEmail: "",
      logPassword: "",
    },
    validationSchema: Validate,
    onSubmit: async (values) => {
      const userRegister = {
        fullName: values.fullName,
        password: values.password,
        email: values.email,
        phoneNumber: values.phoneNumber,
        birthDate: values.birthDate,
        nationalId: values.nationalId,
      };
      const result = await RegisterUser(userRegister);
      setTimeout(() => {
        {
          result && history.push("/login");
        }
      }, 3000);
    },
  });

  return (
    <div className="front face">
      <div className="card-container">
        <form onSubmit={formik.handleSubmit}>
          <h2>ورود</h2>
          {/* <p className="text-red-500 text-xs text-right">{formik.errors.logEmail}</p> */}
          <p className="text-red-500 text-xs text-right">{formik.errors.logPassword}</p>
          <p className="par">
            نام کاربری و گذرواژه خود را وارد کنید و بر روی دکمه ورود کلیک کنید
            تا وارد شوید
          </p>

          <TextBox
            type="email"
            name="logEmail"
            onChange={formik.handleChange}
            value={formik.values.logEmail}
            placeholder="پست الکترونیک"
            error={formik.errors.logEmail}
            touched={formik.touched.logEmail}
          />

          <TextBox
            type="password"
            name="logPassword"
            onChange={formik.handleChange}
            value={formik.values.logPassword}
            placeholder="گذرواژه"
            error={formik.errors.logPassword}
            touched={formik.touched.logPassword}
           />
          <button type="submit">ورود</button>
          <Link className="flip" to="/SignUp">
            حسابی نداری؟ ثبت نام کن
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FrontCard;
