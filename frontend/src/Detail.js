import React ,{useState,useEffect } from 'react';
import {useParams} from "react-router-dom";

function Detail(){
    const {name} = useParams();
    const [detail,setDetail] = useState([]);
    const getDetail  = async() => {
        const json = await ( await fetch(`http://127.0.0.1:8000/detail/${name}`)).json()
        setDetail(json);
    }

    useEffect(()=>{
        getDetail();
    },[])
    return (
        <div>
            <h1>Detail information of The man</h1>
            <p>info : {detail.info}</p>
            <p>money : {detail.money}</p>
            <p>married : {detail.married}</p>
        </div>
    )
}

export default Detail;