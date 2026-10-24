import Image from "next/image";
import Link from "next/link";
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
            <div className={classess["news-list-title"]}>{newsItem.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
