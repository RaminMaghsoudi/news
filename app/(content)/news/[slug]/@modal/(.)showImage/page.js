import ModalBackDrop from "@/components/modal/modal-backdrop";
import { DUMMY_NEWS } from "@/dummy-news";
import { Box } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <Box className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={730}
            height={730}
          />
        </Box>
      </dialog>
    </>
  );
}
