import React from "react";
import "./Featutres.css";

function Featutres() {
  return (
    <div className="main">
      <br></br>
      <div className="container">
        <h2>TECH FOR TEENS - A RUBIXE INITIATIVE</h2>
        <div className="div-container">
          {/* <div className="con-1">
            <div className="con1-header">
              <div className="color-div1"><div>01</div></div>
            </div>
            <div className="con1-body">
              <img src="1.jpg" alt=""/>
            </div>
            <div className="con1-footer">
              Introducing Al to children in an age appropriate manner.
            </div>
          </div>
          <div className="con-2">
            <div className="con2-header">
              Gain awareness on Al and build an interactive story around it
            </div>
            <div className="con2-body"><img src="2.jpg" alt=""/></div>
            <div className="con2-footer"><div className="color-div2"><div>02</div></div></div>
          </div>
          <div className="con-3">
            <div className="con3-header"><div className="color-div3"><div>03</div></div></div>
            <div className="con3-body"><img src="3.jpg" alt=""/></div>
            <div className="con3-footer">
              Acquire programming skills in a user-friendly format
            </div>
          </div>
          <div className="con-4">
            <div className="con4-header">
              Exposure to mini projects on diverse topics
            </div>
            <div className="con4-body"><img src="4.jpg" alt=""/></div>
            <div className="con4-footer"><div className="color-div4"><div>04</div></div></div>
          </div>
          <div className="con-5">
            <div className="con5-header"><div className="color-div5"><div>05</div></div></div>
            <div className="con5-body"><img src="5.jpg" alt=""/></div>
            <div className="con5-footer">Train the teachers programme</div>
          </div> */}
          {data.map((item, index) => {
            return (
              <div className={`con-5 feature__card ${index%2==0 ? "card__even" : "card__odd"}`}>
                {index % 2 == 0 && (
                  <>
                    {" "}
                    <div
                      className="feature__card__header__even feature__card__header"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="color-div5">
                        <div className="even-circle" style={{color:item.color}}>0{item.id}</div>
                      </div>
                    </div>
                    <div className="feature__card__body">
                      <img src={item.image} alt="" />

                      <p>{item.description}</p>
                    </div>{" "}
                  </>
                )}
                {/* <div className={`feature__card__header__${index%2==0 ? "even" : "odd"}`} style={{backgroundColor: item.color}}><div className="color-div5"><div>0{item.id}</div></div></div>ven */}

                {index % 2 != 0 && (
                  <>
                  <div className="feature__card__body">
                  <p>{item.description}</p>
                      <img src={item.image} alt="" />
                    </div>
                  <div
                    className="feature__card__header__odd feature__card__header"
                    style={{ backgroundColor: item.color }}
                  >
                      <div className="color-div5 ">
                        <div className="odd-circle" style={{color:item.color}}>0{item.id}</div>
                      </div>
                      {/* <div className="feature__card__no">0{item.id}</div> */}
                  </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Featutres;

const data = [
  {
    id: 1,
    image: "1.jpg",
    description: "Introducing AI to children in an age appropriate manner",
    color: "blue",
  },
  {
    id: 2,
    image: "2.jpg",
    description: " Gain awareness on Al and build an interactive story around it",
    color: "darkmagenta",
  },
  {
    id: 3,
    image: "3.jpg",
    description: "Acquire programming skills in a user-friendly format",
    color: "coral",
  },
  {
    id: 4,
    image: "4.jpg",
    description: " Exposure to mini projects on diverse topics",
    color: "seagreen",
  },
  {
    id: 5,
    image: "5.jpg",
    description: "Train the teachers programme",
    color: "sienna",
  },
];
