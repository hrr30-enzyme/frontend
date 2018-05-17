import React, { Component } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group' 

import Navbar from '../components/Navbar'

const Div = styled.div`
  .top-pic: 100vh;
  .min-height: 650px;
  padding-top: 0;
  padding-bottom: 0;
  background-size: cover;
  background-position: center center;
  -webkit-transition: all 1s linear;
  -moz-transition: all 1s linear;
  -o-transition: all 1s linear;
  transition: all 1s linear;
  > .logo-container {
    padding: 
    max-width: 1100px;
    grid-column: 2/3;
  }
  > .top-pic {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    align-content: center;
    justify-content: center;
    height: 100vh;
    min-height: 650px;
    background-color: #FFA500
  }
`;

const transparentNav = styled.nav`
  width: 100%;
  position: fixed;  
  display: grid;
  padding-left: .6em;
  grid-template-columns: 5em auto 5em 5em;
  height: 2.3em;
  align-items: center;
  border-bottom: solid transparent;
  top: 0;
  border-width: 1px;
  font-weight: bold;
  -webkit-transition: all 1s linear;
  -moz-transition: all 1s linear;
  -o-transition: all 1s linear;
  transition: all 1s linear;
  > .nav-item {
    display: inline
  }
  > .nav-title {
    grid-column: 1 / 2;
  }
  > .nav-questions {
    grid-column: 2 / 3;
  }
  > .nav-auth {
    cursor: pointer;
    color: #00b273;
  }
  > .nav-auth:hover {
    color: #00ffa5;
  }
`;

const mainNav = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  margin-top: 0px;
  padding-left: .6em;
  grid-template-columns: 5em auto 5em 5em;
  height: 2.3em;
  align-items: center;
  background-color: #ffffff;
  border-bottom: solid #888;
  border-width: 1px;
  font-weight: bold;
  top: 0;
  > .nav-item {
    display: inline
  }
  > .nav-title {
    grid-column: 1 / 2;
  }
  > .nav-questions {
    grid-column: 2 / 3;
  }
  > .nav-auth {
    cursor: pointer;
    color: gray;
  }
  > .nav-auth:hover {
    color: #00b273;
  }
`;

const Logo = styled.h1`
  color:#a500ff;
  font-size: 10em;
  > span {
    font-size: .84em;
  }
`;

const Tagline = styled.p`
  text-align: center;
  display: block;
  color: #a500ff;
  font-size: 3em;
  font-weight: bold;
`

export default class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: false,
      scroll: 0,
    }
    transparentNav.linkColor = '#00b273';
    transparentNav.linkColorHover = '#00ffa5';
  }

  navStyle() {
    return this.state.scrolled ? mainNav : transparentNav
  }

  componentDidMount() {
    window.onscroll = () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 20) {
        this.setState({
          scrolled: true,
          scroll: window.pageYOffset,
        });
      } else {
        this.setState({
          scrolled: false,
          scroll: window.pageYOffset,
        });
      }
    }
  }

  render() {
    return (
      <Div>
      {/* Trying to get this to fade in */}
      <Transition 
        timeout={100}
        {...this.props}
      >
        {(state) => (
          <Navbar 
            {...this.props} 
            NavStyle={ this.navStyle() }
          />
        )}
      </Transition>
          <header className="top-pic">
          <div className="logo-container">
            <Logo className="main-logo">
              {"<"}<span>CATALYST</span> {"/>"}
            </Logo>
            <Tagline className="tag-line">Accelerated Discovery</Tagline>
          </div>
        </header>

        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">We've got what you need!</h2>
                <hr className="light my-4" />>
                <p className="text-faded mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">At Your Service</h2>
                <hr className="my-4" />>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Sturdy Templates</h3>
                  <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Ready to Ship</h3>
                  <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Up to Date</h3>
                  <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Made with Love</h3>
                  <p className="text-muted mb-0">You have to make your websites with love these days!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-0" id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters popup-gallery">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/2.jpg" alt="" />
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/3.jpg" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/4.jpg" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
                  <img className="img-fluid" src="img/portfolio/thumbnails/5.jpg" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
                  <img class="img-fluid" src="img/portfolio/thumbnails/6.jpg" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a className="btn btn-light btn-xl sr-button" href="http://startbootstrap.com/template-overviews/creative/">Download Now!</a>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading">Let's Get In Touch!</h2>
                <hr className="my-4"/>
                <p className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                <p>123-456-6789</p>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                <p>
                  <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Div>
    );
  }
}