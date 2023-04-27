import React, { useState } from "react";
import logo from "../assets/img/png/logo.png";
import finance from "../assets/img/png/financial.png";
import real from "../assets/img/png/real_estate.png";
import logout from "../assets/img/png/log_out.png";
import cancle from "../assets/img/png/cancle.png";

function Nav() {
  const [name, setname] = useState(false);
  if (name) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section>
        <div className=" mx_2 bg-white rounded-2 py-4">
          <div className=" container ">
            {/* nav bar */}
            <nav>
              <article>
                <div className="d-flex align-items-center justify-content-between  d-lg-flex d-none w-100">
                  <article className=" d-flex align-items-center gap-3 gap-lg-4 zn_1 gap-xl-5">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>
                  </article>
                  <article className=" d-flex gap-4 align-items-center">
                    <a
                      className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                      href="#Home"
                    >
                      <img className=" mb-1 me-2" src={finance} alt="finance" />
                      Financial Services
                    </a>
                    <a
                      className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                      href="#Home"
                    >
                      <img className=" mb-1 me-2" src={real} alt="real" />
                      Real Estate
                    </a>
                  </article>
                  <article className=" d-flex align-items-center gap-4">
                    <a
                      className=" hover text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                      href="#"
                    >
                      Sign up
                    </a>
                    <a
                      className=" btn_1 text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                      href="#"
                    >
                      Log in
                      <span>
                        {" "}
                        <img className=" ms-3" src={logout} alt="logout" />
                      </span>
                    </a>
                  </article>
                </div>
                <article className="d-flex justify-content-between w-100  ">
                  <a
                    className="text-decoration-none  d-lg-none d-flex mt-2 align-items-center  "
                    href="#"
                  >
                    <article className=" zn_1 d-flex align-items-center ">
                      <a href="#">
                        <img src={logo} alt="logo" />
                      </a>
                    </article>
                  </a>
                  <a
                    href="#"
                    className="d-lg-none d-flex mt-1 justify-content-end zn_3    align-items-center  d-inline-block  ms-2  ps-3 "
                    onClick={() => setname(true)}
                  >
                    <label className="navBtn position-relative" htmlFor="line">
                      <input type="checkbox" id="line" className="menubar" />
                      <span className="span1 rounded-3"></span>
                      <span className="span2 rounded-3"></span>
                      <span className="span3 rounded-3"></span>
                    </label>
                  </a>
                </article>
                <div className={`${name ? "box_my" : " box_hide  "}`}>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="text-decoration-none pos_logo d-flex align-items-center  "
                      href="#"
                    >
                      <article className=" zn_1 d-flex mt-2 align-items-center ">
                        <a href="#">
                          <img src={logo} alt="logo" />
                        </a>
                      </article>
                    </a>
                    <a
                      href="#"
                      className="d-lg-none zn d-flex  justify-content-center hoverhn pos_cross  align-items-center  d-inline-block   "
                      onClick={() => setname(false)}
                    >
                      <img className=" w_50" src={cancle} alt="cancle" />
                    </a>
                  </div>

                  <div className="d-flex align-items-center justify-content-between flex-column gap-4  d-lg-none">
                    <article className=" d-flex gap-4 align-items-center ">
                      <a
                        className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                        href="#Home"
                      >
                        <img
                          className=" mb-1 me-2"
                          src={finance}
                          alt="finance"
                        />
                        Financial Services
                      </a>
                      <a
                        className="text-decoration-none  ff_Segoe fw-semibold text-black fs_xl  "
                        href="#Home"
                      >
                        <img className=" mb-1 me-2" src={real} alt="real" />
                        Real Estate
                      </a>
                    </article>
                    <article className=" d-flex align-items-center gap-4">
                      <a
                        className=" hover text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                        href="#"
                      >
                        Sign up
                      </a>
                      <a
                        className=" btn_1 text_green ff_Segoe fs_xl fw-semibold text-decoration-none"
                        href="#"
                      >
                        Log in
                        <span>
                          {" "}
                          <img className=" ms-3" src={logout} alt="logout" />
                        </span>
                      </a>
                    </article>
                  </div>
                </div>
              </article>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
