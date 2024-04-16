import React, { Component } from 'react';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CompanyDetails() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (

        <div>

            <section>
                <div className="container-fluid company-background">
                    <div className="container ">
                        <div className="row d-flex align-items-center ">
                            <div className="col-md-1 col-sm-12"></div>
                            <div className="col-md-4 col-sm-12 text-center py-5">

                                <div className="circle3 text-center">
                                    <img src="/assets/images/companylogo.png" className="img-fluid profile-img my-5" alt="persion" />
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <h1>XYZ PVT LTD. </h1>
                                <h5 className='text-primary'>Kolkata WestBangal</h5>
                                <p>  Digital Marketing Company</p>
                                <button className="btn btn-primary my-3">Post Job</button>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body text-center">
                                    <img className='img-fluid my-3' src="/assets/images/public-service.png" alt="" />
                                    <h5>Digital Marketing</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="">View Details...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body text-center">
                                    <img className='img-fluid my-3' src="/assets/images/public-service-4.png" alt="" />
                                    <h5>Track Employee</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="">View Details...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body text-center">
                                    <img className='img-fluid my-3' src="/assets/images/public-service-2.png" alt="" />
                                    <h5>performence Appraisal</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="">View Details...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body text-center">
                                    <img className='img-fluid my-3' src="/assets/images/public-service-1.png" alt="" />
                                    <h5>Terms and Conditions</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="">View Details...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card shadow mt-5" >
                                <div className="card-body text-center">
                                    <img className='img-fluid my-3' src="/assets/images/public-service-3.png" alt="" />
                                    <h5>Target & Planner</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="">View Details...</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="employee-details text-center ">
                        <h2>Employee Details</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-1 col-sm-12"></div>
                        <div className="col-md-5 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body ">
                                    <div className="d-flex ">
                                        <img className='img-fluid employee-card' src="/assets/images/emp1.jpeg" alt="" /> &nbsp;&nbsp;
                                        <div className="d-inline">
                                            <h5>Employee Details</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                atque quibusdam optio ipsa voluptas,
                                                itaque quos quasi facilis!</p>
                                            <a href="" className='text-center m-auto' >View Details...</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body">
                                    <div className="d-flex ">
                                        <img className='img-fluid employee-card' src="/assets/images/emp2.jpeg" alt="" /> &nbsp;&nbsp;
                                        <div className="d-inline">
                                            <h5>Work on progress</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                atque quibusdam optio ipsa voluptas,
                                                itaque quos quasi facilis!</p>
                                            <a href="" className='text-center m-auto' >View Details...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 col-sm-12"></div>
                        <div className="col-md-5 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body ">
                                    <div className="d-flex ">
                                        <img className='img-fluid employee-card' src="/assets/images/emp3.jpeg" alt="" /> &nbsp;&nbsp;
                                        <div className="d-inline">
                                            <h5>Attendence</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                atque quibusdam optio ipsa voluptas,
                                                itaque quos quasi facilis!</p>
                                            <a href="" className='text-center m-auto' >View Details...</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body">
                                    <div className="d-flex ">
                                        <img className='img-fluid employee-card' src="/assets/images/emp4.jpeg" alt="" /> &nbsp;&nbsp;
                                        <div className="d-inline">
                                            <h5>Skill Cards</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                atque quibusdam optio ipsa voluptas,
                                                itaque quos quasi facilis!</p>
                                            <a href="" className='text-center m-auto' >View Details...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12"></div>
                        <div className="col-md-5 col-sm-12">
                            <div className="card shadow mt-5">
                                <div className="card-body">
                                    <div className="d-flex ">
                                        <img className='img-fluid employee-card' src="/assets/images/emp5.jpeg" alt="" /> &nbsp;&nbsp;
                                        <div className="d-inline">
                                            <h5>Score Cards</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                atque quibusdam optio ipsa voluptas,
                                                itaque quos quasi facilis!</p>
                                            <a href="" className='text-center m-auto' >View Details...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid company-background">
                    <div className="container ">
                        <div className="text-center py-5">
                            <h2 className=''>Financial</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iusto aspernatur quos, error voluptas qui modi sed natus vel!</p>
                        </div>
                        <div className="row ">
                            <div className="col-md-4 col-sm-12">
                                <div className="card shadow mb-5">
                                    <div className="card-body">
                                        <div className="d-flex ">
                                            <img className='img-fluid employee-card2' src="/assets/images/accounting.png" alt="" /> &nbsp;&nbsp;
                                            <div className="d-inline">
                                                <h5>Salary Account</h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    atque quibusdam !</p>
                                                <a href="" className='text-center m-auto' >View Details...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card shadow mb-5">
                                    <div className="card-body">
                                        <div className="d-flex ">
                                            <img className='img-fluid employee-card2' src="/assets/images/salary.png" alt="" /> &nbsp;&nbsp;
                                            <div className="d-inline">
                                                <h5>Bill history</h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    atque quibusdam </p>
                                                <a href="" className='text-center m-auto' >View Details...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card shadow mb-5">
                                    <div className="card-body">
                                        <div className="d-flex ">
                                            <img className='img-fluid employee-card2' src="/assets/images/piggy-bank.png" alt="" /> &nbsp;&nbsp;
                                            <div className="d-inline">
                                                <h5>Tax Account</h5>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    atque quibusdam</p>
                                                <a href="" className='text-center m-auto' >View Details...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="text-center my-5">
                        <h2>New Hiring</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita officia quisquam, hic reprehenderit provident animi tempore nemo qui ipsam consequatur sunt.</p>
                    </div>

                    <Slider {...settings}>
                        <div>
                            <div className="row">
                                <div className="col-md-1 col-sm-12"></div>
                                <div className="col-md-3 col-sm-12 py-3">
                                    <div className="card shadow img-slider">
                                        <div className="card-body text-center m-auto">
                                            <img className="img-fluid" src="/assets/images/emp5.jpeg" />
                                            <h5>Hiring Cards</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illo consequatur! At porro veritatis quasi earum incommodi beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 py-3">
                                    <div className="card shadow img-slider">
                                        <div className="card-body text-center">
                                            <img className="img-fluid" src="/assets/images/hand2.jpg" alt="" />
                                            <h5>New Partner</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illo consequatur! At porro veritatis quasi earum incommodi beatae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 py-3">
                                    <div className="card shadow img-slider">
                                        <div className="card-body text-center">
                                            <img src="/assets/images/office.jpg" className="img-fluid" alt="" />
                                            <h5>fresher tranning</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illo consequatur! At porro veritatis quasi earum incommodi beatae!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </section>
            <section>
                <div className="container-fluid company-background">
                    <div className="container ">
                        <div className="text-center py-5">
                            <h2 className=''>Job Posts</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iusto aspernatur quos, error voluptas qui modi sed natus vel!</p>
                        </div>
                        <div className="row ">
                            <div className="col-md-4 col-sm-12">
                                <div className="card shadow mb-2">
                                    <div className="card-body">
                                        <img className='img-fluid' src="/assets/images/hand2.jpg" alt="" /> &nbsp;&nbsp;
                                    </div>
                                </div>
                                <div className="text-center my-2">
                                    <h5>Our Partner</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        atque quibusdam !</p>
                                    <a href="" className='text-center m-auto' >View Details...</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card shadow mb-2">
                                    <div className="card-body">
                                        <img className='img-fluid' src="/assets/images/office.jpg" alt="" /> &nbsp;&nbsp;
                                    </div>
                                </div>
                                <div className="text-center my-2">
                                    <h5>Post New Job</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        atque quibusdam !</p>
                                    <a href="" className='text-center m-auto' >View Details...</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card shadow mb-2">
                                    <div className="card-body">
                                        <img className='img-fluid' src="/assets/images/office2.jpg" alt="" /> &nbsp;&nbsp;
                                    </div>
                                </div>
                                <div className="text-center my-2">
                                    <h5>Works Available</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        atque quibusdam !</p>
                                    <a href="" className='text-center m-auto' >View Details...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>



            </section>
        </div>
    )
}

export default CompanyDetails

