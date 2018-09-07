import React, { Component } from "react";
 
class Team extends Component {
  render() {
    return (
        <div class="Main-Content">
          <h1 class="Page-Title">Team Mates</h1>
          <h3 class="Page-Sub-Title">Who are you working with!</h3>
      
          <div class="Team-Mates">
            <div class="user-profile">
              <img class="avatar" src="http://xander.pro/wp-content/uploads/2018/01/user.png" alt="Ash" />
              <div class="User-Details">
                <div class="username">Alex Thompson</div>
                <div class="bio">
                  Developer
                </div>
                <div class="description">
                  I am a tech savy youth who plays around with tech.
                </div>
              </div>
              <div class="data">
                <span class="Description"> Tickets in Progress:</span>
                <span class="Ticket-amount"> 4</span>
              </div>
            </div>
      
            <div class="user-profile">
              <img class="avatar" src="https://avatars0.githubusercontent.com/u/33496?s=460&v=4" alt="Ash" />
              <div class="User-Details">
                <div class="username">Adrian Lansdown</div>
                <div class="bio">
                  Senior Solutions Architect
                </div>
                <div class="description">
                  Strong engineering professional skilled in Scrum.
                </div>
              </div>
              <div class="data">
                <span class="Description"> Tickets in Progress:</span>
                <span class="Ticket-amount">12</span>
              </div>
            </div>
      
          </div>
      
        </div>
    );
  }
}
 
export default Team;