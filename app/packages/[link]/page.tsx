"use client";
import { Button } from "@/components/ui/button";
import { packagesData } from "@/constants";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

function PackagePage() {
  const { link } = useParams();
  const packageData = packagesData.find(
    (packagedata) => packagedata.link === link
  );
  return (
    <main className="flex flex-col px-4 md:px-6 max-w-screen-2xl mx-auto">
      <section
        className={`flex flex-col gap-6 px-4 py-9 md:px-14 md:py-24 md:gap-6 bg-[url('../public/images/hero.jpg')] rounded-xl bg-cover bg-center bg-no-repeat`}
      >
        <Stack direction={"column"} gap={1}>
          <h2 className="headlines md:displaym lg:displayl text-white">
            North Sikkim Tour
          </h2>
          <p className="bodys text-white">
            When you think of Sikkim, you can definitely relate snow with its
            name. Our North Sikkim Tour package will let you have an
            enlightening experience with nature, snow and the amazing landscapes
            that come with it.
          </p>
        </Stack>

        <Stack direction={"row"} gap={{ xs: 1, md: 3 }}>
          <Stack
            direction={"column"}
            gap={1}
            className="bg-primary-container rounded-xl px-3 py-2"
          >
            <p className="labels md:labell text-black">Starting Price</p>
            <p className="bodys md:bodyl text-black">₹9999/-</p>
          </Stack>
          <Stack
            direction={"column"}
            gap={1}
            className="bg-primary-container rounded-xl px-3 py-2"
          >
            <p className="labels md:labell text-black">Duration</p>
            <p className="bodys md:hidden text-black">4N5D</p>
            <p className="hidden bodyl md:flex text-black">4 Nights 5 Days</p>
          </Stack>
        </Stack>
        <Button className="w-fit px-9">Enquire Now</Button>
      </section>

      <section className="bg-[#E4EAE3] py-6 rounded-xl mt-6  md:my-[76px] px-6 flex flex-col gap-4">
        <h2 className="headlines text-[#171D19]">Your itinerary</h2>
        <p className="bodym text-[#404942]">
          Here’s a detailed breakdown of what you can expect on each day of your
          trip
        </p>
        <Accordion
          defaultExpanded
          className="bg-transparent border-none shadow-none"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="bodyl text-[#171D19]">Day1</p>
          </AccordionSummary>
          <AccordionDetails className="bodyl text-[#171D19]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-transparent border-none shadow-none">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <p className="bodyl text-[#171D19]">Day1</p>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </section>
      <section className="flex flex-col gap-5 py-12 md:py-[76px]">
        <h2 className="text-black headlines md:displaym">Guest Diaries</h2>
        Carousel
      </section>
      <section className=" flex flex-col md:flex-row gap-12 md:gap-4">
        <div className="bg-[#E4EAE3] w-full rounded-xl p-6 flex flex-col gap-4">
          <h2 className="headlines text-[#171D19]">Inclusions</h2>
          <Stack
            direction={"row"}
            gap={2}
            className="border border-b-2 border-b-[#C0C9C0] py-2"
          >
            <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
            <p className="text-[#171D19] bodyl">List Item</p>
          </Stack>
          <Stack
            direction={"row"}
            gap={2}
            className="border border-b-2 border-b-[#C0C9C0] py-2"
          >
            <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
            <p className="text-[#171D19] bodyl">List Item</p>
          </Stack>
        </div>

        <div className="bg-[#E4EAE3] w-full rounded-xl p-6 flex flex-col gap-4">
          <h2 className="headlines text-[#171D19]">Exclusions</h2>
          <Stack
            direction={"row"}
            gap={2}
            className="border border-b-2 border-b-[#C0C9C0] py-2"
          >
            <ClearIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
            <p className="text-[#171D19] bodyl">List Item</p>
          </Stack>
          <Stack
            direction={"row"}
            gap={2}
            className="border border-b-2 border-b-[#C0C9C0] py-2"
          >
            <ClearIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
            <p className="text-[#171D19] bodyl">List Item</p>
          </Stack>
        </div>
      </section>
      <section className="my-12 bg-[#E4EAE3] rounded-xl flex flex-col gap-4 p-6 md:w-fit">
        <h2 className="headlines text-[#171D19]">Things to Carry</h2>
        <p className="bodym text-[#404942]">
          Essential Items to Pack: Please refer to the list below for
          recommendations on what to bring for your trip.
        </p>
        <Stack direction={"column"} gap={1}>
          <p className="text-[#171D19] bodyl">List Item</p>
          <ul className=" text-[#171D19] space-y-2">
            <li>
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19] bodym">List Item</p>
              </Stack>
            </li>
            <li>
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19] bodym">List Item</p>
              </Stack>
            </li>
            <li>
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19] bodym">List Item</p>
              </Stack>
            </li>
          </ul>
          <ul className=" text-[#171D19] space-y-4">
            <li className="bodyl">
              {" "}
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19]">List Item</p>
              </Stack>
            </li>
            <li className="bodyl">
              {" "}
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19]">List Item</p>
              </Stack>
            </li>
            <li className="bodyl">
              {" "}
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19]">List Item</p>
              </Stack>
            </li>
          </ul>
        </Stack>
      </section>

      <section className="my-12 bg-[#E4EAE3] rounded-xl flex flex-col gap-4 p-6 md:w-fit">
        <h2 className="headlines text-[#171D19]">Booking and Confirmation Process</h2>
          <ul className=" text-[#171D19] space-y-4">
            <li className="bodyl">
              {" "}
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19]">List Item</p>
              </Stack>
            </li>
            <li className="bodyl">
              {" "}
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19]">List Item</p>
              </Stack>
            </li>
            <li className="bodyl">
              {" "}
              <Stack
                direction={"row"}
                gap={2}
                className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
              >
                <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                <p className="text-[#171D19]">List Item</p>
              </Stack>
            </li>
          </ul>
      </section>

      {/* Related package slider */}
      
    </main>
  );
}

export default PackagePage;
