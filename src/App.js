import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'




function App() {
  return (
   
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="yu" style={{color:'#5e8ea2'}} ><span style={{color:'#5e8ea2' }}><FontAwesomeIcon icon={faHouse} /></span> Estately</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="yu">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="yu">Our Properties</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="yu">Agents</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="yu">Blog</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="yu">Login/SignUp</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="yu"><button type="button" class="btn btn-sm" >contact Us</button></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>





     
    
    </>
  )
}

export default App;
