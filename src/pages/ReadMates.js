import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'

const ReadMates = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('mates')
              .select()
              .order('created_at', { ascending: true });
            setPosts(data)
          }
        fetchPosts();
    }, [props]);
    
    return (
        <div className="ReadPosts"> {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} speed={post.speed} color={post.color}/>
                ) : <h2>{"No Crewmates."}</h2>
            }
        </div>  
    )
}

export default ReadMates;