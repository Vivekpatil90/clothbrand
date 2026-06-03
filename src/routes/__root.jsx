const _jsxFileName = "src/routes/__root.tsx";import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";


import appCss from "../styles.css?url";
import { CartProvider } from "../lib/cart-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    React.createElement('div', { className: "flex min-h-screen items-center justify-center bg-background px-4"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
      , React.createElement('div', { className: "max-w-md text-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
        , React.createElement('h1', { className: "text-7xl font-bold text-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}, "404")
        , React.createElement('h2', { className: "mt-4 text-xl font-semibold text-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "Page not found"  )
        , React.createElement('p', { className: "mt-2 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, "The page you're looking for doesn't exist or has been moved."

        )
        , React.createElement('div', { className: "mt-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
          , React.createElement(Link, {
            to: "/",
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
, "Go home"

          )
        )
      )
    )
  );
}

function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();

  return (
    React.createElement('div', { className: "flex min-h-screen items-center justify-center bg-background px-4"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}
      , React.createElement('div', { className: "max-w-md text-center" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
        , React.createElement('h1', { className: "text-xl font-semibold tracking-tight text-foreground"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}, "This page didn't load"

        )
        , React.createElement('p', { className: "mt-2 text-sm text-muted-foreground"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}, "Something went wrong on our end. You can try refreshing or head back home."

        )
        , React.createElement('div', { className: "mt-6 flex flex-wrap justify-center gap-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
          , React.createElement('button', {
            onClick: () => {
              router.invalidate();
              reset();
            },
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
, "Try again"

          )
          , React.createElement('a', {
            href: "/",
            className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"             , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}
, "Go home"

          )
        )
      )
    )
  );
}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Atelier Noir" },
      { name: "description", content: "Atelier Noir — curated essentials." },
      { property: "og:title", content: "Atelier Noir" },
      { property: "og:description", content: "Atelier Noir — curated essentials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }) {
  return (
    React.createElement('html', { lang: "en", __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}
      , React.createElement('head', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
        , React.createElement(HeadContent, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}} )
      )
      , React.createElement('body', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}
        , children
        , React.createElement(Scripts, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 102}} )
      )
    )
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    React.createElement(QueryClientProvider, { client: queryClient, __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
      , React.createElement(CartProvider, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}
        , React.createElement('div', { className: "flex min-h-screen flex-col"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
          , React.createElement(Header, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 115}} )
          , React.createElement('main', { className: "flex-1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
            , React.createElement(Outlet, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 117}} )
          )
          , React.createElement(Footer, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 119}} )
        )
      )
    )
  );
}
