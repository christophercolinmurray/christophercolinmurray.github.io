import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <section id="projects">
        <div className="projects">
        <br /><br /><br />
        <ul className="cards">
          {
            Data.portfolio && Data.portfolio.map((item) => {
              return (

                <li className="cards__item">
                  <div className="card">
                    <div className="card__image">
                      <img className="card__image" src={item.imgUrl} alt={item.imgAlt} />
                    </div>
                    <div className="card__content">
                      <div className="card__title">{item.name}</div>
                      <p className="card__text">{item.description} </p>
                      <a href={item.demoUrl} rel="noopener noreferrer" target="_blank">
                          <button className="proj-button">Demo</button>
                      </a>
                      <a href={item.sourceUrl} rel="noopener noreferrer" target="_blank">
                          <button className="proj-button">Source on GitHub</button></a>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        </div>
      </section>
    );
  }
}