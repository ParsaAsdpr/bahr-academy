import React from "react";
import { useFormik } from "formik";
import {Link} from 'react-router-dom'
import { TextBox } from "../common/Input";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import LoginUser from "../../core/services/api/auth/Login.api";

const BackCard = (props) => {
  const Validate = yup.object().shape({
    signEmail: yup
      .string("ایمیل باید به صورت انگلیسی باشد")
      .min(7, "ایمیل باید بیشتر از ۷ حرف باشد")
      .email("فرمت ایمیلی که وارد کرده اید اشتباه است")
      .required("لطفا فیلد ایمیل را پر کنید"),
      signPassword: yup
      .string("رمز عبور باید به صورت انگلیسی باشد")
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد گذرواژه را پر کنید"),
      repSignPassword: yup
      .string("رمز عبور باید به صورت انگلیسی باشد")
      .min(3, "رمز شما باید حدقال سه کارکتر داشته باشد")
      .required("لطفا فیلد گذرواژه را پر کنید"),
  });

  const history = useNavigate();

  const formik = useFormik({
    initialValues: {
        signEmail: "",
      signPassword: "",
      repSignPassword: "",
    },
    validationSchema: Validate,
    onSubmit:  async (values) => {
      const userLogin = {
        email: values.email,
        password: values.password,
      };
  
      const result = await LoginUser(userLogin);
      setTimeout(() => {
        {
          result && history.push("/");
          window.location.reload(true);
        }
      }, 2500);
    },
  });


  return (
    <div className="back face">
      <div className="card-container">
        <form onSubmit={formik.handleSubmit}>
          <h2>ثبت نام</h2>
          <p className="par">
            برای ثبت نام فرم زیر را پر کنید و بر دکمه ثبت نام کلیک کنید تا وارد
            شوید
          </p>
          <TextBox
            type="email"
            name="signEmail"
            onChange={formik.handleChange}
            value={formik.values.signEmail}
            placeholder="پست الکترونیک"
            error={formik.errors.signEmail}
            touched={formik.touched.signEmail}
          />
          <TextBox
            type="password"
            name="signPassword"
            onChange={formik.handleChange}
            value={formik.values.signPassword}
            placeholder="گذرواژه"
            error={formik.errors.signPassword}
            touched={formik.touched.signPassword}
          />
          <TextBox
            type="password"
            name="repSignPassword"
            onChange={formik.handleChange}
            value={formik.values.repSignPassword}
            placeholder="تکرار گذرواژه"
            error={formik.errors.repSignPassword}
            touched={formik.touched.repSignPassword}
          />
          <button type="submit">ثبت نام</button>
          <Link className="flip" to="/SignIn">
            حسابی داری؟ وارد شو
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BackCard;
