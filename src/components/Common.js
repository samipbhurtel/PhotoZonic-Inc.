import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} <br></br>
                    <strong> {props.brandName} </strong>
                  </h1>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet ad ut tempore consequatur consectetur, sit illum
                    alias, reiciendis earum voluptatem cum rerum distinctio
                    tempora recusandae! A nostrum delectus commodi asperiores.
                  </p>
                  <div className="mt-3 mb-5">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnText}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
