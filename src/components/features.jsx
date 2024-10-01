import React from "react";

export const Features = (props) => {
  return (
    <div id="features" >
    <div className="container text-center">
    <div className="section-title">
          <h2>Temos o que você precisa!</h2>
        </div>
      
        <div  className="row align-items-center  ">
   

          <div className="col-md-6 shadow"  >
          <img src="img/hidromecanico.jpeg" className="features-item " alt="" />
          <h3>SERVIÇOS HIDRO-MECÂNICOS</h3>
          {
          //tranformando a escala com style quando o mouse passa por cima
          }
          <a href="#services_hidro" className="btn btn-custom btn-lg page-scroll" >
            Saiba Mais
          </a>{" "}


          </div>
          
          <div className="col-md-6 shadow">
          <img src="img/obras.webp" className="features-item" alt="" />
          <h3>ESTRUTURAS METÁLICAS</h3>
        
          <a href="#services_em" className="btn btn-custom btn-lg page-scroll">
            Saiba Mais
          </a>{" "}

          </div>
        
        </div>
      
      </div>
    </div>
  );
};
