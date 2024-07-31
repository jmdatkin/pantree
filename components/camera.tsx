"use client";

import { SwitchCameraIcon } from "lucide-react";
import { useRef, useState } from "react";
import { CameraType, Camera as ReactCamera } from "react-camera-pro";
import { PuffLoader } from "react-spinners";

const Camera = () => {
  const cameraRef = useRef<CameraType>(null);
  const [image, setImage] = useState(null);
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full inset flex flex-col justify-center items-center">
        <PuffLoader color="#3F3F46" />
      </div>
      <ReactCamera ref={cameraRef}></ReactCamera>
      <div className="absolute w-full h-full inset flex flex-col justify-end items-center">
        <div className="w-full flex justify-between px-6 relative bottom-[2rem]">
          <div></div>
          <button
            className="w-16 h-16 bg-accent outline outline-accent outline-offset-2 outline-3 active:bg-zinc-200 active:outline-zinc-200 rounded-full"
            onClick={() => setImage(cameraRef.current.takePhoto())}
          ></button>
          <button
            className="justify-self-end w-16 h-16 flex justify-center items-center bg-accent active:bg-zinc-200 active:outline-zinc-200 rounded-full"
            onClick={() => setImage(cameraRef.current.switchCamera())}
          >
            <SwitchCameraIcon className="text-primary w-12 h-12" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Camera;
