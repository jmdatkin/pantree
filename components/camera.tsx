"use client";

import useUser from "@/app/_hooks/use-user";
import { getImageUrl, postItems, upload } from "@/app/firebase";
import { getDownloadURL } from "firebase/storage";
import { SwitchCameraIcon } from "lucide-react";
import { useRef, useState } from "react";
import { CameraType, Camera as ReactCamera } from "react-camera-pro";
import { PuffLoader } from "react-spinners";

const Camera = () => {
  const cameraRef = useRef<CameraType>(null);

  const user = useUser();

  const processImage = async (image: string) => {
    if (user === null) return;
    const res = await fetch(image);
    const data = await res.blob();
    // const prefix = image.split(";base64,")[0].split(":")[1]; // Extract the part before "base64,"
    // const bytes = Buffer.from(image, "base64");
    // const byteNumbers = new Array(bytes.length);
    // for (let i = 0; i < bytes.length; i++) byteNumbers[i] = bytes.at(i);
    // const byteArray = new Uint8Array(byteNumbers);
    // const blob = new Blob([byteArray], { type: prefix });
    const result = await upload(data);
    const filename = result.metadata.name;
    const url = await getImageUrl(filename);

    const aiRes = await fetch("http://localhost:3002/api/images", {
      method: "POST",
      body: JSON.stringify({
        imageUrl: url,
      }),
    });

    const js = await aiRes.json();

    await postItems(user, {
      items: [
        {
          itemName: js.data,
          quantity: 1,
        },
      ],
    });

    console.log(js);
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full inset flex flex-col justify-center items-center">
        <PuffLoader color="#3F3F46" />
      </div>
      <ReactCamera ref={cameraRef}></ReactCamera>
      <div className="absolute w-full h-full inset flex flex-col justify-end items-center">
        <div className="w-full flex justify-between px-6 relative bottom-[2rem]">
          <div className="w-16 h-16"></div>
          <button
            className="w-16 h-16 bg-accent outline outline-accent outline-offset-2 outline-3 active:bg-zinc-200 active:outline-zinc-200 rounded-full"
            onClick={() =>
              processImage(
                cameraRef.current.takePhoto("base64url") as ImageData
              )
            }
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
