import React, { useState, useEffect } from 'react'
import PageHeader from "../components/PageHeader";
import bannerImage from "../assets/banner.png";
import Listening from "../assets/Listening.png";
import Reading from "../assets/Reading.png";
import Writing from "../assets/Writing.png";
import Speaking from "../assets/Speaking.png";
import IteamSection from "../components/IteamSection"

import axios from 'axios'

const Courses = () => {
    const [module, setModule] = useState([])
    const [active1, setactive1] = useState([])
    const [active2, setactive2] = useState([])
    const [active3, setactive3] = useState([])
    const [active4, setactive4] = useState([])

    useEffect(() => {
        document.getElementById("default").click()
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        let evalue = e.currentTarget.value
        if (evalue === "listening") {
            setactive1(true)
            setactive2(false)
            setactive3(false)
            setactive4(false)
            axios.get("http://127.0.0.1:8000/listeningmodule/").then(res => setModule(res.data))
        } else if (evalue === "reading") {
            setactive1(false)
            setactive2(true)
            setactive3(false)
            setactive4(false)
            axios.get("http://127.0.0.1:8000/readingmodule/").then(res => setModule(res.data))
        } else if (evalue === "writing") {
            setactive1(false)
            setactive2(false)
            setactive3(true)
            setactive4(false)
            axios.get("http://127.0.0.1:8000/writingmodule/").then(res => setModule(res.data))
        } else {
            setactive1(false)
            setactive2(false)
            setactive3(false)
            setactive4(true)
            axios.get("http://127.0.0.1:8000/speakingmodule/").then(res => setModule(res.data))
        }
    }
    return (
        <main className="Blog">
            <PageHeader
                small
                title="Courses"
                subtitle=""
                backgroundImage={bannerImage}
            />
            <section className="section thin">
                <div className="flex-container container">

                    <div className={`flex-item ${active1 ? "flex-item-active" : ""}`}>
                        <button value="listening" id="default" className="Course--Button" onClick={handleClick}>
                            <img src={Listening} />
                        </button>
                    </div>
                    <div className={`flex-item ${active2 ? "flex-item-active" : ""}`}>
                        <button value="reading" className="Course--Button" onClick={handleClick}>
                            <img src={Reading} />
                        </button>
                    </div>
                    <div className={`flex-item ${active3 ? "flex-item-active" : ""}`}>
                        <button value="writing" className="Course--Button" onClick={handleClick}>
                            <img src={Writing} />
                        </button>
                    </div>
                    <div className={`flex-item ${active4 ? "flex-item-active" : ""}`}>
                        <button value="speaking" className="Course--Button" onClick={handleClick}>
                            <img src={Speaking} />
                        </button>

                    </div>
                </div>
            </section>
            {/*Put Condition Later, If there is any post available.*/}
            <section className="section">
                <div className="container">

                    <IteamSection courseData={module} />
                </div>
            </section>
        </main>

    )
}

export default Courses