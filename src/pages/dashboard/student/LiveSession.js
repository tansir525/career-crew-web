import '../../../styles/iteamSection.css'
import '../../../styles/iteamCard.css'
import StudentService from '../../../services/student.service'


const IteamCard = ({ data }) => {

    //console.log(material)
    const { photo, title, conference_url, description, session_date, timelength } = data
    return (
        <div className="PostCard">
            <div className="PostCard--Image relative">
                <img src={photo} className="background" alt={title} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="PostCard--Content">
                <h3 className="PostCard--Title">{title}</h3>
                <div className="PostCard--Excerpt">{description}</div>
                <div className="PostCard--Excerpt"><b>{session_date}</b> From <b>{timelength}</b></div>
                <div className="PostCard--Excerpt"><a href={conference_url} target="_blank"><button>Session URL</button></a></div>
            </div>
        </div>
    )
}

const IteamSection = (props) => {
    const ListData = props.ListData
    return (
        <div className="PostSection">
            <div className="PostSection--Grid">
                {
                    ListData.map((data) =>
                        <IteamCard
                            key={data.id}
                            data={data}
                        />
                    )
                }
            </div>
        </div>
    )
}


const StudentLiveSession = () => {
    const [liveSession] = StudentService.useGetLiveSession()
    return (


        <section className="section">
            <div className="container">

                <IteamSection ListData={liveSession} />

            </div>
        </section>

    )
}

export default StudentLiveSession
