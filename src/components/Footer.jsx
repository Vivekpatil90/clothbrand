const _jsxFileName = "src/components/Footer.tsx";import { Link } from "@tanstack/react-router";
import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    React.createElement('footer', { className: "mt-24 border-t border-border bg-secondary/40"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 6}}
      , React.createElement('div', { className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 7}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 8}}
          , React.createElement('div', { className: "font-display text-xl tracking-[0.2em]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 9}}, "ATELIER·NOIR")
          , React.createElement('p', { className: "mt-3 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 10}}, "Considered clothing for a quieter wardrobe. Crafted in small batches since 2019."

          )
          , React.createElement('div', { className: "mt-5 flex gap-3 text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
            , React.createElement('a', { href: "#", 'aria-label': "Instagram", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, React.createElement(Instagram, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}} ))
            , React.createElement('a', { href: "#", 'aria-label': "Twitter", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}, React.createElement(Twitter, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 15}} ))
            , React.createElement('a', { href: "#", 'aria-label': "Facebook", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}, React.createElement(Facebook, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}} ))
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
          , React.createElement('h4', { className: "text-xs font-semibold uppercase tracking-widest"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "Shop")
          , React.createElement('ul', { className: "mt-4 space-y-2 text-sm text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, React.createElement(Link, { to: "/shop", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "All Products" ))
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, React.createElement(Link, { to: "/collections", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, "Collections"))
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, React.createElement(Link, { to: "/size-guide", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}, "Size Guide" ))
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
          , React.createElement('h4', { className: "text-xs font-semibold uppercase tracking-widest"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Brand")
          , React.createElement('ul', { className: "mt-4 space-y-2 text-sm text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, React.createElement(Link, { to: "/about", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}, "Our Story" ))
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}, React.createElement(Link, { to: "/blog", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}, "Journal"))
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, React.createElement(Link, { to: "/contact", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Contact"))
          )
        )
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
          , React.createElement('h4', { className: "text-xs font-semibold uppercase tracking-widest"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Newsletter")
          , React.createElement('p', { className: "mt-4 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "First access to new drops."    )
          , React.createElement('form', { className: "mt-3 flex" , onSubmit: (e) => { e.preventDefault(); (e.currentTarget ).reset(); alert("Subscribed."); }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
            , React.createElement('input', { type: "email", required: true, placeholder: "you@email.com",
              className: "w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}} )
            , React.createElement('button', { className: "bg-primary px-4 text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}, "Join")
          )
        )
      )
      , React.createElement('div', { className: "border-t border-border py-5 text-center text-xs text-muted-foreground"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "© "
         , new Date().getFullYear(), " Atelier Noir. All rights reserved."
      )
    )
  );
}
