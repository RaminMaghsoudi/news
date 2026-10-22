import Link from "next/link";
import classess from "./main-header.module.css";

export default async function MainHeader() {
  return (
    <header id={classess["main-header"]}>
      <Link href="/" id={classess.logo}>
        NextNews
      </Link>
      <Link id={classess.nav} href="/news">
        News
      </Link>
    </header>
  );
}
