"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ModalBackDrop() {
  const router = useRouter();

  return <Box className="modal-backdrop" onClick={router.back} />;
}
