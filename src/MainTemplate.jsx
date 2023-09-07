import { Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol>
            <li>menu1</li>
            <li>menu2</li>
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
