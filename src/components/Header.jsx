const _jsxFileName = "src/components/Header.tsx";import { Link } from "@tanstack/react-router";
import React from "react";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/blog", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/size-guide", label: "Size Guide" },
  { to: "/contact", label: "Contact" },
] ;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    React.createElement('header', { className: "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
      , React.createElement('div', { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
        , React.createElement('button', { className: "md:hidden", onClick: () => setOpen(!open), 'aria-label': "Menu", __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
          , open ? React.createElement(X, { size: 22, __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}} ) : React.createElement(Menu, { size: 22, __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}} )
        )
        , React.createElement(Link, { to: "/", className: "font-display text-2xl tracking-[0.2em] sm:text-3xl"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "ATELIER"
          , React.createElement('span', { className: "text-accent", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, "·"), "NOIR"
        )
        , React.createElement('nav', { className: "hidden items-center gap-8 md:flex"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
          , nav.map((n) => (
            React.createElement(Link, { key: n.to, to: n.to,
              className: "text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"      ,
              activeProps: { className: "text-foreground" }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
              , n.label
            )
          ))
        )
        , React.createElement('div', { className: "flex items-center gap-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
          , React.createElement(Link, { to: "/shop", 'aria-label': "Search", className: "hidden sm:block text-muted-foreground hover:text-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
            , React.createElement(Search, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}} )
          )
          , React.createElement(Link, { to: "/cart", className: "relative", 'aria-label': "Cart", __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
            , React.createElement(ShoppingBag, { size: 20, __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}} )
            , count > 0 && (
              React.createElement('span', { className: "absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
                , count
              )
            )
          )
        )
      )
      , open && (
        React.createElement('nav', { className: "border-t border-border bg-background md:hidden"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
          , React.createElement('div', { className: "flex flex-col px-4 py-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
            , nav.map((n) => (
              React.createElement(Link, { key: n.to, to: n.to, onClick: () => setOpen(false),
                className: "py-3 text-sm uppercase tracking-widest text-foreground"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
                , n.label
              )
            ))
          )
        )
      )
    )
  );
}
