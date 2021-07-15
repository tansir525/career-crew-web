import React, { useState, useEffect, useContext } from 'react'
import PageHeader from "../components/PageHeader";
import bannerImage from "../assets/banner.png";
import '../styles/iteamSection.css'
import '../styles/iteamCard.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import CartContextProvider from '../context/CartContext'
import { CartContext } from '../context/CartContext'
import AuthService from '../services/auth.service'
import swal from 'sweetalert';
import Swal from 'sweetalert2'

const IteamCard = ({ liveSession }) => {
    const { addProduct } = useContext(CartContext)
    //console.log(props.liveSession)
    const { photo, title, description, price, id, session_date, timelength } = liveSession
    const handleClick = () => {
        if (AuthService.isStudent() && AuthService.isLogedin()) {
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'You Need to Enter a Valid Value'
                    }
                },
                progressSteps: ['1', '2', '3', '4']
            }).queue([
                {
                    title: 'Card Number',
                    inputPlaceholder: 'XXXX XXXXXX XXXXX'
                },
                {
                    title: 'Name on Card',
                    inputPlaceholder: 'Jonh Deo'
                },
                {
                    title: 'Valid Thru',
                    inputPlaceholder: 'Valid Thru'
                },
                {
                    title: 'CVC',
                    inputPlaceholder: 'CVC',
                    confirmButtonText: 'Submit &rarr;'
                }
            ]).then((result) => {
                if (result.value) {
                    axios.post("http://127.0.0.1:8000/payment/", {
                        student: AuthService.getUserId(),
                        coursemodules: null,
                        livesession: id
                    }).then(function (response) {
                        //console.log(response)
                        swal("Congratulations!", "Live Session Purchased Successfully!", "success")
                    })
                        .catch(function (error) {
                            //console.log(error)
                            swal("Failed!", "Please Try Again!", "error");
                        });
                }
            })
        } else {
            swal("Failed!", "Please Login First!", "error");
        }
    }
    return (
        <div className="PostCard">
            <div className="PostCard--Image relative">
                <img src={photo} className="background" alt={title} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="PostCard--Content">
                <h3 className="PostCard--Title">{title}</h3>
                <div className="PostCard--Excerpt">{description}</div>
                <div className="PostCard--Excerpt">$ {price}</div>
                <div className="PostCard--Excerpt"><b>{session_date}</b> From <b>{timelength}</b></div>
                <Link><button onClick={handleClick}>Buy Now</button></Link>
            </div>
        </div>
    )
}

const IteamSection = (props) => {
    const liveSessionData = props.liveSessionData
    return (
        <div className="PostSection">
            <div className="PostSection--Grid">
                {
                    liveSessionData.map((liveSession) =>
                        <IteamCard
                            key={liveSession.id}
                            liveSession={liveSession}
                        />
                    )
                }
            </div>
        </div>
    )
}


const LiveSessions = () => {
    const [liveSessionList, setliveSessionList] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/livesession/")
            .then(res => {
                if (mounted) {
                    setliveSessionList(res.data)
                }
            })
        return () => {
            mounted = false
        }
    }, [setliveSessionList])
    return (
        <main className="Blog">
            <PageHeader
                small
                title="Live Sessions"
                subtitle=""
                backgroundImage={bannerImage}
            />
            <section className="section">
                <div className="container">
                    <CartContextProvider>
                        <IteamSection liveSessionData={liveSessionList} />
                    </CartContextProvider>
                </div>
            </section>
        </main>
    )
}

export default LiveSessions
