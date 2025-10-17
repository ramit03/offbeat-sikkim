"use client"; // ✅ Must be a Client Component

import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import { Typewriter } from "react-simple-typewriter";

export default function HeroHome({
  videoUrls,
}: {
  videoUrls: { videoDesktopUrl: string; videoMobileUrl: string };
}) {
  const text = "Where to next?";

  const [videoSrc, setVideoSrc] = useState(videoUrls.videoDesktopUrl); // Default to desktop

  // Function to detect and set correct video source
  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth <= 767) {
        setVideoSrc(videoUrls.videoMobileUrl); // Mobile video
      } else {
        setVideoSrc(videoUrls.videoDesktopUrl); // Desktop video
      }
    };

    updateVideoSource(); // Run on mount

    // Listen for screen size changes
    window.addEventListener("resize", updateVideoSource);
    return () => window.removeEventListener("resize", updateVideoSource);
  }, [videoUrls]);

  return (
    <div className="relative h-[95vh] md:h-screen w-full rounded-lg flex items-center  justify-center px-4 md:px-14 flex-col gap-4 md:gap-6">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 w-full z-0">
          <div className="absolute inset-0 bg-black/20 z-20 " />
          <video
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            key={videoSrc} // Force reloading video when source changes
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Motion Animated Text */}
      <Stack className="z-10 pb-8 md:pb-12" direction={"column"} gap={1}>
        <h1 className="displays md:displayl text-white text-center">
          <span className="text-primary">Travel </span>
          <span>
            <Typewriter
              words={[
                "is human",
                "is eco-friendly",
                "connects people",
                "is therapy",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
      </Stack>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="z-10 absolute left-4 right-4 bottom-4 md:left-8 md:bottom-8 text-center"
      >
        <Stack className="flex flex-wrap gap-2 md:gap-4 items-center justify-center" direction={"row"} gap={{ xs: 2, sm: 6 }}>
          <Link target="_blank" href={"https://www.instagram.com/p/DPtQ7BIEkZi/"}>
            <Stack direction={"column"} gap={1} className="w-24 md:w-48 items-center">
              <div className="w-full overflow-hidden rounded-lg">
                <Image src={"/images/netourism awards.png"} width={150} height={90} alt="Netourism" className="block w-24 md:w-[240px] h-auto object-contain opacity-85 shadow-sm" />
              </div>
            </Stack>
          </Link>

          <Link target="_blank" href={"https://www.tripadvisor.in/Attraction_Review-g659796-d26790117-Reviews-Offbeatsikkim-Gangtok_East_Sikkim_Sikkim.html"}>
            <Stack direction={"column"} gap={1} className="w-24 md:w-48 items-center">
              <div className="relative w-full overflow-hidden rounded-lg">
                <Image src={"/images/travelers choice award offbeat sikkim.webp"} width={150} height={105} alt="Tripadvisor" className="block w-24 md:w-[240px] h-auto object-contain opacity-85 shadow-sm" />
              </div>
            </Stack>
          </Link>

          <Link target="_blank" href={"https://www.instagram.com/p/DPjthkeEp_T/"}>
            <Stack direction={"column"} gap={1} className="w-24 md:w-56 items-center">
              <div className="relative w-full overflow-visible">
                <Image src={"/images/bestoffbeatnominee.png"} width={240} height={240} alt="Nominee" className="block w-24 md:w-[300px] h-auto object-contain rounded-lg opacity-85 shadow-sm" />
              </div>
            </Stack>
          </Link>
        </Stack>
        
      </motion.div>

      {/* Rotating logo removed */}
    </div>
  );
}