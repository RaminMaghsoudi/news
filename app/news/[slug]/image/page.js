import Image from "next/image";
import classess from "./page.module.css";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default async function Imagepage({ params }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();

  return (
    <Box className={classess.fullscreen}>
      <Image
        className={classess.Image}
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={600}
        height={600}
      />
    </Box>
  );
}
