import '../../../styles/iteamCard.css'
import StudentService from '../../../services/student.service'
import ListeningBanner from "../../../assets/Listening Banner.png";
import ReadingBanner from "../../../assets/Reading Banner.png";
import WritingBanner from "../../../assets/Writing Banner.png";
import SpeakingBanner from "../../../assets/Speaking Banner.png";
import LiveSessionBanner from "../../../assets/LiveSession Banner.png";
import MaterialsBanner from "../../../assets/Materials Banner.png";
import { Link } from 'react-router-dom'

const InstructorDashboard = () => {
    const [writing] = StudentService.useGetWriting()
    const [reading] = StudentService.useGetReading()
    const [speaking] = StudentService.useGetSpeaking()
    const [listening] = StudentService.useGetListening()
    const [liveSession] = StudentService.useGetLiveSession()
    const [material] = StudentService.useGetMaterial()
    return (
        <main className="Blog">
            <section className="section">
                <div className="container">
                    <div className="PostSection">
                        <div className="PostSection--Grid">
                            <div className="PostCard">
                                <Link to="/dashboard/student/listening">
                                    <div className="PostCard--Image relative">
                                        <img src={ListeningBanner} className="background" />
                                    </div>
                                </Link>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {listening.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <Link to="/dashboard/student/reading">
                                    <div className="PostCard--Image relative">
                                        <img src={ReadingBanner} className="background" />
                                    </div>
                                </Link>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {reading.length}</h3>
                                </div>


                            </div>
                            <div className="PostCard">
                                <Link to="/dashboard/student/writing">
                                    <div className="PostCard--Image relative">
                                        <img src={WritingBanner} className="background" />
                                    </div>
                                </Link>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {writing.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <Link to="/dashboard/student/speaking">
                                    <div className="PostCard--Image relative">
                                        <img src={SpeakingBanner} className="background" />
                                    </div>
                                </Link>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {speaking.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <Link to="/dashboard/student/livesession">
                                    <div className="PostCard--Image relative">
                                        <img src={LiveSessionBanner} className="background" />
                                    </div>
                                </Link>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {liveSession.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <Link to="/dashboard/student/material">
                                    <div className="PostCard--Image relative">
                                        <img src={MaterialsBanner} className="background" />
                                    </div>
                                </Link>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {material.length}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>


    )
}

export default InstructorDashboard