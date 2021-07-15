import React, { Fragment } from 'react'
import '../styles/form.css'
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import bannerImage from "../assets/header-instructor.jpg";

import { useForm } from "react-hook-form";
import axios from 'axios'
import swal from 'sweetalert';

const BecomeInstructor = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    axios.post('http://127.0.0.1:8000/teacher/', {
      user: {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        password: data.password
      },

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
        title="Make a good impact"
        subtitle="Create an online course and teach people around the world."
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

    </main>

  );
};

export default BecomeInstructor;