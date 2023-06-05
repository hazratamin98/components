import Image from "next/image";
import { Inter } from "next/font/google";
import Tooltip from "@/components/ToolTip";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Tooltip label="show ToolTip" position="bottom">
      <p className="text-black">see requirement</p>
    </Tooltip>
  );
}
