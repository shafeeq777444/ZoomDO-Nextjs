"use client";

import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { tokenProvider } from "@/actions/stream.actions";

import React, { ReactNode, useEffect, useState } from "react";
import Loader from "@/components/Loader";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  
    const { user, isLoaded } = useUser(); //isLoaded=true when data loading completing (when loading time isLoading=false)
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();

    useEffect(() => {
        if (!isLoaded || !user) return;
        if (!STREAM_API_KEY) throw new Error("APi key is not provided");

        // create instance connect to streamVideo Api-------------------------------
        const videoClient = new StreamVideoClient({
            apiKey: STREAM_API_KEY,
            user: { id: user?.id, name: user?.username || user?.id, image: user?.imageUrl },
            tokenProvider, //not static token .its dynamic token genrating
        });
        // -------------------------------------------------------------------------

        setVideoClient(videoClient);

    }, [user, isLoaded]);

    if (!videoClient) return <Loader />;
    return <StreamVideo client={videoClient}>{children} </StreamVideo>;
};

export default StreamVideoProvider;
