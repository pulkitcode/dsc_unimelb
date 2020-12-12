import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Us</h2>

            <p>{bio}</p>
            
         </div>
      </div>

   </section>
    );
  }
}

export default About;
