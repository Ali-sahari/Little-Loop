import item1 from "./assets/itemsimg/item1.webp";
import item2 from "./assets/itemsimg/item2.webp";
import item3 from "./assets/itemsimg/item3.webp";
import item4 from "./assets/itemsimg/item4.webp";
import item5 from "./assets/itemsimg/item5.webp";
import item6 from "./assets/itemsimg/item6.webp";
import item7 from "./assets/itemsimg/item7.webp";
import item8 from "./assets/itemsimg/item8.webp";
import item9 from "./assets/myitemsimg/item9.png";
import item10 from "./assets/myitemsimg/item10.png";
import item11 from "./assets/myitemsimg/item11.png";
import item12 from "./assets/myitemsimg/item12.png";
import item13 from "./assets/myitemsimg/item13.png";
import { createContext, useState, useEffect } from "react";

export const LangContext = createContext();
export const CartContext = createContext();
export const ProInformation = createContext();

export function CartProvider({ children }) {
  const itemsshopList = [
    { id: 1, img: item1, titleitem: "itemh1", descKey: "itemp", priceKey: 35.0, btnKey: "itembtn", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ffffff", category: "Toys", on: "item1" },
    { id: 2, img: item2, titleitem: "itemh12", descKey: "itemp2", priceKey: 25.0, btnKey: "itembtn2", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#bdbdbd", category: "Toys", on: "item2" },
    { id: 3, img: item3, titleitem: "itemh13", descKey: "itemp3", priceKey: 15.0, btnKey: "itembtn3", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#964B00", category: "Toys", on: "item3" },
    { id: 4, img: item4, titleitem: "itemh14", descKey: "itemp4", priceKey: 45.0, btnKey: "itembtn4", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#fdd835", category: "Toys", on: "item4" },
    { id: 5, img: item5, titleitem: "itemh15", descKey: "itemp5", priceKey: 18.0, btnKey: "itembtn5", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#fb8c00", category: "Dresses", on: "item5" },
    { id: 6, img: item6, titleitem: "itemh16", descKey: "itemp6", priceKey: 25.0, btnKey: "itembtn6", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ef5350", category: "Dresses", on: "item6" },
    { id: 7, img: item7, titleitem: "itemh17", descKey: "itemp7", priceKey: 20.0, btnKey: "itembtn7", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ab47bc", category: "HatsScarfs", on: "item7" },
    { id: 8, img: item8, titleitem: "itemh18", descKey: "itemp8", priceKey: 15.0, btnKey: "itembtn8", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#42a5f5", category: "ShoesSocks", on: "item8" },
    { id: 9, img: item9, titleitem: "itemh19", descKey: "itemp9", priceKey: 40.0, btnKey: "itembtn9", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ffffff", category: "Sweaters", on: "item9" },
    { id: 10, img: item10, titleitem: "itemh110", descKey: "itemp10", priceKey: 45.0, btnKey: "itembtn10", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ffffff", category: "Sweaters", on: "item10" },
    { id: 11, img: item11, titleitem: "itemh111", descKey: "itemp11", priceKey: 14.0, btnKey: "itembtn11", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ffffff", category: "Sweaters", on: "item11" },
    { id: 12, img: item12, titleitem: "itemh112", descKey: "itemp12", priceKey: 24.0, btnKey: "itembtn12", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ffffff", category: "Sweaters", on: "item12" },
    { id: 13, img: item13, titleitem: "itemh113", descKey: "itemp13", priceKey: 54.0, btnKey: "itembtn13", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", color: "#ffffff", category: "Sweaters", on: "item13" },
  ];

  const itemsList = [
    { id: 1, img: item1, titleitem: "itemh1", descKey: "itemp", priceKey: 35.0, btnKey: "itembtn" },
    { id: 2, img: item2, titleitem: "itemh12", descKey: "itemp2", priceKey: 25.0, btnKey: "itembtn2" },
    { id: 3, img: item3, titleitem: "itemh13", descKey: "itemp3", priceKey: 15.0, btnKey: "itembtn3" },
    { id: 4, img: item4, titleitem: "itemh14", descKey: "itemp4", priceKey: 45.0, btnKey: "itembtn4" },
  ];

  // تحميل السلة من LocalStorage مع التأكد من سلامة البيانات
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= 5) return prevCart;
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const finalQty = newQuantity > 5 ? 5 : newQuantity;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: finalQty } : item))
    );
  };

  // 1. حساب السعر الإجمالي بشكل آمن (القلب النابض للحل)
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.priceKey) || 0;
    const qty = Number(item.quantity) || 0;
    return sum + price * qty;
  }, 0);

  const totalItems = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

  // 2. إدارة الـ States التابعة للسعر بشكل تلقائي
  const [total, stetotal] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const formattedTotal = Number(totalPrice.toFixed(2));
    stetotal(formattedTotal);
    // إذا كان totalPrice صفر، نضع القيمة صفر لتجنب NaN
    setValue(totalPrice > 0 ? Number((totalPrice / 3).toFixed(2)) : 0);
  }, [totalPrice]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
        itemsList,
        stetotal,
        total,
        value,
        setValue,
        itemsshopList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}