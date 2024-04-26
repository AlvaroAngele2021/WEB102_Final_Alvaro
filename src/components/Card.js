import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import amoguspic from "./Assets/amongus_outline.png"

const Card = (props) =>  {
  return (
      <div className="Card">
          <h2 className="Name">{props.name + " ඞ"}</h2>
          <img src={amoguspic} height="185" width="200" alt="amogus"></img><br></br>
          <Link to={'view/'+ props.id} style={{ color: '#FFF' }}>View Info</Link><br></br>
          <Link to={'edit/'+ props.id} style={{ color: '#FFF' }}>Edit</Link>
      </div>
  );
};

export default Card;