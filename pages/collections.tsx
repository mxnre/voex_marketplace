import { BaseLayout } from "@ui";
import { mask, user } from "@assets";
import React, {  useEffect } from 'react';
import Dropdownn from '../../components/voex/components/Dropdownn';


export const Collections = () => {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle");
    },[])
    return (
        <BaseLayout>
    <div>
        <div className="h1-title text-white">
          <main>
            <div className="text-white text-center">
              <h2 className="title_detail_nft">Collections</h2>
              <p style={{color:'#CBCBCB'}}>10,725 Collections</p>
            </div>
         
            <div className="main text-white mb-3">
                <nav className="navbar-expand-lg navbar-dark bg d-flex align-middle justify-content-end" style={{backgroundColor:'#401091',borderRadius:'7px'}}>
                    <div className="container-fluid d-flex align-middle justify-content-end">	                  
                        <div className="navbar-collapse align-middle justify-content-end">
                            <div className="col-2 dropdown mb-3 pt-3">
                                <a className="navbar-brand" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-grip-vertical"></i> Collections <i className="fa-solid fa-angle-down"></i></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'100%',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                    <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'100%',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                    <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'100%',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                    <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'100%',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                    <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'100%',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                    <li><a className="dropdown-item" href="#"><input type="checkbox" name="" id="" /> Collection Name <img src={user.src} alt="user profile" style={{width:'20px',borderRadius:'100%',display:'inline-flex',marginLeft:'5px'}} /></a></li>
                                </ul>
                            </div>                           
                            <div className="col-2 dropdown mb-3 pt-3">
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
                            <div className="col-lg-8 d-flex mb-3 pt-3 justify-content-center justify-content-lg-end columna">
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

            <div className="container pt-4 mb-4">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100 border-0">
                        <img src={user.src} alt="user profile" className="card-img-top"/>
                        <div className="nombre fw-bold d-flex align-middle" style={{width:'10em'}}>
                            <img src={user.src} className="user"/><span style={{color:'#000',margin:'auto'}}>@aruchacds</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fs-4 text-dark">Collection Name</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                        <img src={user.src} alt="user profile" className="card-img-top"/>
                        <div className="nombre fw-bold d-flex align-middle" style={{width:'10em'}}>
                            <img src={user.src} className="user"/><span style={{color:'#000',margin:'auto'}}>@aruchacds</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fs-4 text-dark">Collection Name</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                        <img src={user.src} alt="user profile" className="card-img-top"/>
                        <div className="nombre fw-bold d-flex align-middle" style={{width:'10em'}}>
                            <img src={user.src} className="user"/><span style={{color:'#000',margin:'auto'}}>@aruchacds</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fs-4 text-dark">Collection Name</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0">
                        <img src={user.src} alt="user profile" className="card-img-top"/>
                        <div className="nombre fw-bold d-flex align-middle" style={{width:'10em'}}>
                            <img src={user.src} className="user"/><span style={{color:'#000',margin:'auto'}}>@aruchacds</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fs-4 text-dark">Collection Name</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>		
            <div className='mt-6 mb-5 px-4 pagination d-flex justify-content-center'>
                <button className=' me-4'>
                    {' '}
                    <i className='fa-solid fa-chevron-left'></i> Prev page{' '}
                </button>
                <button className='pagination_page pagination_selected '> 1 </button>
                <button className='pagination_page'> 2 </button>
                <button className='pagination_page'> 3 </button>
                <button className='pagination_page'> 4 </button>
                <button className='pagination_page'> 5 </button>
                <button className='pagination_page'> 6 </button>

                <button className='ms-4'>
                    {' '}
                    Next page <i className='fa-solid fa-chevron-right'></i>{' '}
                </button>
            </div>

          </main>
        </div>
    </div>
    </BaseLayout>
    );
}   
const style = {

    container: {
        marginLeft: "10em",
        marginTop: "2em",
        marginRight: "10em",

    },
    image: {
        width: 250,
        height: 250,
    }
}
export default Collections;