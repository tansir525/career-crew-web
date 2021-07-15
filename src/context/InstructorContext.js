import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import AuthService from '../services/auth.service'

export const InstructorContext = createContext()



export const InstructorProvider = (props) => {
    const [liveSession, setliveSession] = useState([])
    const [listeningModule, setlisteningModule] = useState([])
    const [readingModule, setreadingModule] = useState([])
    const [writingModule, setwritingModule] = useState([])
    const [speakingModule, setspeakingModule] = useState([])
    const [userInfo, setuserInfo] =  useState([])

    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/" + AuthService.getUserId() + "/")
            .then(res => {
                if (mounted) {
                   setliveSession(res.data.livesessions) 
                }
            })
            return () => {
                mounted = false
            }
    }, [setliveSession])

    return (
        <InstructorContext.Provider value={[liveSession, setliveSession]}>
            {props.children}
        </InstructorContext.Provider>
    )
}