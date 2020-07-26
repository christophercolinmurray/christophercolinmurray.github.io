import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <section id="projects">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-single cf">
          {
            Data.portfolio && Data.portfolio.map((item)=>{
              return(
                <a href={`${item.demoUrl}`}>
                  <div className="columns portfolio-item">
                      <img src={`${item.imgUrl}`} alt={`${item.imgAlt}`} className="img-item"/>
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                      </div>
                      </div>
                      </a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}