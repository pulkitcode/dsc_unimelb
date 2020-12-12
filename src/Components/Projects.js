import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.data) {
      var project1 = this.props.data.project1.map(function (project1) {
        return (
          <div key={project1.name}>
            <h3>{project1.name}</h3>
            <p className="info">
              <em className="date">{project1.leads}</em>
            </p>
            <p>{project1.description}</p>
            <a href="https://forms.gle/F6U9g7Xyb5gEvB9q9">
              <h5>JOIN PROJECT</h5>
            </a>
          </div>
        );
      });
      var image1 = 'images/portfolio/av.png';
    }
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <img src={image1} />
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{project1}</div>
            </div>
          </div>
        </div>

        <div className="row education">
          <div className="left-col">
           <a href="https://forms.gle/WR2ffVk3SnT92xtr9"><h3>LEAD YOUR OWN PROJECT</h3></a> 
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
