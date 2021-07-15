import React, { Fragment, useState, useEffect } from 'react'
import '../../../styles/form.css'
import { useForm } from 'react-hook-form'
import AuthService from "../../../services/auth.service"
import axios from 'axios';
import swal from 'sweetalert';
import DefaultUser from '../../../assets/default-user.png'

const StudentSettings = () => {
    const { register, handleSubmit, reset } = useForm()
    const [userDetails, setuserDetails] = useState([])
    const [userInfoDetails, setuserInfoDetails] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/student/" + AuthService.getUserId() + "/")
            .then(res => {
                if (mounted) {
                    setuserDetails(res.data)
                    setuserInfoDetails(res.data.user)
                }
            })
        return () => {
            mounted = false
        }
    }, [setuserInfoDetails, setuserInfoDetails])
    const onSubmit = (data) => {
        const { first_name, last_name, email, photo, birth_date, password } = data
        console.log(birth_date)
        let formData = new FormData()
        formData.append("user.id", userInfoDetails.id)
        formData.append("user.first_name", (first_name == "") ? userInfoDetails.first_name : first_name)
        formData.append("user.last_name", (last_name == "") ? userInfoDetails.last_name : last_name)
        formData.append("user.username", userInfoDetails.username)
        formData.append("user.email", (email == "") ? userInfoDetails.email : email)
        formData.append("user.password", password)
        formData.append("birth_date", (birth_date == "") ? userDetails.birth_date : birth_date)
        if (photo[0] != undefined) {
            formData.append("photo", photo[0])
        }


        return axios.put("http://127.0.0.1:8000/student/" + AuthService.getUserId() + "/", formData
        ).then(function (response) {

            swal("Success!", "Profile Updated Successfully!", "success")
        })
            .catch(function (error) {
                swal("Failed!", "Please Try Again!", "error");
            });

    }

    return (
        <section className="section">

            <div className="container">
                <Fragment>
                    <form onSubmit={handleSubmit(onSubmit)} className="Form Form--Card">
                        <div style={{ margin: "auto" }}>
                            {
                                (userDetails.photo === null) ?
                                    <img src={DefaultUser} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />
                                    :
                                    <img src={userDetails.photo} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />

                            }
                        </div>
                        <div className="Form--Group">
                            <label className="Form--Label">
                                <input
                                    className="Form--Input Form--InputText"
                                    type="text"
                                    placeholder="First Name"
                                    name="first_name"
                                    defaultValue={userInfoDetails.first_name}
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
                                    defaultValue={userInfoDetails.last_name}
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
                                value={userInfoDetails.username}
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
                                defaultValue={userInfoDetails.email}
                                required
                                {...register("email")}
                            />
                            <span>Email Address</span>
                        </label>
                        <label className="Form--Label">
                            <input
                                className="Form--Input Form--InputText"
                                type="date"
                                placeholder="Birth Date"
                                name="birth_date"
                                defaultValue={userDetails.birth_date}
                                required
                                {...register("birth_date")}
                            />
                            <span></span>
                        </label>
                        <label className="Form--Label">
                            <input {...register("photo")} type="file" name="photo" accept=".jpg,.jpeg,.png" />
                            <label>Upload Photo</label>
                        </label>
                        <label className="Form--Label">
                            <input
                                className="Form--Input Form--InputText"
                                type="password"
                                placeholder="Password"
                                name="password"
                                {...register("password")}
                            />
                            <span>Password</span>
                        </label>
                        <div className="Form--Group--Combined">
                            <input className="Button Form--SubmitButton"
                                type="submit"
                                value="Update"
                            />
                        </div>

                    </form>
                </Fragment>
            </div>
        </section>
    )
}

export default StudentSettings