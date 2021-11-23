import React from "react";
import { Navigation } from "./Navigation";

export function Layout({
  children,
  sidebar,
}: React.PropsWithChildren<{ sidebar?: React.ReactNode }>) {
  return (
    <div className="layout">
      <header className="flex items-center px-8 py-4 bg-gray-100">Header</header>
      <aside id="grid-left" className="grid-sidebar bg-base-200" title="Site Navigation">
        <Navigation />
      </aside>
      <main id="grid-main" className="p-8">
        {children}
      </main>
      {sidebar && (
        <aside id="grid-right" className="p-8 grid-sidebar" title="Table of Contents">
          {sidebar}
        </aside>
      )}
    </div>
  );
}
