"use client"
import { useEffect } from "react";
import { initStoryblokBridge} from "./StoryblokBridge"

export default function StoryblokProvider({children}){
    useEffect(()=>{
        initStoryblokBridge();
    }, []);

    return <>{children}</>
}