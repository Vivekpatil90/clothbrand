const _jsxFileName = "src/lib/cart-context.tsx";import { createContext, useContext, useEffect, useMemo, useState, } from "react";
import React from "react";

 























const Ctx = createContext(null);
const itemKey = (i) => `${i.id}|${i.size}|${i.color}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const c = localStorage.getItem("cart");
      const w = localStorage.getItem("wishlist");
      if (c) setItems(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch (e) {}
  }, []);

  useEffect(() => { localStorage.setItem("cart", JSON.stringify(items)); }, [items]);
  useEffect(() => { localStorage.setItem("wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const value = useMemo(() => ({
    items, wishlist,
    add: (item) => setItems((prev) => {
      const k = itemKey(item);
      const found = prev.find((p) => itemKey(p) === k);
      if (found) return prev.map((p) => itemKey(p) === k ? { ...p, qty: p.qty + item.qty } : p);
      return [...prev, item];
    }),
    remove: (key) => setItems((prev) => prev.filter((p) => itemKey(p) !== key)),
    setQty: (key, qty) => setItems((prev) => prev.map((p) => itemKey(p) === key ? { ...p, qty: Math.max(1, qty) } : p)),
    clear: () => setItems([]),
    toggleWish: (id) => setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]),
    count: items.reduce((s, i) => s + i.qty, 0),
    subtotal: items.reduce((s, i) => s + i.qty * i.price, 0),
  }), [items, wishlist]);

  return React.createElement(Ctx.Provider, { value: value, __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, children);
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
};

export { itemKey };
