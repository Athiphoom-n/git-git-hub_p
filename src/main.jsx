import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./context/ProductContext.jsx";
import SideBarProvider from "./context/SidebarContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import HeartProvider from "./context/HeartContext.jsx";

createRoot(document.getElementById("root")).render(
  <SideBarProvider>
    <HeartProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
    </HeartProvider>
  </SideBarProvider>
);
