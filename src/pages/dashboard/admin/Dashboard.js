import '../../../styles/iteamCard.css'
import ListeningBanner from "../../../assets/Listening Banner.png";
import ReadingBanner from "../../../assets/Reading Banner.png";
import WritingBanner from "../../../assets/Writing Banner.png";
import SpeakingBanner from "../../../assets/Speaking Banner.png";
import LiveSessionBanner from "../../../assets/LiveSession Banner.png";
import MaterialsBanner from "../../../assets/Materials Banner.png";
import AdminService from '../../../services/admin.service'

const AdminDashboard = () => {
    const [writing] = AdminService.useGetWriting()
    const [reading] = AdminService.useGetReading()
    const [speaking] = AdminService.useGetSpeaking()
    const [listening] = AdminService.useGetListening()
    const [liveSession] = AdminService.useGetLiveSession()
    const [material] = AdminService.useGetMaterial()
    return (
        <main className="Blog">
            <section className="section">
                <div className="container">
                    <div className="PostSection">
                        <div className="PostSection--Grid">
                            <div className="PostCard">
                                <div className="PostCard--Image relative">
                                    <img src={ListeningBanner} className="background" />
                                </div>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {listening.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <div className="PostCard--Image relative">
                                    <img src={ReadingBanner} className="background" />
                                </div>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {reading.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <div className="PostCard--Image relative">
                                    <img src={WritingBanner} className="background" />
                                </div>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {writing.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <div className="PostCard--Image relative">
                                    <img src={SpeakingBanner} className="background" />
                                </div>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {speaking.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <div className="PostCard--Image relative">
                                    <img src={LiveSessionBanner} className="background" />
                                </div>
                                <div className="PostCard--Content">
                                    <h3 className="PostCard--Title">Total: {liveSession.length}</h3>
                                </div>
                            </div>
                            <div className="PostCard">
                                <div className="PostCard--Image relative">
                                    <img src={MaterialsBanner} className="background" />
                                </div>
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

export default AdminDashboard;