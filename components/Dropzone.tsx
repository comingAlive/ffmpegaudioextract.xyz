import Add from "@/components/icons/Add";
import clsx from "clsx";
import React, { useCallback } from "react";
import { isMobile } from "react-device-detect";
import { FileWithPath, useDropzone } from "react-dropzone";

function Dropzone({ convertToMp3, ready, converting }: any) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    convertToMp3(acceptedFiles[0]);
    // Do something with the files
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: "video/*" });

  const main =
    "flex flex-col flex-1 items-center p-5 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 border-2 border-white border-dashed transition outline-none rounder";

  const states = clsx({
    "border-blue-500": isDragActive,
    "border-green-500": isDragAccept,
    "border-red-500": isDragReject,
  });

  return (
    <section className="flex flex-col text-lg transition">
      <div {...getRootProps()} className={main + states}>
        <input {...getInputProps()} />
        <Add />
        <p className="pt-4 font-bold">
          {!ready
            ? "Initializing FFmpeg"
            : isMobile
            ? "Mobile device was detected"
            : "Drag and drop video file"}
        </p>
        <p>
          {!ready
            ? "Loading..."
            : isMobile
            ? "application is disabled"
            : "or click to send"}
        </p>

        <button
          aria-label="select file"
          className="flex justify-center items-center mt-4 w-48 h-12 text-white bg-black"
        >
          {!ready || converting || isMobile ? (
            <svg
              className="w-6 h-6 animate-spin"
              fill="currentColor"
              stroke="black"
              strokeWidth={2}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z" />
            </svg>
          ) : (
            "Select file"
          )}
        </button>
      </div>
    </section>
  );
}

export default Dropzone;
