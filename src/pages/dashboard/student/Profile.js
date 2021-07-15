import React, { useState, useEffect } from 'react'
import AuthService from '../../../services/auth.service'
import axios from 'axios';
import DefaultUser from '../../../assets/default-user.png'

const StudentProfile = () => {
    const [userDetails, setuserDetails] = useState([])
    const [userInfoDetails, setuserInfoDetails] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/student/" + AuthService.getUserId() + "/")
            .then(res => {
                if (mounted) {
                    setuserDetails(res.data.user)
                    setuserInfoDetails(res.data)
                }
            })
        return () => {
            mounted = false
        }
    }, [setuserInfoDetails, setuserInfoDetails])

    return (
        <section className="section">
            <div className="container Profile--Container">
                <div className="Form--Card flex-container">
                    <div>
                        {
                            (userDetails.photo === null) ?
                                <img src={DefaultUser} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />
                                :
                                <img src={userInfoDetails.photo} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />

                        }
                    </div>
                    <div className="Profile--Info">
                        <p><b>Name :</b> {userDetails.first_name} {userDetails.last_name}</p>
                        <p><b>User Name :</b> {userDetails.username}</p>
                        <p><b>Email :</b> {userDetails.email}</p>
                        <p><b>Date of Birth :</b> {userInfoDetails.birth_date}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default StudentProfile;