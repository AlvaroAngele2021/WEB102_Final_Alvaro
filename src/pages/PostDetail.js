import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../client';
import './PostDetail.css';

const PostDetail = () => {

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDesc] = useState("");
    const [comments, setComments] = useState([]);
    const [updoot, setUpvote] = useState(0);
    const [date, setDate] = useState(null);

    useEffect(() => {

        const fetchInfo = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .eq('id',id);
            setTitle(data[0].title)
            setAuthor(data[0].author)
            setDesc(data[0].description)
            setDate(data[0].created_at.slice(0,10))
            setUpvote(data[0].upvotes)
            setComments(data[0].comments)
        }
        fetchInfo();
    }, [title,author,description,date,id,comments]);

    const pushComment = () => {

        let text = document.getElementById("cmntBox").value;

        console.log(text)

        const updateCom = async () => {
            await supabase
              .from('Posts')
              .update({comments:text})
              .eq('id',id)
        }
        updateCom();

        const fetchInfo = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .eq('id',id);
            setTitle(data[0].title)
            setAuthor(data[0].author)
            setDesc(data[0].description)
            setDate(data[0].created_at.slice(0,10))
            setUpvote(data[0].upvotes)
            setComments(data[0].comments)
        }
        fetchInfo();
    }

    return (
        <>
        <div className="infoPanel">
            <h1>{title}</h1>
            <h4>By: {author}</h4>
            <h4>"{description}"</h4>
            <h4>Creation Date: {date}</h4>
            <h4>Upvotes: {updoot}</h4>
            <h4>Comment: {comments}</h4>
        </div>

        <div className="commentBox">
            <input type="text" id="cmntBox" className="boxCom"></input>
            <button onClick={pushComment}>Publish Comment.</button>
        </div>
        </>
    )
}

export default PostDetail;