const _jsxFileName = "src/routes/about.tsx";import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Atelier Noir" },
      { name: "description", content: "Founded in 2019, Atelier Noir designs considered clothing rooted in craft and sustainability." },
    ],
  }),
  component: About,
});

function About() {
  return (
    React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 15}}
      , React.createElement('section', { className: "relative h-[60vh] min-h-[420px] overflow-hidden"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        , React.createElement('img', { src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2000&q=80", alt: "", className: "absolute inset-0 h-full w-full object-cover"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}} )
        , React.createElement('div', { className: "absolute inset-0 bg-black/45"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}} )
        , React.createElement('div', { className: "relative z-10 mx-auto flex h-full max-w-4xl items-end px-4 pb-16 sm:px-6 lg:px-8"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
          , React.createElement('div', { className: "text-background fade-up" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
            , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] opacity-90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, "Brand Story" )
            , React.createElement('h1', { className: "mt-3 font-display text-5xl sm:text-6xl"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "Made slowly, on purpose."   )
          )
        )
      )

      , React.createElement('section', { className: "mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
        , React.createElement('div', { className: "space-y-8 text-base leading-relaxed text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
          , React.createElement('p', { className: "text-xl text-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, "Atelier Noir began in a one-room studio in 2019 with a single dress and a stubborn idea: clothing should last longer than the season it's sold in."

          )
          , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "Founded by Maya Sharma after a decade in luxury ready-to-wear, the brand is a quiet protest against disposable fashion. Every piece is designed in our Lisbon studio, sampled three times, and produced in family-run ateliers across Portugal, Italy and India — places we visit, people we know."

          )
          , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "We work with deadstock silk, regenerative cotton and undyed linen wherever possible. Our packaging is plastic-free. Our patterns are graded for real bodies. And every garment we make can come back to us for a lifetime of repairs."

          )
        )
      )

      , React.createElement('section', { className: "bg-secondary/40 py-20" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
        , React.createElement('div', { className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-3 lg:px-8"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
          , [
            { n: "01", t: "Considered design", d: "No middle season. We release 4 small drops a year." },
            { n: "02", t: "Honest craft", d: "Made in workshops we visit, by people paid fairly." },
            { n: "03", t: "Built to last", d: "Lifetime repairs. Take-back at end of life." },
          ].map((v) => (
            React.createElement('div', { key: v.n, __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
              , React.createElement('p', { className: "font-display text-4xl text-accent"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}, v.n)
              , React.createElement('h3', { className: "mt-3 font-display text-xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}, v.t)
              , React.createElement('p', { className: "mt-2 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, v.d)
            )
          ))
        )
      )

      , React.createElement('section', { className: "mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
        , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}}, "Founder")
        , React.createElement('blockquote', { className: "mt-6 font-display text-3xl leading-tight"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}, "\"The most sustainable garment is the one you'll still want to wear in ten years.\""

        )
        , React.createElement('p', { className: "mt-4 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, "— Maya Sharma, Founder & Creative Director"      )
        , React.createElement(Link, { to: "/shop", className: "mt-10 inline-block bg-foreground px-8 py-3 text-xs uppercase tracking-widest text-background hover:bg-accent"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}, "Shop the collection"  )
      )
    )
  );
}
