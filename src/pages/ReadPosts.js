import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'
import './ReadPosts.css';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [flipflop, setOrderTick] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select()
              .order('created_at', { ascending: true });
            // set state of posts
            setPosts(data)
          }
        fetchPosts();
    }, [props]);

    const sorting = () => {
        const fetchPostsAsc = async () => {
            const {data} = await supabase
              .from('Posts')
              .select()
              .order('upvotes', { ascending: true });
            // set state of posts
            setPosts(data)
          }

          const fetchPostsDesc = async () => {
            const {data} = await supabase
              .from('Posts')
              .select()
              .order('upvotes', { ascending: false });
            // set state of posts
            setPosts(data)
          }


        if (flipflop === 0){
            fetchPostsAsc();
            setOrderTick(1);
        } else {
            fetchPostsDesc();
            setOrderTick(0);
        }
    }

    const searchByTitle = () =>{
        let text = document.getElementById("textBox").value;

        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select()
              .eq('title', text)
            // set state of posts
            setPosts(data)
          }
        fetchPosts();
    }
    
    return (
        <>
        <div className="actions">
            <button onClick={sorting}>Sort by Upvotes</button>
            <input type="text" id="textBox" className="sortBox"></input>
            <button onClick={searchByTitle}>Search by Title</button>
        </div>
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description} time={post.created_at}/>
                ) : <h2>{'No Available Posts.'}</h2>
            }
        </div>
        </>
    )
}

export default ReadPosts;