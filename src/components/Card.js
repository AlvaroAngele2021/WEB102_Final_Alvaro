import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import './Card.css'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const getCount = async (event) => {
        const { data } = await supabase
        .from('Posts')
        .select()
        .eq('id',props.id);
        setCount(data[0].upvotes)
    }
    getCount();
  },[props]);

  const updateCount = async (event) => {
    event.preventDefault();

    await supabase
    .from('Posts')
    .update({ upvotes: count + 1})
    .eq('id', props.id)

    setCount((count) => count + 1);
  }

  

  return (
      <div className="Card">
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{"Submitted by: " + props.author}</h3>
          <p className="time_entered">{"Submitted at: " + props.time.slice(0,10) + " " + props.time.slice(11,19)}</p>
          <p className="description">{props.description}</p>
          <button className="betButton" onClick={updateCount} >▲ Upvotes: {count}</button><br></br>
          <Link to={'edit/'+ props.id} style={{ color: '#FFF' }}>Edit Post</Link><br></br>
          <Link to={'view/'+ props.id} style={{ color: '#FFF' }}> More Info</Link>
      </div>
  );
};

export default Card;