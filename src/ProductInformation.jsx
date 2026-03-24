import cartimg from "./assets/cartimg.png";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { LangContext, CartContext, ProInformation } from "./LangContext";
import { useContext, useEffect, useState } from "react";
export default function ProductInformation({ item }) {
  const { cart, totalPrice, addToCart, itemsList, total, stetotal } =
    useContext(CartContext);

  const increment = () => updateQuantity(item.id, item.quantity + 1);
  const decrement = () =>
    updateQuantity(item.id, Math.max(1, item.quantity - 1));
  const { information, Information } = useContext(ProInformation);
  const { lang, trasnaltions } = useContext(LangContext);
  const [filteR, setFilteR] = useState("Description")

  return (
    <>
      <div className="container" style={{ marginTop: "10rem" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={Information[information].image1}
              alt=""
            />
          </div>
          <div
            style={{
              height: "448px",
              overflowY: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
            className="col-md-6">
            <div className="">
              <h1 className="fw-bold ">{Information[information].h1item}</h1>
              <p className="text-muted fw-bold fs-4">
                {Information[information].pprice}
              </p>
              <p className="lead mt-5">{Information[information].paragraf1}</p>
              <p className="lead mt-3">{Information[information].paragraf2}</p>
              <p className="lead mt-3">{Information[information].paragraf3}</p>
            </div>
            <hr />
            <div className="">
              <button
                onClick={() => {
                  const itemId = parseInt(information.replace("item", ""));
                  const currentItem = itemsList.find((i) => i.id === itemId);
                  if (currentItem) {
                    addToCart(currentItem);
                  }
                }}
                className="warningbtn w-100 py-3 rounded-3"
              >
                {Information[information].thebtn}
              </button>
            </div>
            <hr />
            <p>
              <span className="fw-bold">
                {Information[information].Category2}
              </span>
              :{" "}
              <span className="text-muted fw-bold">
                {Information[information].Sweaters2}
              </span>
            </p>
            <p className="fw-bold text-muted">
              {Information[information].Share2}
            </p>
            <div className="d-flex gap-2  ">
              <Link to="">
                <i className=" icon fa-brands fa-facebook"></i>
              </Link>
              <Link to="">
                <i className=" icon fa-brands fa-square-x-twitter"></i>
              </Link>
              <Link to="">
                <i className=" icon fa-brands fa-pinterest"></i>
              </Link>
              <Link to="">
                <i className=" icon fa-brands fa-linkedin"></i>
              </Link>
              <Link to="">
                <i className=" icon fa-brands fa-square-whatsapp"></i>
              </Link>
              <Link to="">
                <i className=" icon fa-brands fa-square-instagram"></i>
              </Link>
              <Link to="">
                <i className=" icon fa-brands fa-square-bluesky"></i>
              </Link>
            </div>
            <div className="border text-center py-2 mt-5">
              <h1
                className="text-muted fw-bold  fs-6"
                style={{ position: "relative", top: "-20px" }}
              >
                {Information[information].GuaranteedSafeCheckout2}
              </h1>
              <div className="px-10">
                <img className="img-fluid" src={cartimg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-12 ">
            <div className="text-center">
              <button
                onClick={() => setFilteR("Description")}
                style={{ border: "none", background: "none", fontWeight: filteR === "Description" ? "bold" : "", color: filteR === "Description" ? "#FECF72" : "" }}
                className="ms-3">{Information[information].Description2}</button>
              <button
                onClick={() => setFilteR("Additionalinformation")}
                style={{ border: "none", background: "none", fontWeight: filteR === "Additionalinformation" ? "bold" : "", color: filteR === "Additionalinformation" ? "#FECF72" : "" }}
                className="ms-3">{Information[information].Additionalinformation2}</button>
              <button
                onClick={() => setFilteR("Reviews")}
                style={{ border: "none", background: "none", fontWeight: filteR === "Reviews" ? "bold" : "", color: filteR === "Reviews" ? "#FECF72" : "" }}
                className="ms-3">{Information[information].Reviews2}</button>
            </div>
            <hr />
          </div>
          <div className="col-md-12">
            {filteR === 'Description' && (
              <>
                <p className="mt-4 lead text-muted">{Information[information].Mus2}</p>
                <p className="mt-4 lead text-muted">{Information[information].Lectus2}</p>
                <p className="mt-4 lead text-muted">{Information[information].Platea2}</p>
                <p className="mt-4 lead text-muted">{Information[information].Dis2}</p>
              </>
            )}
            {filteR === 'Additionalinformation' && (
              <>
                <table className="table table-bordered">
                  <tbody>
                    <tr className="">
                      <th>{Information[information].Color2}</th>
                      <td>{Information[information].colores2}</td>
                    </tr>
                    <tr>
                      <th>{Information[information].Size2}</th>
                      <td>{Information[information].theSize2}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {filteR === 'Reviews' && (
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="fw-bold fs-6">
                        {Information[information].Reviews2}
                      </h1>
                      <p className="text-muted">{Information[information].Therearenoreviewsyet2}</p>
                    </div>
                    <div className="col-md-6">
                      <h1 className="fw-bold fs-5">{Information[information].Be2}</h1>
                      <p className="text-muted">{Information[information].Youremailaddress2}</p>
                      <div className="">
                        <p>
                          {Information[information].Yourrating2}
                          <span><i class="fa-solid fa-star"></i>
                          </span>
                          <span><i class="fa-solid fa-star"></i>
                          </span>
                          <span><i class="fa-solid fa-star"></i>
                          </span>
                          <span><i class="fa-solid fa-star"></i>
                          </span>
                          <span><i class="fa-solid fa-star"></i>
                          </span>
                        </p>
                        <div className="row rowshop">
                          <div className="col-md-6 mt-3">
                            <label htmlFor="">{Information[information].Name2}</label>
                            <input type="text" className="w-100 form-control mt-2" />
                          </div>
                          <div className="col-md-6 mt-3">
                            <label htmlFor="">{Information[information].Email2}</label>
                            <input type="text" className="w-100 form-control mt-2" />
                          </div>
                          <div className="col-md-12 mt-3">
                            <label htmlFor="">{Information[information].ReviewTitle2}</label>
                            <input type="text" className="w-100 form-control mt-2" />
                          </div>
                          <div className="col-md-12 mt-3">
                            <label htmlFor="">{Information[information].Yourreview2}</label>
                            <textarea name="" className="w-100 form-control mt-2" rows={7} id=""></textarea>
                            <div className="">
                              <p style={{ fontSize: "0.9rem" }}><input type="checkbox" />{Information[information].thebox2}</p>
                              <button className="warningbtn w-100 py-3 rounded-4">{Information[information].theboxbtn2}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
