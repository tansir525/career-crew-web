import { Fragment } from 'react'
import '../../../styles/form.css'
import { Link } from "react-router-dom";
import ModuleListTable from "../../../components/dashboardComponents/ModuleListTable"
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'
import AuthService from "../../../services/auth.service"
import axios from 'axios';
import swal from 'sweetalert';
import InstructorService from '../../../services/instructor.service'


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ListeningList = () => {
    const [listening] = InstructorService.useGetListening()

    const classes = useStyles();
    return (
        <div className="container">

            <Link to="/dashboard/create/listening">
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
            <ModuleListTable tableDataList={listening} />
        </div>
    )
}

const CreateListening = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const { title, price, description, file, photo } = data

        let formData = new FormData()
        formData.append("title", title)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("file", file[0])
        formData.append("photo", photo[0])
        formData.append("teacher", AuthService.getUserId())
        return axios.post("http://127.0.0.1:8000/listeningmodule/", formData
        ).then(function (response) {
            reset()
            swal("Success!", "Listening Module Created Successfully!", "success")
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
                            <input {...register("file")} type="file" name="file" accept=".mp4" />
                            <label>Upload Video</label>
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

export { CreateListening, ListeningList }
