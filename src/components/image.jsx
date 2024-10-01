import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1" target="_blank">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} style={{width: "100%", height: "300px"}} />
          {/*<img src={smallImage} className="img-responsive" alt={title} />{" "}*/}
        </a>{" "}
      </div>
    </div>
  );
};
