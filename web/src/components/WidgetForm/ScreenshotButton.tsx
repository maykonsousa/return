import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";
import html2canvas from "html2canvas";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export const ScreenshotButton = ({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsLoading(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Img = canvas.toDataURL("image/png");
    onScreenshotTook(base64Img);

    setIsLoading(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="p1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 100,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isLoading ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
