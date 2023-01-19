import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="para-1">
        <img src="homeimg.jpg" alt="" />
      </div>
      <br></br><br></br>
      <div className="para-2">
        <div className="col-1">
          <div className="col1-row1">
            <h2>WHO WE ARE</h2>
            <div>
              RubixeTM is a global technology company specializing in disruptive
              technologies Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain, and Internet of
              Things (IoT).
            </div>
            <br></br>
            <div>
              RubixeTM mission is to enable businesses to leverage the full
              potential of disruptive technologies and stay competitive in the
              market, turning complex challenges into solutions, providing a
              strategic competitive advantage that are more efficient, effective
              and predictable{" "}
            </div>
            
          </div>
          <img src="ofcimg.jpg" alt="" />
        </div>
        <br></br><br></br>
        <div className="col-2">
          <div className="col2-row1">
            <h2>WHERE WE STARTED</h2>
            <div>
              We started in 2015, With a passionate team who want to bring
              game-changing solutions through disrupting technologies. We
              expertise in delivering enterprise-level solutions in the field of
              Artificial Intelligence (AI), Cyber Security, Robotic Process
              Automation (RPA), Internet of Things (IoT), and BlockChain
              technology.{" "}
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
