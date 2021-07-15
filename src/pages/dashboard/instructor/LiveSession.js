import { Fragment, useContext } from 'react'
import '../../../styles/form.css'
import { Link } from "react-router-dom";
import LiveSessionListTable from "../../../components/dashboardComponents/LiveSessionListTable"
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

const LiveSessionList = () => {
    const [liveSession] = InstructorService.useGetLiveSession()

    const classes = useStyles();
    return (
        <div className="container">
            <Link to="/dashboard/create/livesession">
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
            <LiveSessionListTable tableDataList={liveSession} />
        </div>
    )
}

const CreateLiveSession = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const { title, price, session_date, description, timelength, timelength2, photo, conference_url } = data

        let formData = new FormData()
        formData.append("title", title)
        formData.append("price", price)
        formData.append("session_date", session_date)
        formData.append("description", description)
        formData.append("timelength", timelength + " To " + timelength2)
        formData.append("conference_url", conference_url)
        formData.append("photo", photo[0])
        formData.append("teacher", AuthService.getUserId())
        return axios.post("http://127.0.0.1:8000/livesession/", formData
        ).then(function (response) {
            reset()
            swal("Success!", "Live Session Created Successfully!", "success")
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
                            <input
                                className="Form--Input Form--InputText"
                                type="date"
                                name="session_date"
                                required
                                {...register("session_date")}
                            />
                        </label>
                        <span>Start Time</span>
                        <label className="Form--Label">
                            <input
                                className="Form--Input Form--InputText"
                                type="time"
                                name="timelength"
                                required
                                {...register("timelength")}
                            />
                        </label>
                        <span>End Time</span>
                        <label className="Form--Label">
                            <input
                                className="Form--Input Form--InputText"
                                type="time"
                                name="timelength2"
                                required
                                {...register("timelength2")}
                            />
                        </label>
                        <label className="Form--Label">
                            <input
                                className="Form--Input Form--InputText"
                                type="text"
                                placeholder="Session URL"
                                name="conference_url"
                                required
                                {...register("conference_url")}
                            />
                            <span>Session URL</span>
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

export { CreateLiveSession, LiveSessionList }
