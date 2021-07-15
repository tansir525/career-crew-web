import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/iteamCard.css'
import AuthService from '../services/auth.service'
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import axios from 'axios';

const IteamCard = (props) => {
    //console.log(props)
    const { photo, title, price, description, id, total_sell } = props.course
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
                        coursemodules: id,
                        livesession: null
                    }).then(function (response) {
                        //console.log(response)
                        swal("Congratulations!", "Course Purchased Successfully!", "success")
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
            <div className="PostCard--Image relative" >
                <img src={photo} className="background" alt={title} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="PostCard--Content">
                <h3 className="PostCard--Title">{title}</h3>
                <div className="PostCard--Excerpt">{description}</div>
                <div className="PostCard--Excerpt"><span>$ {price}</span> <span style={{ float: "right" }}><b>{total_sell}</b> Sold</span></div>
                <Link><button onClick={handleClick}>Buy Now</button></Link>
            </div>
        </div>
    )
}

export default IteamCard