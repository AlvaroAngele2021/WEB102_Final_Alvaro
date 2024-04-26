import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../client';
import './EditMate.css';

const EditMate = () => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: 0, color: ""});

    const updatePost = async () => {
        await supabase
        .from('mates')
        .update({ name: post.name, speed: post.speed,  color: post.color})
        .eq('id', id);
        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        
        await supabase
        .from('mates')
        .delete()
        .eq('id', id); 
        window.location = "http://localhost:3000/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
            <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="text" id="color" name="color" onChange={handleChange} /><br />
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditMate