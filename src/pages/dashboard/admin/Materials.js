import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import '../../../styles/form.css'
import { Link } from "react-router-dom";
import ModuleListTable from "../../../components/dashboardComponents/ModuleListTable"
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import swal from 'sweetalert';
import AuthService from '../../../services/auth.service'


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const MaterialList = () => {
    const classes = useStyles();
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
        <div className="container">

            <Link to="/dashboard/create/materia">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<AddBoxIcon />}
                    style={{ float: "right", fontSize: "1.2em", marginBottom: "25px" }}
                >
                    Add New
                    </Button>
            </Link>
            <ModuleListTable tableDataList={materialList} />

        </div>

    )
}

const CreateMaterials = () => {
    const { register, handleSubmit, reset } = useForm()


    const onSubmit = (data) => {
        const { title, price, description, photo, file } = data

        let formData = new FormData()
        formData.append("title", title)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("file", file[0])
        formData.append("photo", photo[0])
        formData.append("teacher", AuthService.getUserId())

        return axios.post("http://127.0.0.1:8000/material/", formData
        ).then(function (response) {
            reset()
            swal("Success!", "Material Created Successfully!", "success")
        })
            .catch(function (error) {
                swal("Failed!", "Please Try Again!", "error");
            });

    }

    return (
        <section className="section">

            <div className="container">
                <Fragment>
                    <form className="Form Form--Card" onSubmit={handleSubmit(onSubmit)}>
                        <label className="Form--Label">
                            <input
                                className="Form--Input Form--InputText"
                                type="text"
                                placeholder="Title"
                                name="title"
                                required
                                {...register("title")}
                            />
                            <span>Title</span>
                        </label>
                        <label className="Form--Label">
                            <textarea
                                className="Form--Input Form--InputText"
                                type="text"
                                placeholder="Description"
                                name="description"
                                rows='5'
                                required
                                {...register("description")}
                            />
                            <span>Description</span>
                        </label>
                        <label className="Form--Label">
                            <input
                                className="Form--Input Form--InputText"
                                type="number"
                                placeholder="Price"
                                name="price"
                                required
                                {...register("price")}
                            />
                            <span>Price</span>
                        </label>
                        <label className="Form--Label">
                            <input {...register("file")} type="file" name="file" accept=".pdf,.doc,.docx,.zip,.ppt,.pptx,.txt" />
                            <label>Upload Material</label>
                        </label>

                        <label className="Form--Label">
                            <input {...register("photo")} type="file" name="photo" accept=".jpg,.jpeg,.png" />
                            <label>Upload Photo</label>
                        </label>


                        <div className="Form--Group--Combined">
                            <input className="Button Form--SubmitButton"
                                type="submit"
                                value="Save"
                            />
                        </div>
                    </form>
                </Fragment>
            </div>
        </section>
    )
}

export { CreateMaterials, MaterialList }
