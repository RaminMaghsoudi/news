import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import ArchiveHeader from "@/components/archive/header/archive-header";
import classess from "./page.module.css";

export default async function ArchivePage({ params }) {
  const { filter } = await params;
  let links = getAvailableNewsYears();
  const selectedYear = filter?.[0]; // const selectedYear = filter ? filter[0] : undefined;

  return (
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
  );
}
