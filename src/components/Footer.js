import React, { Component } from 'react';
import SvgArrowUp from '../icons/ArrowUp.js'
export default class Footer extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
          {
                    Data.socialLinks && Data.socialLinks.map(item =>{
                     
                      return(                             
                              <li key={item.name}>
                                 <a href={item.url} rel="noopener noreferrer" target="_blank">
                                    <svg className="footer" viewBox="0 0 30 30">
                                    <path d={item.d}/>
                                    </svg>
                              </a>
                              </li>
                            )
                          }
                    )
                  }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home">
          <SvgArrowUp className="footer"/></a></div>
      </div>
    </footer>
    );
  }
}