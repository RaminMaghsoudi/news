import { getLatestNews } from "@/lib/news";
import classess from "./default.module.css";
import { Box } from "@mui/material";
import NewsList from "@/components/news/news-list";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <header>
      <Box className={classess.Header}>
        <h1>Latest News</h1>
        <span className={classess.subHeader}>Archives filtered by year</span>
      </Box>
      <NewsList news={latestNews} />
    </header>
  );
}
