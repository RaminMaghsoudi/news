import Link from "next/link";
import classess from "./main-header.module.css";
import NavLink from "../nav-link/nav-link";

export default async function MainHeader() {
  return (
    <header id={classess["main-header"]}>
      <Link href="/" id={classess.logo}>
        NextNews
      </Link>
      <nav>
        <ul className={classess.UL}>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/archive">Archive</NavLink>
        </ul>
      </nav>
      {/* <div>
        <Link id={classess.nav} href="/news">
          News
        </Link>
        <Link id={classess.nav} href="/archive">
          Archive
        </Link>
      </div> */}
    </header>
  );
}
