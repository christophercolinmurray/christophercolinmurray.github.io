import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              /**
                 * @param {{ url: string; className: string; }} item
                 */
              Data.socialLinks && Data.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}