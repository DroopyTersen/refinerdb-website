import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Logo } from "~/components/Logo";

interface NavigationProps {}

export function Navigation({}: NavigationProps) {
  return (
    <nav className="px-4 text-white">
      <div className="flex gap-2 py-4 pl-1">
        <Link
          to="/"
          className="flex items-center gap-2 pt-2 font-mono text-3xl opacity-90 hover:opacity-100 text-secondary"
        >
          <Logo className="w-7 opacity-80" />
          <span className="text-white">RefinerDB</span>
        </Link>
      </div>
      <NavSection title="Setup">
        <NavItem to="/setup/installation">Installation</NavItem>
        <NavItem to="/setup/quick-start">Quick Start</NavItem>
      </NavSection>

      <NavSection title="Basics">
        <NavItem to="/basics/data">Using your data</NavItem>
        <NavItem to="/basics/indexes">Indexes</NavItem>
        <NavItem to="basics/querying">Querying</NavItem>
        <NavItem to="basics/refiners">Refiners</NavItem>
      </NavSection>

      <NavSection title="React">
        <NavItem to="/react/intro">Intro</NavItem>
        <NavItem to="/react/refinerdbprovider">RefinerDBProvider</NavItem>
        <NavItem to="/react/display-items">Display items</NavItem>
        <NavItem to="/react/refine-items">Refine items</NavItem>
      </NavSection>

      <NavSection title="Examples">
        <NavItem to="/examples/repo-finder">Github Repo Finder</NavItem>
        <NavItem to="/examples/movies">Movies & TV</NavItem>
        <NavItem to="/examples/dev-to-articles">Dev.to Articles</NavItem>
        <NavItem to="/examples/rick-and-morty">Rick & Morty</NavItem>
      </NavSection>

      <NavSection title="API Reference">
        <NavItem to="/reference/core-api">Core</NavItem>
        <NavItem to="/reference/react-api">React</NavItem>
      </NavSection>
    </nav>
  );
}

function NavSection({ children, title }) {
  return (
    <div className="py-4">
      <h3 className="pl-1 my-0 text-xl font-bold text-accent">{title}</h3>
      <ul className="pl-0 m-0 text-lg">{children}</ul>
    </div>
  );
}

function NavItem({ children, to, isActive = false }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className="flex flex-col text-base">
      <Link
        className={`border-transparent opacity-80 hover:opacity-100 py-1 px-3 rounded text-white ${
          match ? "bg-primary-focus opacity-100" : "hover:text-primary"
        }`}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}
