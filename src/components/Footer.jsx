import React from "react";
import shadow from "../assets/img/png/shadow.png";
import logo from "../assets/img/png/footer_logo.png";
import up_arrow from "../assets/img/png/up_arrow.png";
import green_ball from "../assets/img/png/green_ball.png";
import white_ball from "../assets/img/png/white_ball.png";

function Footer() {
  return (
    <>
      <footer className=" overflow-hidden   ">
        <div className=" bg_color mx_2 py-5">
          <div className="container  ">
            <div className="row pt-4 pb-5  line position-relative ">
              <div className=" shadow_position">
                <img className=" shadow_ani" src={shadow} alt=" shadow" />
              </div>
              <div className="col-md-8">
                <div className="row ">
                  <div className="col-md-7">
                    <div className="input_style">
                      <input
                        className="input opicity_1 ff_Segoe w-100 text-white fw-semibold fs_xl"
                        placeholder="Name"
                        type="search"
                        required
                      />
                    </div>
                    <div className="input_style my-2">
                      <input
                        className="input opicity_1 ff_Segoe w-100 text-white fw-semibold fs_xl "
                        placeholder="Email"
                        type="search"
                        required
                      />
                    </div>
                    {/* <div className="d-flex justify-content-between flex-column flex-md-row gap-2 mt-2">
                      {" "}
                      <a
                        className=" fw-semibold fs_xl footer_tow_btns hover_change  text-decoration-none"
                        href="#"
                      >
                        {" "}
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />{" "}
                        </svg>{" "}
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />{" "}
                        </svg>
                        Financial Services{" "}
                      </a>{" "}
                      <a
                        className=" fw-semibold fs_xl footer_tow_btns hover_change text-decoration-none"
                        href="#"
                      >
                        {" "}
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />{" "}
                        </svg>{" "}
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />{" "}
                        </svg>
                        Real Estate{" "}
                      </a>{" "}
                    </div> */}
                    <div className=" d-flex gap-3 align-items-center">
                      <a
                        href="#"
                        className=" ff_Segoe d-flex gap-1 fw-semibold fs_xl text-white text-decoration-none btns_footer"
                      >
                        <span className=" ball"></span>
                        Financial Services
                      </a>
                      <a
                        href="#"
                        className=" ff_Segoe fw-semibold d-flex gap-1 fs_xl text-white text-decoration-none btns_footer"
                      >
                        <span className=" ball"></span>
                        Real Estate
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5  ">
                    <div className="input_style">
                      <textarea
                        className="input opicity_1 ff_Segoe h_100 w-100 text-white fw-semibold fs_xl"
                        placeholder="Message.."
                        type="search"
                        required
                      />
                    </div>

                    <a
                      className=" fw-semibold ff_Segoe fs_xl d-flex justify-content-center mt-2 submit_btn w-100 d-inline-block text-white text-decoration-none "
                      href="#"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-4 py-md-0 pm-4 ps-md-5">
                <p className=" ff_Segoe fw-semibold text-white fs_4xl">
                  Contact us
                </p>
                <p className=" ff_Segoe opicity_1 text-white fw-normal mx_258 fs_xl">
                  Our Predictive Analytics utilize a combination of event-driven
                  data, historical data.
                </p>
              </div>
            </div>
            <div className="row  py-5">
              <div className="col-md-8 mt-2">
                <div className="row align-items-start  justify-content-between">
                  <div className=" col-md-5 mb-3">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>

                    <a
                      className=" d-block  fs_xl fw-semibold text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      info@catalyzeai.com
                    </a>
                    <a
                      className=" fs_xl fw-semibold text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      (941) 867-1761
                    </a>
                  </div>{" "}
                  <div className=" col-6 col-md-4">
                    <p className=" ff_segoe fw-semibold mb-0 fs_xl text-white">
                      Financial Services
                    </p>

                    <a
                      className=" fs_xl fw-normal footer_hover mt-3  d-inline-block  position-relative mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Pricing
                    </a>
                    <br />
                    <a
                      className=" fs_xl fw-normal footer_hover mt-1 d-inline-block  position-relative  mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Blog
                    </a>
                  </div>{" "}
                  <div className=" col-6 col-md-3">
                    <p className=" ff_segoe fw-semibold mb-0 fs_xl text-white">
                      Real Estate
                    </p>

                    <a
                      className=" fs_xl fw-normal footer_hover mt-3  d-inline-block  position-relative mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Pricing
                    </a>
                    <br />
                    <a
                      className=" fs_xl fw-normal footer_hover mt-1 d-inline-block  position-relative  mt-2 text-white text-decoration-none ff_Segoe"
                      href="#"
                    >
                      Blog
                    </a>
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-4 mt-5 mt-md-1">
                <div className=" d-flex align-items-center justify-content-between">
                  <a
                    className=" z_1 text-decoration-none ff_Segoe fs_xl fw-semibold text-white"
                    href="#"
                  >
                    LinkedIn
                  </a>
                  <a className=" z_1" href="#">
                    <img src={up_arrow} alt="up_arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-between flex-column gap-2 flex-sm-row align-items-center">
              <p className=" ff_Segoe fw-normal fs_lg text-white opicity_1 mb-0">
                All rights reserved.©20022 Catalyze AI
              </p>
              <a
                href="#"
                className="  border_bottom text-decoration-none  ff_Segoe fw-normal fs_lg text-white opicity_1"
              >
                Do not sell my data
              </a>
              <div className=" d-flex align-items-center gap-4  gap-md-2">
                <a
                  className=" border_bottom text-decoration-none ff_Segoe fw-normal fs_lg text-white opicity_1"
                  href="#"
                >
                  Terms & Conditions
                </a>
                <a
                  className=" ff_Segoe  border_bottom text-decoration-none  fw-normal fs_lg text-white opicity_1"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
