import React from 'react'

import IteamCard from './IteamCard'
import '../styles/iteamSection.css'

const IteamSection = (props) => {
    const courseData = props.courseData
    return (
        <div className="PostSection">
            <div className="PostSection--Grid">
                {
                    courseData.map((course) =>
                        <IteamCard
                            key={course.id}
                            course={course}
                        />
                    )
                }
            </div>
        </div>
    )
}


export default IteamSection
