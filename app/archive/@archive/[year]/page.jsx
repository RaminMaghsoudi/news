import NewsList from "@/components/news/news-list";
import { getNewsForYear } from "@/lib/news";
import ArchiveHeader from "@/components/archive/header/archive-header";

export default async function FilteredNewspage({ params }) {
  const { year } = await params;
  const news = getNewsForYear(year);

  return (
    <ArchiveHeader>
      <NewsList news={news} />
    </ArchiveHeader>
  );
}
