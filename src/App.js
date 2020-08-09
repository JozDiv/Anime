import React from 'react';
import Menu from './components/Menu';
import ReactPlayer from "react-player";
import './App.css';

function App() {
  return (
    <div className="container">
      <Menu />
<footer className="page-footer bg-dark">
      <br/>
  <div >
    <div className="row d-flex justify-content-center">    
        <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zQaJIiG6aAk&t=2s"/>
        </div>
    </div>
  </div>
  <div className="footer-copyright text-center text-white py-3">© 2020 Copyright:
    <a href="/"> Anime Ultime</a>
  </div>
</footer>
    </div>
  );
}

export default App;
