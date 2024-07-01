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
import React, { useRef } from "react";
import PackageContactForm from "@/components/package-contact/page";

function PackagePage() {
  const { link } = useParams();
  const contactRef = useRef<HTMLDivElement>(null);
  const decodedLink = decodeURIComponent(link as string);
  const packageData = packagesData.find(
    (packagedata) => packagedata.link === decodedLink
  );
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex flex-col px-4 md:px-6 max-w-screen-2xl mx-auto">
      {packageData && (
        <>
          <section
            className={`flex flex-col gap-6 px-4 py-9 md:px-14 md:py-24 md:gap-6 bg-[url('../public/images/hero.jpg')] rounded-xl bg-cover bg-center bg-no-repeat`}
          >
            <Stack direction={"column"} gap={1}>
              <h2 className="headlines md:displaym lg:displayl text-white">
                {packageData.title}
              </h2>
              <p className="bodys text-white">{packageData.desc}</p>
            </Stack>

            <Stack direction={"row"} gap={{ xs: 1, md: 3 }}>
              <Stack
                direction={"column"}
                gap={1}
                className="bg-primary-container rounded-xl px-3 py-2"
              >
                <p className="labels md:labell text-black">Starting Price</p>
                <p className="bodys md:bodyl text-black">
                  {packageData.currentPrice}
                </p>
              </Stack>
              <Stack
                direction={"column"}
                gap={1}
                className="bg-primary-container rounded-xl px-3 py-2"
              >
                <p className="labels md:labell text-black">Duration</p>
                <p className="bodys md:hidden text-black">
                  {packageData.durationn}N{packageData.durationd}D
                </p>
                <p className="hidden bodyl md:flex text-black">
                  {packageData.durationn} Nights {packageData.durationd} Days
                </p>
              </Stack>
            </Stack>
            <Button onClick={handleScrollToContact} className="w-fit px-9">
              Enquire Now
            </Button>
          </section>
          <section className="bg-[#E4EAE3] py-6 rounded-xl mt-6  md:my-[76px] px-6 flex flex-col gap-4">
            <h2 className="headlines text-[#171D19]">Your itinerary</h2>
            <p className="bodym text-[#404942]">
              Here&apos;s a detailed breakdown of what you can expect on each
              day of your trip
            </p>
            {packageData.detailedItinerary?.map((day, index) => (
              <Accordion
                key={index}
                defaultExpanded={index === 0}
                className="bg-transparent border-none shadow-none"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                >
                  <p className="bodyl text-[#171D19]">
                    {day.day}: {day.title}
                  </p>
                </AccordionSummary>
                <AccordionDetails className="bodyl text-[#171D19]">
                  <ul className="space-y-4 list-decimal pl-4">
                    {day.activities.map((activity, activityIndex) => (
                      <li key={activityIndex}>{activity}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </section>
          <section className="flex flex-col gap-5 py-12 md:py-[76px]">
            <h2 className="text-black headlines md:displaym">Guest Diaries</h2>
            Carousel
          </section>

          <section className=" flex flex-col  md:flex-row gap-12 md:gap-4">
            <div className="bg-[#E4EAE3] w-full rounded-xl p-6 flex flex-col gap-4">
              <h2 className="headlines text-[#171D19]">Inclusions</h2>
              {packageData.inclusions?.map((item, index) => (
                <Stack
                  id={`${index}`}
                  direction={"row"}
                  gap={2}
                  className="border border-b-2 border-b-[#C0C9C0] py-2"
                >
                  <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                  <p className="text-[#171D19] bodyl">{item}</p>
                </Stack>
              ))}
            </div>

            <div className="bg-[#E4EAE3] w-full rounded-xl p-6 flex flex-col gap-4">
              <h2 className="headlines text-[#171D19]">Exclusions</h2>
              {packageData.exclusions?.map((item, index) => (
                <Stack
                  id={`${index}`}
                  direction={"row"}
                  gap={2}
                  className="border border-b-2 border-b-[#C0C9C0] py-2"
                >
                  <ClearIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                  <p className="text-[#171D19] bodyl">{item}</p>
                </Stack>
              ))}
            </div>
          </section>

          <section className="my-12  flex flex-col md:flex-row gap-12 md:gap-4">
            <div className="bg-[#E4EAE3] rounded-xl h-full flex flex-col gap-4 p-6 md:w-1/2">
              <h2 className="headlines text-[#171D19]">Things to Carry</h2>
              <p className="bodym text-[#404942]">
                Essential Items to Pack: Please refer to the list below for
                recommendations on what to bring for your trip.
              </p>

              {packageData.thingsToCarryTrek?.map((item, index) => (
                <Stack key={`${index}`} direction={"column"} gap={1}>
                  <p className="text-[#171D19] bodyl">{item.title}</p>
                  <ul className=" text-[#171D19] space-y-2">
                    {item.list?.map((list, index) => (
                      <li key={index}>
                        <Stack
                          direction={"row"}
                          gap={2}
                          className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
                        >
                          <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                          <p className="text-[#171D19] bodym">{list}</p>
                        </Stack>
                      </li>
                    ))}
                  </ul>
                </Stack>
              ))}
              {packageData.thingsToCarry?.map((thing, index) => (
                <ul className=" text-[#171D19] space-y-4">
                  <li className="bodyl" key={index}>
                    {" "}
                    <Stack
                      direction={"row"}
                      gap={2}
                      className="border border-b-2 items-start border-b-[#C0C9C0] py-2"
                    >
                      <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                      <p className="text-[#171D19]">{thing}</p>
                    </Stack>
                  </li>
                </ul>
              ))}
            </div>

            <div className=" bg-[#E4EAE3] w-full rounded-xl flex flex-col gap-4 p-6 md:w-1/2">
              <h2 className="headlines text-[#171D19]">
                Booking and Confirmation Process
              </h2>
              {packageData.bookingProcess?.map((booking, index) => (
                <ul className=" text-[#171D19] space-y-4">
                  <li key={index} className="bodyl">
                    {" "}
                    <Stack
                      direction={"row"}
                      gap={2}
                      className="border border-b-2 items-start border-b-[#C0C9C0] py-2"
                    >
                      <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                      <p className="text-[#171D19]">{booking}</p>
                    </Stack>
                  </li>
                </ul>
              ))}
            </div>
          </section>

          <section className="my-12  flex flex-col md:flex-row gap-12 md:gap-4">
            {packageData.mandatoryDocuments && (
              <div className="bg-[#E4EAE3] rounded-xl h-full flex flex-col gap-4 p-6 md:w-1/2">
                <h2 className="headlines text-[#171D19]">Mandatory Documents</h2>
                {packageData.mandatoryDocuments.map((item, index) => (
                  <Stack key={`${index}`} direction={"column"} gap={1}>
                    <p className="text-[#171D19] bodyl">{item.title}</p>
                    <ul className=" text-[#171D19] space-y-2">
                      {item.desc?.map((list, index) => (
                        <li key={index}>
                          <Stack
                            direction={"row"}
                            gap={2}
                            className="border border-b-2 items-center border-b-[#C0C9C0] py-2"
                          >
                            <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                            <p className="text-[#171D19] bodym">{list}</p>
                          </Stack>
                        </li>
                      ))}
                    </ul>
                  </Stack>
                ))}
              </div>
            )}
            {packageData.knowBeforeYouGo && (
              <div className=" bg-[#E4EAE3] w-full rounded-xl flex flex-col gap-4 p-6 md:w-1/2">
                <h2 className="headlines text-[#171D19]">
                  Know Before You Go
                </h2>
                {packageData.knowBeforeYouGo.map((booking, index) => (
                  <ul className=" text-[#171D19] space-y-4">
                    <li key={index} className="bodyl">
                      {" "}
                      <Stack
                        direction={"row"}
                        gap={2}
                        className="border border-b-2 items-start border-b-[#C0C9C0] py-2"
                      >
                        <CheckIcon className="text-[#002111] bg-primary-container rounded-full p-1" />
                        <p className="text-[#171D19]">{booking}</p>
                      </Stack>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </section>
          {/* Related package slider */}
          <section
            id="contact"
            ref={contactRef}
            className="flex flex-col gap-2 py-12 md:py-[76px]"
          >
            <h2 className="text-primary headlines text-center">
              Enquire about the North Sikkim Tour Package
            </h2>
            <p className="bodys text-[#575F6E] text-center">
              Fill in the details below to start planning your trip
            </p>
            <PackageContactForm />
          </section>
        </>
      )}
    </main>
  );
}

export default PackagePage;
