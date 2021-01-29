import Dropzone from "@/components/Dropzone";
import Layout from "@/components/layout/Layout";
import {createFFmpeg, fetchFile} from "@ffmpeg/ffmpeg";

import path from "path";
import React, {useEffect, useState} from "react";
import {isMobile} from "react-device-detect";
import {FileWithPath} from "react-dropzone";

const ffmpeg = createFFmpeg({log: false});

type AudioFile = {
    name: string;
    size: string;
    blobUrl: string;
};

function Index() {
    const [ready, setReady] = useState(false);
    const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
    const [converting, setConverting] = useState(false);

    const load = async () => {
        await ffmpeg.load();
        setReady(true);
    };

    useEffect(() => {
        if (isMobile) {
            setReady(true);
            return;
        } else {
            load().catch((er) => console.log(er));
        }
    }, []);

    const convertToMp3 = async (video: FileWithPath) => {
        const ext = path.extname(video.name);
        // Write the file to memory
        ffmpeg.FS("writeFile", `input${ext}`, await fetchFile(video));
        // Run the FFmpeg command
        setConverting(true);
        await ffmpeg.run("-i", `input${ext}`, "-vn", "-acodec", "copy", "out.aac");
        // await ffmpeg.run("-i", `input${ext}`, "-q:a", "0", "-map", "a", "out.mp3");
        const data = ffmpeg.FS("readFile", "out.aac");

        const name = video.name.replace(/\.[^/.]+$/, "");
        const size = (data.length / 1024 / 1024).toFixed(1) + "MB";

        const blobUrl = URL.createObjectURL(
            new Blob([data.buffer], {type: "audio/mpeg"})
        );

        setConverting(false);
        setAudioFiles([...audioFiles, {blobUrl, name, size}]);
    };
    return (
        <Layout>
            <Dropzone
                convertToMp3={convertToMp3}
                ready={ready}
                converting={converting}
            />

            <button
                className="w-full my-4 py-2 bg-gray-50 transition ease-in dark:bg-gray-900 dark:hover:border-gray-400"
                onClick={() => {
                    if (audioFiles.length !== 0) setAudioFiles([]);
                }}
            >
                {converting
                    ? "Converting..."
                    : audioFiles.length !== 0
                        ? "Clear"
                        : "Output"}
            </button>
            {audioFiles &&
            audioFiles?.map((a, i) => {
                return (
                    <div key={i} className="bg-white shadow dark:bg-black ">
                        <a href={a.blobUrl} download={a.name}
                           className="flex text-md justify-between px-4 font-medium py-2 text-left transition border border-gray-200 dark:border-gray-600 dark:hover:border-gray-400 hover:border-gray-400  cursor-pointer">
                            <span>
                                {a.name.length > 20
                                    ? a.name.substring(0, 20) + "..."
                                    : a.name}
                            </span>
                            <span> {a.size}</span>
                        </a>
                        <audio
                            controls
                            style={{
                                height: "1.5rem",
                                width: "100%",
                            }}
                        >
                            <source src={a.blobUrl} type="audio/mpeg"/>
                        </audio>
                    </div>
                );
            })}
        </Layout>
    );
}

export default Index;
