import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { LangContext, CartContext } from "./LangContext.JSX";
export default function Navbar() {
  const { totalItems, totalPrice } = useContext(CartContext);

  const { lang, trasnaltions, setLang } = useContext(LangContext);
  const [color, setcolor] = useState("Home");
  return (
    <>
      <div className="container   ">
        <div className="navbar bg-white navbar-expand-lg fixed-top ">
          <div className="container-fluid">
            <div
              className="offcanvas offcanvas-end custom-offcanvas"
              id="navbarnav"
            >
              <div className="text-end mt-3">
                <button
                  type="button"
                  className="btn-close d-inline d-sm-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">
                  <div className="row">
                    <div className="col-md-6">
                      <Link href="#" className="navbar-brand ">
                        <img
                          src={logo}
                          className="img-fluid"
                          style={{ height: "100px" }}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </h5>
              </div>
              <div className="row  justify-content-center gap-5">
                <div className="col-md-2 ">
                  <Link href="#" className="navbar-brand d-none d-sm-inline">
                    <img
                      src={logo}
                      className="img-fluid"
                      style={{ marginTop: "-30px" }}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-md-6 order-2 order-sm-0">
                  <div className="input-group ">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      style={{ backgroundColor: "#F9FAFB", border: "none" }}
                      className=" form-control py-3 d-none d-sm-inline"
                      name=""
                      id=""
                    />
                    <select
                      style={{ backgroundColor: "#F9FAFB", border: "none" }}
                      className="form-select  py-3"
                      value={lang}
                      onChange={(e) => setLang(e.target.value)}
                      id=""
                    >
                      <option value="en">English</option>
                      <option value="ar">العربية</option>
                      <option value="tr">Türkçe</option>
                    </select>
                    <button
                      className="py-3 px-3 d-none d-sm-inline"
                      style={{ backgroundColor: "#F9FAFB", border: "none" }}
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-2 text-center order-1 d-none d-sm-inline order-sm-0">
                  <div className="shadow rounded-5 p-3">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://wa.me/97439941798"
                      className="text-dark thenumber"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
                      +974 3994 1798
                    </a>
                  </div>
                </div>
              </div>
              <div className="row mt-3 ">
                <div className="col-md-7 ">
                  <div className="offcanvas-body ">
                    <ul className="navbar-nav ">
                      <li
                        onClick={() => setcolor("Home")}
                        className="nav-item me-5"
                      >
                        <Link
                          className="text-muted fw-bold"
                          style={{
                            textDecoration: "none",
                            color: color === "Home" ? "#FDB016" : "",
                          }}
                          to="/"
                        >
                          {trasnaltions[lang].Home}
                        </Link>
                      </li>

                      <li
                        onClick={() => setcolor("Shop")}
                        className="nav-item me-5"
                      >
                        <Link
                          className="text-muted  "
                          style={{
                            textDecoration: "none",
                            color: color === "Shop" ? "#FDB016" : "",
                          }}
                          to="/Shop"
                        >
                          {trasnaltions[lang].Shop}
                        </Link>
                      </li>
                      <li
                        onClick={() => setcolor("News")}
                        className="nav-item me-5"
                      >
                        <Link
                          className="text-muted "
                          style={{
                            textDecoration: "none",
                            color: color === "News" ? "#FDB016" : "",
                          }}
                          to="/News"
                        >
                          {trasnaltions[lang].News}
                        </Link>
                      </li>
                      <li
                        onClick={() => setcolor("AboutUs")}
                        className="nav-item me-5"
                      >
                        <Link
                          className="text-muted "
                          style={{
                            textDecoration: "none",
                            color: color === "AboutUs" ? "#FDB016" : "",
                          }}
                          to="/AboutUs"
                        >
                          {trasnaltions[lang].AboutUs}
                        </Link>
                      </li>
                      <li
                        onClick={() => setcolor("ContactUs")}
                        className="nav-item me-5"
                      >
                        <Link
                          className="text-muted "
                          style={{
                            textDecoration: "none",
                            color: color === "ContactUs" ? "#FDB016" : "",
                          }}
                          to="/ContactUs"
                        >
                          {trasnaltions[lang].ContactUs}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 ">
                  {/*  */}
                  <ul className="d-flex gap-3 ">
                    {/* مقاس */}
                    
                    <li
                      className=" d-none d-sm-inline"
                      style={{ listStyleType: "none" }}
                    >
                      <Link to="/WishList">
                      <button
                        type="button"    
                        style={{ background: "none", border: "none" }}
                      >
                        <i className="fa-regular fa-user "></i>
                        <span className="ms-1">{trasnaltions[lang].Login}</span>
                      </button>
                      </Link>
                      <div
                        className="modal fade"
                        id="secondmodal"
                        tabIndex="-1"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Modal 2</h5>
                              <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p>المودال الثاني</p>
                            </div>
                            <div className="modal-footer">
                              <button
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className=" d-none d-sm-inline"
                      style={{ listStyleType: "none" }}
                    >
                      <Link
                        className="text-muted"
                        style={{ textDecoration: "none" }}
                      >
                        <i className="fa-solid fa-shuffle"></i>
                        <span className="ms-1">
                          {trasnaltions[lang].Compare}
                        </span>
                      </Link>{" "}
                    </li>
                    <li
                      className=" d-none d-sm-inline"
                      style={{ listStyleType: "none" }}
                    >
                      <Link
                        className="text-muted"
                        style={{ textDecoration: "none" }}
                        to="/"
                      >
                        <i className="fa-solid fa-heart"></i>
                        <span className="ms-1">
                          {trasnaltions[lang].Wishlist}
                        </span>
                      </Link>{" "}
                    </li>
                    {/*مقاس  */}
                    <li
                      className=" d-none d-sm-inline"
                      style={{ listStyleType: "none" }}
                    >
                      <Link
                        to="/Cart"
                        className="text-muted position-relative "
                        style={{ textDecoration: "none" }}
                      >
                        <i className="fa-solid fa-cart-shopping "></i>
                        <span className="ms-1">
                          $ {totalPrice.toFixed(2)}
                          {totalItems > 0 && (
                            <span className="badge bg-primary rounded-pill position-absolute top-0 start-0 translate-middle  border rounded-circle">
                              {totalItems}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* جوال */}
            <div className="row">
              <div className="col-md-6 col-8 d-inline d-sm-none  ">
                <img src={logo} className="img-fluid d-none" alt="" />
                <div className=" shdow rounded-5 p-3">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://wa.me/97439941798"
                    className="text-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
                    +974 3994 1798
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-4 d-flex align-items-center d-inline d-sm-none">
                <li
                  className=" d-inline d-sm-none me-2"
                  style={{ listStyleType: "none" }}
                >
                  <Link to="/WishList">
                  <button
                    type="button"
                    style={{ background: "none", border: "none" }}
                  >
                    <i className="fa-regular fa-user fa-xl "></i>
                  </button>
                  </Link>
                </li>
                <li className="list-unstyled me-1">
                  <Link
                    to="/Cart"
                    className="text-muted position-relative"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-bag-shopping fa-2xl"></i>
                    {totalItems > 0 && (
                      <span className="badge bg-primary rounded-pill position-absolute top-0 start-100 translate-middle border rounded-circle">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </li>

                <button
                  style={{ border: "none" }}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbarnav"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
