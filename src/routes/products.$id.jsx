const _jsxFileName = "src/routes/products.$id.tsx"; function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import React from "react";
import { useState } from "react";
import { Heart, Minus, Plus, Truck, RotateCcw, Shield } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products/$id")({
  head: ({ params }) => {
    const p = getProduct(params.id);
    return {
      meta: [
        { title: p ? `${p.name} — Atelier Noir` : "Product — Atelier Noir" },
        { name: "description", content: _nullishCoalesce(_optionalChain([p, 'optionalAccess', _ => _.description]), () => ( "Atelier Noir product")) },
        { property: "og:title", content: _nullishCoalesce(_optionalChain([p, 'optionalAccess', _2 => _2.name]), () => ( "Atelier Noir")) },
        { property: "og:image", content: _nullishCoalesce(_optionalChain([p, 'optionalAccess', _3 => _3.image]), () => ( "")) },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = getProduct(id);
  const navigate = useNavigate();
  const { add, wishlist, toggleWish } = useCart();
  const [size, setSize] = useState(_nullishCoalesce(_optionalChain([product, 'optionalAccess', _4 => _4.sizes, 'access', _5 => _5[0]]), () => ( "")));
  const [color, setColor] = useState(_nullishCoalesce(_optionalChain([product, 'optionalAccess', _6 => _6.colors, 'access', _7 => _7[0]]), () => ( "")));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      React.createElement('div', { className: "mx-auto max-w-md px-4 py-32 text-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
        , React.createElement('h1', { className: "font-display text-3xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Not found" )
        , React.createElement(Link, { to: "/shop", className: "mt-6 inline-block border-b border-foreground text-xs uppercase tracking-widest"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Back to shop"  )
      )
    );
  }

  const wished = wishlist.includes(product.id);
  const related = products.filter((p) => p.id !== product.id && p.collection === product.collection).slice(0, 4);

  const handleBuy = () => {
    add({ id: product.id, name: product.name, price: product.price, image: product.image, size, color, qty });
    navigate({ to: "/cart" });
  };

  return (
    React.createElement('div', { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
      , React.createElement('nav', { className: "mb-6 text-xs uppercase tracking-widest text-muted-foreground"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
        , React.createElement(Link, { to: "/", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}, "Home"), " / "  , React.createElement(Link, { to: "/shop", className: "hover:text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}, "Shop"), " / "  , React.createElement('span', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}, product.name)
      )
      , React.createElement('div', { className: "grid gap-10 lg:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
        , React.createElement('div', { className: "grid grid-cols-2 gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
          , React.createElement('img', { src: product.image, alt: product.name, className: "col-span-2 aspect-[4/5] w-full object-cover fade-in"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}} )
          , React.createElement('img', { src: product.image + "&sat=-30", alt: "", className: "aspect-square w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}} )
          , React.createElement('img', { src: product.image + "&blur=2", alt: "", className: "aspect-square w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} )
        )

        , React.createElement('div', { className: "lg:sticky lg:top-24 lg:self-start fade-up"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
          , React.createElement('p', { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}, product.collection, " · "  , product.category)
          , React.createElement('h1', { className: "mt-2 font-display text-4xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}, product.name)
          , React.createElement('p', { className: "mt-3 text-2xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}, "$", product.price)
          , React.createElement('p', { className: "mt-6 text-sm leading-relaxed text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}, product.description)

          , React.createElement('div', { className: "mt-8", __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
            , React.createElement('div', { className: "mb-2 flex items-center justify-between"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
              , React.createElement('h3', { className: "text-xs font-semibold uppercase tracking-widest"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}, "Color")
              , React.createElement('span', { className: "text-xs text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}, color)
            )
            , React.createElement('div', { className: "flex gap-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}
              , product.colors.map((c) => (
                React.createElement('button', { key: c, onClick: () => setColor(c), 'aria-label': c,
                  style: { background: c },
                  className: `h-9 w-9 rounded-full border-2 transition ${color === c ? "border-accent" : "border-border"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}} )
              ))
            )
          )

          , React.createElement('div', { className: "mt-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
            , React.createElement('div', { className: "mb-2 flex items-center justify-between"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
              , React.createElement('h3', { className: "text-xs font-semibold uppercase tracking-widest"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}, "Size")
              , React.createElement(Link, { to: "/size-guide", className: "text-xs underline hover:text-accent"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, "Size guide" )
            )
            , React.createElement('div', { className: "flex flex-wrap gap-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}
              , product.sizes.map((s) => (
                React.createElement('button', { key: s, onClick: () => setSize(s),
                  className: `border px-4 py-2 text-sm ${size === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, s)
              ))
            )
          )

          , React.createElement('div', { className: "mt-6 flex items-center gap-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
            , React.createElement('div', { className: "flex items-center border border-border"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
              , React.createElement('button', { onClick: () => setQty(Math.max(1, qty - 1)), className: "px-3 py-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}, React.createElement(Minus, { size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}} ))
              , React.createElement('span', { className: "w-8 text-center text-sm"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}, qty)
              , React.createElement('button', { onClick: () => setQty(qty + 1), className: "px-3 py-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, React.createElement(Plus, { size: 14, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}} ))
            )
            , React.createElement('button', { onClick: handleBuy, className: "flex-1 bg-primary py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-accent"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}, "Buy now · $"
                 , product.price * qty
            )
            , React.createElement('button', { onClick: () => toggleWish(product.id), className: "border border-border p-3.5 hover:border-foreground"   , 'aria-label': "Wishlist", __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
              , React.createElement(Heart, { size: 16, className: wished ? "fill-accent text-accent" : "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}} )
            )
          )

          , React.createElement('div', { className: "mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-xs text-muted-foreground"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
            , React.createElement('div', { className: "flex flex-col items-center gap-2 text-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}, React.createElement(Truck, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}} ), React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}, "Free shipping over $150"   ))
            , React.createElement('div', { className: "flex flex-col items-center gap-2 text-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}, React.createElement(RotateCcw, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} ), React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}, "30-day returns" ))
            , React.createElement('div', { className: "flex flex-col items-center gap-2 text-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, React.createElement(Shield, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}} ), React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, "Lifetime repairs" ))
          )

          , React.createElement('details', { className: "mt-8 border-t border-border pt-6"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
            , React.createElement('summary', { className: "cursor-pointer text-sm font-medium"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}, "Reviews · 4.8 ★ (132)"    )
            , React.createElement('div', { className: "mt-4 space-y-4 text-sm text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
              , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}, "\"Beautifully made — feels even better in person.\" — Maya R."          )
              , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}, "\"Worth every dollar. Fit is true to size.\" — James L."          )
            )
          )
        )
      )

      , related.length > 0 && (
        React.createElement('section', { className: "mt-24", __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}}
          , React.createElement('h2', { className: "mb-8 font-display text-3xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}, "You may also love"   )
          , React.createElement('div', { className: "grid grid-cols-2 gap-6 md:grid-cols-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}
            , related.map((p) => React.createElement(ProductCard, { key: p.id, product: p, __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}} ))
          )
        )
      )
    )
  );
}
