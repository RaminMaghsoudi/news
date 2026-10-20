import { DUMMY_NEWS } from "@/dummy-news";
import { Box } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();

  return (
    <Box className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={1000}
        height={1000}
      />
    </Box>
  );
}
