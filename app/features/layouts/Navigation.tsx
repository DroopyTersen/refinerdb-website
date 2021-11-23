import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Logo } from "~/components/Logo";

interface NavigationProps {}

export function Navigation({}: NavigationProps) {
  return (
    <nav className="p-4 text-white">
      <div className="py-4 flex gap-2 pl-4">
        <Link
          to="/"
          className="font-mono text-2xl opacity-90 hover:opacity-100 text-secondary flex items-center gap-2"
        >
          <Logo className="w-6 opacity-70" />
          <span className="">RefinerDB</span>
        </Link>
      </div>
      <NavSection title="Setup">
        <NavItem to="#">Installation</NavItem>
        <NavItem to="#">Quick Start</NavItem>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/page-1">Page 1</NavItem>
        <NavItem to="/page-2">Page 2</NavItem>
      </NavSection>

      <NavSection title="Basics">
        <NavItem to="#">Using your data</NavItem>
        <NavItem to="#">Indexes</NavItem>
        <NavItem to="#">Querying</NavItem>
        <NavItem to="#">Refiners</NavItem>
      </NavSection>

      <NavSection title="React">
        <NavItem to="#">Intro</NavItem>
        <NavItem to="#">RefinerDBProvider</NavItem>
        <NavItem to="#">Display items</NavItem>
        <NavItem to="#">Refine items</NavItem>
      </NavSection>

      <NavSection title="Examples">
        <NavItem to="#">Github Repo Finder</NavItem>
        <NavItem to="#">Movies & TV</NavItem>
        <NavItem to="#">Dev.to Articles</NavItem>
        <NavItem to="#">Rick & Morty</NavItem>
      </NavSection>

      <NavSection title="API Reference">
        <NavItem to="/reference/core-api">Core</NavItem>
        <NavItem to="/reference/react-api">Core</NavItem>
      </NavSection>
    </nav>
  );
}

function NavSection({ children, title }) {
  return (
    <div className="py-4">
      <h3 className="text-xl font-bold text-accent pl-4">{title}</h3>
      <ul className="text-lg">{children}</ul>
    </div>
  );
}

function NavItem({ children, to, isActive = false }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log("🚀 | NavItem | match", to);
  return (
    <li className="mt-1 text-base">
      <Link
        className={`opacity-80 hover:opacity-100 px-4 ${match ? "bg-primary" : ""}`}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}
