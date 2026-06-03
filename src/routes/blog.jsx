const _jsxFileName = "src/routes/blog.tsx";import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Atelier Noir" },
      { name: "description", content: "Style guides, trend reports and inspiration from the Atelier Noir studio." },
    ],
  }),
  component: Blog,
});

const posts = [
  { id: 1, title: "Five ways to wear linen this summer",
    excerpt: "From quiet beach cover-ups to evening tailoring — your warm-weather playbook.",
    image: "https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=1200&q=80",
    tag: "Style Guide", date: "Jun 02" },
  { id: 2, title: "A guide to draping the modern saree",
    excerpt: "Four ways to drape one saree — for the wedding, the after-party and the brunch.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    tag: "How To", date: "May 28" },
  { id: 3, title: "Trend report: quiet luxury, loud craft",
    excerpt: "Why the world's best-dressed are reaching for less, not more — and what to invest in next.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    tag: "Trend", date: "May 18" },
  { id: 4, title: "Celebrity look · Zendaya in tailoring",
    excerpt: "Breaking down the after-party look that lit up our feeds — and how to recreate it.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
    tag: "Celebrity", date: "May 09" },
];

function Blog() {
  const [hero, ...rest] = posts;
  return (
    React.createElement('div', { className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
      , React.createElement('header', { className: "mb-12", __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
        , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "Journal")
        , React.createElement('h1', { className: "mt-3 font-display text-5xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "Style notes & inspiration"   )
      )

      , React.createElement('article', { className: "img-zoom group relative mb-16 grid overflow-hidden md:grid-cols-2 fade-up"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
        , React.createElement('div', { className: "overflow-hidden", __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}
          , React.createElement('img', { src: hero.image, alt: hero.title, className: "h-full w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}} )
        )
        , React.createElement('div', { className: "flex flex-col justify-center bg-secondary/40 p-10"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
          , React.createElement('span', { className: "text-xs uppercase tracking-widest text-accent"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}, hero.tag, " · "  , hero.date)
          , React.createElement('h2', { className: "mt-4 font-display text-4xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}, hero.title)
          , React.createElement('p', { className: "mt-4 text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}, hero.excerpt)
          , React.createElement('button', { className: "mt-8 self-start border-b border-foreground pb-1 text-xs uppercase tracking-widest hover:text-accent hover:border-accent"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}, "Read article" )
        )
      )

      , React.createElement('div', { className: "grid gap-10 md:grid-cols-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
        , rest.map((p) => (
          React.createElement('article', { key: p.id, className: "group fade-up" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
            , React.createElement('div', { className: "img-zoom aspect-[4/3] overflow-hidden"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
              , React.createElement('img', { src: p.image, alt: p.title, className: "h-full w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}} )
            )
            , React.createElement('span', { className: "mt-4 block text-xs uppercase tracking-widest text-muted-foreground"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}, p.tag, " · "  , p.date)
            , React.createElement('h3', { className: "mt-2 font-display text-2xl group-hover:text-accent"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}, p.title)
            , React.createElement('p', { className: "mt-2 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}, p.excerpt)
          )
        ))
      )
    )
  );
}
