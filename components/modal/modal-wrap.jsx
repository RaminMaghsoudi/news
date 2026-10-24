import { Box } from "@mui/material";
import classess from "./modal-wrap.module.css";

export default function ModalWrap({ children }) {
  return <Box className={classess.fullscreen}>{children}</Box>;
}
