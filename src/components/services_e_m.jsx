import React from "react";
import BtnContact from "./btn-budget";

export const Services_em = (props) => {
  return (
    <div id="services_em" className="text-center">
      <div className="container">
     {/*  <div className="section-title">
          <h2>Serviços</h2>
        </div>*/}
        <div className="row">
         
          <div className="col-xs-12 col-md-6">
          <div className="about-text">
              <br />
              <h2>Estruturas Metálicas</h2>
              <p className="text-justify"><span>&#8226; Fabricação de Estruturas Metálicas: </span>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <br />
              <p className="text-justify"><span>&#8226; Montagem de Estruturas Metálicas: </span>{props.data ? props.data.paragraph2 : "loading..."}</p>

              <BtnContact />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img style={{borderRadius:'10px', margin:'20px 0', boxShadow:'0 0 10px 15px rgba(0, 0, 0, 0.2)'}} src="img/destaque_em.jpeg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
