import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdMessage } from "react-icons/md";


const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  

  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("service_email_uol_server", "template_guyg43e", e.target, "7027zm_SdU1pS0c4s")
      .then(
        (result) => {
         
          const modal = document.querySelector('.off');
          modal.click();
          clearState();
          setTimeout(() => {
            window.location.reload();
          }
            , 4000);
        },
        (error) => {
          const modal = document.querySelector('.error');
          modal.click();
          clearState();
          setTimeout(() => {
            window.location.reload();
          }
            , 4000);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-9">
            <div className="row">
              <div className="section-title">
                <h2>Entre em contato</h2>
                <p>
                Preencha o formulário abaixo para nos enviar um e-mail e entraremos em contato com você o mais breve possível.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="E-mail"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensagem"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  enviar mensagem
                </button>
                <button className="off" data-toggle="modal" data-target="#ExemploModalCentralizado" />
              <div className="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-body">
                    <div>

                      <h1><span></span>Mensagem enviada com sucesso!{' '}<span className="iconM"><MdMessage/></span></h1>
                      <p><span>Novameta</span> agradece a preferência!</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="error" data-toggle="modal" data-target="#ExemploModalCentralizado" />
              <div className="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-body red">
                    <div>
                      <h1>ERRO, por favor, tente novamente!</h1>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informações de Contato</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> E-mail
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
      <a href="https://www.google.com/maps/place/R.+Rio+Tapaj%C3%B3s,+97+-+Vila+Velha,+Fortaleza+-+CE,+60347-305,+Brasil/@-3.7076992,-38.5964546,16z/data=!4m6!3m5!1s0x7c74a6d23a51e73:0xf95b2743fb7c9ed0!8m2!3d-3.7083205!4d-38.5911331!16s%2Fg%2F11fy2pq59g?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
         <img src='img/mapa-novameta.jpg' alt="Mapa Novameta"  height={400} width={400} />
      </a>
     </div>
     </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  
              
                  <li style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'10px'}}>
                    <a  
                    //href="https://api.whatsapp.com/send?phone=558534853343&text=Olá, gostaria de mais informações sobre os serviços da Novameta."
                    >
                      <i className="fa fa-whatsapp"></i>
                    </a>
                     &nbsp;(85) 3485-3343
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center" style={{minWidth:'100%'}}>
          <p>
            &copy; 2024 NOVAMETA. Design by{" "}
            <a href="https://www.instagram.com/sampaio_technology/" rel="nofollow">
            Sampaio Technology
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
