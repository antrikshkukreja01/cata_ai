import React from "react";
import nextarrow from "../assets/img/png/next_arrow.png";
import shadow2 from "../assets/img/png/green_shadow.png";
import shadow from "../assets/img/png/big_shadow.png";
import clock from "../assets/img/png/clock.png";
import user from "../assets/img/png/user_icon.png";
import next from "../assets/img/png/nextarrow.png";
import dropdown from "../assets/img/png/dropdown.png";
import tow_box from "../assets/img/png/tow_box.png";
import line1 from "../assets/img/png/Line_1.png";
import line2 from "../assets/img/png/line_2.png";
import line3 from "../assets/img/png/Line_3.png";
import threedot from "../assets/img/png/threedot.png";

function Header() {
  return (
    <>
      <section className=" min-vh-100 position-relative overflow-hidden py-5">
        <div className=" position_shadow_2 d-none d-md-flex shadow_ani">
          <img src={shadow2} alt="shadow2" />
        </div>
        <div className=" position_shadow shadow_ani">
          <img src={shadow} alt="shadow2" />
        </div>
        <div className=" container">
          <div className="row flex-column-reverse flex-lg-row justify-content-between">
            <div className="col-lg-5">
              <div>
                <div className="d-flex justify-content-end">
                  <div className="flootingcard1">
                    <img className=" w-50" src={tow_box} alt="" />
                  </div>
                  <div className="bg-white w-50 p-2 flootingcard2 ">
                    <div className="d-flex justify-content-end gap-1 align-items-center mb-2">
                      <img className=" w_25" src={clock} alt="" />
                      <h4 className="fs_md fw-normal ff_Seoge text_Black mb-0 ">
                        2 days ago
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_md fw-normal ff_Seoge text_black">
                        Mihail Lacusta
                      </h3>
                    </div>
                    <h3 className="fs_md fw-normal ff_Seoge  text_green py-1 mb-0">
                      $1,293,200
                    </h3>
                    <h5 className="fs_sm fw-normal ff_Seoge text_lightBlack py-1 mb-0">
                      Business Sale
                    </h5>
                    <div className="d-flex gap-3 align-items-center mt-4">
                      <h3 className="fs_sm fw-normal ff_Seoge text_black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <div className="flootingcard3 bg-white px-2 py-2 d-flex flex-column justify-content-between d-none d-md-flex">
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_lg fw-semibold ff_Seoge text_black">
                        Jordan Wentworth
                      </h3>
                      <div>
                        <h4 className="fs_md fw-semibold text_LIGHTblue  ff_Seoge p-1 d-inline-block rounded-1">
                          New
                        </h4>
                      </div>
                    </div>
                    <h3 className="fs_lg fw-semibold ff_Seoge  text_green py-1 mb-0">
                      $1,293,200
                    </h3>
                    <p className="fs_md fw-normal ff_Seoge text_lightBlack ">
                      Boston, MA Inheritance
                    </p>
                    <div className="d-flex gap-3 align-items-center">
                      <h3 className="fs_md fw-semibold ff_Seoge text_black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white p-3 flootingcard4">
                    <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <img src={user} alt="" />
                        <div>
                          <h3 className=" ff_Seoge fs_md fw-semibold text_black mb-0">
                            Ciera Thomas
                          </h3>
                          <h6 className=" text_grey  ff_Seoge fs_sm fw-semibold text_black">
                            Edit
                          </h6>
                        </div>
                      </div>
                      <img src={threedot} alt="" />
                    </div>
                    <div className="d-flex gap-3 flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">1.</span>{" "}
                        <img className=" w-50" src={line1} alt="" />
                        <img src={dropdown} alt="" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">2.</span>{" "}
                        <img className=" w-50" src={line2} alt="" />
                        <img src={dropdown} alt="" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">3.</span>{" "}
                        <img className=" w-50" src={line3} alt="" />
                        <img src={dropdown} alt="" />
                      </div>
                    </div>
                    <div className="flootingcard5 p-2 position-absolute rounded-2">
                      {" "}
                      <h3 className=" fs_sm fw-normal ff_Seoge text-black">
                        5500 72nd Ave N
                      </h3>
                      <h4 className=" fs_sm fw-normal ff_Seoge text_green">
                        $150,000
                      </h4>
                      <p className=" fs_xsm fw-normal ff_Seoge text_lightBlack opacity-75 mb-0">
                        Pinellas Park, FL inheritance
                      </p>
                      <div className="d-flex justify-content-center">
                        <a href="">
                          <img src={next} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className=" ff_Seoge fs_5xl fw-semibold text_black">
                Grow your business with Event-Driven Predictive Analytics
              </h2>
              <p className=" text_darkgrey ff_Seoge fs_xl mx_499 fw-normal text_black">
                It is a long established fact that a reader will be distracted
                by the using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it the look at you.
              </p>
            </div>
          </div>
          <div className="row align-items-center py-5">
            <div className="col-md-6">
              <div className="row ">
                <div className="col-4 text-center">
                  <p className=" ff_Segoe fw-semibold fs_2xl text-black">
                    400mm+{" "}
                  </p>
                  <p className=" ff_Segoe fw-normal fs_xl opicity_1 text-black">
                    Data point used for analytics
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p className=" ff_Segoe fw-semibold fs_2xl text-black">
                    $3Tn{" "}
                  </p>
                  <p className=" ff_Segoe fw-normal fs_xl opicity_1 text-black">
                    Investable assets predicted per year
                  </p>
                </div>
                <div className="col-4 text-center">
                  <p className=" ff_Segoe fw-semibold fs_2xl text-black">
                    $77Bn{" "}
                  </p>
                  <p className=" ff_Segoe fw-normal fs_xl opicity_1 text-black">
                    Predicted home value transacted per year
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" d-flex gap-2 align-items-center flex-column flex-md-row justify-content-md-end">
                <div className="box">
                  <article>
                    <p className=" ff_Segoe fw-semibold fs_xl lh_28 opicity_1 mb-0 text-white">
                      boost your
                    </p>
                    <p className=" ff_Segoe fw-semibold fs_2xl text-white">
                      Financial Services
                    </p>
                  </article>
                  <article className=" d-flex justify-content-between align-items-center">
                    <a
                      className=" ff_Segoe fw-semibold fs_xl text-white text-decoration-none"
                      href="#"
                    >
                      Learn more
                    </a>
                    <a href="#">
                      {" "}
                      <img src={nextarrow} alt="nextarrow" />
                    </a>
                  </article>
                </div>
                <div className="box">
                  <article>
                    <p className=" ff_Segoe fw-semibold fs_xl lh_28 opicity_1 mb-0 text-white">
                      boost your
                    </p>
                    <p className=" ff_Segoe fw-semibold fs_2xl text-white">
                      Real Estate
                    </p>
                  </article>
                  <article className=" d-flex justify-content-between align-items-center mt-1">
                    <a
                      className=" ff_Segoe fw-semibold fs_xl text-white text-decoration-none"
                      href="#"
                    >
                      Learn more
                    </a>
                    <a href="#">
                      {" "}
                      <img src={nextarrow} alt="nextarrow" />
                    </a>
                  </article>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
