import React, { Component } from "react";

class New extends Component {
  render() {
    return (
      <div className="new-page">
         <h2 className="title">So, What's New?</h2>
        <div className="container">
         
          <div class='split-div'>
            <div className="right-align">
              <h3 className="title-2">The next-gen Positive Social Platform</h3>
              <p className="new-content">
                We aim to create the safest social platform that has a positive
                users' community, where they connect and share positive, valuable
                content in their interests.
              </p>
            </div>
            <img src="team_3d.png" alt="Team" className="team-img" ></img>
          </div>

          <div class='split-div invert'>
          <img src="anonymous.png" alt="Anonymous" className="team-img" ></img>
          <div className="right-align">
            <h3 className="title-3">Clean, Anonymous-free Platform</h3>
            <p className="new-content">
              On Pepul, only the authentic users with their real profile pictures
              can create user accounts. To verify their authenticity, we have
              currently implemented the "Aadhaar verification" method for Indian
              users in our platform.
            </p>
          </div>
          </div>

          <div class='split-div'>
          <div className="right-align">
            <h3 className="title-2">Your Privacy is our Priority!</h3>
            <p className="new-content">
              We value our users' data in the first place!
              It's our responsibility and mission to secure our users who trust us.
            </p>
          </div>
          <img src="privacy.png" alt="Privacy" className="team-img" ></img>
          </div>

          <div class='split-div invert'>
            <img src="astro_3d.png" alt="Astronut" className="img-fluid" ></img>
            <div className="right-align">
              <h3 className="title-3">Slashing hatred content shares on the platform</h3>
              <p className="new-content">
                No more irrelevant, negative content in your social media feed.
                Get immersed in the personalized content feed recommendations in your interests
                & from your closed people.
              </p>
            </div>
          </div>
          <div class='split-div'>
          <div className="right-align">
            <h3 className="title-2">KYC Verified users</h3>
            <p className="new-content">
              We are the world's 1st ever Social Network, who introduced the KYC system to verify every
              user in the platform to be real & authentic.
            </p>
          </div>
          <img src="dog_3d.png" alt="Sweet Dog" className="team-img" ></img>
            
          </div>
        </div>
      </div>
    );
  }
}

export default New;
