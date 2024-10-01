import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeria</h2>
          <p>
          Confira abaixo algumas das nossas obras e projetos realizados.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <h1>{props.data?.Paragraph1}</h1>
            <br />
            {props.data
              ? props.data.E_M.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="portfolio-items">
            <h1>{props.data?.Paragraph2}</h1>
            <br />
            {props.data
              ? props.data.Hidro.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
