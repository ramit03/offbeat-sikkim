import Image from "next/image";
import Link from "next/link";
import React from "react";

const Credibility = () => {
  return (
    <div className="px-4 md:px-6 py-16 md:py-24 flex flex-col gap-10 bg-[#f1fdf8]">
      {/* --- AFFILIATED WITH --- */}
      <h2 className="headlines md:headlinem lg:headlinel text-secondary-oncontainer text-center">
        We are affiliated with
      </h2>

  <div className="flex flex-wrap justify-center gap-12 md:gap-8 lg:gap-14 xl:gap-20 items-start  p-6 rounded-md">
        <Link href="https://msme.gov.in/" target="_blank">
          <div className="flex flex-col gap-3 md:gap-0 items-center text-center">
            <Image src="/icons/msme.png" alt="MSME" width={200} height={200} />
            <div className="h-16 flex flex-col justify-center">
              <p className="labels md:labell">
                Ministry of Micro, Small & Medium
              </p>
              <p className="labels md:labell">Enterprises</p>
            </div>
          </div>
        </Link>

        <Link href="https://sikkimtourism.gov.in/Public/index" target="_blank">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/icons/sikkimtourismlogo.png"
              alt="Sikkim Tourism"
              width={200}
              height={200}
              className="shadow-sm"
            />
            <div className="h-16 flex flex-col justify-center">
              <p className="labels md:labell">Tourism Department,</p>
              <p className="labels md:labell">Govt. Of Sikkim</p>
            </div>
          </div>
        </Link>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/icons/taas.png"
            alt="Travel Agents Association of Sikkim"
            width={150}
            height={150}
            className="object-cover shadow-sm"
          />
          <div className="h-16 flex flex-col justify-center">
            <p className="labels md:labell">
              Travel Agents&apos; Association of Sikkim
            </p>
          </div>
        </div>
      </div>

      {/* --- TRUSTED BY --- */}
      <h2 className="headlines md:headlinem lg:headlinel text-secondary-oncontainer text-center">
        Trusted By
      </h2>

      <Link className="w-fit mx-auto" href="https://ntpc.co.in/" target="_blank">
        <div className="flex flex-col items-center text-center">
          <Image src="/icons/ntpc.png" alt="NTPC" width={200} height={200} className="shadow-sm" />
          <div className="h-16 flex flex-col justify-center">
            <p className="labels md:labell">NTPC PVT LTD.</p>
          </div>
        </div>
      </Link>

      {/* --- FEATURED ON --- */}
      <h2 className="headlines md:headlinem lg:headlinel text-secondary-oncontainer text-center">
        Featured On
      </h2>
  <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 p-6 rounded-md">
        <Link
          href="https://www.kayak.com.au/Gangtok.31232.guide"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="flex flex-col items-center text-center">
              <Image
                src="/images/kayak.webp"
                alt="Kayak"
                width={400}
                height={400}
                className="object-contain h-40 sm:h-32 md:h-40 w-auto shadow-sm"
                priority
              />
            <div className="h-12 flex items-center justify-center">
              <p className="labels md:labell">Kayak</p>
            </div>
          </div>
        </Link>
      </div>

      {/* --- RECOGNITION --- */}
      <h2 className="headlines md:headlinem lg:headlinel text-secondary-oncontainer text-center">
        Recognition
      </h2>

      <div className="flex flex-wrap justify-center gap-8 items-center">
        <div className="flex flex-col items-center text-center">
          <Link
            target="_blank"
            href={
              "https://www.tripadvisor.in/Attraction_Review-g659796-d26790117-Reviews-Offbeatsikkim-Gangtok_East_Sikkim_Sikkim.html"
            }
          >
          <Image src="/images/travelers choice award offbeat sikkim.webp" className="rounded-lg shadow-sm" alt="Winner 1" width={200} height={200} />
          <div className="h-12 flex items-center justify-center">
            <p className="labels md:labell">Winner</p>
          </div>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center">
          <Link
            target="_blank"
            href={
              "https://www.instagram.com/p/DPtQ7BIEkZi/"
            }
          >
          <Image src="/images/netourism awards.png"  className="rounded-lg shadow-sm" alt="Winner 2" width={200} height={200} />
          <div className="h-12 flex items-center justify-center">
            <p className="labels md:labell">Winner</p>
          </div>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center">
          <Link
            target="_blank"
            href={
              "https://www.instagram.com/p/DPjthkeEp_T/"
            }
          >
          <Image src="/images/bestoffbeatnominee.png" className="rounded-lg shadow-sm" alt="Nominee" width={240} height={240} />
          <div className="h-12 flex items-center justify-center">
            <p className="labels md:labell">Nominee</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Credibility;
