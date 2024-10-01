import React from 'react'

export default function BtnContact() {
  return (
    <div style={{marginTop:'40px'}}>
      <a  
      //href="https://api.whatsapp.com/send?phone=558534853343&text=Olá, gostaria de mais informações sobre os serviços da Novameta."
      //target="_blank"
      href="#contact"
      className="btn btn-custom btn-lg page-scroll">
        fale conosco <i className="fa fa-whatsapp" aria-hidden="true" ></i>
      </a>
    </div>
  )
}
