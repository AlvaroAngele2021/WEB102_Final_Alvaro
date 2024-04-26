import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import ReadMates from './pages/ReadMates'
import CreateMate from './pages/CreateMate'
import EditMate from './pages/EditMate'
import CrewDetail from './pages/CrewDetail'

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
      element:<ReadMates data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditMate data={posts}/>
    },
    {
      path:"/new",
      element: <CreateMate/>
    },
    {
      path:"/view/:id",
      element: <CrewDetail data={posts}/>
    }
  ]);

  return ( 
    <div className="App">
      <div className="header">
        <h1>👨‍🚀 Space Crewmates 👩‍🚀</h1>
        <h5>Add to my crewmate collection!</h5>
        <Link to="/"><button className="headerBtn"> See Crewmates 🛰️</button></Link>
        <Link to="/new"><button className="headerBtn"> Submit Crewmate 🪐</button></Link>
      </div>
        {element}
    </div>
  );
}

export default App;