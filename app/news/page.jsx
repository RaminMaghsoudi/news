import Link from "next/link";
import classess from "./page.module.css";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { Box } from "@mui/material";

export default function NewsPage() {
  return (
    <>
      <header className={classess["news-header"]}>
        <strong>
          Press<span className={classess["news-header-ly"]}>ly.</span>
        </strong>
        <span>News & Magazine</span>
        <sup>Template</sup>
        <div></div>
      </header>
      <ul className={classess["news-list"]}>
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                width={150}
                height={150}
              />
              <Box className={classess["news-list-title"]}>
                {newsItem.title}
              </Box>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
