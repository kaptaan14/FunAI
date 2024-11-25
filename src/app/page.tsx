"use client";


import { Button } from "@/components/Button";
import { Video } from "@/components/Video";

export default function Home() {
  const handleClick = () => {
    window.open("https://youtube.com/shorts/rLMkX13Eta0", "_blank");
  };


  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative w-full h-screen overflow-hidden">
          <Video />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-4xl font-bold bg-opacity-50 px-4 py-2 rounded-md">
              Creating video from text
            </h1>
            <p className="mb-4">
              FunAI is an AI model that can create realistic and imaginative
              scenes from text instructions.
            </p>
            <Button onClick={handleClick}>Try Now</Button>
          </div>
        </div>
      </div>
    </>
  );
}
