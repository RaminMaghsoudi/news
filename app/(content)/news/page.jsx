import NewsList from "@/components/news/news-list";
import classess from "./page.module.css";
import { DUMMY_NEWS } from "@/dummy-news";

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
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
