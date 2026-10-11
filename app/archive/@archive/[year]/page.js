import NewsList from "@/components/news/news-list";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredNewspage({ params }) {
  const { year } = await params;
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
