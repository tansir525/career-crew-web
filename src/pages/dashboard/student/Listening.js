import '../../../styles/iteamSection.css'
import '../../../styles/iteamCard.css'
import StudentService from '../../../services/student.service'


const IteamCard = ({ data }) => {

    //console.log(material)
    const { photo, title, file, description, } = data
    return (
        <div className="PostCard">
            <div className="PostCard--Image relative">
                <img src={photo} className="background" alt={title} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="PostCard--Content">
                <h3 className="PostCard--Title">{title}</h3>
                <div className="PostCard--Excerpt">{description}</div>
                <div className="PostCard--Excerpt"><a href={file} target="_blank"><button>View Content</button></a></div>
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


const StudentListening = () => {
    const [listening] = StudentService.useGetListening()
    return (


        <section className="section">
            <div className="container">

                <IteamSection ListData={listening} />

            </div>
        </section>

    )
}

export default StudentListening
