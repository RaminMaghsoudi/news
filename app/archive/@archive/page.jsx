import { getAvailableNewsYears } from "@/lib/news";
import classess from "./page.module.css";
import Link from "next/link";
import { Box } from "@mui/material";

export default async function ArchivePage({ params }) {
  const { filter } = await params;
  let links = getAvailableNewsYears();
  const selectedYear = filter?.[0]; // const selectedYear = filter ? filter[0] : undefined;

  return (
    <header id={classess["archive-header"]}>
      <Box className={classess.Header}>
        <h1>News Archive</h1>
        <span className={classess.subHeader}>Archives filtered by year</span>
      </Box>
      <nav>
        <ul>
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
