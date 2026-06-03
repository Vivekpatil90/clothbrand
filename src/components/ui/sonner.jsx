const _jsxFileName = "src/components/ui/sonner.tsx";import { Toaster as Sonner } from "sonner";
import React from "react";



const Toaster = ({ ...props }) => {
  return (
    React.createElement(Sonner, {
      className: "toaster group" ,
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...props, __self: this, __source: {fileName: _jsxFileName, lineNumber: 7}}
    )
  );
};

export { Toaster };
