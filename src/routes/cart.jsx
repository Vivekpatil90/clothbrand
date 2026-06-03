const _jsxFileName = "src/routes/cart.tsx";import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, itemKey } from "@/lib/cart-context";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart & Checkout — Atelier Noir" },
      { name: "description", content: "Review your cart, apply a coupon and complete checkout securely." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(0);
  const [step, setStep] = useState("cart");
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12;
  const total = Math.max(0, subtotal + shipping - applied);

  const applyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "NOIR10") setApplied(Math.round(subtotal * 0.1));
    else { setApplied(0); alert("Invalid code. Try NOIR10."); }
  };

  if (step === "done") {
    return (
      React.createElement('div', { className: "mx-auto max-w-xl px-4 py-32 text-center fade-up"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
        , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] text-accent"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}, "Order #AN-" , Math.floor(Math.random() * 90000 + 10000))
        , React.createElement('h1', { className: "mt-4 font-display text-5xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, "Thank you." )
        , React.createElement('p', { className: "mt-4 text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Your order is confirmed. We'll email you tracking shortly."        )
        , React.createElement(Link, { to: "/shop", onClick: clear, className: "mt-10 inline-block border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "Continue shopping" )
      )
    );
  }

  if (items.length === 0) {
    return (
      React.createElement('div', { className: "mx-auto max-w-md px-4 py-32 text-center"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
        , React.createElement('h1', { className: "font-display text-4xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, "Your cart is empty."   )
        , React.createElement(Link, { to: "/shop", className: "mt-8 inline-block border border-foreground px-7 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "Shop now" )
      )
    );
  }

  return (
    React.createElement('div', { className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
      , React.createElement('h1', { className: "font-display text-4xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}, "Cart & Checkout"  )
      , React.createElement('div', { className: "mt-3 flex gap-3 text-xs uppercase tracking-widest text-muted-foreground"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
        , ["cart","address","payment"].map((s, i) => (
          React.createElement('span', { key: s, className: step === s ? "text-foreground" : "", __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}, i + 1, ". " , s)
        ))
      )

      , React.createElement('div', { className: "mt-10 grid gap-10 lg:grid-cols-[1fr_360px]"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 59}}
        , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
          , step === "cart" && items.map((i) => {
            const k = itemKey(i);
            return (
              React.createElement('div', { key: k, className: "flex gap-4 border-b border-border pb-6 fade-in"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
                , React.createElement('img', { src: i.image, alt: i.name, className: "h-28 w-24 object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}} )
                , React.createElement('div', { className: "flex-1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 66}}
                  , React.createElement('div', { className: "flex justify-between" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 67}}
                    , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
                      , React.createElement('h3', { className: "font-medium", __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}, i.name)
                      , React.createElement('p', { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}, "Size " , i.size)
                    )
                    , React.createElement('p', { className: "text-sm", __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, "$", i.price * i.qty)
                  )
                  , React.createElement('div', { className: "mt-4 flex items-center justify-between"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
                    , React.createElement('div', { className: "flex items-center border border-border"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
                      , React.createElement('button', { onClick: () => setQty(k, i.qty - 1), className: "px-2.5 py-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, React.createElement(Minus, { size: 12, __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}} ))
                      , React.createElement('span', { className: "w-8 text-center text-sm"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 77}}, i.qty)
                      , React.createElement('button', { onClick: () => setQty(k, i.qty + 1), className: "px-2.5 py-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}}, React.createElement(Plus, { size: 12, __self: this, __source: {fileName: _jsxFileName, lineNumber: 78}} ))
                    )
                    , React.createElement('button', { onClick: () => remove(k), className: "text-muted-foreground hover:text-destructive" , 'aria-label': "Remove", __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
                      , React.createElement(Trash2, { size: 16, __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}} )
                    )
                  )
                )
              )
            );
          })

          , step === "address" && (
            React.createElement('form', { onSubmit: (e) => { e.preventDefault(); setStep("payment"); }, className: "grid gap-4 fade-in"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
              , React.createElement(Input, { label: "Full name" , required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}} )
              , React.createElement(Input, { label: "Address", required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}} )
              , React.createElement('div', { className: "grid gap-4 sm:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
                , React.createElement(Input, { label: "City", required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}} )
                , React.createElement(Input, { label: "Postal code" , required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}} )
              )
              , React.createElement(Input, { label: "Country", required: true, defaultValue: "United States" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}} )
              , React.createElement(Input, { label: "Phone", type: "tel", required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 98}} )
              , React.createElement('button', { className: "mt-2 bg-primary py-3.5 text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, "Continue to payment"  )
            )
          )

          , step === "payment" && (
            React.createElement('form', { onSubmit: (e) => { e.preventDefault(); setStep("done"); }, className: "grid gap-4 fade-in"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
              , React.createElement(Input, { label: "Card number" , required: true, placeholder: "4242 4242 4242 4242"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
              , React.createElement('div', { className: "grid gap-4 sm:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
                , React.createElement(Input, { label: "Expiry", required: true, placeholder: "MM/YY", __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}} )
                , React.createElement(Input, { label: "CVC", required: true, placeholder: "123", __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}} )
              )
              , React.createElement(Input, { label: "Name on card"  , required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} )
              , React.createElement('button', { className: "mt-2 bg-primary py-3.5 text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, "Pay $" , total)
            )
          )
        )

        , React.createElement('aside', { className: "space-y-4 border border-border bg-secondary/30 p-6 lg:sticky lg:top-24 lg:self-start"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
          , React.createElement('h3', { className: "font-display text-xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 117}}, "Order summary" )
          , React.createElement('div', { className: "space-y-2 text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 118}}
            , React.createElement(Row, { label: "Subtotal", value: `$${subtotal}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}} )
            , React.createElement(Row, { label: "Shipping", value: shipping === 0 ? "Free" : `$${shipping}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}} )
            , applied > 0 && React.createElement(Row, { label: "Discount", value: `−$${applied}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}} )
            , React.createElement('div', { className: "my-3 border-t border-border"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}} )
            , React.createElement(Row, { label: "Total", value: `$${total}`, bold: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}} )
          )
          , step === "cart" && (
            React.createElement(React.Fragment, null
              , React.createElement('form', { onSubmit: applyCoupon, className: "flex", __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}
                , React.createElement('input', { value: coupon, onChange: (e) => setCoupon(e.target.value), placeholder: "Coupon (try NOIR10)"  ,
                  className: "w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 128}} )
                , React.createElement('button', { className: "bg-foreground px-4 text-xs uppercase tracking-widest text-background"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 130}}, "Apply")
              )
              , React.createElement('button', { onClick: () => setStep("address"), className: "w-full bg-primary py-3.5 text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}, "Checkout"

              )
            )
          )
        )
      )
    )
  );
}

function Row({ label, value, bold }) {
  return (
    React.createElement('div', { className: `flex justify-between ${bold ? "text-base font-semibold" : ""}`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}
      , React.createElement('span', { className: "text-muted-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}}, label), React.createElement('span', { className: "text-foreground", __self: this, __source: {fileName: _jsxFileName, lineNumber: 146}}, value)
    )
  );
}

function Input({ label, ...props }) {
  return (
    React.createElement('label', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 153}}
      , React.createElement('span', { className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 154}}, label)
      , React.createElement('input', { ...props, className: "w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}} )
    )
  );
}
