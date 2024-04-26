import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../client';
import './CrewDetail.css';

const CrewDetail = () => {

    const {id} = useParams();
    const [name, setName] = useState("");
    const [speed, setSpeed] = useState("");
    const [color, setColor] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {

        const fetchInfo = async () => {
            const {data} = await supabase
            .from('mates')
            .select()
            .eq('id',id);
            setName(data[0].name)
            setSpeed(data[0].speed)
            setColor(data[0].color)
            setDate(data[0].created_at.slice(0,10))
        }
        fetchInfo();
    }, [name,speed,color,date,id]);

    return (
        <>
        <div className="infoPanel">
            <h1>{name}</h1>
            <h4>Speed: {speed}</h4>
            <h4>Color: {color}</h4>
            <h4>Creation Date: {date}</h4>
        </div>
        </>
    )
}

export default CrewDetail;