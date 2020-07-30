import React, { Component } from 'react';
import SvgArrowDown from '../icons/ArrowDown';

export default class Header extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#hide" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current">
               <a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#projects">Projects</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
               <li><a href="https://drive.google.com/file/d/1a1lfk70F6lYm3ohBhexyVIOCxdhlwozE/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{Data.name}</h1>
               <h2 className="social">{Data.roleDescription}</h2>
              
               <ul className="social">
                  {
                    Data.socialLinks && Data.socialLinks.map(item =>{
                     
                      return(                             
                              <li key={item.name}>
                                 <a href={item.url} rel="noopener noreferrer" target="_blank">
                                    <svg viewBox="0 0 30 30">
                                    <path stroke="#000" d={item.d}/>
                                    </svg>
                              </a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a  href="#projects">
               <SvgArrowDown/>
            </a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}