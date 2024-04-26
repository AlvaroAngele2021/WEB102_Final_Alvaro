import React from 'react';
import { useState } from 'react';
import { supabase } from '../client';
import './CreateMate.css';

const CreateMate = () => {

    const [post, setPost] = useState({name: "", speed: 0, color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
        await supabase
        .from('mates')
        .insert({name: post.name, speed: post.speed, color: post.color})
        .select();
        window.location = "/";
    }

    return (
        <div className="cardMate">
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
                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreateMate;