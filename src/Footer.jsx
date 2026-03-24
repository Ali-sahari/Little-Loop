import { useContext } from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import { LangContext } from "./LangContext.JSX";
export default function Footer() {
  const { lang, trasnaltions } = useContext(LangContext);
  return (
    <>
      <div className="container mt-5">
        <div
          className="row p-4 rounded-4 text-white"
          style={{ backgroundColor: "#212529" }}
        >
          <div className="col-md-3 d-flex">
            <div className="mt-2">
              <i className="fa-solid fa-wallet fa-2xl"></i>
            </div>
            <div className="ms-3">
              <h1 className="fw-bold fs-6">{trasnaltions[lang].walet}</h1>
              <p className="text-muted">{trasnaltions[lang].Pwalet}</p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="mt-2">
              <i className="fa-regular fa-truck fa-2xl"></i>
            </div>
            <div className="ms-3">
              <h1 className="fw-bold fs-6">{trasnaltions[lang].track}</h1>
              <p className="text-muted">{trasnaltions[lang].Ptrack}</p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="mt-2">
              <i className="fa-solid fa-comments-dollar fa-2xl"></i>
            </div>
            <div className="ms-3">
              <h1 className="fw-bold fs-6">{trasnaltions[lang].chat}</h1>
              <p className="text-muted">{trasnaltions[lang].Pchat}</p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="mt-2">
              <i className="fa-solid fa-gift fa-2xl"></i>
            </div>
            <div className="ms-3">
              <h1 className="fw-bold fs-6">{trasnaltions[lang].gift}</h1>
              <p className="text-muted">{trasnaltions[lang].Pgift}</p>
            </div>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-md-6">
            <Link to="/">
              <img src={logo} className="img-fluid " style={{height:"100px"}} alt="" />
            </Link>
            <p className="text-muted">{trasnaltions[lang].Discover}</p>
          </div>
          <div className="col-md-5 mt-5">
            <Link  to="tel:+97439941798" style={{ textDecoration: "none" }}>
            <div
              className="rounded-5 d-flex border border-2 p-2 ms-auto"
              style={{ width: "fit-content" }}
            >
              <div
                className="bg-dark text-white"
                style={{ borderRadius: "50%", padding: "4px" }}
              >
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <span className="fs-5 fw-bold ms-2">+974 3994 1798</span>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row mt-5">
          <div className="col-md-3 col-3">
            <h1 className="fs-6  fw-bold">{trasnaltions[lang].Shop}</h1>
            <ul className="m-0 p-0">
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].lishop1}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].lishop2}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].lishop3}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].lishop4}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].lishop5}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-3">
            <h1 className="fs-6  fw-bold">{trasnaltions[lang].Company}</h1>
            <ul className="m-0 p-0">
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liCompany1}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liCompany2}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liCompany3}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liCompany4}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liCompany5}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-3">
            <h1 className="fs-6  fw-bold">{trasnaltions[lang].Useful}</h1>
            <ul className="m-0 p-0">
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liUseful1}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liUseful2}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liUseful3}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liUseful4}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liUseful5}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-3">
            <h1 className="fs-6  fw-bold">{trasnaltions[lang].Useful}</h1>
            <ul className="m-0 p-0">
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liLegal1}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liLegal2}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liLegal3}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liLegal4}
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link className="text-muted" style={{ textDecoration: "none" }}>
                  {trasnaltions[lang].liLegal5}
                </Link>
              </li>
            </ul>
          </div>
          <hr className="mt-4" />
          <div className="row">
            <div className="col-md-6 col-10">
              <p>{trasnaltions[lang].Copyright}</p>
            </div>
            <div className="col-md-6 col-2 mt-3 ">
              <div className="d-flex justify-content-end text-muted gap-2">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-square-x-twitter"></i>
                <i className="fa-brands fa-square-instagram"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
