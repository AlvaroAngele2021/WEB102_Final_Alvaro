import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetail from './pages/PostDetail'

const App = () => {

  const posts = [
      {'id':'', 
      'title': '',
      'author':'', 
      'description': ''},
      {'id':'', 
      'title': '',
      'author':'', 
      'description':''},
      {'id':'', 
      'title': '',
      'author':'', 
      'description':''},
      {'id':'', 
      'title': '',
      'author':'', 
      'description':''},
  ]
  
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"view/:id",
      element: <PostDetail data={posts}/>
    }
  ]);

  return ( 
    <div className="App">
      <div className="header">
        <h1>🍪 Ultimate Cookie Forum v1.0 🍪</h1>
        <h3>Discuss anything about cookies in this tiny forum!</h3>
        <Link to="/"><button className="headerBtn"> See Posts </button></Link>
        <Link to="/new"><button className="headerBtn"> Submit Post </button></Link>
      </div>
        {element}
    </div>
  );
}

export default App;