const _jsxFileName = "src/routes/index.tsx";import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { ArrowRight } from "lucide-react";
import { products, collections } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Noir — Considered Clothing, Quietly Made" },
      { name: "description", content: "Atelier Noir crafts considered seasonal, festive and formal clothing in small batches." },
      { property: "og:title", content: "Atelier Noir" },
      { property: "og:description", content: "Considered clothing for a quieter wardrobe." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);
  return (
    React.createElement(React.Fragment, null
      , React.createElement('section', { className: "relative h-[88vh] min-h-[600px] w-full overflow-hidden"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
        , React.createElement('img', { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85",
          alt: "Atelier Noir summer editorial"   , className: "absolute inset-0 h-full w-full object-cover"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
        , React.createElement('div', { className: "absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}} )
        , React.createElement('div', { className: "relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-20 sm:px-6 lg:px-8"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          , React.createElement('div', { className: "max-w-2xl text-background fade-up"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
            , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] opacity-90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Spring · Summer Edit"   )
            , React.createElement('h1', { className: "mt-4 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, "Quiet luxury,"
               , React.createElement('br', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} ), "loudly made."
            )
            , React.createElement('p', { className: "mt-5 max-w-md text-base opacity-90"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}, "New arrivals in linen, silk and softly tailored cotton. Built to outlive the season."

            )
            , React.createElement('div', { className: "mt-8 flex flex-wrap gap-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
              , React.createElement(Link, { to: "/shop", className: "group inline-flex items-center gap-2 bg-background px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition hover:bg-accent hover:text-accent-foreground"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Shop the edit "
                   , React.createElement(ArrowRight, { size: 14, className: "transition-transform group-hover:translate-x-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}} )
              )
              , React.createElement(Link, { to: "/collections", className: "inline-flex items-center gap-2 border border-background/60 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-background transition hover:bg-background hover:text-foreground"              , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}, "Collections"

              )
            )
          )
        )
      )

      , React.createElement('section', { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
        , React.createElement('div', { className: "mb-10 flex items-end justify-between"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
          , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}
            , React.createElement('p', { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}, "New Arrivals" )
            , React.createElement('h2', { className: "mt-2 font-display text-4xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, "Trending this week"  )
          )
          , React.createElement(Link, { to: "/shop", className: "hidden text-xs uppercase tracking-widest text-foreground hover:text-accent sm:inline"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}, "View all →"  )
        )
        , React.createElement('div', { className: "grid grid-cols-2 gap-6 md:grid-cols-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
          , featured.map((p) => React.createElement(ProductCard, { key: p.id, product: p, __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}} ))
        )
      )

      , React.createElement('section', { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
        , React.createElement('div', { className: "grid gap-6 md:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
          , collections.slice(0, 2).map((c) => (
            React.createElement(Link, { key: c.id, to: "/collections", className: "img-zoom group relative block aspect-[4/3] overflow-hidden"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
              , React.createElement('img', { src: c.image, alt: c.name, className: "h-full w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}} )
              , React.createElement('div', { className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-8 text-background"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
                , React.createElement('p', { className: "text-xs uppercase tracking-[0.25em] opacity-80"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}, "Collection")
                , React.createElement('h3', { className: "mt-2 font-display text-3xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}, c.name)
                , React.createElement('p', { className: "mt-1 text-sm opacity-90"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}, c.tagline)
              )
            )
          ))
        )
      )

      , React.createElement('section', { className: "bg-secondary/40 py-24 mt-20"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
        , React.createElement('div', { className: "mx-auto max-w-3xl px-4 text-center"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}
          , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, "Our Philosophy" )
          , React.createElement('h2', { className: "mt-4 font-display text-4xl sm:text-5xl"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}, "Fewer pieces. Better made."   )
          , React.createElement('p', { className: "mt-5 text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}, "Every garment is cut, sewn and finished in ateliers we know by name. No middle season. No throwaways. Just clothing that earns a permanent place in your wardrobe."

          )
          , React.createElement(Link, { to: "/about", className: "mt-8 inline-block border-b border-foreground pb-1 text-xs uppercase tracking-widest hover:text-accent hover:border-accent"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}, "Read our story"

          )
        )
      )
    )
  );
}
