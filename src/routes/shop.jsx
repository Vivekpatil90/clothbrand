const _jsxFileName = "src/routes/shop.tsx";import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — Atelier Noir" },
      { name: "description", content: "Shop the full Atelier Noir collection. Filter by gender, size, color and price." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [gender, setGender] = useState("all");
  const [size, setSize] = useState("");
  const [maxPrice, setMaxPrice] = useState(700);
  const [sort, setSort] = useState("new");

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      (gender === "all" || p.category === gender) &&
      (!size || p.sizes.includes(size)) &&
      p.price <= maxPrice
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [gender, size, maxPrice, sort]);

  const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)));

  return (
    React.createElement('div', { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
      , React.createElement('header', { className: "mb-10", __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
        , React.createElement('p', { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "Shop")
        , React.createElement('h1', { className: "mt-2 font-display text-5xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}, "All Products" )
        , React.createElement('p', { className: "mt-2 text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}, filtered.length, " pieces" )
      )

      , React.createElement('div', { className: "grid gap-10 lg:grid-cols-[240px_1fr]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
        , React.createElement('aside', { className: "space-y-8", __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
          , React.createElement(Filter, { title: "Gender", __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
            , (["all","men","women","kids"] ).map((g) => (
              React.createElement('button', { key: g, onClick: () => setGender(g),
                className: `block w-full text-left text-sm capitalize py-1 ${gender === g ? "text-accent" : "text-muted-foreground hover:text-foreground"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
                , g === "all" ? "Everyone" : g
              )
            ))
          )
          , React.createElement(Filter, { title: "Size", __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
            , React.createElement('div', { className: "flex flex-wrap gap-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
              , React.createElement('button', { onClick: () => setSize(""),
                className: `border px-3 py-1 text-xs ${!size ? "border-accent text-accent" : "border-border text-muted-foreground hover:border-foreground"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}, "All")
              , allSizes.map((s) => (
                React.createElement('button', { key: s, onClick: () => setSize(s),
                  className: `border px-3 py-1 text-xs ${size === s ? "border-accent text-accent" : "border-border text-muted-foreground hover:border-foreground"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, s)
              ))
            )
          )
          , React.createElement(Filter, { title: `Price · up to $${maxPrice}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
            , React.createElement('input', { type: "range", min: 30, max: 700, step: 10, value: maxPrice,
              onChange: (e) => setMaxPrice(Number(e.target.value)), className: "w-full accent-[oklch(0.72_0.14_25)]" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}} )
          )
          , React.createElement(Filter, { title: "Sort", __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
            , React.createElement('select', { value: sort, onChange: (e) => setSort(e.target.value ),
              className: "w-full border border-border bg-background px-3 py-2 text-sm"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
              , React.createElement('option', { value: "new", __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}, "Newest")
              , React.createElement('option', { value: "low", __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, "Price: Low → High"   )
              , React.createElement('option', { value: "high", __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, "Price: High → Low"   )
            )
          )
        )

        , React.createElement('section', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}
          , filtered.length === 0 ? (
            React.createElement('p', { className: "py-20 text-center text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, "No pieces match your filters."    )
          ) : (
            React.createElement('div', { className: "grid grid-cols-2 gap-6 md:grid-cols-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
              , filtered.map((p) => React.createElement(ProductCard, { key: p.id, product: p, __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}} ))
            )
          )
        )
      )
    )
  );
}

function Filter({ title, children }) {
  return (
    React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
      , React.createElement('h3', { className: "mb-3 text-xs font-semibold uppercase tracking-widest"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}, title)
      , children
    )
  );
}
