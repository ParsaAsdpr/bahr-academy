import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./flip.css";

const SignFlip = (props) => {
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    if (props.flipped == true) setFlipped(true);
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="flip-container flex justify-center">
      <div className="deck">
        <div className={`${flipped ? "sign-card flipped" : "sign-card"}`}>
          <div className="front face">
            <div className="card-container">
              <form>
                <h2>ورود</h2>
                <p>
                  نام کاربری و گذرواژه خود را وارد کنید و بر روی دکمه ورود کلیک
                  کنید تا وارد شوید
                </p>

                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder="نام کاربری"
                />
                <input type="text" placeholder="گذرواژه" />
                <button>ورود</button>
                <a className="flip" onClick={handleFlip}>
                  حسابی نداری؟ ثبت نام کن
                </a>
              </form>
            </div>
          </div>

          <div className="back face">
            <div className="card-container">
              <form>
                <h2>ثبت نام</h2>
                <p>
                  برای ثبت نام فرم زیر را پر کنید و بر دکمه ثبت نام کلیک کنید تا
                  وارد شوید
                </p>
                <input type="text" placeholder="پست الکترونیک" />
                <input type="text" placeholder="گذرواژه" />
                <input type="text" placeholder="تکرار گذرواژه" />
                <button>ورود</button>
                <a className="flip" onClick={handleFlip}>
                  حسابی داری؟ وارد شو
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignFlip;
