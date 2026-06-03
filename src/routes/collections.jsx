const _jsxFileName = "src/routes/collections.tsx";import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { useState } from "react";
import { collections, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Atelier Noir" },
      { name: "description", content: "Curated seasonal and thematic collections: Summer, Festive, Casual and Formal." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const [active, setActive] = useState("summer");
  const filtered = products.filter((p) => p.collection === active);
  return (
    React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
      , React.createElement('section', { className: "relative h-[50vh] min-h-[360px] overflow-hidden"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
        , React.createElement('img', { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=80", alt: "", className: "absolute inset-0 h-full w-full object-cover"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}} )
        , React.createElement('div', { className: "absolute inset-0 bg-black/40"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
        , React.createElement('div', { className: "relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
          , React.createElement('div', { className: "text-background fade-up" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
            , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] opacity-90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}, "The Edits" )
            , React.createElement('h1', { className: "mt-3 font-display text-5xl sm:text-6xl"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, "Collections")
            , React.createElement('p', { className: "mt-3 max-w-xl opacity-90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Curated, seasonal, intentional."  )
          )
        )
      )

      , React.createElement('div', { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
        , React.createElement('div', { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
          , collections.map((c) => (
            React.createElement('button', { key: c.id, onClick: () => setActive(c.id),
              className: `img-zoom group relative block aspect-[3/4] overflow-hidden text-left ${active === c.id ? "ring-2 ring-accent" : ""}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
              , React.createElement('img', { src: c.image, alt: c.name, className: "h-full w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}} )
              , React.createElement('div', { className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5 text-background"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
                , React.createElement('h3', { className: "font-display text-2xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}, c.name)
                , React.createElement('p', { className: "text-xs opacity-90" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}, c.tagline)
              )
            )
          ))
        )

        , React.createElement('div', { className: "mt-16", __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
          , React.createElement('h2', { className: "font-display text-3xl capitalize"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}, active, " pieces" )
          , React.createElement('p', { className: "mt-1 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}, filtered.length, " items" )
          , React.createElement('div', { className: "mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
            , filtered.map((p) => React.createElement(ProductCard, { key: p.id, product: p, __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}} ))
          )
          , React.createElement('div', { className: "mt-10 text-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
            , React.createElement(Link, { to: "/shop", className: "border border-foreground px-7 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}, "Shop all" )
          )
        )
      )
    )
  );
}
