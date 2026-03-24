import { useContext } from "react";
import { LangContext, CartContext , ProInformation } from "./LangContext.JSX";
export default function CartItem({ item }) {
    const { lang, trasnaltions } = useContext(LangContext);
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const increment = () => updateQuantity(item.id, item.quantity + 1);
  const decrement = () =>
    updateQuantity(item.id, Math.max(1, item.quantity - 1));

  return (
   <>
  
    <ul className="list-group">     
      <li
        style={{
          border: "none",
          borderBottom: "1px solid #E6EAEC",
        }}
        className="list-group-item "
      >
        <div className="row align-items-center">
          <div className="col-md-4 col-4 d-flex align-items-center gap-3">
            <img
              src={item.img}
              className="rounded img-fluid"
              style={{ width: "60px", objectFit: "cover" }}
            />
            <div className="fw-semibold">
              <p>{trasnaltions[lang][item.titleitem]}</p>
              <p className="text-muted">${item.priceKey}</p>
            </div>
          </div>

          <div className="col-md-3 col-2 my-2 my-md-0 text-center d-flex justify-content-center align-items-center gap-2">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value, 10) || 1)
              }
              className="form-control text-center rounded-pill mx-2"
              style={{ maxWidth: "60px" }}
            />
          </div>

          <div className="col-md-3 col-3 fw-bold text-primary text-center">
            {(item.priceKey * item.quantity).toFixed(2)}
          </div>

          <div className="col-md-2 col-2 text-center">
            <button
              type="button"
              style={{ border: "none", background: "none" }}
              className=""
              onClick={() => removeFromCart(item.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
   </>
  );
}
