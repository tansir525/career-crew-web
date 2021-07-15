import { useState, useEffect } from 'react'
import axios from "axios"


const useGetLiveSession = () => {
    const [liveSession, setliveSession] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/livesession/")
            .then(res => {
                if (mounted) {
                    setliveSession(res.data)
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
        axios.get("http://127.0.0.1:8000/listeningmodule/")
            .then(res => {
                if (mounted) {
                    setlistening(res.data)
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
        axios.get("http://127.0.0.1:8000/readingmodule/")
            .then(res => {
                if (mounted) {
                    setreading(res.data)
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
        axios.get("http://127.0.0.1:8000/writingmodule/")
            .then(res => {
                if (mounted) {
                    setwriting(res.data)
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
        axios.get("http://127.0.0.1:8000/speakingmodule/")
            .then(res => {
                if (mounted) {
                    setspeaking(res.data)
                }
            })
        return () => {
            mounted = false
        }
    }, [setspeaking])
    return [speaking]
}

const useGetMaterial = () => {
    const [material, setmaterial] = useState([])
    useEffect(() => {
        let mounted = true
        axios.get("http://127.0.0.1:8000/material/")
            .then(res => {
                if (mounted) {
                    setmaterial(res.data)
                }
            })
        return () => {
            mounted = false
        }
    }, [setmaterial])
    return [material]
}

export default { useGetLiveSession, useGetListening, useGetReading, useGetWriting, useGetSpeaking, useGetMaterial }