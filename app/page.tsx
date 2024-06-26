import Cards from "@/components/Cards";
import Slider from "@/components/Slider";
import Custom_Form from "@/components/custom-itinerary/custom-itinerary-form";
import HeroHome from "@/components/pages/hero-home/page";
import { UpComingTours } from "@/constants";


export default function Home() {
  return (
    <main className="flex flex-col px-4 md:px-6 min-h-screen max-w-screen-2xl mx-auto w-full pl-4 md:pl-6">
    <HeroHome/>
    <section className="py-12 md:py-[76px] space-y-4 md:space-y-9">
      <h2 className="headlines md:displays lg:displaym text-secondary-oncontainer">Upcoming Tours</h2>
      <Slider items={UpComingTours}/>
      <Custom_Form/>
    </section>
    </main>
  );
}
