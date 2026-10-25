"use client";

import { Box } from "@mui/material";
import classess from "./back-drop.module.css";
import { useRouter } from "next/navigation";

export default function BackDrop({ children }) {
  const router = useRouter();

  return (
    <Box className={classess["modal-backdrop"]} onClick={router.back}>
      {children}
    </Box>
  );
}
