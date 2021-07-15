import { useState, useEffect } from 'react'
import axios from "axios"
import AuthService from '../services/auth.service'

const useGetLiveSession = () => {
    const [liveSession, setliveSession] = useState([])
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
    return [liveSession]
}

const useGetListening = () => {
    const [listening, setlistening] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/" + AuthService.getUserId() + "/")
            .then(res => {
                if (mounted) {
                    setlistening(res.data.listening_modules)
                }
            })
        return () => {
            mounted = false
        }
    }, [setlistening])
    return [listening]
}

const useGetReading = () => {
    const [reading, setreading] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/" + AuthService.getUserId() + "/")
            .then(res => {
                if (mounted) {
                    setreading(res.data.reading_modules)
                }
            })
        return () => {
            mounted = false
        }
    }, [setreading])
    return [reading]
}

const useGetWriting = () => {
    const [writing, setwriting] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/" + AuthService.getUserId() + "/")
            .then(res => {
                if (mounted) {
                    setwriting(res.data.writing_modules)
                }
            })
        return () => {
            mounted = false
        }
    }, [setwriting])
    return [writing]
}

const useGetSpeaking = () => {
    const [speaking, setspeaking] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/teacher/" + AuthService.getUserId() + "/")
            .then(res => {
                if (mounted) {
                    setspeaking(res.data.speaking_modules)
                }
            })
        return () => {
            mounted = false
        }
    }, [setspeaking])
    return [speaking]
}

export default { useGetLiveSession, useGetListening, useGetReading, useGetWriting, useGetSpeaking }