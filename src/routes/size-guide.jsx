const _jsxFileName = "src/routes/size-guide.tsx";import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { useState } from "react";

export const Route = createFileRoute("/size-guide")({
  head: () => ({
    meta: [
      { title: "Size Guide — Atelier Noir" },
      { name: "description", content: "Measurement charts and fitting tips for women, men and kids." },
    ],
  }),
  component: SizeGuide,
});

const charts = {
  women: { headers: ["Size", "Bust", "Waist", "Hip"], rows: [
    ["XS", "32", "24", "34"], ["S", "34", "26", "36"], ["M", "36", "28", "38"],
    ["L", "38", "30", "40"], ["XL", "40", "32", "42"],
  ]},
  men: { headers: ["Size", "Chest", "Waist", "Hip"], rows: [
    ["S", "36", "30", "37"], ["M", "38", "32", "39"], ["L", "40", "34", "41"],
    ["XL", "42", "36", "43"], ["XXL", "44", "38", "45"],
  ]},
  kids: { headers: ["Age", "Height (cm)", "Chest (in)"], rows: [
    ["2Y", "92", "21"], ["4Y", "104", "22"], ["6Y", "116", "24"], ["8Y", "128", "26"],
  ]},
};

function SizeGuide() {
  const [tab, setTab] = useState("women");
  const c = charts[tab];
  return (
    React.createElement('div', { className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
      , React.createElement('header', { className: "mb-10 text-center fade-up"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
        , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, "Fit & Sizing"  )
        , React.createElement('h1', { className: "mt-3 font-display text-5xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Size Guide" )
        , React.createElement('p', { className: "mt-3 text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Measurements are in inches unless noted. Between sizes? Size up for relaxed silhouettes."            )
      )

      , React.createElement('div', { className: "mb-6 flex justify-center gap-2 border-b border-border"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}
        , (Object.keys(charts) ).map((k) => (
          React.createElement('button', { key: k, onClick: () => setTab(k),
            className: `px-6 py-3 text-xs uppercase tracking-widest capitalize ${tab === k ? "border-b-2 border-foreground text-foreground" : "text-muted-foreground hover:text-foreground"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
            , k
          )
        ))
      )

      , React.createElement('div', { className: "overflow-x-auto fade-in" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
        , React.createElement('table', { className: "w-full text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
          , React.createElement('thead', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
            , React.createElement('tr', { className: "border-b border-border bg-secondary/50"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
              , c.headers.map((h) => React.createElement('th', { key: h, className: "px-4 py-3 text-left font-semibold uppercase tracking-wider text-xs"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}, h))
            )
          )
          , React.createElement('tbody', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
            , c.rows.map((r, i) => (
              React.createElement('tr', { key: i, className: "border-b border-border" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
                , r.map((cell, j) => React.createElement('td', { key: j, className: "px-4 py-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, cell))
              )
            ))
          )
        )
      )

      , React.createElement('section', { className: "mt-12 grid gap-6 md:grid-cols-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
        , React.createElement('div', { className: "border border-border p-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
          , React.createElement('h3', { className: "font-display text-xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}, "How to measure"  )
          , React.createElement('ul', { className: "mt-3 space-y-2 text-sm text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}, React.createElement('b', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}, "Bust/Chest:"), " Around the fullest part, arms relaxed."      )
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}, React.createElement('b', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}, "Waist:"), " Around the narrowest point."    )
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, React.createElement('b', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, "Hip:"), " Around the fullest part of the hip."       )
          )
        )
        , React.createElement('div', { className: "border border-border p-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
          , React.createElement('h3', { className: "font-display text-xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}, "Fabric guide" )
          , React.createElement('ul', { className: "mt-3 space-y-2 text-sm text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, React.createElement('b', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, "Linen:"), " Softens with wear, expect a relaxed drape."       )
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}, React.createElement('b', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}, "Silk:"), " Hand-wash cold, hang to dry."     )
            , React.createElement('li', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, React.createElement('b', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, "Wool:"), " Air after wear, dry-clean sparingly."     )
          )
        )
      )
    )
  );
}
