export const useInstrator = ()=>{
    const [ourInstractor,setOurInsTractor] = useState([])
    const [instractorLoading,setInstractorLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:9000/instractor')
        .then(res => res.json())
        .then(data => {
            setOurInsTractor(data)
            setInstractorLoading(false)
        })
    },[])
    return [ourInstractor,instractorLoading]
}