// import React from "react";
// import { FindJob1 } from './FindJob1';
import React, { Component } from 'react';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();
  const CreateResumeBtn = () => {
    // alert("hiiiii");
    navigate("/findjob")
  }
  return (
    <div>
      {/* <FindJob1 /> */}
      <section>
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-sm-12 mt-5">
              <h1>Let us Find a job for you</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                quas dolorum ex, nam, rerum omnis aperiam impedit atque
                laudantium voluptatem nisi iusto!
              </p>
              <div className="search-bar">
                <input type="text" className="input-find-job" />
                <button className="btn btn-primary btn-find-job">
                  Find Job
                </button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-center my-5 py-5">
              <div className="circle1 ">
                <div className="circle2">
                  <div className="circle3">
                    <img
                      src="/assets/images/man.png"
                      className="img-fluid profile-img my-4"
                      alt="persion"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="find-job">
        <div className="container-fluid">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-6 col-sm-12 py-5">
                <h1> Let Emploers Find You</h1>
                <p className="">
                  Get best Matched at your Email. Sign up Today
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-center">
                <div className="btn btn-success btn-circle" onClick={() => CreateResumeBtn()}>
                  Create Your Resume
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="popular-category text-center py-5">
            <h1>Popular Categories</h1>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon1.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Digital Marketing</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon2.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Photography</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon3.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Ui/Ux Designer </h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon4.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Account/Finance</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon5.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Customer Care</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon6.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Health Care</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon7.jpg"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Automative Jobs </h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="col-md-3 col-sm-12 text-center">
              <img
                src="/assets/images/icon8.png"
                className="img-fluid profile-img my-4"
                alt="persion"
              />
              <h5>Design</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="show-btn text-center m-auto my-5">
              <div className="btn btn-primary">Show More</div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-sec py-5">
        <div className="container-fluid">
          <div className="container text-center">
            <h2 className="text-center pb-4">How Company Work</h2>
            <div className="row">
              <div className="col-md-2 col-sm-12">

              </div>
              <div className="col-md-8 col-sm-12">
                <iframe
                  id="video-sec"
                  className="player"
                  src="https://www.youtube.com/embed/jDLuJLoaA_g?si=Q9U5CfwZVmlPbw2q"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-md-2 col-sm-12">

              </div>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-center pt-5"> How it Work</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quod
            consectetur odit adipisci quidem, dolor exercitationem ea beatae eum
            voluptatem ut rerum!
          </p>
        </div>
        <div className="row">
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-3 col-sm-12">
            <div class="card">
              <div class="card-body text-center ">
                <img
                  src="/assets/images/icon4.png"
                  className="img-fluid profile-img my-4"
                  alt="persion"
                />
                <h5>Search Job </h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div class="card">
              <div class="card-body text-center">
                <img
                  src="/assets/images/icon1.png"
                  className="img-fluid profile-img my-4"
                  alt="persion"
                />
                <h3>Apply For Job</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div class="card">
              <div class="card-body text-center">
                <img
                  src="/assets/images/icon7.jpg"
                  className="img-fluid profile-img my-4 "
                  alt="persion"
                />
                <h5>Get Your Job</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-sm-12"></div>
        </div>
      </section>

      <section className='client-review-home-page'>
        <div className="container-fluid">
          <div className="container">
            <div className="text-center pt-5">
              <h2>What Client Says</h2>

            </div>

          </div>
        </div>
        <Slider {...settings}>
          <div>
            <div className="container pt-2">
              <div className="card client-review-card-home">
                <div className="card-body ">
                  <div className="quote-sec text-center pb-3">
                    <i class="fa fa-quote-left quote-green" aria-hidden="true"></i>
                  </div>


                  <div className="text-center justify-content-center m-auto">
                    <div className="d-flex py-3 ">

                      <img src="/assets/images/client1.jpeg" className='img-fluid client-review-img-home' alt="" />
                      &nbsp;&nbsp;&nbsp;
                      <div className="cheild-client-sec">
                        <h5>Zolton Neemith</h5>
                        <p>CEO OF XYZ LAB</p>
                        <div className="d-flex">
                          <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                          <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                          <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                          <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                          <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                  <p><i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp; &nbsp;
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium, itaque reprehenderit nesciunt et cumque veritatis
                    voluptates doloribus maiores blanditiis pariatur sint.
                    Atque nihil saepe labore cupiditate reprehenderit amet
                    quos consequatur distinctio aperiam maxime! &nbsp; &nbsp;
                    <i class="fa fa-quote-right" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>   <div className="container pt-2">
            <div className="card client-review-card-home">
              <div className="card-body ">
                <div className="quote-sec text-center pb-3">
                  <i class="fa fa-quote-left quote-green" aria-hidden="true"></i>
                </div>


                <div className="text-center justify-content-center m-auto">
                  <div className="d-flex py-3 ">

                    <img src="/assets/images/client2.jpeg" className='img-fluid client-review-img-home' alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <div className="cheild-client-sec">
                      <h5>William Henery</h5>
                      <p>CEO OF XYZ LAB</p>
                      <div className="d-flex">
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
                <p><i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp; &nbsp;
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, itaque reprehenderit nesciunt et cumque veritatis
                  voluptates doloribus maiores blanditiis pariatur sint.
                  Atque nihil saepe labore cupiditate reprehenderit amet
                  quos consequatur distinctio aperiam maxime! &nbsp; &nbsp;
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
          </div>
          <div>             <div className="container pt-2">
            <div className="card client-review-card-home">
              <div className="card-body ">
                <div className="quote-sec text-center pb-3">
                  <i class="fa fa-quote-left quote-green" aria-hidden="true"></i>
                </div>


                <div className="text-center justify-content-center m-auto">
                  <div className="d-flex py-3 ">

                    <img src="/assets/images/client3.jpeg" className='img-fluid client-review-img-home' alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <div className="cheild-client-sec">
                      <h5>Joseph Dumont</h5>
                      <p>CEO OF XYZ LAB</p>
                      <div className="d-flex">
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
                <p><i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp; &nbsp;
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, itaque reprehenderit nesciunt et cumque veritatis
                  voluptates doloribus maiores blanditiis pariatur sint.
                  Atque nihil saepe labore cupiditate reprehenderit amet
                  quos consequatur distinctio aperiam maxime! &nbsp; &nbsp;
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
          </div>
          <div>             <div className="container pt-2">
            <div className="card client-review-card-home">
              <div className="card-body ">
                <div className="quote-sec text-center pb-3">
                  <i class="fa fa-quote-left quote-green" aria-hidden="true"></i>
                </div>


                <div className="text-center justify-content-center m-auto">
                  <div className="d-flex py-3 ">

                    <img src="/assets/images/emp5.jpeg" className='img-fluid client-review-img-home' alt="" />
                    &nbsp;&nbsp;&nbsp;
                    <div className="cheild-client-sec">
                      <h5>Lyraa Neemith</h5>
                      <p>CEO OF XYZ LAB</p>
                      <div className="d-flex">
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                        <i class="fa fa-star" aria-hidden="true"></i>&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
                <p><i class="fa fa-quote-left" aria-hidden="true"></i>&nbsp; &nbsp;
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, itaque reprehenderit nesciunt et cumque veritatis
                  voluptates doloribus maiores blanditiis pariatur sint.
                  Atque nihil saepe labore cupiditate reprehenderit amet
                  quos consequatur distinctio aperiam maxime! &nbsp; &nbsp;
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
          </div>
        </Slider>
      </section>

    </div>
  );
}

export default Homepage;
