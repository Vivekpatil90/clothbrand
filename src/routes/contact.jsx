const _jsxFileName = "src/routes/contact.tsx";import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — Atelier Noir" },
      { name: "description", content: "Return policy, shipping info, contact form and WhatsApp support." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    React.createElement('div', { className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
      , React.createElement('header', { className: "mb-12 max-w-2xl fade-up"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        , React.createElement('p', { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "Support")
        , React.createElement('h1', { className: "mt-3 font-display text-5xl"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, "We're here to help."   )
        , React.createElement('p', { className: "mt-3 text-muted-foreground" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "Questions about an order, sizing, or repairs — our team replies within 24 hours."             )
      )

      , React.createElement('div', { className: "grid gap-12 lg:grid-cols-[1fr_360px]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
        , React.createElement('form', { onSubmit: (e) => { e.preventDefault(); setSent(true); (e.currentTarget ).reset(); },
          className: "space-y-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          , React.createElement('div', { className: "grid gap-5 sm:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
            , React.createElement(Field, { label: "Name", required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}} )
            , React.createElement(Field, { label: "Email", type: "email", required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} )
          )
          , React.createElement(Field, { label: "Subject", required: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}} )
          , React.createElement('label', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
            , React.createElement('span', { className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}, "Message")
            , React.createElement('textarea', { required: true, rows: 6, className: "w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}} )
          )
          , React.createElement('button', { className: "bg-primary px-8 py-3.5 text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "Send message" )
          , sent && React.createElement('p', { className: "text-sm text-accent" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "Thank you — we'll be in touch shortly."       )
        )

        , React.createElement('aside', { className: "space-y-6 border border-border bg-secondary/30 p-8"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
          , React.createElement(Info, { icon: React.createElement(Mail, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}} ), label: "Email", value: "care@ateliernoir.co", __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}} )
          , React.createElement(Info, { icon: React.createElement(Phone, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}} ), label: "Phone", value: "+1 (415) 555-0118"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}} )
          , React.createElement(Info, { icon: React.createElement(MapPin, { size: 18, __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}} ), label: "Studio", value: "42 Rua das Flores, Lisbon"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}} )
          , React.createElement('a', { href: "https://wa.me/14155550118", target: "_blank", rel: "noreferrer",
            className: "mt-2 flex items-center justify-center gap-2 bg-[#25D366] py-3 text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
            , React.createElement(MessageCircle, { size: 16, __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}} ), " WhatsApp chat"
          )
        )
      )

      , React.createElement('section', { className: "mt-20 grid gap-8 md:grid-cols-2"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
        , React.createElement(Policy, { title: "Shipping", body: "Complimentary shipping on orders over $150. Worldwide express delivery in 3–6 business days."            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}} )
        , React.createElement(Policy, { title: "Returns", body: "30-day returns on unworn pieces. Email care@ateliernoir.co to start a return — we'll send a prepaid label."                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}} )
      )
    )
  );
}

function Field({ label, ...p }) {
  return (
    React.createElement('label', { className: "block", __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
      , React.createElement('span', { className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}, label)
      , React.createElement('input', { ...p, className: "w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}} )
    )
  );
}

function Info({ icon, label, value }) {
  return (
    React.createElement('div', { className: "flex items-start gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}
      , React.createElement('span', { className: "mt-0.5 text-accent" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, icon)
      , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 73}}
        , React.createElement('p', { className: "text-xs uppercase tracking-widest text-muted-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}, label)
        , React.createElement('p', { className: "mt-0.5 text-sm" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}, value)
      )
    )
  );
}

function Policy({ title, body }) {
  return (
    React.createElement('div', { className: "border border-border p-8"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
      , React.createElement('h3', { className: "font-display text-2xl" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}, title)
      , React.createElement('p', { className: "mt-3 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}, body)
    )
  );
}
