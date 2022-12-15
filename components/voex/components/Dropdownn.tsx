import React, {useEffect} from 'react';
import { mask, user } from "@assets";

export const Dropdownn = () => {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle");
    },[])
    return (
      <>
      <div className="main text-white mb-3">
                <nav className="navbar-expand-lg navbar-dark bg d-flex align-middle justify-content-end" style={{backgroundColor:'#401091',borderRadius:'7px'}}>
                  <div className="container-fluid d-flex align-middle justify-content-end">	
                   
                      <div className="navbar-collapse align-middle justify-content-end">
                          <div className="col-2 dropdown mb-3 pt-3">
                              <a className="navbar-brand" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fa-solid fa-grip-vertical"></i> Collections <i className="fa-solid fa-angle-down"></i></a>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                  <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'7px',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                  <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'7px',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                  <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'7px',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                  <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'7px',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                  <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'7px',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                  <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'7px',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                              </ul>
                          </div>
                          <div className="col-2 dropdown mb-3 pt-3">
                              <a className="navbar-brand" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fa-regular fa-image"></i> Sale Type <i className="fa-solid fa-angle-down"></i></a>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Buy</a></li>
                                <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Action</a></li>
                              </ul>
                          </div>
                          <div className="col-1 dropdown mb-3 pt-3">
                              <a className="navbar-brand" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fa-solid fa-clock-rotate-left"></i> Recently Listed <i className="fa-solid fa-angle-down"></i></a>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Price: Low to High</a></li>
                                <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Price: High to Low</a></li>
                                <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Lowest Last Sale</a></li>
                                <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Highest Last Sale</a></li>
                                <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Recently Listed</a></li>
                              </ul>
                          </div>
                          <div className="col-lg-7 d-flex mb-3 pt-3 justify-content-center justify-content-lg-end columna">
                              <form className="buscador">
                                  <input className="form-control me-2 input" type="search" placeholder="Search results" aria-label="Search" style={{backgroundColor:'#fff'}}/>
                                  <div className="icono">
                                      <i className="fa-solid fa-magnifying-glass text-dark"></i>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                </nav>
            </div>
    
      </>
      
  );
}

export default Dropdownn;