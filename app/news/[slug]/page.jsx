import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import classess from "./page.module.css";
import { notFound } from "next/navigation";

export default async function NewsDetailpage({ params }) {
  const slug = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug.slug);
  if (!newsItem) notFound();

  return (
    <article className={classess["news-article"]}>
      <header>
        <Link href={`/news/${newsItem.slug}/showImage`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={180}
            height={180}
            loading="eager"
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
