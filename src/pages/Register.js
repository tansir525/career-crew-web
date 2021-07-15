import React, { Fragment } from 'react'
import '../styles/form.css'
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import bannerImage from "../assets/banner.png";

import { useForm } from "react-hook-form";
import axios from 'axios'
import swal from 'sweetalert';

const Register = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    axios.post('http://127.0.0.1:8000/student/', {
      user: {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        password: data.password
      },
      birth_date: data.birth_date
    })
      .then(function (response) {
        reset()
        swal("Congratulations!", "Registration Complete Successfully!", "success")
      })
      .catch(function (error) {
        swal("Registration Failed!", "Please Try Again!", "error");
      });
  }
  return (
    <main>
      <PageHeader
        small
        title="Register Now"
        subtitle="To join our community"
        backgroundImage={bannerImage}
      />
      <section className="section">
        <div className="container">

          <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className="Form Form--Card">
              <div className="Form--Group">

                <label className="Form--Label">
                  <input
                    className="Form--Input Form--InputText"
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    required
                    {...register("first_name")}
                  />
                  <span>First Name</span>
                </label>
                <label className="Form--Label">
                  <input
                    className="Form--Input Form--InputText"
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    required
                    {...register("last_name")}
                  />
                  <span>Last Name</span>
                </label>
              </div>
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  type="text"
                  placeholder="User Name"
                  name="username"
                  required
                  {...register("username")}
                />
                <span>User Name</span>
              </label>
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  {...register("email")}
                />
                <span>Email Address</span>
              </label>
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  {...register("password")}
                />
                <span>Password</span>
              </label>
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  type="date"
                  placeholder="Birth Date"
                  name="birth_date"
                  required
                  {...register("birth_date")}
                />
                <span></span>
              </label>

              <div className="Form--Group--Combined">
                <input className="Button Form--SubmitButton"
                  type="submit"
                  value="Register"
                />
                <Link className="Margin--top--20" to='/login'>Login If you already have an account.</Link>
              </div>

            </form>
          </Fragment>
        </div>
      </section>
      <section className="section taCenter">
        <Link to="/become/instructor" className="Button" tabIndex="0" aria-label="Toggle Popup" role="button">Become an instructor</Link>
      </section>
    </main>

  );
};

export default Register;