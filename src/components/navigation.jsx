import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll white" href="#page-top">
           <img src="img/logoNovameta.png" className='logo' alt="" /> <span>Novameta <br /> <span className='subtitulo'>
Estruturas Metálicas</span></span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Quem Somos
              </a>
            </li>
     
            <li>
              <a href="#contact" className="page-scroll">
                Contato
              </a>
            </li>
            <li>
              <a 
             // href="https://api.whatsapp.com/send?phone=558534853343&text=Olá, gostaria de mais informações sobre os serviços da Novameta."
            // target="_blank"
              href="#contact"
             className="page-scroll btn-orcamento">
                Orçamento&nbsp;&nbsp; <i className="fa fa-whatsapp" style={{background:'green', borderRadius:'100%'}}/>
              </a>
            </li>
       {/*     <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>*/}
        
          </ul>
        </div>
      </div>
    </nav>
  );
};
