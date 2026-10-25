import { getLatestNews } from "@/lib/news";
import classess from "./default.module.css";
import NewsList from "@/components/news/news-list";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <header>
      <div className={classess.Header}>
        <h1>Latest News</h1>
        <span className={classess.subHeader}>Archives filtered by year</span>
      </div>
      <NewsList news={latestNews} />
    </header>
  );
}
