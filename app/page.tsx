import Cards from "@/components/Cards";
import Slider from "@/components/Slider";
import Custom_Form from "@/components/custom-itinerary/custom-itinerary-form";
import Testimonials from "@/components/pages/Testimonials/page";
import FeaturedArticles from "@/components/pages/featured-articles/page";
import HeroHome from "@/components/pages/hero-home/page";
import { Button } from "@/components/ui/button";
import { UpComingTours } from "@/constants";


export default function Home() {
  return (
    <main className="flex flex-col px-4 md:px-6 min-h-screen max-w-screen-2xl mx-auto w-full pl-4 md:pl-6">
    <HeroHome/>
    <section className="py-12 md:py-[76px] space-y-4 md:space-y-9">
      <h2 className="headlines md:displays lg:displaym text-secondary-oncontainer">Upcoming Tours</h2>
      <Slider items={UpComingTours}/>
      <Custom_Form/>
      <Testimonials/>
      <FeaturedArticles/>
      <section className="flex flex-col justify-center items-center w-full gap-6 py-[60px] md:py-[88px]">
        <h2 className="headlines md:headlinem lg:headlinel text-secondary-oncontainer text-center">Have a Question?</h2>
        <p className="bodym md:titles text-[#202822] text-center">Reach out to us for your travel planning needs.</p>
        <Button className="w-fit">Contact Us</Button>
      </section>
    </section>
    </main>
  );
}
