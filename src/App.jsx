import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Checkout from "./Checkout";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import WishList from "./assets/Wishlist.JSX";
import News from "./News";
import ForgetPassword from "./ForgetPassword";
import ProductInformation from "./ProductInformation";
import {  useState, useEffect } from "react";
import Shop from "./Shop";
import {
  LangContext,
  CartProvider,
  ProInformation,
  CartContext,
} from "./LangContext.JSX";

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

function App() {
  const [lang, setLang] = useState(() => {
  return localStorage.getItem("lang") || "en";
});
useEffect(() => {
  localStorage.setItem("lang", lang);
}, [lang]);

  const trasnaltions = {
    en: {
      // nav bar items
      // ==========================WishList============================
      FeaturedProducts:"Featured Products",
      AuthMyAccount: "My account",
      ForgetPasswordText:
        "Lost your password? Please enter your username or email address. You will receive a link via email.",
      AuthUsernameOrEmail: "Username or email address",
      AuthPassword: "Password",
      AuthRememberMe: "Remember me",
      AuthLostPassword: "Lost your password?",
      AuthResetPassword: "Reset password",
      AuthLogin: "Log in",
      //========================= footer =========================
      // الاربع كاردت
      walet: "Secure Payments",
      Pwalet: "Tellus gravida ipsum aut facilisis tempus at et aliquam estsem.",
      track: "Free Shipping",
      Ptrack: "Non pulvinar aenean ultrices lectus vitae imperdiet aeu.",
      chat: "24/7 Support",
      Pchat: "Nullam iaculis vestibulum arcu id urnain pellentesque quis.",
      gift: "Gifts & Sales",
      Pgift: "Aliquet ullamcorper leo mi vel sit pretium euismod eget libero.",
      // الكلام يلي تحت الشعار
      Discover:
        "Discover our unique assortment of children's apparel andplaythings in preparation for the upcoming fall season.",
      Shop: "Shop",
      lishop1: "Dresses & Suits",
      lishop2: "Shoes & Socks",
      lishop3: "Blouses & T-Shirts",
      lishop4: "Toys & Games",
      lishop5: "Caps & Accessories",
      liCompany1: "About Us",
      liCompany2: "FAQ",
      liCompany3: "Our News",
      liCompany4: "Our Story",
      liCompany5: "Contact Us",
      Useful: "Useful",
      liUseful1: "Site Map",
      liUseful2: "Affiliate Area",
      liUseful3: "Delivery",
      liUseful4: "Locations",
      liUseful5: "Collaboration",
      Legal: "Legal",
      liLegal1: "Shipping Policy",
      liLegal2: "Returns & Exchanges",
      liLegal3: "Terms of Use",
      liLegal4: "Privacy Policy",
      liLegal5: "Cookies Policy",
      // الحقوق
      Copyright: "Copyright © 2025 - WordPress Theme by CreativeThemes",
      //  ========================= ContactUs =========================
      Questions: "Have Questions?  We’re Here for You!",
      pQuestions:
        "Senectus velit sagittis inceptos fringilla mus mauris convallis lobortis.",
      // the form:
      FirstName: "First Name",
      LastName: "Last Name",
      Email: "Email",
      Subject: "Subject",
      YourMessage: "Your Message",
      // تحت الصورة يلي جنب الفورم
      Address: "Address",
      pAddress: "8460 Rockville Ave. Greenville, NC 27834",
      btnAddress: "Get Directions",
      Call: "Call Us Today",
      CallP1: "Mobile:",
      num1: " +73 099 321 312",
      CallP2: "Email: ",
      email1: "kiddy@mail.com",
      Hours: "Opening Hours",
      HoursP1: "Mon-Fri:",
      ocloc1: " 08:30 – 20:00",
      HoursP2: "Sat-Sun:",
      ocloc2: " 10:00 – 18:00",
      Send: " Send Message",
      //  ========================= Home =========================
      Where: "Where Every Little One Finds Style",
      Explore:
        "Explore our exclusive collection of kids’ clothes and toys to get ready for the autumn season.",
      btn1: "Explore Collection",
      btn2: "Promo Video",
      NEW: "NEW Toys collection",
      tw: "20",
      Off: "%  Off",
      btn3: "VIEW OFFER",
      New2: "New Shoes Collection",
      tw2: "10",
      Off2: "%  Off",      
      New4: "New Shoes Collection",
      tw4: "12",
      btn5: "VIEW All Product",
      //  items 1
      itemh1: "Fames Primis",
      itemp: "Sweaters",
      itembtn: "Add to card",
      //  items 2
      itemh12: "Justo Finibus",
      itemp2: "Dresses",
      itembtn2: "Add to card",
      //  items 3
      itemh13: "Montes Dictum",
      itemp3: "Hats & Scarfs",
      itembtn3: "Add to card",
      //  items 4
      itemh14: "Morbi Dapibus",
      itemp4: "Shoes & Socks",
      itembtn4: "Add to card",
      //  items 5
      itemh15: "Porta Primis",
      itemp5: "Toys & Games",
      itembtn5: "Add to card",
      //  items 6
      itemh16: "Quam Venenatis",
      itemp6: "T-shirts",
      itembtn6: "Add to card",
      //  items 7
      itemh17: "Tellus Conubia",
      itemp7: "Toys & Games",
      itembtn7: "Add to card",
      //  items 8
      itemh18: "Velit Eleifend",
      itemp8: "Toys & Games",
      itembtn8: "Add to card",
      //  items 9
      itemh19: "Cartoon Baby Romper",
      itemp9: "Soft Daily Wear",
      itembtn9: "Add to card",
      //  items 10
      itemh110: "Classic Baby Set",
      itemp10: "Elegant Outfit Set",
      itembtn10: "Add to card",
      //  items 11
      itemh111: "Striped Baby Romper",
      itemp11: "Soft Cotton Design",
      itembtn11: "Add to card",
      //  items 12
      itemh112: "Solid Baby Romper",
      itemp12: "Simple Cozy Style",
      itembtn12: "Add to card",
      //  items 13
      itemh113: "Baby Clothing Set",
      itemp13: "Complete Outfit Set",
      itembtn13: "Add to card",
      // item end
      Trusted: "Trusted by over 10K+ customers",
      Hats: "Hats &",
      Scarfs: "Scarfs",
      toys: "toys &",
      games: "games",
      Dresses: "Dresses &",
      Suits: "Suits",
      Blouses: "Blouses &",
      Tshirts: "T-shirts",
      Shoes: "Shoes & ",
      Socks: "Socks",
      Get: "Get Voucher",
      Purchase: "Subscribe Today and Unlock Up to 20% OFF Your Next Purchase!",
      Your: "Your email address",
      Subscribe: "Subscribe",
      subscribing: "Thank you for subscribing to our newsletter!",
      // ========================== Navbar ===================
      Home: "Home",      
      News: "News",
      AboutUs: "About Us",
      ContactUs: "Contact Us ",
      Login: "Login",
      Compare: "Compare",
      Wishlist: "Wishlist",
      total: "total",
      // ========================== AboutUs ===================
      ndConfident: "Our Mission to Make Kids Feel Comfortable and Confident",
      pConfident:
        "We believe every outfit should be as joyful, playful, and unique as the kids who wear it.",
      Driven: "Driven by Love",
      pDriven:
        "Founded by a team of parents, designers, and dreamers, we set out to create a place where parents can find high-quality clothing.",
      Designed: "Designed for Fun and Magic",
      pDesigned:
        "From cozy basics to whimsical prints and adventure-ready outfits, we carefully design each piece to reflect the fun and magic of being a kid. ",
      Sustainable: "Sustainable & Friendly",
      pSustainable:
        "We source only the softest, most durable fabrics and ensure every piece is crafted with attention to detail, so it can stand up to even the busiest little explorers.",
      Best: "Your Children Deserve The Best",
      withstandalltheiradventures:
        "Our story started with a simple dream: to create a space where parents could find clothes that kids love to wear and are built to withstand all their adventures.",
      Years: "Years",
      Stores: "Stores",
      Countries: "Countries",
      btn6: "Explore Our Collection",
      // كاروسيل
      little:
        "My little ones are so picky, but they love the fun designs and bright colors. And as a mom, I love that the clothes are both stylish and sturdy!",
      SamathaJackson: "Samatha Jackson",
      Client: "Client",
      little2:
        "My little ones are so picky, but they love the fun designs and bright colors. And as a mom, I love that the clothes are both stylish and sturdy!",
      SamathaJackson2: "Samatha Jackson",
      Client2: "Client",
      Frequently: "Frequently Asked Questions",
      // اكوارديان
      ultricies: "Rutrum massa id nisi enim enim tincidunt ultricies",
      ultriciesp1:
        "Metus volutpat blandit euismod molestie et viverra nulla. A aenean velit tellus bibendum. Lorem posuere eu sit lacus laoreet neque integer augue. Feugiat fringilla rhoncus eleifend vulputate suspendisse non hendrerit. Ipsum ultrices quisque blandit venenatis at libero.",
      ultriciesp2:
        "Et amet dictum aenean condimentum nulla praesent non, nullam litora torquent. Consequat ullamcorper semper senectus ut ornare vel dis. Accumsan maecenas facilisi ad; convallis habitasse quis.",
      Consequat: "Consequat sem leo viverra nunc turpis duis diam",
      Consequatp1:
        "Metus nec pharetra magnis non euismod, nunc quisque. Sodales inceptos scelerisque nisl justo non urna facilisis neque imperdiet. Finibus neque vivamus morbi viverra pretium cubilia. Pulvinar vivamus adipiscing at habitasse phasellus venenatis convallis.",
      Consequatp2:
        "Vel quis at molestie penatibus fames diam congue felis. Turpis euismod maximus interdum aliquam lacus dictum ut. Euismod ex egestas elementum gravida per, ante nunc id.",
      Metus: "Metus volutpat blandit euismod molestie et viverra",
      Metusp1:
        "Taciti dictum sodales nisl convallis lacus per. Nascetur hendrerit quisque egestas primis pharetra dis primis ex. Donec gravida senectus eros habitasse tristique condimentum quis. Turpis convallis gravida est montes hendrerit.",
      Metusp2:
        "Euismod facilisis primis feugiat per sollicitudin risus ut lacus sapien? Dolor sollicitudin facilisi potenti varius ligula donec. Varius consectetur cubilia parturient consectetur quam lacinia vitae sollicitudin donec. Elementum fames fusce urna ad odio.",
      //  ========================= Cart =========================
      // !warning
      warning1: "“Justo Finibus” removed.",
      warning2: "Your cart is currently empty.",
      warning3: "Your cart is currently empty.",
      warningbtn1: "Undo?",
      warningbtn2: "Return to shop",
      cardProduct: "Product",
      cardQuantity: "Quantity",
      cardSubtotal: "Subtotal",
      Carttotals: "Cart totals",
      Total: "Total",
      // !
      SuggestedProducts: "Suggested Products",
      Congratulations: "Congratulations! You got free shipping 🎉",
      Add: "Add",
      shipping: "more to get free shipping!",
      Proceedtocheckout: "Proceed to checkout",
      Applycoupon: "Apply coupon",
      Couponcode: "Coupon code",
      discount: "30% discount",
      discount2: "8% discount applied",
      discount3: "18% discount applied",
      discount4: "22% discount applied",
      discount5: "35% discount applied",
      Giveacoupon: "Give me a coupon",
      Loding: "Loding...",
      //  ========================= Checkout =========================
      Checkout: "Checkout",
      Billingdetails: "Billing details",
      //? form
      Company: "Company name (optional)",
      CountryRegion: "Country / Region ",
      Streetaddress: "Street address",
      Streetaddresspl1: "House number and street name",
      Streetaddresspl2: "Apartment, suite, unit, etc. (optional)",
      TownCity: "Town / City ",
      Province: "Province",
      PostcodeZIP: "Postcode / ZIP ",
      Phone: "Phone ",
      Emailaddress: "Email address",
      Additionalinformation: "Additional information",
      Order: "Order notes (optional)",
      Notes: "Notes about your order, e.g. special notes for delivery.",
      //? form end
      Yourorder: "Your order",
      Product: "Product",
      Subtotal: "Subtotal",
      Sorry:
        "Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.",
      personal:
        "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.",
      placeorder: "Place order",

      //  ========================= News =========================
      NewsCatTrend: "Trend",
      NewsCatTips: "Tips & Tricks",
      NewsCatFashion: "Fashion",

      NewsTitle1: "Molestie Congue Adultrices Fringilla Nam Consectetur",
      NewsText1:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore tenetur quam consequuntur eaque, doloremque possimus nam, natus quisquam porro necessitatibus? Ut praesentium ex ipsum reprehenderit quam rem. Consectetur cumque incidunt assumenda...",

      NewsTitle2: "Bibendum Magnis Phasellus Dolor Urnavel Welipsum",
      NewsText2:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore tenetur quam consequuntur eaque, doloremque possimus nam, natus quisquam porro necessitatibus? Ut praesentium ex ipsum reprehenderit quam rem. Consectetur cumque incidunt assumenda...",

      NewsTitle3: "Pellentesque Rutrum Habitasse Convallis Torquent",
      NewsText3:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore tenetur quam consequuntur eaque, doloremque possimus nam, natus quisquam porro necessitatibus? Ut praesentium ex ipsum reprehenderit quam rem. Consectetur cumque incidunt assumenda...",

      NewsTitle4: "Velit Sollicitudin Habitasse Aliquam Platea Volutpat",
      NewsText4:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore tenetur quam consequuntur eaque, doloremque possimus nam, natus quisquam porro necessitatibus? Ut praesentium ex ipsum reprehenderit quam rem. Consectetur cumque incidunt assumenda...",

      NewsTitle5: "Curae Velmorbi Estociosqu Lectus Ultricies Rhoncus",
      NewsText5:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore tenetur quam consequuntur eaque, doloremque possimus nam, natus quisquam porro necessitatibus? Ut praesentium ex ipsum reprehenderit quam rem. Consectetur cumque incidunt assumenda...",

      NewsTitle6: "Platea Habitasse Maecenas Suspendisse Ociosqu",
      NewsText6:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, tempore tenetur quam consequuntur eaque, doloremque possimus nam, natus quisquam porro necessitatibus? Ut praesentium ex ipsum reprehenderit quam rem. Consectetur cumque incidunt assumenda...",

      AuthorName: "Michael",
      DateExample: "February 20, 2025",

      NewCollection: "New Collection",
      
      ViewOffer: "View Offer",

      BestSelling: "Best Selling",
      // ======================== Shop =========================

      ShopCollections: "Collections",
      ShopNewArrivals: "New Arrivals",
      ShopDiscounts: "Discounts",

      Showing: "Showing",
      Of: "of",
      Results: "results",

      AddToCart: "Add to cart",

      // ======================== Filters =========================

      FilterByPrice: "Filter by price",
      Price: "Price",

      FilterByColor: "Filter by color",
      FilterByCategory: "Filter by category",

      ClearFilter: "Clear Filter",

      // ======================== Colors =========================

      ColorWhite: "White",
      ColorGray: "Gray",
      ColorBrown: "Brown",
      ColorYellow: "Yellow",
      ColorOrange: "Orange",
      ColorRed: "Red",
      ColorPurple: "Purple",
      ColorBlue: "Blue",
      ColorGreen: "Green",
      ColorBlack: "Black",

      // ======================== Categories =========================

      CatToysGames: "Toys & Games",
      CatDresses: "Dresses",
      CatHatsScarfs: "Hats & Scarfs",
      CatShoesSocks: "Shoes & Socks",
      CatSweaters: "Sweaters",
      CatTshirts: "T-shirts",
      //  ========================= Product Information =========================
      // ? item1 start
      // item 1
      FamesPrimis: "Fames Primis",
      Platea:
        "Platea habitasse maecenas; suspendisse sociosqu ex lacinia euismod. Facilisi phasellus scelerisque sociosqu per commodo metus. Et sociosqu consectetur nisl etiam quam dapibus vivamus. Class fames pulvinar lobortis ante curae varius lobortis!",
      Dis: "Dis consequat ullamcorper primis vitae imperdiet facilisi. Platea cras tristique pellentesque neque laoreet senectus.",
      Dolor:
        "Dolor pulvinar sed vel iaculis accumsan risus eu blandit. Adipiscing hac cubilia aliquam mattis vulputate adipiscing viverra.",
      Category: "Category",
      Sweaters: "Sweaters",
      Share: "Share your love",
      GuaranteedSafeCheckout: "Guaranteed Safe Checkout",
      Description: "Description",      
      Mus: "Mus quam tristique risus dictum ipsum lacinia eleifend sit. Molestie congue natoque tincidunt, quisque semper accumsan hac. Sociosqu sociosqu fames volutpat potenti aliquam habitant placerat. Nisl euismod posuere consequat donec turpis.",
      Lectus: "Lectus iaculis rhoncus proin, malesuada vitae vehicula. Varius justo neque morbi fusce nisi vehicula aliquet. Tortor neque luctus cubilia dictumst tempus aliquet.",            
      Color: "Color",
      colores: "White, Beige, Green",
      Size: "Size",
      theSize: "Medium, Small",
      Reviews: "Reviews",
      Therearenoreviewsyet: "There are no reviews yet.",
      Be: "Be the first to review “Montes Dictum”",
      Youremailaddress: "Your email address will not be published. Required fields are marked *",
      Yourrating: "Your rating *",
      Name: "Name",      
      ReviewTitle: 'Review Title',
      Yourreview: 'Your review ',
      thebox: " Save my name, email, and website in this browser for the next time I comment.",
      theboxbtn: "submit"
      
      // ? item1 end

    },
    ar: {
      FeaturedProducts:"المنتجات المميزة",
      // nav bar items
      // ==========================WishList============================
      AuthMyAccount: "حسابي",
      ForgetPasswordText: "نسيت كلمة المرور؟ الرجاء إدخال اسم المستخدم أو البريد الإلكتروني الخاص بك. ستتلقى رابطًا لإعادة تعيين كلمة المرور عبر البريد الإلكتروني.",
      AuthUsernameOrEmail: "اسم المستخدم أو البريد الإلكتروني",
      AuthPassword: "كلمة المرور",
      AuthRememberMe: "تذكرني",
      AuthLostPassword: "نسيت كلمة المرور؟",
      AuthResetPassword: "إعادة تعيين كلمة المرور",
      AuthLogin: "تسجيل الدخول",

      //========================= footer =========================
      // الأربع كاردت
      walet: "مدفوعات آمنة",
      Pwalet: "جميع المعاملات آمنة ومحمية. يتم الاحتفاظ بمعلومات الدفع الخاصة بك بسرية ومعالجتها بشكل آمن.",
      track: "شحن مجاني",
      Ptrack: "يتم توصيل جميع طلباتك بسرعة ودون أي رسوم إلى عنوانك.",
      chat: "دعم 24/7",
      Pchat: "نحن هنا دائمًا لمساعدتك. لا تتردد في طرح أي أسئلة أو تقديم أي طلبات.",
      gift: "هدايا وعروض",
      Pgift: "فاجئ أحبائك بعروض خاصة وخيارات الهدايا المتنوعة.",

      // الكلام يلي تحت الشعار
      Discover: "اكتشف تشكيلتنا الفريدة من ملابس الأطفال والألعاب استعدادًا لموسم الخريف القادم.",
      Shop: "تسوق",
      lishop1: "فساتين وبدل",
      lishop2: "أحذية وجوارب",
      lishop3: "بلوزات وتي شيرتات",
      lishop4: "ألعاب وألعاب تعليمية",
      lishop5: "قبعات وإكسسوارات",

      Company: "الشركة",
      liCompany1: "من نحن",
      liCompany2: "الأسئلة الشائعة",
      liCompany3: "أخبارنا",
      liCompany4: "قصتنا",
      liCompany5: "اتصل بنا",
      Useful: "مفيد",
      liUseful1: "خريطة الموقع",
      liUseful2: "منطقة الشركاء",
      liUseful3: "التوصيل",
      liUseful4: "المواقع",
      liUseful5: "التعاون",
      Legal: "القانونية",
      liLegal1: "سياسة الشحن",
      liLegal2: "الإرجاع والاستبدال",
      liLegal3: "شروط الاستخدام",
      liLegal4: "سياسة الخصوصية",
      liLegal5: "سياسة ملفات تعريف الارتباط",

      Copyright: "حقوق النشر © 2025 - قالب ووردبريس من CreativeThemes",

      //  ========================= ContactUs =========================
      Questions: "هل لديك أسئلة؟ نحن هنا من أجلك!",
      pQuestions: "نحن دائمًا هنا للإجابة على أسئلتك ومساعدتك في جميع طلباتك.",

      // the form:
      FirstName: "الاسم الأول",
      LastName: "اسم العائلة",
      Email: "البريد الإلكتروني",
      Subject: "الموضوع",
      YourMessage: "رسالتك",

      // تحت الصورة يلي جنب الفورم
      Address: "العنوان",
      pAddress: "8460 Rockville Ave. Greenville, NC 27834",
      btnAddress: "الحصول على الاتجاهات",
      Call: "اتصل بنا اليوم",
      CallP1: "الجوال:",
      num1: "+73 099 321 312",
      CallP2: "البريد الإلكتروني:",
      email1: "kiddy@mail.com",
      Hours: "ساعات العمل",
      HoursP1: "الاثنين-الجمعة:",
      ocloc1: "08:30 – 20:00",
      HoursP2: "السبت-الأحد:",
      ocloc2: "10:00 – 18:00",
      Send: "إرسال الرسالة",

      //  ========================= Home =========================
      Where: "حيث يجد كل صغير أسلوبه الخاص",
      Explore: "استكشف مجموعتنا الحصرية من ملابس الأطفال والألعاب استعدادًا لموسم الخريف.",
      btn1: "استكشاف المجموعة",
      btn2: "فيديو العرض الترويجي",
      NEW: "مجموعة الألعاب الجديدة",
      tw: "20",
      Off: "% خصم",
      btn3: "عرض العرض",
      New2: "مجموعة الأحذية الجديدة",
      tw2: "10",
      Off2: "% خصم",      
      New4: "مجموعة الأحذية الجديدة",
      tw4: "12",
      btn5: "عرض جميع المنتجات",

      // items 1
      itemh1: "Fames Primis",
      itemp: "كنزات",
      itembtn: "أضف إلى السلة",

      // items 2
      itemh12: "Justo Finibus",
      itemp2: "فساتين",
      itembtn2: "أضف إلى السلة",

      // items 3
      itemh13: "Montes Dictum",
      itemp3: "قبعات و أوشحة",
      itembtn3: "أضف إلى السلة",

      // items 4
      itemh14: "Morbi Dapibus",
      itemp4: "أحذية وجوارب",
      itembtn4: "أضف إلى السلة",

      // items 5
      itemh15: "Porta Primis",
      itemp5: "ألعاب وألعاب تعليمية",
      itembtn5: "أضف إلى السلة",

      // items 6
      itemh16: "Quam Venenatis",
      itemp6: "تي شيرتات",
      itembtn6: "أضف إلى السلة",

      // items 7
      itemh17: "Tellus Conubia",
      itemp7: "ألعاب وألعاب تعليمية",
      itembtn7: "أضف إلى السلة",

      // items 8
      itemh18: "Velit Eleifend",
      itemp8: "ألعاب وألعاب تعليمية",
      itembtn8: "أضف إلى السلة",
      // items 9
      itemh19: "رامبر طفل كرتوني",
      itemp9: "ملابس يومية ناعمة",
      itembtn9: "أضف إلى السلة",
      // items 10
      itemh110: "طقم طفل كلاسيكي",
      itemp10: "طقم ملابس أنيق",
      itembtn10: "أضف إلى السلة",
      // items 11
      itemh111: "رامبر طفل مخطط",
      itemp11: "تصميم من القطن الناعم",
      itembtn11: "أضف إلى السلة",
      // items 12
      itemh112: "رامبر طفل سادة",
      itemp12: "ستايل بسيط ومريح",
      itembtn12: "أضف إلى السلة",
      // items 13
      itemh113: "طقم ملابس للأطفال",
      itemp13: "طقم كامل للملابس",
      itembtn13: "أضف إلى السلة",
      Trusted: "موثوق به من قبل أكثر من 10 آلاف عميل",
      Hats: "قبعات و",
      Scarfs: "أوشحة",
      toys: "ألعاب و",
      games: "ألعاب",
      Dresses: "فساتين و",
      Suits: "بدل",
      Blouses: "بلوزات و",
      Tshirts: "تي شيرتات",
      Shoes: "أحذية و",
      Socks: "جوارب",
      Get: "احصل على القسيمة",
      Purchase: "اشترك اليوم واحصل على خصم يصل حتى 20٪ على مشترياتك القادمة!",
      Your: "عنوان بريدك الإلكتروني",
      Subscribe: "اشترك",
      subscribing: "شكرًا لاشتراكك في نشرتنا الإخبارية!",

      // ========================== Navbar ===================
      Home: "الرئيسية",
      Shop2: "المتجر",
      News: "الأخبار",
      AboutUs: "من نحن",
      ContactUs: "اتصل بنا",
      Login: "تسجيل الدخول",
      Compare: "قارن",
      Wishlist: "قائمة الرغبات",
      total: "المجموع",

      // ========================== AboutUs ===================
      ndConfident: "مهمتنا أن نجعل الأطفال يشعرون بالراحة والثقة",
      pConfident: "نحن نؤمن بأن كل زي يجب أن يكون ممتعًا، مرحًا وفريدًا مثل الأطفال الذين يرتدونه.",
      Driven: "مدفوعون بالحب",
      pDriven: "تأسست هذه العلامة التجارية من قبل فريق من الآباء والمصممين والحالمين لإنشاء مكان يمكن للآباء فيه العثور على ملابس عالية الجودة.",
      Designed: "مصممة للمرح والسحر",
      pDesigned: "من الأساسيات المريحة إلى الطبعات الخيالية والأزياء الجاهزة للمغامرة، نصمم كل قطعة بعناية لتعكس المرح والسحر في كونك طفلًا.",
      Sustainable: "صديقة للبيئة ومستدامة",
      pSustainable: "نحن نختار أنعم وأقوى الأقمشة فقط ونتأكد من أن كل قطعة مصنوعة بعناية، لتتحمل حتى أكثر الأطفال نشاطًا.",
      Best: "أطفالكم يستحقون الأفضل",
      withstandalltheiradventures: "بدأت قصتنا بحلم بسيط: إنشاء مساحة يمكن للآباء فيها العثور على ملابس يحب الأطفال ارتداءها وتتحمل جميع مغامراتهم.",
      Years: "سنوات",
      Stores: "المتاجر",
      Countries: "الدول",
      btn6: "استكشاف مجموعتنا",

      // كاروسيل
      little: "أطفالي صعب الإرضاء، لكنهم يحبون التصاميم المرحة والألوان الزاهية. وبصفتي أم، أحب أن تكون الملابس أنيقة ومتينة في نفس الوقت!",
      SamathaJackson: "سامانثا جاكسون",
      Client: "عميل",
      little2: "أطفالي صعب الإرضاء، لكنهم يحبون التصاميم المرحة والألوان الزاهية. وبصفتي أم، أحب أن تكون الملابس أنيقة ومتينة في نفس الوقت!",
      SamathaJackson2: "سامانثا جاكسون",
      Client2: "عميل",
      Frequently: "الأسئلة المتكررة",

      // اكوارديان
      ultricies: "روتْروم ماسا إيد نيسي إنيم إنيم تينسيدونت ألتريسيس",
      ultriciesp1: "يتم تقديم التوصيات بطريقة واضحة وسلسة لجميع المستخدمين. نصوص تجريبية لإظهار الشكل النهائي للموقع والتصميم.",
      ultriciesp2: "يمكن تعديل المعلومات وإضافة التفاصيل حسب الحاجة لتلبية متطلبات المستخدم.",
      Consequat: "كونسِكوات سِم ليو فيفيرا نونك توربيس دويس ديام",
      Consequatp1: "يتم توفير جميع المحتويات بطريقة منسقة ومنظمة لضمان تجربة مستخدم ممتازة.",
      Consequatp2: "يمكنك استخدام جميع الميزات المتاحة على الموقع بسهولة وبكفاءة عالية.",
      Metus: "ميتوس فولوتبات بلانديت إيوسمود موليستيا إت فيفيرا",
      Metusp1: "تم تصميم كل شيء لضمان سهولة الاستخدام ووضوح المعلومات لجميع الزوار.",
      Metusp2: "يتم عرض المحتوى بشكل جذاب ومرتب لتسهيل عملية التصفح.",

      //  ========================= Cart =========================
      warning1: "تم إزالة “Justo Finibus”.",
      warning2: "سلة التسوق الخاصة بك فارغة حاليًا.",
      warning3: "سلة التسوق الخاصة بك فارغة حاليًا.",
      warningbtn1: "تراجع؟",
      warningbtn2: "العودة إلى المتجر",
      cardProduct: "المنتج",
      cardQuantity: "الكمية",
      cardSubtotal: "المجموع الفرعي",
      Carttotals: "إجمالي السلة",
      Subtotal: "المجموع الفرعي",
      Total: "الإجمالي",
      SuggestedProducts: "منتجات مقترحة",
      Congratulations: "تهانينا! حصلت على شحن مجاني 🎉",
      Add: "أضف",
      shipping: "المزيد للحصول على الشحن المجاني!",
      Proceedtocheckout: "المتابعة لإتمام الشراء",
      Applycoupon: "تطبيق القسيمة",
      Couponcode: "رمز القسيمة",
      discount: "خصم 30%",
      discount2: "تم تطبيق خصم 8%",
      discount3: "تم تطبيق خصم 18%",
      discount4: "تم تطبيق خصم 22%",
      discount5: "تم تطبيق خصم 35%",
      Giveacoupon: "أعطني قسيمة",
      Loding: "جارٍ التحميل...",

      //  ========================= Checkout =========================
      Checkout: "إتمام الشراء",
      Billingdetails: "تفاصيل الفوترة",      
      CountryRegion: "الدولة / المنطقة",
      Streetaddress: "عنوان الشارع",
      Streetaddresspl1: "رقم المنزل واسم الشارع",
      Streetaddresspl2: "شقة، جناح، وحدة، إلخ. (اختياري)",
      TownCity: "المدينة",
      Province: "المحافظة",
      PostcodeZIP: "الرمز البريدي",
      Phone: "الهاتف",
      Emailaddress: "البريد الإلكتروني",
      Additionalinformation: "معلومات إضافية",
      Order: "ملاحظات الطلب (اختياري)",
      Notes: "ملاحظات حول طلبك، مثل ملاحظات خاصة بالتوصيل.",
      Yourorder: "طلبك",
      Product: "المنتج",      
      Sorry: "عذرًا، يبدو أنه لا توجد طرق دفع متاحة. يرجى الاتصال بنا إذا كنت بحاجة إلى مساعدة أو ترغب في ترتيبات بديلة.",
      personal: "سيتم استخدام بياناتك الشخصية لمعالجة طلبك ودعم تجربتك عبر هذا الموقع ولأغراض أخرى موضحة في سياسة الخصوصية.",
      placeorder: "إتمام الطلب",

      //  ========================= News =========================
      NewsCatTrend: "اتجاه",
      NewsCatTips: "نصائح وحيل",
      NewsCatFashion: "موضة",

      NewsTitle1: "مشاكل كونغوي أدفلتريس فرينجيلا نام كونسيكتتور",
      NewsText1: "نص تجريبي لملء المحتوى وإظهار الشكل النهائي للتصميم.",

      NewsTitle2: "بيبندوم ماجنيس فاسيلوس دولور أورنافيل ويلبسوم",
      NewsText2: "نص تجريبي لملء المحتوى وإظهار الشكل النهائي للتصميم.",

      NewsTitle3: "بيلينتيسكوي روتريم هابيتاس كوفاليس توركوينت",
      NewsText3: "نص تجريبي لملء المحتوى وإظهار الشكل النهائي للتصميم.",

      NewsTitle4: "فيليت سوليستودين هابيتاس أليكوام بلاتيا فولوتبات",
      NewsText4: "نص تجريبي لملء المحتوى وإظهار الشكل النهائي للتصميم.",

      NewsTitle5: "كيوريا فيلموربي إستوسيوسك ليكتوس ألتريسيس رونكوس",
      NewsText5: "نص تجريبي لملء المحتوى وإظهار الشكل النهائي للتصميم.",

      NewsTitle6: "بلاتيا هابيتاس مايسيناس سوسبنديس أوسيوسك",
      NewsText6: "نص تجريبي لملء المحتوى وإظهار الشكل النهائي للتصميم.",

      AuthorName: "مايكل",
      DateExample: "20 فبراير 2025",

      NewCollection: "مجموعة جديدة",      
      ViewOffer: "عرض العرض",

      BestSelling: "الأكثر مبيعًا",

      // ======================== Shop =========================
      ShopCollections: "المجموعات",
      ShopNewArrivals: "وصلت حديثًا",
      ShopDiscounts: "الخصومات",

      Showing: "عرض",
      Of: "من",
      Results: "نتائج",

      AddToCart: "أضف إلى السلة",

      // ======================== Filters =========================
      FilterByPrice: "تصفية حسب السعر",
      Price: "السعر",
      FilterByColor: "تصفية حسب اللون",
      FilterByCategory: "تصفية حسب الفئة",
      ClearFilter: "مسح التصفية",

      // ======================== Colors =========================
      ColorWhite: "أبيض",
      ColorGray: "رمادي",
      ColorBrown: "بني",
      ColorYellow: "أصفر",
      ColorOrange: "برتقالي",
      ColorRed: "أحمر",
      ColorPurple: "بنفسجي",
      ColorBlue: "أزرق",
      ColorGreen: "أخضر",
      ColorBlack: "أسود",

      // ======================== Categories =========================
      CatToysGames: "ألعاب وألعاب تعليمية",
      CatDresses: "فساتين",
      CatHatsScarfs: "قبعات وأوشحة",
      CatShoesSocks: "أحذية وجوارب",
      CatSweaters: "كنزات",
      CatTshirts: "تي شيرتات",

      //  ========================= Product Information =========================
      FamesPrimis: "Fames Primis",
      Platea: "تشكيلة واسعة من المنتجات المصممة بعناية فائقة لضمان الجودة والمتانة.",
      Dis: "تفاصيل إضافية حول المنتج لضمان رضا العميل.",
      Dolor: "معلومات حول الخامة والمقاسات وطريقة الاستخدام.",
      Category: "الفئة",
      Sweaters: "كنزات",
      Share: "شارك حبك",
      GuaranteedSafeCheckout: "الدفع آمن ومضمون",
      Description: "الوصف",      
      Reviews: "التقييمات (0)",
      Mus: "تفاصيل إضافية حول المنتج تشمل الخصائص والمميزات لضمان أفضل تجربة.",
      Lectus: "معلومات عن التصميم والخامات المستخدمة.",
      Color: "اللون",
      colores: "أبيض، بيج، أخضر",
      Size: "المقاس",
      theSize: "متوسط، صغير",
      Therearenoreviewsyet: "لا توجد تقييمات بعد.",
      Be: "كن أول من يقيم “Montes Dictum”",
      Youremailaddress: "لن يتم نشر بريدك الإلكتروني. الحقول المطلوبة محددة بعلامة *",
      Yourrating: "تقييمك *",
      Name: "الاسم",      
      ReviewTitle: "عنوان التقييم",
      Yourreview: "تقييمك",
      thebox: "احفظ اسمي وبريدي الإلكتروني وموقعي في هذا المتصفح للزيارة القادمة.",
      theboxbtn: "إرسال"

    },
    tr: {
      // nav bar items
      // ==========================WishList============================
      FeaturedProducts:"Öne Çıkan Ürünler",
      AuthMyAccount: "Hesabım",
      ForgetPasswordText: "Şifrenizi mi unuttunuz? Lütfen kullanıcı adınızı veya e-posta adresinizi girin. Size bir bağlantı e-posta ile gönderilecektir.",
      AuthUsernameOrEmail: "Kullanıcı adı veya e-posta adresi",
      AuthPassword: "Parola",
      AuthRememberMe: "Beni Hatırla",
      AuthLostPassword: "Parolanızı mı unuttunuz?",
      AuthResetPassword: "Parolayı Sıfırla",
      AuthLogin: "Giriş Yap",

      //========================= footer =========================
      // الأربع كاردت
      walet: "Güvenli Ödemeler",
      Pwalet: "Tüm işlemler güvenli ve korumalıdır. Ödeme bilgileriniz gizli tutulur ve güvenle işlenir.",
      track: "Ücretsiz Kargo",
      Ptrack: "Tüm siparişleriniz hızlı ve ücretsiz olarak adresinize teslim edilir.",
      chat: "7/24 Destek",
      Pchat: "Her zaman size yardımcı olmak için hazırız. Soru ve taleplerinizi bizimle paylaşabilirsiniz.",
      gift: "Hediyeler ve Kampanyalar",
      Pgift: "Özel teklifler ve hediye seçenekleri ile sevdiklerinize sürpriz yapabilirsiniz.",

      // الكلام يلي تحت الشعار
      Discover: "Çocuk giyim ve oyuncaklarının benzersiz koleksiyonunu yaklaşan sonbahar sezonu için keşfedin.",
      Shop: "Alışveriş Yap",
      lishop1: "Elbiseler ve Takımlar",
      lishop2: "Ayakkabılar ve Çoraplar",
      lishop3: "Bluzlar ve Tişörtler",
      lishop4: "Oyuncaklar ve Oyunlar",
      lishop5: "Şapkalar ve Aksesuarlar",

      Company2: "Şirket",
      liCompany1: "Hakkımızda",
      liCompany2: "SSS",
      liCompany3: "Haberlerimiz",
      liCompany4: "Hikayemiz",
      liCompany5: "İletişim",
      Useful: "Faydalı",
      liUseful1: "Site Haritası",
      liUseful2: "Ortak Alanı",
      liUseful3: "Teslimat",
      liUseful4: "Lokasyonlar",
      liUseful5: "İşbirliği",
      Legal: "Hukuki",
      liLegal1: "Kargo Politikası",
      liLegal2: "İade ve Değişim",
      liLegal3: "Kullanım Şartları",
      liLegal4: "Gizlilik Politikası",
      liLegal5: "Çerez Politikası",

      Copyright: "Telif Hakkı © 2025 - CreativeThemes tarafından WordPress Teması",

      //  ========================= ContactUs =========================
      Questions: "Sorularınız mı var? Biz buradayız!",
      pQuestions: "Sorularınız ve talepleriniz için her zaman yanınızdayız, size yardımcı olmaktan mutluluk duyarız.",

      // the form:
      FirstName: "İsim",
      LastName: "Soyisim",
      Email: "E-posta",
      Subject: "Konu",
      YourMessage: "Mesajınız",

      // تحت الصورة يلي جنب الفورم
      Address: "Adres",
      pAddress: "8460 Rockville Ave. Greenville, NC 27834",
      btnAddress: "Yol Tarifi Al",
      Call: "Bizi Arayın",
      CallP1: "Cep Telefonu:",
      num1: "+73 099 321 312",
      CallP2: "E-posta:",
      email1: "kiddy@mail.com",
      Hours: "Çalışma Saatleri",
      HoursP1: "Pzt-Cuma:",
      ocloc1: "08:30 – 20:00",
      HoursP2: "Cmt-Paz:",
      ocloc2: "10:00 – 18:00",
      Send: "Mesaj Gönder",

      //  ========================= Home =========================
      Where: "Her Küçük Çocuğun Tarzını Bulduğu Yer",
      Explore: "Özel çocuk kıyafetleri ve oyuncak koleksiyonumuzu keşfedin, sonbahar sezonuna hazırlanın.",
      btn1: "Koleksiyonu Keşfet",
      btn2: "Tanıtım Videosu",
      NEW: "YENİ Oyuncak Koleksiyonu",
      tw: "20",
      Off: "% İndirim",
      btn3: "TEKLİFİ GÖRÜNTÜLE",
      New2: "Yeni Ayakkabı Koleksiyonu",
      tw2: "10",
      Off2: "% İndirim",      
      New4: "Yeni Ayakkabı Koleksiyonu",
      tw4: "12",
      btn5: "TÜM ÜRÜNLERİ GÖRÜNTÜLE",

      // items 1
      itemh1: "Fames Primis",
      itemp: "Kazaklar",
      itembtn: "Sepete Ekle",

      // items 2
      itemh12: "Justo Finibus",
      itemp2: "Elbiseler",
      itembtn2: "Sepete Ekle",

      // items 3
      itemh13: "Montes Dictum",
      itemp3: "Şapkalar ve Atkılar",
      itembtn3: "Sepete Ekle",

      // items 4
      itemh14: "Morbi Dapibus",
      itemp4: "Ayakkabılar ve Çoraplar",
      itembtn4: "Sepete Ekle",

      // items 5
      itemh15: "Porta Primis",
      itemp5: "Oyuncaklar ve Oyunlar",
      itembtn5: "Sepete Ekle",

      // items 6
      itemh16: "Quam Venenatis",
      itemp6: "Tişörtler",
      itembtn6: "Sepete Ekle",

      // items 7
      itemh17: "Tellus Conubia",
      itemp7: "Oyuncaklar ve Oyunlar",
      itembtn7: "Sepete Ekle",

      // items 8
      itemh18: "Velit Eleifend",
      itemp8: "Oyuncaklar ve Oyunlar",
      itembtn8: "Sepete Ekle",
      // items 9
      itemh19: "Çizgi Film Bebek Tulumu",
      itemp9: "Yumuşak Günlük Giyim",
      itembtn9: "Sepete Ekle",
      // items 10
      itemh110: "Klasik Bebek Seti",
      itemp10: "Şık Kıyafet Seti",
      itembtn10: "Sepete Ekle",
      // items 11
      itemh111: "Çizgili Bebek Tulumu",
      itemp11: "Yumuşak Pamuk Tasarımı",
      itembtn11: "Sepete Ekle",
      // items 12
      itemh112: "Düz Bebek Tulumu",
      itemp12: "Basit Rahat Stil",
      itembtn12: "Sepete Ekle",
      // items 13
      itemh113: "Bebek Giyim Seti",
      itemp13: "Tam Kıyafet Seti",
      itembtn13: "Sepete Ekle",
      Trusted: "10.000'den fazla müşteri tarafından güvenilir",
      Hats: "Şapkalar ve",
      Scarfs: "Atkılar",
      toys: "oyuncaklar ve",
      games: "oyunlar",
      Dresses: "Elbiseler ve",
      Suits: "Takımlar",
      Blouses: "Bluzlar ve",
      Tshirts: "Tişörtler",
      Shoes: "Ayakkabılar ve",
      Socks: "Çoraplar",
      Get: "Kupon Al",
      Purchase: "Bugün Abone Olun ve Bir Sonraki Alışverişinizde %20'ye Kadar İndirim Kazanın!",
      Your: "E-posta adresiniz",
      Subscribe: "Abone Ol",
      subscribing: "Bültenimize abone olduğunuz için teşekkür ederiz!",

      // ========================== Navbar ===================
      Home: "Ana Sayfa",
      Shop2: "Mağaza",
      News: "Haberler",
      AboutUs: "Hakkımızda",
      ContactUs: "İletişim",
      Login: "Giriş",
      Compare: "Karşılaştır",
      Wishlist: "Favoriler",
      total: "toplam",

      // ========================== AboutUs ===================
      ndConfident: "Çocukların Rahat ve Kendine Güvenli Hissetmesini Sağlama Misyonumuz",
      pConfident: "Her kıyafetin, onu giyen çocuklar kadar neşeli, eğlenceli ve benzersiz olması gerektiğine inanıyoruz.",
      Driven: "Sevgiyle Yola Çıkmak",
      pDriven: "Anne-babalar, tasarımcılar ve hayalperestlerden oluşan bir ekibin kurduğu bu markada, ailelerin kaliteli kıyafetler bulabileceği bir yer yaratmayı amaçladık.",
      Designed: "Eğlence ve Sihir İçin Tasarlandı",
      pDesigned: "Sıcacık temellerden, eğlenceli desenlere ve maceraya hazır kıyafetlere kadar her parçayı, çocuk olmanın eğlencesini ve sihrini yansıtacak şekilde özenle tasarladık.",
      Sustainable: "Sürdürülebilir ve Dostane",
      pSustainable: "Sadece en yumuşak ve dayanıklı kumaşları kullanıyor, her parçanın detaylı bir şekilde işlendiğinden emin oluyoruz, böylece en aktif küçük kaşifler için bile dayanıklı oluyor.",
      Best: "Çocuklarınız En İyisini Hak Ediyor",
      withstandalltheiradventures: "Hikayemiz basit bir hayalle başladı: Anne-babaların çocukların giymeyi seveceği ve tüm maceralarına dayanacak kıyafetleri bulabileceği bir alan yaratmak.",
      Years: "Yıl",
      Stores: "Mağazalar",
      Countries: "Ülkeler",
      btn6: "Koleksiyonumuzu Keşfedin",

      // كاروسيل
      little: "Çocuklarım çok seçici ama eğlenceli tasarımları ve parlak renkleri çok seviyorlar. Ve bir anne olarak, kıyafetlerin hem şık hem de dayanıklı olmasını seviyorum!",
      SamathaJackson: "Samatha Jackson",
      Client: "Müşteri",
      little2: "Çocuklarım çok seçici ama eğlenceli tasarımları ve parlak renkleri çok seviyorlar. Ve bir anne olarak, kıyafetlerin hem şık hem de dayanıklı olmasını seviyorum!",
      SamathaJackson2: "Samatha Jackson",
      Client2: "Müşteri",
      Frequently: "Sık Sorulan Sorular",

      // اكوارديان
      ultricies: "Rutrum massa id nisi enim enim tincidunt ultricies",
      ultriciesp1: "Tüm öneriler kullanıcılar için açık ve anlaşılır şekilde sunulmaktadır. Örnek metinler, tasarımın nihai görünümünü göstermek için kullanılır.",
      ultriciesp2: "Bilgiler gerektiğinde düzenlenebilir ve ek detaylar eklenebilir.",
      Consequat: "Consequat sem leo viverra nunc turpis duis diam",
      Consequatp1: "Tüm içerik, kullanıcı deneyimini artıracak şekilde düzenlenmiş ve organize edilmiştir.",
      Consequatp2: "Site üzerindeki tüm özellikler kolay ve verimli bir şekilde kullanılabilir.",
      Metus: "Metus volutpat blandit euismod molestie et viverra",
      Metusp1: "Her şeyin kolay kullanımı ve bilgilerin netliği için tasarlanmıştır.",
      Metusp2: "İçerik, gezinmeyi kolaylaştırmak için düzenli ve çekici bir şekilde sunulmuştur.",

      //  ========================= Cart =========================
      warning1: "“Justo Finibus” kaldırıldı.",
      warning2: "Sepetiniz şu anda boş.",
      warning3: "Sepetiniz şu anda boş.",
      warningbtn1: "Geri al?",
      warningbtn2: "Mağazaya dön",
      cardProduct: "Ürün",
      cardQuantity: "Adet",
      cardSubtotal: "Ara Toplam",
      Carttotals: "Sepet Toplamı",
      Subtotal: "Ara Toplam",
      Total: "Toplam",
      SuggestedProducts: "Önerilen Ürünler",
      Congratulations: "Tebrikler! Ücretsiz kargo kazandınız 🎉",
      Add: "Ekle",
      shipping: "Ücretsiz kargo almak için daha fazlasını ekleyin!",
      Proceedtocheckout: "Ödeme İşlemine Devam Et",
      Applycoupon: "Kuponu Uygula",
      Couponcode: "Kupon Kodu",
      discount: "%30 indirim",
      discount2: "%8 indirim uygulandı",
      discount3: "%18 indirim uygulandı",
      discount4: "%22 indirim uygulandı",
      discount5: "%35 indirim uygulandı",
      Giveacoupon: "Bana kupon ver",
      Loding: "Yükleniyor...",

      //  ========================= Checkout =========================
      Checkout: "Ödeme",
      Billingdetails: "Fatura Bilgileri",
      Company: "Şirket Adı (opsiyonel)",
      CountryRegion: "Ülke / Bölge",
      Streetaddress: "Adres",
      Streetaddresspl1: "Ev numarası ve sokak adı",
      Streetaddresspl2: "Daire, süit, birim vb. (opsiyonel)",
      TownCity: "Şehir",
      Province: "İl / Eyalet",
      PostcodeZIP: "Posta Kodu",
      Phone: "Telefon",
      Emailaddress: "E-posta",
      Additionalinformation: "Ek Bilgiler",
      Order: "Sipariş Notları (opsiyonel)",
      Notes: "Siparişinizle ilgili notlar, örn. teslimat için özel notlar.",
      Yourorder: "Siparişiniz",
      Product: "Ürün",      
      Sorry: "Üzgünüz, mevcut bir ödeme yöntemi yok gibi görünüyor. Yardım için lütfen bizimle iletişime geçin veya alternatif düzenlemeler yapın.",
      personal: "Kişisel verileriniz siparişinizi işlemek, bu site deneyiminizi desteklemek ve gizlilik politikamızda belirtilen diğer amaçlar için kullanılacaktır.",
      placeorder: "Siparişi Tamamla",

      //  ========================= News =========================
      NewsCatTrend: "Trend",
      NewsCatTips: "İpuçları & Püf Noktaları",
      NewsCatFashion: "Moda",

      NewsTitle1: "Molestie Congue Adultrices Fringilla Nam Consectetur",
      NewsText1: "İçerik doldurma testi metni, tasarımın nihai görünümünü göstermek için.",

      NewsTitle2: "Bibendum Magnis Phasellus Dolor Urnavel Welipsum",
      NewsText2: "İçerik doldurma testi metni, tasarımın nihai görünümünü göstermek için.",

      NewsTitle3: "Pellentesque Rutrum Habitasse Convallis Torquent",
      NewsText3: "İçerik doldurma testi metni, tasarımın nihai görünümünü göstermek için.",

      NewsTitle4: "Velit Sollicitudin Habitasse Aliquam Platea Volutpat",
      NewsText4: "İçerik doldurma testi metni, tasarımın nihai görünümünü göstermek için.",

      NewsTitle5: "Curae Velmorbi Estociosqu Lectus Ultricies Rhoncus",
      NewsText5: "İçerik doldurma testi metni, tasarımın nihai görünümünü göstermek için.",

      NewsTitle6: "Platea Habitasse Maecenas Suspendisse Ociosqu",
      NewsText6: "İçerik doldurma testi metni, tasarımın nihai görünümünü göstermek için.",

      AuthorName: "Michael",
      DateExample: "20 Şubat 2025",

      NewCollection: "Yeni Koleksiyon",      
      ViewOffer: "Teklifi Gör",

      BestSelling: "En Çok Satanlar",

      // ======================== Shop =========================
      ShopCollections: "Koleksiyonlar",
      ShopNewArrivals: "Yeni Gelenler",
      ShopDiscounts: "İndirimler",

      Showing: "Gösteriliyor",
      Of: "den",
      Results: "sonuç",

      AddToCart: "Sepete Ekle",

      // ======================== Filters =========================
      FilterByPrice: "Fiyata göre filtrele",
      Price: "Fiyat",
      FilterByColor: "Renge göre filtrele",
      FilterByCategory: "Kategoriye göre filtrele",
      ClearFilter: "Filtreyi Temizle",

      // ======================== Colors =========================
      ColorWhite: "Beyaz",
      ColorGray: "Gri",
      ColorBrown: "Kahverengi",
      ColorYellow: "Sarı",
      ColorOrange: "Turuncu",
      ColorRed: "Kırmızı",
      ColorPurple: "Mor",
      ColorBlue: "Mavi",
      ColorGreen: "Yeşil",
      ColorBlack: "Siyah",

      // ======================== Categories =========================
      CatToysGames: "Oyuncaklar & Oyunlar",
      CatDresses: "Elbiseler",
      CatHatsScarfs: "Şapkalar & Atkılar",
      CatShoesSocks: "Ayakkabı & Çorap",
      CatSweaters: "Kazaklar",
      CatTshirts: "Tişörtler",

      //  ========================= Product Information =========================
      FamesPrimis: "Fames Primis",
      Platea: "Kalite ve dayanıklılığı garanti etmek için özenle tasarlanmış geniş ürün yelpazesi.",
      Dis: "Müşteri memnuniyetini sağlamak için ürünle ilgili ek bilgiler.",
      Dolor: "Kumaş, beden ve kullanım hakkında bilgiler.",
      Category: "Kategori",
      Sweaters: "Kazaklar",
      Share: "Sevginizi paylaşın",
      GuaranteedSafeCheckout: "Güvenli Ödeme Garantisi",
      Description: "Açıklama",
      Additionalinformation2: "Ek Bilgiler",
      Reviews: "Yorumlar (0)",
      Mus: "Ürünle ilgili ek bilgiler, özellikler ve avantajlar, en iyi deneyim için.",
      Lectus: "Tasarım ve kullanılan malzemeler hakkında bilgiler.",
      Color: "Renk",
      colores: "Beyaz, Bej, Yeşil",
      Size: "Beden",
      theSize: "Orta, Küçük",
      Therearenoreviewsyet: "Henüz yorum yok.",
      Be: "“Montes Dictum” için ilk yorumu siz yapın",
      Youremailaddress: "E-posta adresiniz yayınlanmayacaktır. Zorunlu alanlar * ile işaretlenmiştir",
      Yourrating: "Puanınız *",
      Name: "İsim",      
      ReviewTitle: "Yorum Başlığı",
      Yourreview: "Yorumunuz",
      thebox: "Bu tarayıcıda bir sonraki yorumunuz için adımı, e-posta adresimi ve web sitemi kaydet.",
      theboxbtn: "Gönder"

    },
  };

  const [information, setInformation] = useState(() => {
  const saved = localStorage.getItem  ("productInformation");
  return saved ? JSON.parse(saved) : null;
});
useEffect(() => {
  if (information) {
    localStorage.setItem("productInformation", JSON.stringify(information));
  }
}, [information]);

  const Information = {
    item1: {
      image1: item1,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$35.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },  
    item2: {
      image1: item2,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$35.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
    item3: {
      image1: item3,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$35.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
    item4: {
      image1: item4,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$45.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
    item5: {
      image1: item5,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$18.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
    item6: {
      image1: item6,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$25.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
    item7: {
      image1: item7,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$20.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
     item8: {
      image1: item8,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$15.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
     item9: {
      image1: item9,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$40.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
     item10: {
      image1: item10,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$45.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
     item11: {
      image1: item11,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$14.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
     item12: {
      image1: item12,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$24.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
     item13: {
      image1: item13,
      h1item: trasnaltions[lang].FamesPrimis,
      pprice: "$54.00",
      paragraf1: trasnaltions[lang].Platea,
      paragraf2: trasnaltions[lang].Dis,
      paragraf3: trasnaltions[lang].Dolor,
      thebtn: trasnaltions[lang].itembtn,
      Category2: trasnaltions[lang].Category,
      Sweaters2: trasnaltions[lang].Sweaters,
      Share2: trasnaltions[lang].Share,
      GuaranteedSafeCheckout2: trasnaltions[lang].GuaranteedSafeCheckout,
      Description2: trasnaltions[lang].Description,
      Additionalinformation2: trasnaltions[lang].Additionalinformation,
      Reviews2: trasnaltions[lang].Reviews,
      Mus2: trasnaltions[lang].Mus,
      Lectus2: trasnaltions[lang].Lectus,
      Platea2: trasnaltions[lang].Platea,
      Dis2: trasnaltions[lang].Dis,
      Color2: trasnaltions[lang].Color,
      colores2: trasnaltions[lang].colores,
      Size2: trasnaltions[lang].Size,
      theSize2: trasnaltions[lang].theSize,
      Therearenoreviewsyet2: trasnaltions[lang].Therearenoreviewsyet,
      Be2: trasnaltions[lang].Be,
      Youremailaddress2: trasnaltions[lang].Youremailaddress,
      Yourrating2: trasnaltions[lang].Yourrating,
      Name2: trasnaltions[lang].Name,
      Email2: trasnaltions[lang].Email,
      ReviewTitle2: trasnaltions[lang].ReviewTitle,
      Yourreview2: trasnaltions[lang].Yourreview,
      thebox2: trasnaltions[lang].thebox,
      theboxbtn2: trasnaltions[lang].theboxbtn,
    },
    
  };
  return (
    <>
      <ProInformation.Provider
        value={{ information, setInformation, Information }}
      >
        <LangContext.Provider value={{ lang, setLang, trasnaltions }}>
          <CartProvider>
            <Router>
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/WishList" element={<WishList />} />
                <Route path="/News" element={<News />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Cart" element={<Cart />} />
                <Route
                  path="/ProductInformation"
                  element={<ProductInformation />}
                />
              </Routes>
              <Footer />
            </Router>
          </CartProvider>
        </LangContext.Provider>
      </ProInformation.Provider>
    </>
  );
}

export default App;
