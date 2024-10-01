import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
              
            <div className="row">
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="navbar-brand page-scroll white" href="#page-top">
           <img src="img/logoNovameta.png" className='logo' alt="" /> <span style={{fontSize:'50px'}}>Novameta <br /> <br /><span className='subtituloo'>
Estruturas Metálicas</span></span>
          </div>{" "}
                </div>
              <div className="col-md-8 col-md-offset-2 intro-text">
           
                  
                
                <p  className="p-header">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  SAIBA MAIS
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
