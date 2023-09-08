import { Link, Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counters">Counters</Link>
            </li>
            <li>menu3</li>
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <br />
        <h6>2023</h6>
      </footer>
    </>
  );
}
