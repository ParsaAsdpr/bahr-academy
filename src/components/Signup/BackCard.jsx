import React from "react";
import { useFormik } from "formik";

const BackCard = (props) => {
  const formik = useFormik({
    initialValues: {
        signEmail: "",
      signPassword: "",
      repSignPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="back face">
      <div className="card-container">
        <form>
          <h2>ثبت نام</h2>
          <p>
            برای ثبت نام فرم زیر را پر کنید و بر دکمه ثبت نام کلیک کنید تا وارد
            شوید
          </p>
          <input
            type="email"
            name="signEmail"
            id="signEmail"
            onChange={formik.handleChange}
            value={formik.values.signEmail}
            placeholder="پست الکترونیک"
          />
          <input
            type="password"
            name="signPassword"
            id="signPassword"
            onChange={formik.handleChange}
            value={formik.values.signPassword}
            placeholder="گذرواژه"
          />
          <input
            type="password"
            name="repSignPassword"
            id="repSignPassword"
            onChange={formik.handleChange}
            value={formik.values.repSignPassword}
            placeholder="تکرار گذرواژه"
          />
          <button type="submit">ثبت نام</button>
          <a className="flip" onClick={props.onFlip}>
            حسابی داری؟ وارد شو
          </a>
        </form>
      </div>
    </div>
  );
};

export default BackCard;
