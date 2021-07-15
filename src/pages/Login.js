import React, { Fragment } from 'react'
import '../styles/form.css'
import { Link, useHistory } from 'react-router-dom'
import PageHeader from "../components/PageHeader";
import bannerImage from "../assets/banner.png";
import AuthService from "../services/auth.service"
import { useForm } from "react-hook-form";
import swal from 'sweetalert';




const Login = (props) => {
  const { register, handleSubmit } = useForm()


  const onSubmit = (data) => {
    AuthService.login(data.username, data.password)
      .then((res) => {
        if (res.is_teacher) {
          props.history.push("/dashboard/instructor")
        }
        if (res.is_student) {
          props.history.push("/dashboard")
        }
        if (res.is_student == false && res.is_teacher == false) {
          props.history.push("/dashboard/admin")
        }
      }).catch((error) => {
        swal("Login Failed!", "Please Try Again!", "error");
      })
  }
  return (
    <main>
      <PageHeader
        small
        title="Login"
        subtitle="To join our community"
        backgroundImage={bannerImage}
      />
      <section className="section">
        <div className="container">
          <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className="Form Form--Card">
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
                  value="Login"
                />
                <Link className="Margin--top--20" to='/register'>Register If you don't have an account.</Link>
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

export default Login;