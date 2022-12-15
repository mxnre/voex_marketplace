import React, { Component } from "react";
import Slider from "react-slick";
import { author1, author2, author3, author4, author5, author6, coll1, coll2, coll3, coll4, coll5, coll6}from '@assets'

class CustomSlide extends Component<any, any> {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
        <div className='nft'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src={coll1.src} className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/home", "_self")}><img className="lazy" src={author1.src} alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/home", "_self")}><h4>Abstraction</h4></span>
                      <span>ERC-192</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src={coll2.src} className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src={author2.src} alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Patternlicious</h4></span>
                      <span>ERC-61</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src={coll3.src} className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src={author3.src} alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Skecthify</h4></span>
                      <span>ERC-126</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src={coll4.src} className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src={author4.src} alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Cartoonism</h4></span>
                      <span>ERC-73</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src={coll5.src} className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src={author5.src} alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Virtuland</h4></span>
                      <span>ERC-85</span>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={6}>
              <div className="nft_coll">
                  <div className="nft_wrap">
                      <span><img src={coll6.src} className="lazy img-fluid" alt=""/></span>
                  </div>
                  <div className="nft_coll_pp">
                      <span onClick={()=> window.open("/#", "_self")}><img className="lazy" src={author6.src} alt=""/></span>
                      <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                      <span onClick={()=> window.open("/#", "_self")}><h4>Papercut</h4></span>
                      <span>ERC-42</span>
                  </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
    );
  }
}
