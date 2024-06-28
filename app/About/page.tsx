import React from "react";

function about() {
  return (
    <main className="px-4 bg-white">
      <section className="py-[52px] flex flex-col gap-4">
        <h1 className="text-secondary-oncontainer headlines">Our Mission</h1>
        <p className="text-black bodym">
          Our mission is to help travelers find and explore the natural beauty
          of the most Offbeat locations of Sikkim, promote the rural tourism
          market and preserve their identity and heritage, and help the economic
          development of rural Sikkim.
        </p>
      </section>
      <section className="px-4 flex flex-col py-[76px] md:px-6 lg:py-24 gap-4 md:gap-9 lg:gap-4">
        <h1 className="text-white headlines">Our Vision</h1>
        <p className="bodym text-[#EDF2EB]">
          Our mission is to help travelers find and explore the natural beauty
          of the most Offbeat locations of Sikkim, promote the rural tourism
          market and preserve their identity and heritage, and help the economic
          development of rural Sikkim.
        </p>
      </section>
      <section className="py-[52px] md:py-[76px] md:px-6 flex flex-col gap-4 md:gap-9">
        <h1 className="headlines text-secondary-oncontainer">Our Values</h1>
        <ul className="list-disc list-inside space-y-4 body-m text-black">
          <li className="">
            We strive to be a reliable brand where everything the client asks
            can be answered throughout their travel experience. We strive to
            ensure that every travel experience we plan is prepared with
            foresight.
          </li>
          <li>
          We strive to infuse creativity into our day to day activities, and therefore to innovate solutions for our business and provide the best service for our clients.
          </li>
          <li>
          We strive to minimise the negative impacts on the planet in each and every part of our operations.
          </li>
          <li>
          We strive to create safe, seamless and sustainable travel experiences for our customers, while helping them get the most value for money.
          </li>
          <li>
          We strive to create smooth experiences for our customers.
          </li>
          <li>

We strive to provide job opportunities to the rural population, and educate the community about ecotourism.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default about;
