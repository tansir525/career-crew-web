import React, { useState, useEffect } from 'react'
import AuthService from '../../../services/auth.service'
import axios from 'axios';
import DefaultUser from '../../../assets/default-user.png'

const InstructorProfile = () => {
    const [userDetails, setuserDetails] = useState([])
    const [userInfoDetails, setuserInfoDetails] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/" + AuthService.getUserId() + "/")
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

    return (
        <section className="section">
            <div className="container Profile--Container">
                <div className="Form--Card flex-container">
                    <div>
                        {
                            (userDetails.photo === null) ?
                                <img src={DefaultUser} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />
                                :
                                <img src={userDetails.photo} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />

                        }

                    </div>
                    <div className="Profile--Info">
                        <p><b>Name :</b> {userInfoDetails.first_name} {userInfoDetails.last_name}</p>
                        <p><b>User Name :</b> {userInfoDetails.username}</p>
                        <p><b>Email :</b> {userInfoDetails.email}</p>
                        <p><b>Bio :</b>{userDetails.bio} </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default InstructorProfile;