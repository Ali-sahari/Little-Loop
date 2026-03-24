
import item1 from "./assets/itemsimg/item1.webp";
import item2 from "./assets/itemsimg/item2.webp";
import item3 from "./assets/itemsimg/item3.webp";
import item4 from "./assets/itemsimg/item4.webp";
import item5 from "./assets/itemsimg/item5.webp";
import item6 from "./assets/itemsimg/item6.webp";
import item7 from "./assets/itemsimg/item7.webp";
import item8 from "./assets/itemsimg/item8.webp";
import item9 from "./assets/myitemsimg/item9.png"
import item10 from "./assets/myitemsimg/item10.png"
import item11 from "./assets/myitemsimg/item11.png"
import item12 from "./assets/myitemsimg/item12.png"
import item13 from "./assets/myitemsimg/item13.png"
import { createContext, useState, useEffect } from "react";
export const LangContext = createContext();
export const CartContext = createContext();
export const ProInformation = createContext();

export function CartProvider({ children, copon }) {


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
    { id: 1, img: item1, titleitem: "itemh1", descKey: "itemp", priceKey: 35.0, btnKey: "itembtn", on: "item1", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", },
    { id: 2, img: item2, titleitem: "itemh12", descKey: "itemp2", priceKey: 25.0, btnKey: "itembtn2", on: "item2", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", },
    { id: 3, img: item3, titleitem: "itemh13", descKey: "itemp3", priceKey: 15.0, btnKey: "itembtn3", on: "item3", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", },
    { id: 4, img: item4, titleitem: "itemh14", descKey: "itemp4", priceKey: 45.0, btnKey: "itembtn4", on: "item4", heart: "fa-regular fa-heart", shuffle: "fa-solid fa-shuffle", eye: "fa-regular fa-eye", },
  ];

  // يقوم ب سؤال السلة هل يوجد قيمة اسمها كارد؟اذا في بجيب القيمة اما اذا لا برجعها فاضية و عند التغيير يرجع يحفظ يلي ضفتو 
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // اذا كان المنتج موجود في السلة زيد العدد اما اذا ما كان موجود ضيفو
  const addToCart = (itemsList) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemsList.id);
      if (existingItem) {
          if (existingItem.quantity >= 5) return prevCart;
        return prevCart.map((item) =>
          item.id === itemsList.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...itemsList, quantity: 1 }];
    });
  };

  //   ازالة المنتج عند الضغط على remove Cart
  const removeFromCart = (itemsListId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemsListId));
  };

  // تمنع ان يضع المستخدم الكمية صفر و تعطيه صلاحية زيادة عدد المنتج بدون اضافة سطر جديد

  const updateQuantity = (itemsListId, newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > 5) newQuantity = 5;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemsListId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  //تزيد الريقم يلي على السلة
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  //   تحسب سحر المنتج ضرب الكمية زائد السعر الحالي يعني تضيفهم للمبلغ الموجود
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.priceKey * item.quantity,
    0
  );
  // ! copon
  const [total, stetotal] = useState(Number(totalPrice.toFixed(2)));

  const [value, setValue] = useState(totalPrice ? Number(totalPrice.toFixed(2)) / 3 : 0);

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
        itemsshopList
      }}
    >
      {children}
    </CartContext.Provider>
  );
}