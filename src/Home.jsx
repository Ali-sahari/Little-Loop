import النجمة from "./assets/النجمة.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import { LangContext, CartContext ,ProInformation } from "./LangContext.JSX";
import homeheroimage1 from "./assets/homeheroimage1.webp";
import productcategoryimagetoys from "./assets/productcategoryimagetoys.webp";
import homeheroimage2 from "./assets/homeheroimage2.webp";
import homecta3image from "./assets/homecta3image.webp";
import homecta2image from "./assets/homecta2image.webp";
import Looo from "./assets/Looo.png";
import Logoip from "./assets/Logoip.png";
import Logoipsum from "./assets/Logoipsum.png";
import ogo from "./assets/ogo.png";
import childimage1 from "./assets/childimage1.webp";
import childimage2 from "./assets/childimage2.webp";
import childimage3 from "./assets/childimage3.webp";
import childimage4 from "./assets/childimage4.webp";
import childimage5 from "./assets/childimage5.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";

export default function Home() {
  const { addToCart , itemsList } = useContext(CartContext);
  const {setInformation, Information }=useContext(ProInformation)
  const { lang, trasnaltions } = useContext(LangContext);
  const [sbscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="container container-home" style={{ marginTop: "150px" }}>
        <div className="row ">
          <div className="col-md-6">
            <div className="">
              <h1 className="fw-bold Where" style={{ fontSize: "6.5rem" }}>
                {trasnaltions[lang].Where}
              </h1>
              <p className="fs-4 text-muted Explore">
                {trasnaltions[lang].Explore}
              </p>
            </div>
            <div className="row text-center">
              <div className="col-md-5">
                <Link to="/shop">
                <button className="up-right px-4 fw-bold btn1 rounded">
                  {trasnaltions[lang].btn1}{" "}
                  <i className="bi bi-arrow-up-right"></i>
                </button>
                </Link>
              </div>
              <div className="col-md-6 ">
                <button className="btn2fa-play px-4 rounded fw-bold">
                  {" "}
                  <i className="fa-solid fa-play "></i>{" "}
                  {trasnaltions[lang].btn2}{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center ">
            <div className="row  justify-content-center ">
              <div className="col-md-6 mt-5">
                <div
                  className=" rounded-4"
                  style={{ backgroundColor: "#ffebbe" }}
                >
                  <img className="img-fluid" src={homeheroimage1} alt="" />
                </div>
              </div>
              <div className="col-md-6 mt-3 mt-lg-0 ">
                <div
                  className=" rounded-4"
                  style={{ backgroundColor: "#f3efff" }}
                >
                  <img className="img-fluid pt-5" src={homeheroimage2} alt="" />
                </div>
                <div className={`mt-3  ${sbscribe ? "d-none" : ""}`}>
                  <form action="">
                    <input
                      required
                      className="w-100 form-control Your  p-3"
                      type="email"
                      placeholder={trasnaltions[lang].Your}
                      name=""
                      id=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                      disabled={!email}
                      type="submit"
                      onClick={() => setSubscribe(true)}
                      className="text-white Get fw-bold rounded"
                      style={{
                        backgroundColor: "#212529",
                        padding: "13px",
                        position: "relative",
                        top: "-56px",
                        width: "103px",
                        left: "80px",
                      }}
                    >
                      {trasnaltions[lang].Subscribe}
                    </button>
                  </form>
                </div>
                <div
                  className={`mt-3 text-start mt-3 ${sbscribe ? "" : "d-none"}`}
                >
                  <p>{trasnaltions[lang].subscribing}</p>
                </div>
              </div>
            </div>
            <img
              src={النجمة}
              style={{ height: "300px", position: "relative", top: "-500px" }}
              className="img-fluid star"
              alt=""
            />
          </div>
        </div>
        <div className="row row-top" style={{ marginTop: "-120px" }}>
          <div className="col-md-8">
            <div className="image-card rounded-5 overflow-hidden position-relative">
              <img
                className="img-fluid w-100 productcategoryimagetoys"
                src={productcategoryimagetoys}
                alt=""
              />
              <div
                className="text-white btn3-tw p-4"
                style={{ position: "absolute", top: "260px", left: "20px" }}
              >
                <h1 className="fs-6">{trasnaltions[lang].NEW}</h1>
                <div className="fw-bold fs-1">
                  {trasnaltions[lang].tw}
                  <span className="fs-6">{trasnaltions[lang].Off}</span>
                </div>
                <button
                  className="btn btn-light px-4 fw-bold btn3"
                  style={{ padding: "10px" }}
                >
                  {trasnaltions[lang].btn3}
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            
            <div
              className="rounded-4 p-4 mt-3 divHomecta3image"
              style={{ backgroundColor: "#F3EFFF" }}
            >
              <div className="row ">
                <div className="col-md-7 col-7">
                  <h1 className="fs-6">{trasnaltions[lang].New2}</h1>
                  <div className="fw-bold fs-1">
                    {trasnaltions[lang].tw2}
                    
                    <span className="fs-6">{trasnaltions[lang].Off2}</span>
                  </div>
                  <Link to="/shop">
                  <button
                    className="btn btn-light px-4 fw-bold btn3 mt-3"
                    style={{ padding: "10px" }}
                  >
                    {trasnaltions[lang].btn3}
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                  </Link>
                </div>
                <div className="col-md-5 col-5">
                  <img
                    src={homecta3image}
                    alt=""
                    className="img-fluid mt-4 homecta3image"
                  />
                </div>
              </div>
            </div>
            <div
              className=" rounded-4 p-4 mt-3 divHomecta2image"
              style={{ backgroundColor: "#FFEBBE" }}
            >
              <div className="row">
                <div className="col-md-7 col-7">
                  <h1 className="fs-6">{trasnaltions[lang].New4}</h1>
                  <div className="fw-bold fs-1">
                    {trasnaltions[lang].tw4}
                    <span className="fs-6">{trasnaltions[lang].Off2}</span>
                  </div>
                  <Link to="/shop">
                  <button
                    className="btn btn-light px-4 fw-bold btn3 mt-3"
                    style={{ padding: "10px" }}
                  >
                    {trasnaltions[lang].btn3}
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                  </Link>``
                </div>
                <div className="col-md-5 col-5">
                  <img
                    src={homecta2image}
                    alt=""
                    className="img-fluid mt-4 homecta2image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row p-5 mt-2 rounded-4"
          style={{ backgroundColor: "#212529" }}
        >
          <div className="col-md col-6">
            <img
              className="img-fluid"
              style={{ height: "50px" }}
              src={Logoipsum}
              alt=""
            />
          </div>
          <div className="col-md col-6">
            <img
              className="img-fluid"
              style={{ height: "50px" }}
              src={Looo}
              alt=""
            />
          </div>
          <div className="col-md col-6">
            <img
              className="img-fluid"
              style={{ height: "50px" }}
              src={Logoip}
              alt=""
            />
          </div>
          <div className="col-md col-6">
            <img
              className="img-fluid"
              style={{ height: "50px" }}
              src={ogo}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold">{trasnaltions[lang].FeaturedProducts}</h1>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/shop">
            <button
              className="btn btn-light px-5 btn3 mt-3"
              style={{ padding: "10px", fontWeight: "600" }}
            >
              {trasnaltions[lang].btn5}
              <i className="bi bi-arrow-up-right"></i>
            </button>
            </Link>
          </div>
        </div>
        {/* items */}
        <div className="row mt-4  justify-content-center  ">
          {itemsList.map((item) => (
            <div key={item.id} className="col-md-3  mt-3  text-center rounded">
              <div className="card">
                <div className="img-big-item ">
                  <Link onClick={() => setInformation(item.on)} to="/ProductInformation"><img src={item.img} className="img-fluid img-big" alt="" /></Link>
                  <div className="" style={{opacity:"0"}}>
                    <button
                      className="itemBtn"
                      onClick={() => addToCart(item)}
                      style={{
                        border: "none",
                        display: "block",
                        borderRadius: "50%",
                        padding: "4px",
                        position: "relative",
                        top: "-240px",
                        left: "220px",
                      }}
                    >
                      <i className={item.heart}></i>
                    </button>
                    <button
                      className="itemBtn"
                      style={{
                        border: "none",
                        display: "block",
                        borderRadius: "50%",
                        padding: "4px",
                        position: "relative",
                        top: "-235px",
                        left: "220px",
                      }}
                    >
                      <i className={item.shuffle}></i>
                    </button>
                    <button
                      className="itemBtn"
                      style={{
                        border: "none",
                        display: "block",
                        borderRadius: "50%",
                        padding: "4px",
                        position: "relative",
                        top: "-230px",
                        left: "220px",
                      }}
                    >
                      <i className={item.eye}></i>
                    </button>
                  </div>
                </div>
                <div className="" style={{ marginTop: "-90px" }}>
                  <h1 className="fs-6 orange">
                    {trasnaltions[lang][item.titleitem]}
                  </h1>
                  <p className="text-muted orange">
                    {trasnaltions[lang][item.descKey]}
                  </p>
                </div>
                <hr className="mt-5" />
                <div className="row">
                  <div className="col-md-5 col-5 text-dark ">
                    <p className="fw-bold"> ${item.priceKey}.00</p>
                  </div>
                  <div className="col-md-1 col-1">
                    <div
                      className=""
                      style={{
                        backgroundColor: "#F3F4F6",
                        height: "30px",
                        width: "1px",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-5 col-5">
                    <button
                      className="orange  "
                      onClick={() => addToCart(item)}
                      style={{
                        border: "none",
                        width: "100%",
                        background: "none",
                      }}
                    >
                      {trasnaltions[lang][item.btnKey]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="d-flex justify-content-center mt-4 ">
              <img
                style={{
                  borderRadius: "50%",
                  height: "80px",
                  position: "relative",
                  left: "",
                  border: "#fff solid 3px",
                }}
                src={childimage1}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  height: "80px",
                  position: "relative",
                  left: "-20px",
                  border: "#fff solid 3px",
                }}
                src={childimage2}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  height: "80px",
                  position: "relative",
                  left: "-40px",
                  border: "#fff solid 3px",
                }}
                src={childimage3}
                alt=""
              />
              <img
                style={{
                  borderRadius: "50%",
                  height: "80px",
                  position: "relative",
                  left: "-60px",
                  border: "#fff solid 3px",
                }}
                src={childimage4}
                alt=""
              />
            </div>
            <h1 className="fs-1 fw-bold mt-4">{trasnaltions[lang].Trusted}</h1>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-4 mt-2">
            <Link style={{ textDecoration: "none" }}>
              <div
                className=" p-3"
                style={{ backgroundColor: "#FDF7EA", borderRadius: "50px" }}
              >
                <div className="row">
                  <div className="col-md-3 col-3">
                    <img
                      src={card1}
                      style={{ height: "60px" }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-6">
                <Link to="/Shop" style={{textDecoration:"none"}}>
                    <span className="text-dark fw-bold fs-5 ">
                      {trasnaltions[lang].Hats} <br />{" "}
                      {trasnaltions[lang].Scarfs}
                    </span>
                  </Link>
                  </div>
                  <div
                    className="col-md-2 ms-1 col-2"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      padding: "20px",
                    }}
                  >
                    <div className=" text-dark">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mt-2">
            <Link style={{ textDecoration: "none" }}>
              <div
                className=" p-3"
                style={{ backgroundColor: "#FDF3F5", borderRadius: "50px" }}
              >
                <div className="row">
                  <div className="col-md-3 col-3">
                    <img
                      src={card2}
                      style={{ height: "60px" }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-6">
                    <Link to="/Shop" style={{textDecoration:"none"}}>
                    <span className="text-dark fw-bold fs-5 ">
                      {trasnaltions[lang].toys} <br />{" "}
                      {trasnaltions[lang].games}
                    </span>
                    </Link>
                  </div>
                  <div
                    className="col-md-2 ms-1 col-2"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      padding: "20px",
                    }}
                  >
                    <div className=" text-dark">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mt-2">
            <Link style={{ textDecoration: "none" }}>
              <div
                className=" p-3"
                style={{ backgroundColor: "#EBF9EF", borderRadius: "50px" }}
              >
                <div className="row">
                  <div className="col-md-3 col-3">
                    <img
                      src={card3}
                      style={{ height: "60px" }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-6">
                    <Link to="/Shop" style={{textDecoration:"none"}}>
                    <span className="text-dark fw-bold fs-5 ">
                      {trasnaltions[lang].Dresses} <br />{" "}
                      {trasnaltions[lang].Suits}
                    </span>
                    </Link>
                  </div>
                  <div
                    className="col-md-2 ms-1 col-2"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      padding: "20px",
                    }}
                  >
                    <div className=" text-dark">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mt-2">
            <Link style={{ textDecoration: "none" }}>
              <div
                className=" p-3"
                style={{ backgroundColor: "#E1F2F2", borderRadius: "50px" }}
              >
                <div className="row">
                  <div className="col-md-3 col-3">
                    <img
                      src={card4}
                      style={{ height: "60px" }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-6">
                    <Link to="/Shop" style={{textDecoration:"none"}}>
                    <span className="text-dark fw-bold fs-5 ">
                      {trasnaltions[lang].Blouses} <br />{" "}
                      {trasnaltions[lang].Tshirts}
                    </span>
                    </Link>
                  </div>
                  <div
                    className="col-md-2 ms-1 col-2"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      padding: "20px",
                    }}
                  >
                    <div className=" text-dark">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mt-2">
            <Link style={{ textDecoration: "none" }}>
              <div
                className=" p-3"
                style={{ backgroundColor: "#F3EFFF", borderRadius: "50px" }}
              >
                <div className="row">
                  <div className="col-md-3 col-3">
                    <img
                      src={card5}
                      style={{ height: "60px" }}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-6">
                    <Link to="/Shop" style={{textDecoration:"none"}}>
                    <span className="text-dark fw-bold fs-5 ">
                      {trasnaltions[lang].Shoes} <br />{" "}
                      {trasnaltions[lang].Socks}
                    </span>
                    </Link>
                  </div>
                  <div
                    className="col-md-2 ms-1 col-2"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      padding: "20px",
                    }}
                  >
                    <div className=" text-dark">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row px-5 mt-3" style={{ backgroundColor: "#FFEBBE" }}>
          <div className="col-md-6 ">
            <div className="">
              <img src={childimage5} style={{ height: "316px" }} alt="" />
            </div>
          </div>
          <div className="col-md-5   py-5">
            <div className="">
              <h1 className="fs-1 fw-bold">{trasnaltions[lang].Get}</h1>
              <p className="fs-5">{trasnaltions[lang].Purchase}</p>
              <div className="">
                <form action="">
                  <input
                    className="w-100 form-control Your  p-3"
                    type="text"
                    placeholder={trasnaltions[lang].Your}
                    name=""
                    id=""
                  />
                  <button
                    className="text-white Get fw-bold rounded"
                    style={{
                      backgroundColor: "#212529",
                      padding: "13px",
                      position: "relative",
                      top: "-56px",
                      left: "306px",
                      width: "103px",
                    }}
                  >
                    {trasnaltions[lang].Subscribe}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}

    </>
  );
}
