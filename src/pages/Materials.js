import React, { useState, useEffect, useContext } from 'react'
import PageHeader from "../components/PageHeader";
import bannerImage from "../assets/banner.png";
import '../styles/iteamSection.css'
import '../styles/iteamCard.css'
import { Link } from 'react-router-dom'
import CartContextProvider from '../context/CartContext'
import { CartContext } from '../context/CartContext'
import axios from 'axios'
import AuthService from '../services/auth.service'
import swal from 'sweetalert';
import Swal from 'sweetalert2'

const IteamCard = ({ material }) => {
    const { addProduct } = useContext(CartContext)
    //console.log(material)
    const { photo, title, price, id, description, total_sell } = material
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
                        swal("Congratulations!", "Material Purchased Successfully!", "success")
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
                <div className="PostCard--Excerpt"><span>$ {price}</span> <span style={{ float: "right" }}><b>{total_sell}</b> Sold</span></div>
                <Link><button onClick={handleClick}>Buy Now</button></Link>
            </div>
        </div>
    )
}

const IteamSection = (props) => {
    const materialListData = props.materialListData
    return (
        <div className="PostSection">
            <div className="PostSection--Grid">
                {
                    materialListData.map((material) =>
                        <IteamCard
                            key={material.id}
                            material={material}
                        />
                    )
                }
            </div>
        </div>
    )
}


const Materials = () => {
    const [materialList, setmaterialList] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/material/")
            .then(res => {
                if (mounted) {
                    setmaterialList(res.data)
                }
            })
        return () => {
            mounted = false
        }
    }, [setmaterialList])
    return (
        <main className="Blog">
            <PageHeader
                small
                title="Materials"
                subtitle=""
                backgroundImage={bannerImage}
            />
            <section className="section">
                <div className="container">
                    <CartContextProvider>
                        <IteamSection materialListData={materialList} />
                    </CartContextProvider>
                </div>
            </section>
        </main>
    )
}

export default Materials
