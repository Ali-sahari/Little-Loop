import { useContext } from "react";
import { LangContext, CartContext } from "./LangContext.JSX";
export default function CheckoutItem({ item }) {
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
            <div className="col-md-9 col-4 d-flex align-items-center gap-3">
              <img
                src={item.img}
                className="rounded img-fluid"
                style={{ width: "60px", objectFit: "cover" }}
              />
              <div className="fw-semibold">
                <p className="text-muted">
                  {trasnaltions[lang][item.titleitem]}
                </p>
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
            </div>

            <div className="col-md-3 text-end col-3 fw-bold text-muted ">
              <p>${(item.priceKey * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
