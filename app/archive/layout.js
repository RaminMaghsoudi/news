import classess from "./layout.module.css";
import { Box } from "@mui/material";

export default function ArchiveLayout({ archive, latest }) {
  return (
    <Box className={classess["news-header-div"]}>
      <header className={classess["news-header"]}>
        <strong>
          New<span className={classess["news-header-ly"]}>s.</span>
        </strong>
        <span>New & Latest</span>
        <sup>Archive</sup>
        <div></div>
      </header>
      <section className={classess["archive-filter"]}>{archive}</section>
      <section className={classess["archive-latest"]}>{latest}</section>
    </Box>
  );
}
