import React, { useState, useEffect, } from 'react'
import PageHeader from "../components/PageHeader";
import bannerImage from "../assets/instructor-banner.png";
import '../styles/iteamSection.css'
import '../styles/iteamCard.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DefaultUser from '../assets/default-user.png'


const IteamCard = ({ instructor }) => {
    const { photo, user, bio } = instructor

    return (
        <div className="Form Form--Card">
            <div style={{ margin: "auto" }}>

                {
                    (photo === null) ?
                        <img src={DefaultUser} style={{ width: "180px", height: "180px", borderRadius: "100%" }} />
                        :
                        <img src={photo} style={{ width: "180px", height: "180px", borderRadius: "100%" }} />

                }

            </div>
            <div className="PostCard--Content">
                <h3 className="PostCard--Title">{user.first_name} {user.last_name}</h3>
                <div className="PostCard--Excerpt">{bio}</div>
            </div>
        </div>
    )
}

const IteamSection = (props) => {
    const instructorData = props.instructorData
    return (
        <div className="PostSection">
            <div className="PostSection--Grid">
                {
                    instructorData.map((instructor) =>
                        <IteamCard
                            key={instructor.user.id}
                            instructor={instructor}
                        />
                    )
                }
            </div>
        </div>
    )
}


const Instructors = () => {
    const [instructorList, setinstructorList] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/")
            .then(res => {
                if (mounted) {
                    setinstructorList(res.data)
                }
            })
        return () => {
            mounted = false
        }
    }, [setinstructorList])
    return (
        <main className="Blog">
            <PageHeader
                small
                title="Instructors"
                subtitle=""
                backgroundImage={bannerImage}
            />
            <section className="section">
                <div className="container">
                    <IteamSection instructorData={instructorList} />
                </div>
            </section>
            <section className="section taCenter">
                <Link to="/become/instructor" className="Button" tabIndex="0" aria-label="Toggle Popup" role="button">Become an instructor</Link>
            </section>
        </main>
    )
}

export default Instructors
