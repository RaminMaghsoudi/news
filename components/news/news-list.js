import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import classess from "./news-list.module.css";

export default function NewsList({ news }) {
  return (
    <ul className={classess["news-list"]}>
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={150}
              height={150}
            />
            <Box className={classess["news-list-title"]}>{newsItem.title}</Box>
          </Link>
        </li>
      ))}
    </ul>
  );
}
