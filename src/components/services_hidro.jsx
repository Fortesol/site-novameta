import React from "react";
import BtnContact from "./btn-budget/index";

export const Services_hidro = (props) => {
  return (
    <div id="services_hidro" className="text-center">
     <div className="container">
    {/*  <div className="section-title">
          <h2>Serviços</h2>
        </div>*/}
        <div className="row">
        <div className="col-xs-12 col-md-6">
            {" "}
            <img style={{borderRadius:'10px', margin:'0px 0', boxShadow:'0 0 10px 20px rgba(0, 0, 0, 0.2)'}} src="img/hidro1.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
         
          <div className="about-text">
            
              <h2>Equipamentos Hidromecânicos</h2>
              <p className="text-justify"><span>&#8226; Fabricação de Equipamentos Hidromecânicos:</span>{props.data ? props.data.paragraph1 : "loading..."}</p>

              <h3>Dentre os equipamentos, podemos citar:</h3>
           
              <div className="list-style text-center">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul >
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul >
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li  key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              
                <p className="text-justify"><span>&#8226; Serviço de Montagem de Equipamentos Hidromecânicos:</span>{props.data ? props.data.paragraph2 : "loading..."}</p>
                <BtnContact />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};
