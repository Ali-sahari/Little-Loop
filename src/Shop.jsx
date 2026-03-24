import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LangContext, CartContext, ProInformation } from "./LangContext";


export default function Shop({ item }) {
    const { removeFromCart, updateQuantity } = useContext(CartContext);

    const increment = () => updateQuantity(item.id, item.quantity + 1);
    const decrement = () =>
        updateQuantity(item.id, Math.max(1, item.quantity - 1));

    const { lang, trasnaltions } = useContext(LangContext);
    const { addToCart, itemsshopList } = useContext(CartContext)
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 50]);



    const filteredProducts = itemsshopList.filter((item) => {
        const colorMatch = selectedColor ? item.color === selectedColor : true;
        const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
        const priceMatch = item.priceKey >= priceRange[0] && item.priceKey <= priceRange[1];
        return colorMatch && categoryMatch && priceMatch;
    });
    const { information, setInformation, Information } = useContext(ProInformation)
    return (
        <>
            <div className="container" style={{ marginTop: "10rem" }}>
                <div className="row justify-content-center">
                    <div className="col-md-4  mt-4 rounded-3"
                        style={{ overflow: "hidden", position: "relative" }}
                    >
                        <img src={"https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/01/shop-hero-image-2.webp"} alt="" className="img-fluid HomeImg1 rounded-3" />
                        <button
                            className="btn btn-white bg-white"
                            style={{ position: "absolute", top: "7%", left: "7%" }}
                        >
                            {trasnaltions[lang].ShopCollections}
                        </button>
                    </div>

                    <div className="col-md-3  mt-4 rounded-3"
                        style={{ overflow: "hidden", position: "relative" }}
                    >
                        <img src={"https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/01/shop-hero-image-1.webp"} alt="" className="img-fluid HomeImg1 rounded-3" />
                        <button
                            className="btn btn-white bg-white"
                            style={{ position: "absolute", top: "7%", left: "7%" }}
                        >
                            {trasnaltions[lang].ShopNewArrivals}
                        </button>
                    </div>

                    <div className="col-md-5  mt-4 rounded-3"
                        style={{ overflow: "hidden", position: "relative" }}
                    >
                        <img src={"https://startersites.io/blocksy/kiddy/wp-content/uploads/2025/01/shop-hero-image-3.webp"} alt="" className="img-fluid HomeImg1 rounded-3" />
                        <button
                            className="btn btn-white bg-white"
                            style={{ position: "absolute", top: "7%", left: "7%" }}
                        >
                            {trasnaltions[lang].ShopDiscounts}
                        </button>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-md-8 col-6 ">
                        <p className="text-muted">
                            {trasnaltions[lang].Showing} 1–{filteredProducts.length}{" "}
                            {trasnaltions[lang].Of} {itemsshopList.length}{" "}
                            {trasnaltions[lang].Results}
                        </p>


                        <div
                            style={{
                                height: "848px",
                                overflowY: "scroll",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            }}
                            className="row  mt-5">
                            {filteredProducts.map((item) => (
                                <>
                                    <div key={item.id} className="col-md-4 mt-3  text-center rounded" >
                                        <div className="card " >
                                            <div className="img-big-item ">
                                                <Link onClick={() => setInformation(item.on)} to="/ProductInformation"><img src={item.img} className="img-fluid img-big" alt="" /></Link>
                                                {/* اbtn */}
                                                <div className="" style={{ opacity: "0" }}>
                                                    <button
                                                        className="itemBtn2"
                                                        onClick={() => addToCart(item)}
                                                        style={{
                                                            border: "none",
                                                            display: "block",
                                                            borderRadius: "50%",
                                                            padding: "4px",
                                                            position: "relative",
                                                            top: "-215px",
                                                            left: "190px",
                                                        }}
                                                    >
                                                        <i className={item.heart}></i>
                                                    </button>
                                                    <button
                                                        className="itemBtn2"
                                                        style={{
                                                            border: "none",
                                                            display: "block",
                                                            borderRadius: "50%",
                                                            padding: "4px",
                                                            position: "relative",
                                                            top: "-215px",
                                                            left: "190px",
                                                        }}
                                                    >
                                                        <i className={item.shuffle}></i>
                                                    </button>
                                                    <button
                                                        className="itemBtn2"
                                                        style={{
                                                            border: "none",
                                                            display: "block",
                                                            borderRadius: "50%",
                                                            padding: "4px",
                                                            position: "relative",
                                                            top: "-210px",
                                                            left: "190px",
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
                                                        className="orange  btnKey "
                                                        onClick={() => addToCart(item)}
                                                        style={{
                                                            border: "none",
                                                            width: "100%",
                                                            background: "none",
                                                            fontSize: "0.9rem"
                                                        }}
                                                    >
                                                        {trasnaltions[lang][item.btnKey]}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4 col-5 ">
                        <h5 className="fw-bold mb-3">
                            {trasnaltions[lang].FilterByPrice}
                        </h5>

                        <input
                            className="bg-danger"
                            type="range"
                            min="15"
                            max="50"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([15, Number(e.target.value)])}
                            style={{ width: "100%", accentColor: "#f5a623" }}
                        />

                        <p className="text-muted mt-2">
                            {trasnaltions[lang].Price}:{" "}
                            <strong>
                                ${priceRange[0]} - ${priceRange[1]}
                            </strong>
                        </p>

                        <h5 className="fw-bold mt-4 mb-3">
                            {trasnaltions[lang].FilterByColor}
                        </h5>

                        {[
                            { name: trasnaltions[lang].ColorWhite, color: "#ffffff" },
                            { name: trasnaltions[lang].ColorGray, color: "#bdbdbd" },
                            { name: trasnaltions[lang].ColorBrown, color: "#964B00" },
                            { name: trasnaltions[lang].ColorYellow, color: "#fdd835" },
                            { name: trasnaltions[lang].ColorOrange, color: "#fb8c00" },
                            { name: trasnaltions[lang].ColorRed, color: "#ef5350" },
                            { name: trasnaltions[lang].ColorPurple, color: "#ab47bc" },
                            { name: trasnaltions[lang].ColorBlue, color: "#42a5f5" },
                            { name: trasnaltions[lang].ColorGreen, color: "#66bb6a" },
                            { name: trasnaltions[lang].ColorBlack, color: "#000000" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedColor(item.color)}

                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: "14px",
                                    cursor: "pointer",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <span
                                        style={{
                                            width: "22px",
                                            height: "22px",
                                            borderRadius: "50%",
                                            backgroundColor: item.color,
                                            border: selectedColor === item.color ? "2px solid #000" : "2px solid #eee"

                                        }}
                                    />
                                    <span>{item.name}</span>
                                </div>

                                <span
                                    style={{
                                        minWidth: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        border: "1px solid #e0e0e0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "14px",
                                    }}
                                >
                                    {index + 1}
                                </span>
                            </div>
                        ))}

                        <h5 className="fw-bold mt-4 mb-3">
                            {trasnaltions[lang].FilterByCategory}
                        </h5>

                        {[
                            trasnaltions[lang].CatToysGames,
                            trasnaltions[lang].CatDresses,
                            trasnaltions[lang].CatHatsScarfs,
                            trasnaltions[lang].CatShoesSocks,
                            trasnaltions[lang].CatSweaters,
                            trasnaltions[lang].CatTshirts,
                        ].map((cat, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginBottom: "14px",
                                }}
                            >
                                <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategory === cat}
                                        onChange={(e) =>
                                            setSelectedCategory(e.target.checked ? cat : null)
                                        }
                                    />
                                    <span>{cat}</span>
                                </label>

                                <span
                                    style={{
                                        minWidth: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        border: "1px solid #e0e0e0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "14px",
                                    }}
                                >
                                    {index + 5}
                                </span>
                            </div>
                        ))}

                        <button
                            className="btn btn-warning col-md-12"
                            onClick={() => {
                                setSelectedColor(null);
                                setSelectedCategory(null);
                                setPriceRange([0, 50]);
                            }}
                        >
                            {trasnaltions[lang].ClearFilter}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}