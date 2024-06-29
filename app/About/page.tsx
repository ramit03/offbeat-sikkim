import { Button } from "@/components/ui/button";
import { team } from "@/constants";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

function about() {
  return (
    <main className="px-4 md:px-6 bg-white max-w-screen-2xl mx-auto">
      <section className="py-[52px] flex flex-col gap-4">
        <h1 className="text-secondary-oncontainer headlines md:displays lg:displaym">Our Mission</h1>
        <p className="text-black bodym md:bodyl">
          Our mission is to help travelers find and explore the natural beauty
          of the most Offbeat locations of Sikkim, promote the rural tourism
          market and preserve their identity and heritage, and help the economic
          development of rural Sikkim.
        </p>
      </section>

      <section className="px-4 bg-[url('../public/images/vision.jpg')] bg-cover bg-center bg-no-repeat rounded-lg flex flex-col py-[76px] md:px-6 lg:py-24 xl:py-32   gap-4 md:gap-9 lg:gap-4">
        <h1 className="text-white headlines md:displays lg:displaym lg:pt-14">Our Vision</h1>
        <p className="bodym md:bodyl lg:pb-14 text-[#EDF2EB]">
          Our mission is to help travelers find and explore the natural beauty
          of the most Offbeat locations of Sikkim, promote the rural tourism
          market and preserve their identity and heritage, and help the economic
          development of rural Sikkim.
        </p>
      </section>

      <section className="py-[52px] md:py-[76px] md:px-6 flex flex-col gap-4 md:gap-9 lg:gap-4">
        <h1 className="headlines md:displays lg:displaym text-secondary-oncontainer">
          Our Values
        </h1>
        <ul className="list-disc list-outside space-y-4 bodym md:bodyl text-black pl-4">
          <li className="">
            We strive to be a reliable brand where everything the client asks
            can be answered throughout their travel experience. We strive to
            ensure that every travel experience we plan is prepared with
            foresight.
          </li>
          <li>
            We strive to infuse creativity into our day to day activities, and
            therefore to innovate solutions for our business and provide the
            best service for our clients.
          </li>
          <li>
            We strive to minimise the negative impacts on the planet in each and
            every part of our operations.
          </li>
          <li>
            We strive to create safe, seamless and sustainable travel
            experiences for our customers, while helping them get the most value
            for money.
          </li>
          <li>We strive to create smooth experiences for our customers.</li>
          <li>
            We strive to provide job opportunities to the rural population, and
            educate the community about ecotourism.
          </li>
        </ul>
      </section>
      <section className="py-[52px] flex flex-col gap-4">
        <h1 className="headlines md:displays lg:displaym text-secondary-oncontainer text-center">
          Our Team
        </h1>
        <div className="carousel carousel-center p-1 pl-12 md:pl-0 space-x-12 md:space-x-4 lg:hidden">
          {team.map((item) => (
            <div id={item.id} className="carousel-item w-fit h-[369px] bg-[#f5f5f5] rounded-[10px] text-center shadow-cardShadow flex flex-col px-6 pb-6 gap-3">
              <Image
                src={`/images/${item.image}.png`}
                width={244}
                height={287}
                alt={item.name}
              />
              <Stack direction={"column"} gap={1} width={244}>
                <h3 className="text-[#051e13] font-bold text-lg ">{item.name}</h3>
                <p className="text-[#051e13 text-[13px]">
                  {item.role}
                </p>
              </Stack>
            </div>
          ))}
        </div>

        <div className="hidden w-full lg:flex flex-row gap-4 xl:gap-8 items-center justify-center">
        {team.map((item) => (
            <div id={item.id} className="w-[292px] h-[369px] md:w-[240px] lg:w-[292px] bg-[#f5f5f5] rounded-[10px] text-center shadow-cardShadow flex flex-col px-6 pb-6 gap-3 md:gap-0 lg:gap-3">
              <div className="relative w-full h-[287px]">
              <Image
                src={`/images/${item.image}.png`}
                fill
                alt={item.name}
              />
              </div>      
              <Stack direction={"column"} gap={1} width={244}>
                <h3 className="text-[#051e13] font-bold text-lg ">{item.name}</h3>
                <p className="text-[#051e13 text-[13px]">
                  {item.role}
                </p>
              </Stack>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full gap-6 py-[60px] md:py-[88px]">
        <h2 className="headlines md:headlinem lg:headlinel text-secondary-oncontainer text-center">Have a Question?</h2>
        <p className="bodym md:titles text-[#202822] text-center">Reach out to us for your travel planning needs.</p>
        <Button className="w-fit">Contact Us</Button>
      </section>
    </main>
  );
}

export default about;
