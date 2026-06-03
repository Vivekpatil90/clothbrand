const _jsxFileName = "src/components/ProductCard.tsx";import { Link } from "@tanstack/react-router";
import React from "react";
import { Heart } from "lucide-react";

import { useCart } from "@/lib/cart-context";

export function ProductCard({ product }) {
  const { wishlist, toggleWish } = useCart();
  const wished = wishlist.includes(product.id);
  return (
    React.createElement('div', { className: "group fade-up" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}
      , React.createElement('div', { className: "img-zoom relative aspect-[4/5] bg-muted"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
        , React.createElement(Link, { to: "/products/$id", params: { id: product.id }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
          , React.createElement('img', { src: product.image, alt: product.name, loading: "lazy",
            className: "h-full w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}} )
        )
        , React.createElement('button', { onClick: () => toggleWish(product.id), 'aria-label': "Wishlist",
          className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur transition hover:bg-background"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
          , React.createElement(Heart, { size: 16, className: wished ? "fill-accent text-accent" : "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}} )
        )
      )
      , React.createElement('div', { className: "mt-3 flex items-start justify-between gap-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
          , React.createElement(Link, { to: "/products/$id", params: { id: product.id },
            className: "text-sm font-medium hover:text-accent"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, product.name)
          , React.createElement('p', { className: "mt-0.5 text-xs uppercase tracking-wider text-muted-foreground"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, product.collection)
        )
        , React.createElement('p', { className: "text-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "$", product.price)
      )
    )
  );
}
