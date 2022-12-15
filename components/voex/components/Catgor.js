import Link from 'next/link';
import React from 'react';



const catgor= () => (
  <div className='row d-flex justify-content-center flex-wrap'>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link href="">
      <a  className="icon-box style-2 rounded">
      <div>   <i className="fa fa-image"></i>
            <span>Art</span></div>
      </a>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link  href="">
         <a className="icon-box style-2 rounded">
         <div> <i className="fa fa-music"></i>
            <span>Audio</span></div>
         </a>
        </Link>
    </div>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link href="">
          <a  className="icon-box style-2 rounded">
          <div>
          <i className="fa fa-vcard"></i>
            <span>Video</span>
          </div>
          </a>
        </Link>
    </div>

    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link  href="">
        <a className="icon-box style-2 rounded">
        <div>
          <i className="fa fa-vcard"></i>
            <span>Written Works</span>
          </div>
        </a>
        </Link>
    </div>

   


   
  </div>
);
export default catgor;