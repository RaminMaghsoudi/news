import Image from "next/image";
import classess from "./page.module.css";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import BackDrop from "@/components/modal/back-drop";

export default async function InterceptedImagepage({ params }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();

  return (
    <BackDrop>
      <dialog className={classess.modal} open>
        <Image
          className={classess.Image}
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          width={500}
          height={500}
        />
      </dialog>
    </BackDrop>
  );
}
