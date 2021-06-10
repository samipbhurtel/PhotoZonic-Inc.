import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt="props.imgSrc" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.para}</p>
            <NavLink to="" className="btn btn-success cardbtn">
              Know More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
