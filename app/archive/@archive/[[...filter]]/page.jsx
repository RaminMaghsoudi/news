import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import ArchiveHeader from "@/components/archive/header/archive-header";
import Link from "next/link";
import classess from "./page.module.css";
import { Box } from "@mui/material";

export default async function FilteredNewspage({ params }) {
  const { filter } = await params;
  const selectedYear = filter?.[0]; // const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter?.[1]; // const selectedYear = filter ? filter[1] : undefined;
  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }
  let newsContent = (
    <Box className={classess.newsContent}>
      No News Found For The Selected Period!
    </Box>
  );
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <ArchiveHeader>
        <nav>
          <ul id={classess.ul}>
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
      </ArchiveHeader>
      {newsContent}
    </>
  );
}
