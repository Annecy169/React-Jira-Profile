import React, { Component } from "react";
 
class Dashboard extends Component {
  render() {
    return (
        <div class="Main-Content">
        <h1 class="Page-Title">Dashboard</h1>
        <h3 class="Page-Sub-Title">What are you working on!</h3>
    
        <div class="Table-Holder">
          <table>
              <tr class="NoBorder">
                <th></th>
                <th></th>
                <th>svg</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr class="Table-Title Table-Day">
                <th class="Table-Left">Board</th>
                <th class="Day">Monday</th>
                <th class="Day">Tuesday</th>
                <th class="Day">Wednesday</th>
                <th class="Day">Thursday</th>
                <th class="Day">Friday</th>
              </tr>
            <tbody>
              <tr>
                <th class="Table-Title Table-Left">RFRC</th>
                <th>2</th>
                <th>4</th>
                <th>7</th>
                <th>3</th>
                <th>1</th>
              </tr>
      
              <tr>
                <th class="Table-Title Table-Left">RBDO</th>
                <th>8</th>
                <th>4</th>
                <th>3</th>
                <th>1</th>
                <th>4</th>
              </tr>
      
              <tr>
                <th class="Table-Title Table-Left">IT</th>
                <th>7</th>
                <th>3</th>
                <th>9</th>
                <th>13</th>
                <th>9</th>
              </tr>
      
              <tr>
                <th class="Table-Title Table-Left">SUP</th>
                <th>9</th>
                <th>14</th>
                <th>5</th>
                <th>7</th>
                <th>8</th>
              </tr>
              <tr class="NoBorder Dates">
                <th></th>
                <th>12th Sept</th>
                <th>13th Sept</th>
                <th>7th Sept</th>
                <th>8th Sept</th>
                <th>9th Sept</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
 
export default Dashboard;