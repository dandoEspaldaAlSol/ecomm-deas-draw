import React from 'react';
import {BsFillBagCheckFill} from 'react-icons/bs'

const NavBar = () => {
    return(
        <>
     <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="nav-link" href='/CartWidget'><BsFillBagCheckFill/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Exposiciones">Exposiciones</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 
            
        </>
    );
        
    
    }
    export default NavBar