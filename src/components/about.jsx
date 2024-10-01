import React from "react";
import BtnContact from "./btn-budget";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
         
          <div className="col-xs-12 col-md-6">
          <div className="about-text">
              <h2>Quem Somos</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>

              <h3>Porque nos escolher?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                        : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
                  </ul>
                      <div style={{display:'flex', justifyContent:'start', alignItems:'center'}}>
                      <BtnContact />
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpeg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
