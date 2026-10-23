import classess from "./archive-header.module.css";
import { Box } from "@mui/material";

export default function ArchiveHeader({ children }) {
  return (
    <header id={classess["archive-header"]}>
      <Box className={classess.Header}>
        <h1>News Archive</h1>
        <span className={classess.subHeader}>Archives filtered by year</span>
      </Box>
      {children}
    </header>
  );
}
