import React from 'react';
import {BsFillBagCheckFill} from 'react-icons/bs'

const NavBar = () => {
    return(
        <>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="nav-link" href="/CartWidget"><BsFillBagCheckFill/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Exposiciones">Exposiciones</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
            
        </>
    );
        
    
    }
    export default NavBar