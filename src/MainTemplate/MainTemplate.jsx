import clsx from "clsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import "./styles.css";

export default function MainTemplate() {
  const { pathname } = useLocation();

  const menu = [
    {
      id: 1,
      to: "/",
      label: "Home",
    },
    {
      id: 2,
      to: "/counters",
      label: "Counters",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <ol>
            {menu.map(({ id, to, label }) => (
              <li key={id}>
                <Link
                  to={to}
                  //className={`menu-item ${to === pathname ? "current" : ""}`}
                  className={clsx("menu-item", { current: to === pathname })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Typography variant="caption">SHA : 2023</Typography>
      </footer>
    </>
  );
}
