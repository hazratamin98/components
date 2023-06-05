import Image from "next/image";
import { Inter } from "next/font/google";
import Tooltip from "@/components/ToolTip";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" flex justify-center items-center gap-4 py-8">
      <Tooltip label="Top" position="top">
        <button className="bg-green-400 py-2 px-3 rounded">TOP</button>
      </Tooltip>
      <Tooltip label="bottom" position="bottom">
        <button className="bg-blue-400 py-2 px-3 rounded">Bottom</button>
      </Tooltip>
      <Tooltip label="left" position="left">
        <button className="bg-orange-400 py-2 px-3 rounded">Left</button>
      </Tooltip>
      <Tooltip label="right" position="right">
        <button className="bg-red-700 py-2 px-3 rounded">Right</button>
      </Tooltip>
    </div>
  );
}
