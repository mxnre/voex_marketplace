import { author1, author2, author3, author4, author5, author6, author7, author8, author9,author10,author11,author12 } from '@assets';
import React from 'react';

const authorlist= () => (
  <div>
    <ol className="author_list">
      <li>                                    
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">
                  <img className="lazy" src={author1.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>                                    
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Monica Lucas</span>
              <span className="bot">3.2 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author2.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Mamie Barnett</span>
              <span className="bot">2.8 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author3.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Nicholas Daniels</span>
              <span className="bot">2.5 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author4.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Lori Hart</span>
              <span className="bot">2.2 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author5.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Jimmy Wright</span>
              <span className="bot">1.9 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author6.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Karla Sharp</span>
              <span className="bot">1.6 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author7.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Gayle Hicks</span>
              <span className="bot">1.5 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author8.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Claude Banks</span>
              <span className="bot">1.3 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author9.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Franklin Greer</span>
              <span className='bot'>0.9 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author10.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Stacy Long</span>
              <span className='bot'>0.8 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author11.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Ida Chapman</span>
              <span className='bot'>0.6 ETH</span>
          </div>
      </li>
      <li>
          <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")} className="text-white">                                    
                  <img className="lazy" src={author12.src} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
          </div>
          <div className="author_list_info text-white">
              <span onClick={()=> window.open("", "_self")} className="text-white">Fred Ryan</span>
              <span className='bot'>0.5 eth</span>
          </div>
      </li>
    </ol>
  </div>
);
export default authorlist;
