import { TestimonialCard, TripDetail } from "@/lib/types";
export const navlinks = [
  {
    id: "1",
    name: "Packages",
    link: "/packages",
  },
  {
    id: "2",
    name: "Blog",
    link: "/blog",
  },
  {
    id: "3",
    name: "About Us",
    link: "/About",
  },
  {
    id: "4",
    name: "Contact",
    link: "/Contact",
  },
];

export const team = [
  {
    id:'1',
    image:'team1',
    name:'Rajen Rai',
    role:'Co-Founder/Marketing Head',
  },
  {
    id:'2',
    image:'team2',
    name:'Topden Gurung',
    role:'Co-Founder/Operations Head',
  },
  {
    id:'3',
    image:'team3',
    name:'Prabesh Subba',
    role:'Co-Founder/Accounts Head'
  }
]

export const placesAndDestinations: { [key: string]: string[] } = {
  Sikkim: ["Gangtok", "Pelling", "Yuksom", "Lachen", "Ravangla"],
  Darjeeling: [
    "Tiger Hill",
    "Batasia Loop",
    "Darjeeling Mall",
    "Ghoom Monastery",
    "Padmaja Naidu Himalayan Zoological Park",
  ],
  "Arunachal Pradesh": [
    "Aalo",
    "Bomdila",
    "Dirang",
    "Eaglenest",
    "Itanagar",
    "Menchukha",
    "Namsai",
    "Pasighat",
    "Roing",
    "Tawang",
    "Tuting",
    "Walong",
    "Ziro",
  ],
  Nagaland: [
    "Benreu",
    "Chizami",
    "Dimapur",
    "Doyang",
    "Khezhakeno Village",
    "Khonoma",
    "Kohima",
    "Mokokchung",
    "Mon",
    "Pfütsero",
    "Shilloi",
    "Tseminyu",
  ],
  Meghalaya: ["Shillong", "Cherrapunji", "Mawlynnong", "Tura", "Jowai"],
};

export const UpcomingTours: TripDetail[] = [
  {
    id: "1",
    image: "images/north-sikkim",
    title: "North Sikkim + Nathula Pass",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "5",
    durationd: "6",
    originalPrice: "",
    currentPrice: "₹22,499/-",
    link: "upcoming-north-sikkim-tour-nathula-pass",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Siliguri you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Full day Tsogmo Lake, Baba Mandir and Nathula pass excursion with Tambi View Point",
        activities: [
          "After breakfast, we will embark on a full-day excursion exploring the beautiful surroundings of Gangtok.",
          "Our first stop will be the glacial Tsomgo Lake, also known as Changu Lake. This stunning lake is renowned for its scenic beauty and ever-changing colors.",
          "Next, we will drive to the Baba Mandir, a shrine dedicated to Baba Harbhajan Singh, a revered soldier of the Indian Army.",
          "We will then visit Nathula Pass, an Indo-China border post (Note: Nathula Pass is closed on Mondays and Tuesdays).",
          "After an eventful day, we will return to Gangtok for an overnight stay at your hotel.",
          "Note: Nathu La Pass can be added at an extra cost of INR 4000/- per vehicle",
        ],
      },
      {
        day: "Day 3",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
        ],
      },
      {
        day: "Day 5",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Departure from Gangtok to Bagdogra Airport / NJP railway station",
        activities: [
          "After breakfast, check out from your hotel in Gangtok.",
          "You will be driven to Siliguri for your onward journey.",
          "Reflect on the wonderful memories of your trip as you travel back, ensuring a comfortable and timely arrival at your destination.",
        ],
      },
    ],
    inclusions: [
      "Entire travel as per the itinerary in a private vehicle (Siliguri to Siliguri)",
      "5 Nights accommodation (3 nights stay in Gangtok, 2 nights stay in Lachung) on double/triple sharing",
      "Note: Single occupancy accommodation is available for an additional cost of 2500/-",
      "A total of 10 meals (Dinner on Day 1, Breakfast and Dinner on Day 2, Breakfast and Dinner on Day 3, Breakfast and Dinner on Day 4, Breakfast and Dinner on Day 5 and Breakfast on Day 6)",
      "All inner line permits if anything applicable",
      "Driver Allowances and fuel",
      "Parking",
      "Permit for Tsomgo Lake, Baba Mandir and Nathula pass",
      "Extra cost for Nathula pass and Zero point included",
    ],
    exclusions: [
      "GST (5%) is applicable extra",
      "Any kind of food and beverages that is not included in the package like alcohol drinks, mineral water, meals/refreshment/lunches on the highway",
      "Any personal expense like tip to the drivers, entry to the monuments, monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any cost arising due to natural calamities like landslides, roadblocks, route diversion etc. (to be borne by the customer on the spot)",
      "Anything not mentioned in the inclusion",
      "Air fares/Train Tickets",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card / Passport / Driving licence)",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses",
      "Personal Medicines (if any)",
    ],
  },
  {
    id: "2",
    image: "test",
    title: "Sandakphu Trek",
    desc: 'The Sandakphu-Phalut Trek in the eastern Himalayas is a mesmerizing journey through the Singalila National Park, offering breathtaking views of the Everest cluster and the iconic "Sleeping Buddha." Renowned for its spectacular sunrises and sunsets, the trek takes you through dense bamboo and rhododendron forests, providing a chance to spot rare Himalayan wildlife. The cultural diversity, crossing between India and Nepal, adds a unique touch with warm hospitality and a prevailing Buddhist influence. Culinary delights include a fusion of Nepali and Tibetan cuisine, making the trek a sensory experience. Beyond the physical adventure, the trek holds a spiritual journey towards the Sleeping Buddha, leaving participants with indelible memories and a profound connection to the Himalayas.',
    durationn: "5",
    durationd: "6",
    costDouble: "13,999/-",
    constTriple: "14,999/-",
    link: "upcoming-sandakhpu-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title: " Drive from Siiliguri to okhrey | 128km (7500ft)/ 7 hours",
        activities: [
          "Start the journey from Siliguri to Okhrey, a scenic drive taking 6 to 7 hours.",
          "Traverse through the picturesque Himalayan foothills, enjoying changing landscapes.",
          "Arrive in Okhrey by late afternoon, a charming village nestled in the hills.",
          "Opt for an overnight stay in Okhrey for acclimatization to the altitude.",
          "Immerse yourself in the tranquil ambiance and prepare for the adventures ahead.",
        ],
      },
      {
        day: "Day 2",
        title: " 2: Okhrey to Ghorkhey | 10km (7700ft)/ 3 hours",
        activities: [
          "Begin the trek in the afternoon, soaking in the beauty of the natural surroundings.",
          "Traverse through forests, observing the local flora and fauna along the way.",
          "Enjoy occasional views of the hills as you ascend and descend through the trail.",
          "Reach Ghorkhey , a picturesque village surrounded by nature.",
          "Check into a local homestay or guesthouse for an authentic experience.",
          "Explore Ghorkhey in the remaining daylight, appreciating its unique charm.",
          "Rest and relax, immersing yourself in the serene atmosphere of Ghorkhey overnight.",
        ],
      },
      {
        day: "Day 3",
        title: "Trek from Ghorkey to Phalut | 15km (11,800ft)/ 6-7 hours",
        activities: [
          "Begin a challenging 15 km uphill trek to Phalut, taking approximately 5 to 6 hours through dense jungle terrain.",
          "Break for lunch at Alu Bari camp to refuel.",
          "Check in at your hotel or homestay in Phalut in the late afternoon for some rest.",
          "Later, embark on a short hike to witness a breathtaking sunset and enjoy stunning mountain views.",
          "Reflect on the day's challenges and relish the tranquility of Phalut's mountainous surroundings.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek from Phalut to Sandakphu | 21km (11,900ft)/9-10 hours",
        activities: [
          "Depart from Phalut for Sandakphu, continuing the trek with a scenic journey.",
          "Navigate the trail, capturing picturesque landscapes and diverse terrain along the way.",
          "Experience a mix of gradual descents and ascents, showcasing the beauty of the Singalila Range.",
          "Reach Sandakphu, the highest peak in West Bengal, and marvel at the panoramic views of the Himalayas.",
          "Check in at your accommodation, appreciating the unique charm of Sandakphu.",
          "Spend the evening exploring the surroundings or simply relaxing, preparing for the next leg of your trek.",
        ],
      },
      {
        day: "Day 5",
        title: "Trek from Sandakphu to Gurdum | 10km (11,900ft)/9-10hrs",
        activities: [
          "Begin your descent from the high-altitude terrain of Sandakphu, enjoying panoramic views along the way.",
          "Traverse diverse landscapes, including rhododendron forests and meadows, as you make your way to Gurdum.",
          "Experience the changing scenery and appreciate the unique flora and fauna of the region.",
          "Arrive at Gurdum and check in at your accommodation, relishing a sense of accomplishment.",
          "Spend the evening in Gurdum, unwinding and perhaps sharing trekking stories with fellow trekkers.",
          "Reflect on the day's journey, enjoying the serene atmosphere of Gurdum as you prepare for the next day's adventure.",
        ],
      },
      {
        day: "Day 6",
        title: "Gurdum to Siliguri | 85Km (7500ft)/3.5-5hrs",
        activities: [
          "Conclude your trek by hiking a last 45-minute to 1-hour stretch to Shrikhokla and take a cab from Shrikhokla to Siliguri, offering a comfortable and convenient journey.",
          "Enjoy a scenic drive, descending from the trek's endpoint in Gurdum.",
          "Relax during the cab ride, reflecting on the remarkable experiences and landscapes encountered during the trek.",
          "Upon reaching Siliguri, your trek concludes, marking the end of your adventurous journey.",
        ],
      },
    ],
    inclusions: [
      "Transportation - Xylo / Sumo Gola / Beloro or similar",
      "Siliguri to Okhrey (128km / 5-6hrs Approx)",
      "Okhrey to Patharey (7km / 40 Mins Approx)",
      "Gurdum to Siliguri (85km / 3-4hrs Approx)",
      "Accommodation - Homestay / Trekkers hut",
      "5 nights Accommodation - (Okhrey - 1 night, Ghorkhey - 1 night, Phalut - 1 night, Sandhakphu - 1 night, Gurdum - 1 night)",
      "Total 14 Meals (Dinner on Day 1, All meals on Day 2, All meals on Day 3, All meals on Day 4, All meals on Day 5 and breakfast on Day 6)",
      "Qualified and experienced trek leader and support staff",
      "Singalila National Park permit for 5 days for Indian and Nepali trekkers",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip.",
    ],
    thingsToCarryTrek: [
      {
        title: "Footwear and Bag:",
        list: ["Trekking shoes with ankle support", "Backpack with rain cover"],
      },
      {
        title: "Warm layers and clothes (Varies by Season)",
        list: [
          "Spring, Summer, Monsoon (3 Layers): Woollen sweater, fleece, padded jacket",
          "Autumn (4 Layers): Woollen sweater, 2 fleece, padded jacket",
          "Winter (5 Layers): Thermals, woollen sweater, 2 fleece, padded jacket",
          "3 Collared T-shirts, 2 quick-dry trek pants",
        ],
      },
      {
        title: "Accessories:",
        list: [
          "Sunglasses",
          "Sun cap with flaps",
          "Waterproof gloves",
          "Balaclava",
          "Woollen socks (2 Dry fit + 1 Woollen)",
          "Headlamp",
          "Trekking pole",
          "Rain jacket + pants / poncho",
        ],
      },
      {
        title: "Toiletries:",
        list: [
          "Sunscreen",
          "Moisturizer",
          "Light towel",
          "Lip balm",
          "Toilet paper (No wet wipes)",
          "Toothbrush",
          "Toothpaste",
          "Reusable plastic covers for used clothes",
        ],
      },
      {
        title: "Cutlery:",
        list: [
          "Steel lunch box",
          "Spoon",
          "Mug",
          "Two water bottles or Hydration Pack",
        ],
      },
    ],
  },
  {
    id: "3",
    image: "images/hero",
    title: "Goechala Trek",
    desc: "GoechaLa trek is nestled at a height of 16,207ft, with a closer look at the third-highest peak-Mt. Kanchenjunga. It is a dream and desire for hundreds of adventure lovers. Bounded by the mesmerizing flora and fauna, which are so vibrant and colourful to cheer up one's mood. The GoechaLa pass trek is a bundle of big summits, making it an absolute adventure to embark on. The trail link with the famous Kanchenjunga National Park, where one can witness the true nature, enough to revitalize your senses. To watch the mountains clearly, April and May are the ideal months. Since the sky is completely clear during this time and the sunset-sunrise views can be captured.",
    durationn: "9",
    durationd: "10",
    costDouble: "24,499/-",
    link: "upcoming-goechala-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          " Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        activities: [
          "Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        ],
      },
      {
        day: "Day 2",
        title:
          " Trek from Yuksom to Sachen | Trekking Distance: 8 km | Duration: 5-6 hours | Elevation: 7,150 ft.",
        activities: [
          "Wake up to the sounds of roosters and chirping birds. Gear up your shoes to embark on a trek to Sachen, and walk along the Rathong River while passing through the lush forests witnessing diverse plant life like rhododendrons and ferns. Next, cross the Paha Khola Bridge soaking in the wilderness and serenity around you. This journey promises adventure at every step, leaving you with memories to cherish forever. Upon arrival, relax in your camps for an overnight stay in the realm of nature.",
          "Begin your trek from Yuksom to Sachen, following the trail along the Rathong River.",
          "On the way, admire the beauty of various plant species like rhododendrons, ferns, etc.",
          "Proceed towards the Paha Khola Bridge, enjoying the scenic beauty of dense forest along the way.",
          "Upon reaching Sachen, settle down at the campsite, concluding your journey.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Trek from Sachen to Tshokha| Trekking Distance: 7 km | Duration: 4-5 hours | Elevation: 9.701 ft.",
        activities: [
          "Before you begin your uphill trek to Tshokha, make sure to fuel up and hydrate well. This trail offers the adventure, as you ascend through the majestic Prek Chu River soaking in the scenery of beautiful magnolias and rhododendrons. Keep climbing amidst the wonders of nature until you reach Tshoka, a Tibetan settlement situated in the mountains. Upon arrival, settle into your campsite and later, head out to interact with the locals for a cultural experience before calling it a night.",
          "Begin your uphill trek from Sachen to Tshoka, enjoying viburnum plants on the way.",
          "Cross the Prek Chu River and hike uphill to reach Bakhim.",
          "Continue trekking upwards until you arrive at Tshoka, a Tibetan refugee settlement.",
          "Explore the area and interact with the locals, enjoying your overnight stay at Tshoka.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Trek from Tshoka to Dzongri | Trekking Distance: 9 km | Duration: 5-6 hours | Elevation: 12,980 ft.",
        activities: [
          "Rise and shine amidst the scenic views of Tshokha! Get dressed to ascend from Tshoka to Dzongri, passing through the enchanting forests of rhododendrons. Next, make a quick stop at the Phedang village to relax your muscles before continuing on your journey. Later, as you walk towards Dzongri, take in the breathtaking views of Pandim and Ratong peaks. Upon arrival at the Dzongri, explore the nearby areas to learn about the rich culture before you settle into your camp for an overnight stay.",
          "Begin your uphill trek from Tshoka to Dzongri, passing through the forests of rhododendrons.",
          "On the way, visit the beautiful Phedang village, continuing the journey ahead.",
          "As you walk ahead towards Dzongri, admire the views of Pandim and Rathong peaks.",
          "Upon reaching the campsite, explore the nearby areas and interact with the locals, learning about their culture.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Trek to Dzongri Top | Trek Downhill to Thansing| Trekking Distance: 10 km | Duration: 4-5 hours | Elevation: 13,681 ft",
        activities: [
          "Start your day with an uphill trek to reach the Dzongri Top to experience the 360-degree view of Kanchenjunga. Once you reach the top, take a moment to breathe and admire the views of the Himalayas. Afterwards, trek back to Dzongri and from there, continue your journey to Thasing, passing through the Kokchurang village to spot Himalayan blue sheep and the Himalayan monal. Upon arrival, settle in your camp surrounded by the Koktang and Pandim peaks of the Himalayas for an overnight stay.",
          "Trek uphill from Dzongri to Dzongri Top, covering a notable distance in the Himalayas.",
          "Relax and take-in the views of the mountains, valleys, and surroundings.",
          "Also, enjoy the panoramic views of Kanchenjunga, the third-highest peak in the world.",
          "Climb down to Dzongri to back up your bags, trekking down to Thansing.",
          "On the way, visit Kokchurang and admire the views of the surrounding valleys and mountain peaks.",
          "You may also spot wildlife in the area, like the Himalayan blue sheep and the Himalayan monal.",
          "After reaching Thansing, take-in the beauty of amazing mountain peaks like Koktang and Pandim, among others.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Trek from Thansing to Lamuney | Trekking Distance: | Duration: | Elevation: 13,600 ft.",
        activities: [
          "Wake up to the scenic views and nature’s rhythm. Later, embark on an adventurous journey from Thansing to Lamuney, a scenic trek that takes you through the rugged terrain of the Himalayas. Pass through the mesmerizing views of snow-capped peaks, lush green valleys, and streams. Also, witness the vibrant flora and fauna. Upon arrival, get comfortable in your tents for an overnight stay amidst the mountains of Pandim and Kanchenjunga.",
          "Begin your uphill trek from Thansing to Lamuney, exploring the surroundings as you move ahead.",
          "Observe the flora and fauna, such as colorful alpine flowers and beautiful mountain birds.",
          "Upon reaching Lamuney, roam around the village and interact with the locals learning about their culture.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka| Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka | Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "Upon arrival, explore the area and learn about the lifestyle of the locals there.",
        ],
      },
      {
        day: "Day 9",
        title:
          "Downhill Trek from Tshoka to Yuksom | Trekking Distance: 8 km | Duration: 3-4 hours | Elevation: 5,840 ft.",
        activities: [
          "Take in the fresh air and recharge yourself before you begin your last and long descent from Tshokha village to Yuksom. You will be crossing the same path as you climbed from Goechala. Later, on your way, explore the beautiful Bakhim village and take in the stunning views of the surroundings. Next, continue your journey by walking on the trail that passes through Sachen. Finally, once you reach Yuksom, take the time to relax for the day and enjoy an overnight stay at your camp/homestay.",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
      {
        day: "Day 10",
        title: "Departure Day",
        activities: [
          "Saying goodbye to the picturesque valleys, lush forests, rocky terrains, and snow-capped mountains can be a tough pill to swallow. But don't worry, you'll be leaving with a bag full of incredible memories and a few aches and pains from all the trekking. It's time to check out from your cozy camp/homestay and head to the airport or railway station to reunite with your loved ones eagerly waiting for you back home. Safe travels!",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
    ],
    inclusions: [
      "2 Nights Guest House / Homestay accommodation in Yuksom on a Quad/Triple Sharing basis.",
      "7 Nights Tented accommodation while on the trek on a triple sharing basis.",
      "All Veg Meals from 2nd Day Lunch to till 9th Day Lunch while on Trek",
      "Morning, evening tea/coffee served with light snacks while on the trek.",
      "Trekking Equipment like Sleeping bags, sleeping mattresses, Sleeping tents, utensils.",
      "All fees and permits for Indians are included in the Goechala trek package.",
      "All meals are included from dinner on Day 1 to Breakfast on Day 10.",
      "Basic First Aid Medical kit, Oxygen Cylinder, and Oxi Meter.",
      "Qualified and experienced Trek Leader and support staff.",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Warm Clothes (Mandatory Item)",
      "Walking stick (Mandatory Item)",
      "Hiking shoes (Mandatory Item)",
      "Water bottle (Mandatory Item)",
      "Backpack (50-60l) (Mandatory Item)",
      "Caps",
      "Woollen cap, socks, mittens & scarf",
      "Thermal inners",
      "Waterproof windcheater",
      "Extra pair of socks",
      "Fleece jackets and thermals",
      "Toilet paper & wipes",
      "Day pack (20-30l)",
    ],
    knowBeforeYouGo: [
      "Please carry a valid ID proof.",
      "Take your time adjusting to high altitudes, as the weather conditions can be different from lower areas.",
      "Listen to your trek leaders or instructors carefully for a safe and enjoyable experience.",
      "Carry basic medications and a first-aid kit during the tour.",
      "No bill will be reimbursed for any missed service/facility.",
      "Keep your luggage minimum; the more you carry, the more you hassle.",
      "Any personal expenses, items of personal nature, meals not mentioned, etc. will not be in part of the package.",
      "Mobile & laptop charging points may/may not be available on campsites at a common point.",
      "Avoid using plastic bags and maintain the ecological balance of the destinations.",
      "It is recommended to carry enough warm clothes and the right kind of shoes for the trek.",
      "Please note that in the event of emergencies or natural calamities, the management reserves the right to modify the trek itinerary. However, any changes due to circumstances beyond our control is not covered in the package cost.",
    ],
  },
  {
    id: "4",
    image: "images/hero",
    title: "Meghalaya Tour",
    desc: "Embark on a rustic, offbeat adventure through the heart of Meghalaya with Offbeat Sikkim Travels. This journey promises a blend of breathtaking landscapes, thrilling treks, and serene waterfalls. Explore the double-decker root bridge from a unique perspective, swim in magnificent waterfalls, and hike through perilous terrains. This adventure is not for the faint-hearted but for those seeking the thrill of the unknown. Join us as we traverse the home of the clouds, visiting villages and forests that embody the essence of Meghalaya.",
    durationn: "5",
    durationd: "6",
    costDouble: "24,499/-",
    link: "upcoming-meghalaya-tour",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Guwahati Arrival | Umiam Lake | Overnight at Shillong",
        activities: [
          "Arrive at Guwahati Airport/Junction where our representative will greet you.",
          "Enjoy a scenic drive to Shillong, the capital city of Meghalaya.",
          "Enroute, stop by Umiam Lake, also known as Barapani, the largest man-made reservoir in Northeast India.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Shillong to Cherrapunjee | Enroute Waterfalls & Caves | Overnight at Cherrapunjee",
        activities: [
          "After breakfast, start your journey towards Cherrapunjee, one of the wettest places on Earth.",
          "Visit Elephant Falls, named for an elephant-shaped rock at its base.",
          "Stop at Mawkdok Valley, also known as Maggie Point.",
          "Visit the Garden of Caves, a picturesque spot featuring waterfalls, caves, and lush greenery.",
          "Visit Nohkalikai Falls, the tallest plunge waterfall in India.",
          "Explore Seven Sisters Falls, a mesmerizing seven-segmented waterfall.",
          "Finally, visit Dainthlen Falls, a waterfall with a legendary tale.",
          "Explore Mawsmai Cave, famous for its limestone formations, and Arwah Cave, known for its fossils and narrow passages.",
          "Arrive in Cherrapunjee, check-in to your hotel, and enjoy a relaxed evening.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Cherrapunjee | Double-Decker Living Root Bridge Trek | Overnight at Cherrapunjee",
        activities: [
          "Begin your day early with a hearty breakfast.",
          "Trek down 3500 steps with a local guide to reach the Double-Decker Living Root Bridge in Nongriat, a marvel of bioengineering.",
          "Optionally, extend your trek to visit the stunning Rainbow Waterfalls, known for their vibrant hues.",
          "Ascend back to Cherrapunjee after an exhilarating trek.",
          "Spend the evening at leisure, enjoying the serene surroundings.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Cherrapunjee | Mawlynnong Village | Dawki | Shnongpdeng | Overnight at Shnongpdeng Campsite",
        activities: [
          "Post breakfast, drive towards Mawlynnong Village.",
          "Explore this immaculate village and its community, known as the cleanest village in Asia.",
          "Walk across the natural bridges formed by intertwining roots.",
          "Optionally, embark on the Mawryngkhang bamboo trek in Wahkhen village, time permitting.",
          "Continue to Dawki, renowned for the crystal-clear waters of the Umngot River.",
          "Enjoy a serene boat ride and visit the India-Bangladesh border for a unique experience.",
          "Settle into the riverside campsite at Shnongpdeng, where you can enjoy leisure time, camping, and a bonfire by the riverside.",
          "Overnight in Alpine/Dome Tents at Shnongpdeng.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Shnongpdeng | Jowai (Jaintia Hills) | Krang Suri Waterfall | Phe PheWaterfall | Overnight at Shillong",
        activities: [
          "Witness the breathtaking morning view of the river.",
          "Post breakfast, drive towards Jowai and visit Krang Suri Falls, a magical waterfall known for its turquoise blue waters.",
          "Hike to Phe Phe Falls and swim in the stunning natural blue pools.",
          "After an exhilarating day, drive back to Shillong.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 6",
        title: "Shillong | Laitlum Grand Canyon | Guwahati Departure",
        activities: [
          "After breakfast, check out from the hotel.",
          "Visit the majestic Laitlum Grand Canyons, known for its panoramic views and serene environment.",
          "Continue your journey back to Guwahati.",
          "Drop-off at Guwahati Airport or Railway Station for your onward journey.",
          "Trip ends with beautiful memories.",
        ],
      },
    ],
    inclusions: [
      "Accommodation in standard Hotels/Homestays or Guesthouses/Tents (sharing basis)",
      "Transportation in an AC vehicle: SUV/Sedan or Tempo Traveler (as per group size)",
      "Pick & Drop to location (sharing basis)",
      "Complimentary Breakfast and Dinner",
      "All permits, hotel taxes & parking charges",
      "All tolls & driver charges",
      "Local guide charges if any",
      "Bonfire (if weather permits)",
      "Medical kit for emergency conditions",
      "Team Captain throughout the trip",
    ],
    exclusions: [
      "GST 5%",
      "Meals not mentioned above",
      "Personal expenses such as laundry, etc.",
      "Any adventure activities such as river rafting, boating, kayaking, etc.",
      "Additional sightseeing and entry fees not mentioned",
      "Costs due to calamities like weather conditions, landslides, road blockage, increase in fuel prices, overbooking of hotels, political disturbances, etc.",
      "Any increase in charges due to transport price hikes before departure",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Personal Water Bottle",
      "Small backpack for personal items",
      "Hat or cap",
      "Sunglasses",
      "Light jacket for morning and evening",
      "Good quality walking/jogging or trekking shoes",
      "Comfortable trekking apparel, ideally full bottoms",
    ],
  },
];

export const CuratedPackages: TripDetail[] = [
  {
    id: "1",
    image: "test",
    title: "Meghalaya Trip",
    desc: "Embark on a rustic, offbeat adventure through the heart of Meghalaya with Offbeat Sikkim Travels. This journey promises a blend of breathtaking landscapes, thrilling treks, and serene waterfalls. Explore the double-decker root bridge from a unique perspective, swim in magnificent waterfalls, and hike through perilous terrains. This adventure is not for the faint-hearted but for those seeking the thrill of the unknown. Join us as we traverse the home of the clouds, visiting villages and forests that embody the essence of Meghalaya.",
    durationn: "5",
    durationd: "6",
    link: "curated-meghalaya-tour",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Guwahati Arrival | Umiam Lake | Overnight at Shillong",
        activities: [
          "Arrive at Guwahati Airport/Junction where our representative will greet you.",
          "Enjoy a scenic drive to Shillong, the capital city of Meghalaya.",
          "Enroute, stop by Umiam Lake, also known as Barapani, the largest man-made reservoir in Northeast India.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Shillong to Cherrapunjee | Enroute Waterfalls & Caves | Overnight at Cherrapunjee",
        activities: [
          "After breakfast, start your journey towards Cherrapunjee, one of the wettest places on Earth.",
          "Visit Elephant Falls, named for an elephant-shaped rock at its base.",
          "Stop at Mawkdok Valley, also known as Maggie Point.",
          "Visit the Garden of Caves, a picturesque spot featuring waterfalls, caves, and lush greenery.",
          "Visit Nohkalikai Falls, the tallest plunge waterfall in India.",
          "Explore Seven Sisters Falls, a mesmerizing seven-segmented waterfall.",
          "Finally, visit Dainthlen Falls, a waterfall with a legendary tale.",
          "Explore Mawsmai Cave, famous for its limestone formations, and Arwah Cave, known for its fossils and narrow passages.",
          "Arrive in Cherrapunjee, check-in to your hotel, and enjoy a relaxed evening.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Cherrapunjee | Double-Decker Living Root Bridge Trek | Overnight at Cherrapunjee",
        activities: [
          "Begin your day early with a hearty breakfast.",
          "Trek down 3500 steps with a local guide to reach the Double-Decker Living Root Bridge in Nongriat, a marvel of bioengineering.",
          "Optionally, extend your trek to visit the stunning Rainbow Waterfalls, known for their vibrant hues.",
          "Ascend back to Cherrapunjee after an exhilarating trek.",
          "Spend the evening at leisure, enjoying the serene surroundings.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Cherrapunjee | Mawlynnong Village | Dawki | Shnongpdeng | Overnight at Shnongpdeng Campsite",
        activities: [
          "Post breakfast, drive towards Mawlynnong Village.",
          "Explore this immaculate village and its community, known as the cleanest village in Asia.",
          "Walk across the natural bridges formed by intertwining roots.",
          "Optionally, embark on the Mawryngkhang bamboo trek in Wahkhen village, time permitting.",
          "Continue to Dawki, renowned for the crystal-clear waters of the Umngot River.",
          "Enjoy a serene boat ride and visit the India-Bangladesh border for a unique experience.",
          "Settle into the riverside campsite at Shnongpdeng, where you can enjoy leisure time, camping, and a bonfire by the riverside.",
          "Overnight in Alpine/Dome Tents at Shnongpdeng.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Shnongpdeng | Jowai (Jaintia Hills) | Krang Suri Waterfall | Phe Phe Waterfall | Overnight at Shillong",
        activities: [
          "Witness the breathtaking morning view of the river.",
          "Post breakfast, drive towards Jowai and visit Krang Suri Falls, a magical waterfall known for its turquoise blue waters.",
          "Hike to Phe Phe Falls and swim in the stunning natural blue pools.",
          "After an exhilarating day, drive back to Shillong.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 6",
        title: "Shillong | Laitlum Grand Canyon | Guwahati Departure",
        activities: [
          "After breakfast, check out from the hotel.",
          "Visit the majestic Laitlum Grand Canyons, known for its panoramic views and serene environment.",
          "Continue your journey back to Guwahati.",
          "Drop-off at Guwahati Airport or Railway Station for your onward journey.",
          "Trip ends with beautiful memories.",
        ],
      },
    ],
    inclusions: [
      "Accommodation in standard Hotels/Homestays or Guesthouses/Tents",
      "Transportation in an AC vehicle: SUV/Sedan or Tempo Traveler (as per group size)",
      "Complimentary Breakfast",
      "All permits, hotel taxes & parking charges",
      "All tolls & driver charges",
      "Local guide charges if any",
      "Bonfire (if weather permits)",
      "Medical kit for emergency conditions",
    ],
    exclusions: [
      "GST (5%) is applicable extra",
      "Any kind of food and beverages that is not mentioned above like alcoholic drinks, mineral water, meals/refreshment/lunches on the highway",
      "Any personal expenses",
      "Any adventure activities such as river rafting, boating, kayaking, etc.",
      "Additional sightseeing and entry fees not mentioned",
      "Costs due to calamities like weather conditions, landslides, road blockage, increase in fuel prices, overbooking of hotels, political disturbances, etc.",
      "Any increase in charges due to transport price hikes before departure",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
  },
  {
    id: "2",
    image: "test",
    title: "Enchanting Nagaland",
    desc: "Explore the vibrant culture, scenic landscapes, and rich heritage of Nagaland with our exclusive travel package. Nestled in the heart of Northeast India, Nagaland offers an unforgettable journey through picturesque hills, lush forests, and traditional Naga villages. Immerse yourself in the local festivities, taste authentic cuisine, and witness the famous Hornbill Festival. Whether you're an adventure enthusiast or a culture lover, our Nagaland travel package promises a memorable escape into one of India's most captivating destinations.",
    durationn: "5",
    durationd: "6",
    link: "curated-nagaland-tour",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival at Dimapur",
        activities: [
          "Arrive at Dimapur Airport/Railway Station. Meet the local representative for transfer to the hotel. Check-in and settle into your hotel room. Spend the day at leisure, exploring the local market at your own pace. Overnight stay in a hotel at Dimapur.",
        ],
      },
      {
        day: "Day 2",
        title: "Dimapur to Kohima",
        activities: [
          "Enjoy a hearty breakfast at the hotel. Depart for Kohima, the second-largest city in Nagaland. Visit the Catholic Church, Naga Heritage Village, Kohima War Cemetery, and Nagaland State Museum. Spend the evening at leisure. Have dinner and enjoy your stay at a hotel in Kohima.",
        ],
      },
      {
        day: "Day 3",
        title: "Kohima to Tuophema",
        activities: [
          "Start the day with breakfast at the hotel. Head towards Tuophema, a tourist village developed by the Nagaland Tourism Department. Check-in to traditional Naga-style huts. Explore the village and enjoy panoramic views. Experience authentic Naga cuisine with rice-brewed beer at the community kitchen. Overnight stay in Naga huts in Tuophema.",
        ],
      },
      {
        day: "Day 4",
        title: "Tuophema to Khonoma",
        activities: [
          "Enjoy breakfast in Tuophema. Depart for Khonoma, a village known for its historical significance. Visit the paddy fields and learn about local farming techniques. Understand the community's conservation efforts in forest preservation. Overnight stay in traditional accommodation in Khonoma.",
        ],
      },
      {
        day: "Day 5",
        title: "Khonoma - Local Sightseeing - Dimapur",
        activities: [
          "Start the day with breakfast amidst beautiful views. Pay a visit to the G H Damant Memorial. Depart for Dimapur in the afternoon. Spend the evening at leisure, relaxing or exploring Dimapur. Overnight stay in a hotel in Dimapur.",
        ],
      },
      {
        day: "Day 6",
        title: "End of the Trip",
        activities: [
          "Enjoy your final breakfast in Nagaland. Transfer to Dimapur Airport/Railway Station for your onward journey. End of tour, with wonderful memories of Nagaland.",
        ],
      },
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "Meals: Breakfast daily",
      "Transfers: Airport/Railway station pick-up and drop-off",
      "Vehicle: Sedan/SUV (depending on group size)",
      "Toll, Parking, Permits & ILP, Driver Allowances",
    ],
    exclusions: [
      "GST (5%) additional",
      "Additional food & beverages: Alcoholic drinks, mineral water, and meals not mentioned in the package",
      "Personal expenses: Tips, monument/monastery entry fees, camera/video charges, laundry, telephone bills, etc.",
      "Natural calamities: Any costs arising due to landslides, roadblocks, etc. (to be borne by the customer on the spot)",
      "Unmentioned costs: Anything not mentioned in the inclusion",
      "Airfares/Train tickets",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip.",
    ],
  },
  {
    id: "3",
    image: "images/hero",
    title: "North Sikkim Tour",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "4",
    durationd: "5",
    link: "curated-north-sikkim-4nights-5days",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Bagdogra (IXB) Airport or New Jalpaiguri (NJP) Railway Station, you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 3",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
          "Optional Activity: Visit Mt. Katao for an additional cost of INR 3000-3500 per vehicle.",
          "Optional Activity: Vist Sangla Phu lake for Additional cost of INR 1500 Per vehicle.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Departure from Gangtok to Bagdogra Airport / NJP railway station ",
        activities: [
          "After breakfast, check out from your hotel in Gangtok.",
          "You will be driven to Bagdogra Airport (IXB) or New Jalpaiguri (NJP) Railway Station for your onward journey.",
          "Reflect on the wonderful memories of your trip as you travel back, ensuring a comfortable and timely arrival at your destination.",
        ],
      },
    ],
    inclusions: [
      "Travel as per Itinerary in Hatchback/SUV (as per group size).",
      "Accommodation as per the itinerary.",
      "Driver Charges, Permits, Tolls, Fuel & Parking charges.",
      "Airport/ Railway Station Pickup and Drop.",
      "All inner line permit if anything applicable",
    ],
    exclusions: [
      "GST (5%) is applicable extra.",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Any personal expense like tip to the drivers, entry to the monuments. monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card/Passport/Driving licence)",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses",
      "Personal Medicines (if any).",
    ],
  },
  {
    id: "4",
    image: "test",
    title: "North Sikkim + Nathula Pass",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "5",
    durationd: "6",
    link: "curated-north-sikkim-tour-nathula-pass",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Siliguri you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Full day Tsogmo Lake, Baba Mandir and Nathula pass excursion",
        activities: [
          "After breakfast, we will embark on a full-day excursion exploring the beautiful surroundings of Gangtok.",
          "Our first stop will be the glacial Tsomgo Lake, also known as Changu Lake. This stunning lake is renowned for its scenic beauty and ever-changing colors.",
          "Next, we will drive to the Baba Mandir, a shrine dedicated to Baba Harbhajan Singh, a revered soldier of the Indian Army.",
          "We will then visit Nathula Pass, an Indo-China border post (Note: Nathula Pass is closed on Mondays and Tuesdays).",
          "After an eventful day, we will return to Gangtok for an overnight stay at your hotel.",
          "Note: Nathu La Pass can be added at an extra cost of INR 4000/- per vehicle",
        ],
      },
      {
        day: "Day 3",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
        ],
      },
      {
        day: "Day 5",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Departure from Gangtok to Bagdogra Airport / NJP railway station",
        activities: [
          "After breakfast, check out from your hotel in Gangtok.",
          "You will be driven to Siliguri for your onward journey.",
          "Reflect on the wonderful memories of your trip as you travel back, ensuring a comfortable and timely arrival at your destination.",
        ],
      },
    ],
    inclusions: [
      "Travel as per Itinerary in Hatchback/ SUV (as per group size).",
      "Accommodation according to the itinerary",
      "Driver Charges, Permits, Tolls, Fuel & Parking charges.",
      "Airport/Railway Station Pickup and Drop.",
      "All inner line permit if anything applicable",
    ],
    exclusions: [
      "GST (5%) is applicable extra",
      "Any kind of food and beverages that is not included in the package like alcoholic drinks, mineral water, meals/refreshment/lunches on the highway",
      "Any personal expense like tip to the drivers, entry to the monuments, monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any cost arising due to natural calamities like landslides, roadblocks, route diversion etc. (to be borne by the customer on the spot)",
      "Anything not mentioned in the inclusion",
      "Air fares/Train Tickets",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card / Passport / Driving licence)",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses",
      "Personal Medicines (if any)",
    ],
  },
  {
    id: "5",
    image: "test",
    title: "North Sikkim + Nathula Pass + Pelling",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "7",
    durationd: "8",
    link: "curated-north-sikkim-nathula-pass-pelling",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Bagdogra (IXB) Airport or New Jalpaiguri (NJP) Railway Station, you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Full day Tsogmo Lake, Baba Mandir and Nathula pass excursion",
        activities: [
          "After breakfast, we will embark on a full-day excursion exploring the beautiful surroundings of Gangtok.",
          "Our first stop will be the glacial Tsomgo Lake, also known as Changu Lake. This stunning lake is renowned for its scenic beauty and ever-changing colors.",
          "Next, we will drive to the Baba Mandir, a shrine dedicated to Baba Harbhajan Singh, a revered soldier of the Indian Army.",
          "We will then visit Nathula Pass, an Indo-China border post (Note: Nathula Pass is closed on Mondays and Tuesdays).",
          "After an eventful day, we will return to Gangtok for an overnight stay at your hotel.",
          "Note: Nathu La Pass can be added at an extra cost of INR 4000/- per vehicle",
        ],
      },
      {
        day: "Day 3",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
          "Optional Activity: Visit Mt. Katao for an additional cost of INR 3000-3500 per vehicle.",
          "Optional Activity: Visit Sangla Phu lake for Additional cost of INR 1500 Per vehicle.",
        ],
      },
      {
        day: "Day 5",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 6",
        title: "Gangtok to Pelling via Ravangla",
        activities: [
          "After enjoying a hearty breakfast, prepare for a scenic transfer from Gangtok to Pelling, passing through the charming town of Ravangla.",
          "En route, make a memorable stop at Buddha Park in Ravangla. Here, you'll be awed by the magnificent 130 ft. high Shakyamuni Buddha statue, set against a backdrop of serene landscapes. Take some time to stroll through the beautifully maintained park, soaking in the peaceful atmosphere and capturing some photographs.",
          "Continuing your journey, you'll drive through picturesque landscapes with lush greenery, quaint villages, and stunning views of the Kanchenjunga Ranges. The sight of these majestic mountains will leave you mesmerized and provide ample photo opportunities.",
          "As you approach Pelling, you’ll notice the landscape changing, with the dense forests and cascading waterfalls that characterize this beautiful region.",
          "Upon reaching Pelling, check into your hotel and unwind after the journey. Take some time to relax and freshen up. If you're up for it, you can take a leisurely walk around the hotel premises or explore nearby areas to get a feel of the local culture and scenery.",
          "Settle in for a comfortable overnight stay in Pelling, ready to explore more of this enchanting region the next day.",
        ],
      },
      {
        day: "Day 7",
        title: "Local Sightseeing in Pelling",
        activities: [
          "After a hearty breakfast, indulge in an immersive City tour of Pelling.",
          "Head to the sacred Khecheopalri Lake which is also known as the wish-fulfilling lake and has religious significance in both Hindu and Buddhist folklore.",
          "Further sightseeing will include a visit to some of the most scenic waterfalls like Rimbi Waterfalls and the Kanchenjunga Waterfall.",
          "Later, seek blessings of the local deities by visiting the Khecheopalri Monastery and Pemayangtse Monastery.",
          "Visit the Rabdentse Ruins to know about the glorious past of Sikkim.",
          "Experience the thrill of walking on the Pelling Skywalk and enjoy breathtaking views of the surrounding landscapes and Kanchenjunga range.",
          "Return back to the hotel, after a day full of sightseeing for an overnight stay.",
        ],
      },
      {
        day: "Day 8",
        title: "Departure from Pelling to NJP Station / Bagdogra Airport",
        activities: [
          "After having a hearty breakfast, check out from your hotel and prepare for your departure.",
          "Enjoy a comfortable drive to NJP Station or Bagdogra Airport (IXB).",
          "Your tour concludes upon arrival at your desired location for your onward journey.",
          "Head back home with a plethora of good memories from your trip."
        ]
      }
    ],
    inclusions: [
      "Travel as per Itinerary in Hatchback/SUV (as per group size).",
      "Accommodation as per the itinerary.",
      "Driver Charges, Permits, Tolls, Fuel & Parking charges.",
      "Airport/ Railway Station Pickup and Drop.",
      "All inner line permit if anything applicable."
    ],
    exclusions: [
      "GST (5%) is applicable extra.",
      "Any kind of food and beverages that is not included in the package like alcoholic drinks, mineral water, meals/refreshment/lunches on the highway.",
      "Any personal expense like tip to the drivers, entry to the monuments, monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any cost arising due to natural calamities like landslides, roadblocks etc. (to be borne by the customer on the spot).",
      "Anything not mentioned in the inclusion.",
      "Air fares/Train Tickets.",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card/Passport/Driving licence).",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses.",
      "Personal Medicines (if any).",
    ],
  },
  {
    id: "6",
    image: "test",
    title: "Pelling Tour",
    desc: "Pelling is a small town located in the southern part of Sikkim, blessed with rich culture and heritage. The town is a popular tourist destination and gives an amazing view of Mt Kanchenjunga. On the 4 days, south Sikkim tour one shall be covering the most renowned location and age-old places. The tour shall take you to a famous hamlet. Yuksom gets mesmerized by the views and also visits some of the beautiful water bodies of the location. Take a great experience and beautiful stories to share along with you.",
    durationn: "3",
    durationd: "4",
    link: "curated-pelling-tour",
    detailedItinerary: [
        {
            day: "Day 1",
            title: "NJP Railway station/Bagdogra Airport to Pelling (141 KM | 4 Hrs)",
            activities: [
                "Upon arrival at the Bagdogra Airport/NJP Railway Station, our representative will meet you and transfer you to Pelling.",
                "Enjoy the scenic views along the route toward the location.",
                "Check in to the Hotel/Homestay.",
                "Evening at leisure - one can take a walk in the local market.",
                "Overnight stay at Pelling/Darap."
            ]
        },
        {
            day: "Day 2",
            title: "Pelling Full days City Tour",
            activities: [
                "After a hearty breakfast in the morning, indulge in an immersive city tour of Pelling.",
                "Start the tour with a visit to a famous Singshore Bridge.",
                "Visit Pelling Skywalk and witness the natural vista.",
                "Visit Pemayangtse Monastery to feel the calmness of nature.",
                "Head to the sacred Khecheopalri Lake, also known as the wish-fulfilling lake, and stroll around the lake.",
                "Overnight stay at the Hotel/Homestay."
            ]
        },
        {
            day: "Day 3",
            title: "Pelling to Yuksom Via Kanchenjunga Falls (74 Km | 3 Hrs)",
            activities: [
                "After a mouth-watering breakfast, go on an excursion tour of Yuksom.",
                "On the way, visit Rimbi Falls and Kanchenjunga Falls to witness the beauty of flowing water.",
                "Visit the oldest monastery of Sikkim and seek the blessing.",
                "En-route, visit the famous cardamom and orange plantation by Rimbi River.",
                "In the evening, you can choose to explore the local markets of the city or relax at the hotel/Homestay.",
                "Overnight stay at the hotel/Homestay."
            ]
        },
        {
            day: "Day 4",
            title: "Pelling - IXB/NJP Railway Station (90 KM | 3 Hrs)",
            activities: [
                "After breakfast, move to IXB/NJP Railway station.",
                "Depart with a lot of amazing memories."
            ]
        }
    ],
    inclusions: [
        "Entire travel as per the itinerary.",
        "3 Nights Accommodation (3 nights in Pelling/Darap) - Hotel/Homestays on double/triple sharing basis.",
        "A total of 6 meals (D1 - Dinner, D2 & D3 - Breakfast & dinner, D4 - Breakfast).",
        "24/7 Support from Sikkim Expert.",
        "Parking & Tolls Charges.",
        "NOTE: If you don’t choose your room category, you will be allotted a base category room by default."
    ],
    exclusions: [
        "GST (5%) is applicable extra.",
        "Any item which is not mentioned in the Inclusion section.",
        "Siliguri pick up & drop not included.",
        "Any other meals not mentioned in the Inclusion section.",
        "All Museums, Monuments, and other entry fees.",
        "Laundry, tips, phone calls, or any personal expenses.",
        "Any expense personal in nature."
    ],
    bookingProcess: [
        "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
        "The remaining amount must be paid at least 2 days before the trip departure.",
        "After the payment is completed, please share your ID proof and email address.",
        "A confirmation email will be sent to you once all the details are received."
    ],
    thingsToCarry: [
        "Authentic Government ID Card (Voter card / Passport / Driving licence).",
        "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
        "Sunscreen & lip balm, Good U/V protection sunglasses.",
        "Personal medicines (if any)."
    ]
}
];

export const Treks: TripDetail[] = [
  {
    id: "1",
    image: "test",
    title: "Sandakphu Trek",
    desc: 'The Sandakphu-Phalut Trek in the eastern Himalayas is a mesmerizing journey through the Singalila National Park, offering breathtaking views of the Everest cluster and the iconic "Sleeping Buddha." Renowned for its spectacular sunrises and sunsets, the trek takes you through dense bamboo and rhododendron forests, providing a chance to spot rare Himalayan wildlife. The cultural diversity, crossing between India and Nepal, adds a unique touch with warm hospitality and a prevailing Buddhist influence. Culinary delights include a fusion of Nepali and Tibetan cuisine, making the trek a sensory experience. Beyond the physical adventure, the trek holds a spiritual journey towards the Sleeping Buddha, leaving participants with indelible memories and a profound connection to the Himalayas.',
    durationn: "5",
    durationd: "6",
    link: "sandakphu-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title: " Drive from Siiliguri to okhrey | 128km (7500ft)/ 7 hours",
        activities: [
          "Start the journey from Siliguri to Okhrey, a scenic drive taking 6 to 7 hours.",
          "Traverse through the picturesque Himalayan foothills, enjoying changing landscapes.",
          "Arrive in Okhrey by late afternoon, a charming village nestled in the hills.",
          "Opt for an overnight stay in Okhrey for acclimatization to the altitude.",
          "Immerse yourself in the tranquil ambiance and prepare for the adventures ahead.",
        ],
      },
      {
        day: "Day 2",
        title: " 2: Okhrey to Ghorkhey | 10km (7700ft)/ 3 hours",
        activities: [
          "Begin the trek in the afternoon, soaking in the beauty of the natural surroundings.",
          "Traverse through forests, observing the local flora and fauna along the way.",
          "Enjoy occasional views of the hills as you ascend and descend through the trail.",
          "Reach Ghorkhey , a picturesque village surrounded by nature.",
          "Check into a local homestay or guesthouse for an authentic experience.",
          "Explore Ghorkhey in the remaining daylight, appreciating its unique charm.",
          "Rest and relax, immersing yourself in the serene atmosphere of Ghorkhey overnight.",
        ],
      },
      {
        day: "Day 3",
        title: "Trek from Ghorkey to Phalut | 15km (11,800ft)/ 6-7 hours",
        activities: [
          "Begin a challenging 15 km uphill trek to Phalut, taking approximately 5 to 6 hours through dense jungle terrain.",
          "Break for lunch at Alu Bari camp to refuel.",
          "Check in at your hotel or homestay in Phalut in the late afternoon for some rest.",
          "Later, embark on a short hike to witness a breathtaking sunset and enjoy stunning mountain views.",
          "Reflect on the day's challenges and relish the tranquility of Phalut's mountainous surroundings.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek from Phalut to Sandakphu | 21km (11,900ft)/9-10 hours",
        activities: [
          "Depart from Phalut for Sandakphu, continuing the trek with a scenic journey.",
          "Navigate the trail, capturing picturesque landscapes and diverse terrain along the way.",
          "Experience a mix of gradual descents and ascents, showcasing the beauty of the Singalila Range.",
          "Reach Sandakphu, the highest peak in West Bengal, and marvel at the panoramic views of the Himalayas.",
          "Check in at your accommodation, appreciating the unique charm of Sandakphu.",
          "Spend the evening exploring the surroundings or simply relaxing, preparing for the next leg of your trek.",
        ],
      },
      {
        day: "Day 5",
        title: "Trek from Sandakphu to Gurdum | 10km (11,900ft)/9-10hrs",
        activities: [
          "Begin your descent from the high-altitude terrain of Sandakphu, enjoying panoramic views along the way.",
          "Traverse diverse landscapes, including rhododendron forests and meadows, as you make your way to Gurdum.",
          "Experience the changing scenery and appreciate the unique flora and fauna of the region.",
          "Arrive at Gurdum and check in at your accommodation, relishing a sense of accomplishment.",
          "Spend the evening in Gurdum, unwinding and perhaps sharing trekking stories with fellow trekkers.",
          "Reflect on the day's journey, enjoying the serene atmosphere of Gurdum as you prepare for the next day's adventure.",
        ],
      },
      {
        day: "Day 6",
        title: "Gurdum to Siliguri | 85Km (7500ft)/3.5-5hrs",
        activities: [
          "Conclude your trek by hiking a last 45-minute to 1-hour stretch to Shrikhokla and take a cab from Shrikhokla to Siliguri, offering a comfortable and convenient journey.",
          "Enjoy a scenic drive, descending from the trek's endpoint in Gurdum.",
          "Relax during the cab ride, reflecting on the remarkable experiences and landscapes encountered during the trek.",
          "Upon reaching Siliguri, your trek concludes, marking the end of your adventurous journey.",
        ],
      },
    ],
    inclusions: [
      "Transportation - Xylo / Sumo Gola / Beloro or similar",
      "Siliguri to Okhrey (128km / 5-6hrs Approx)",
      "Okhrey to Patharey (7km / 40 Mins Approx)",
      "Gurdum to Siliguri (85km / 3-4hrs Approx)",
      "Accommodation - Homestay / Trekkers hut",
      "5 nights Accommodation - (Okhrey - 1 night, Ghorkhey - 1 night, Phalut - 1 night, Sandhakphu - 1 night, Gurdum - 1 night)",
      "Total 14 Meals (Dinner on Day 1, All meals on Day 2, All meals on Day 3, All meals on Day 4, All meals on Day 5 and breakfast on Day 6)",
      "Qualified and experienced trek leader and support staff",
      "Singalila National Park permit for 5 days for Indian and Nepali trekkers",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip.",
    ],
    thingsToCarryTrek: [
      {
        title: "Footwear and Bag:",
        list: ["Trekking shoes with ankle support", "Backpack with rain cover"],
      },
      {
        title: "Warm layers and clothes (Varies by Season)",
        list: [
          "Spring, Summer, Monsoon (3 Layers): Woollen sweater, fleece, padded jacket",
          "Autumn (4 Layers): Woollen sweater, 2 fleece, padded jacket",
          "Winter (5 Layers): Thermals, woollen sweater, 2 fleece, padded jacket",
          "3 Collared T-shirts, 2 quick-dry trek pants",
        ],
      },
      {
        title: "Accessories:",
        list: [
          "Sunglasses",
          "Sun cap with flaps",
          "Waterproof gloves",
          "Balaclava",
          "Woollen socks (2 Dry fit + 1 Woollen)",
          "Headlamp",
          "Trekking pole",
          "Rain jacket + pants / poncho",
        ],
      },
      {
        title: "Toiletries:",
        list: [
          "Sunscreen",
          "Moisturizer",
          "Light towel",
          "Lip balm",
          "Toilet paper (No wet wipes)",
          "Toothbrush",
          "Toothpaste",
          "Reusable plastic covers for used clothes",
        ],
      },
      {
        title: "Cutlery:",
        list: [
          "Steel lunch box",
          "Spoon",
          "Mug",
          "Two water bottles or Hydration Pack",
        ],
      },
    ],
  },
  {
    id: "2",
    image: "images/hero",
    title: "Goechala Trek",
    desc: "GoechaLa trek is nestled at a height of 16,207ft, with a closer look at the third-highest peak-Mt. Kanchenjunga. It is a dream and desire for hundreds of adventure lovers. Bounded by the mesmerizing flora and fauna, which are so vibrant and colourful to cheer up one's mood. The GoechaLa pass trek is a bundle of big summits, making it an absolute adventure to embark on. The trail link with the famous Kanchenjunga National Park, where one can witness the true nature, enough to revitalize your senses. To watch the mountains clearly, April and May are the ideal months. Since the sky is completely clear during this time and the sunset-sunrise views can be captured.",
    durationn: "9",
    durationd: "10",
    link: "goechala-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          " Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        activities: [
          "Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        ],
      },
      {
        day: "Day 2",
        title:
          " Trek from Yuksom to Sachen | Trekking Distance: 8 km | Duration: 5-6 hours | Elevation: 7,150 ft.",
        activities: [
          "Wake up to the sounds of roosters and chirping birds. Gear up your shoes to embark on a trek to Sachen, and walk along the Rathong River while passing through the lush forests witnessing diverse plant life like rhododendrons and ferns. Next, cross the Paha Khola Bridge soaking in the wilderness and serenity around you. This journey promises adventure at every step, leaving you with memories to cherish forever. Upon arrival, relax in your camps for an overnight stay in the realm of nature.",
          "Begin your trek from Yuksom to Sachen, following the trail along the Rathong River.",
          "On the way, admire the beauty of various plant species like rhododendrons, ferns, etc.",
          "Proceed towards the Paha Khola Bridge, enjoying the scenic beauty of dense forest along the way.",
          "Upon reaching Sachen, settle down at the campsite, concluding your journey.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Trek from Sachen to Tshokha| Trekking Distance: 7 km | Duration: 4-5 hours | Elevation: 9.701 ft.",
        activities: [
          "Before you begin your uphill trek to Tshokha, make sure to fuel up and hydrate well. This trail offers the adventure, as you ascend through the majestic Prek Chu River soaking in the scenery of beautiful magnolias and rhododendrons. Keep climbing amidst the wonders of nature until you reach Tshoka, a Tibetan settlement situated in the mountains. Upon arrival, settle into your campsite and later, head out to interact with the locals for a cultural experience before calling it a night.",
          "Begin your uphill trek from Sachen to Tshoka, enjoying viburnum plants on the way.",
          "Cross the Prek Chu River and hike uphill to reach Bakhim.",
          "Continue trekking upwards until you arrive at Tshoka, a Tibetan refugee settlement.",
          "Explore the area and interact with the locals, enjoying your overnight stay at Tshoka.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Trek from Tshoka to Dzongri | Trekking Distance: 9 km | Duration: 5-6 hours | Elevation: 12,980 ft.",
        activities: [
          "Rise and shine amidst the scenic views of Tshokha! Get dressed to ascend from Tshoka to Dzongri, passing through the enchanting forests of rhododendrons. Next, make a quick stop at the Phedang village to relax your muscles before continuing on your journey. Later, as you walk towards Dzongri, take in the breathtaking views of Pandim and Ratong peaks. Upon arrival at the Dzongri, explore the nearby areas to learn about the rich culture before you settle into your camp for an overnight stay.",
          "Begin your uphill trek from Tshoka to Dzongri, passing through the forests of rhododendrons.",
          "On the way, visit the beautiful Phedang village, continuing the journey ahead.",
          "As you walk ahead towards Dzongri, admire the views of Pandim and Rathong peaks.",
          "Upon reaching the campsite, explore the nearby areas and interact with the locals, learning about their culture.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Trek to Dzongri Top | Trek Downhill to Thansing| Trekking Distance: 10 km | Duration: 4-5 hours | Elevation: 13,681 ft",
        activities: [
          "Start your day with an uphill trek to reach the Dzongri Top to experience the 360-degree view of Kanchenjunga. Once you reach the top, take a moment to breathe and admire the views of the Himalayas. Afterwards, trek back to Dzongri and from there, continue your journey to Thasing, passing through the Kokchurang village to spot Himalayan blue sheep and the Himalayan monal. Upon arrival, settle in your camp surrounded by the Koktang and Pandim peaks of the Himalayas for an overnight stay.",
          "Trek uphill from Dzongri to Dzongri Top, covering a notable distance in the Himalayas.",
          "Relax and take-in the views of the mountains, valleys, and surroundings.",
          "Also, enjoy the panoramic views of Kanchenjunga, the third-highest peak in the world.",
          "Climb down to Dzongri to back up your bags, trekking down to Thansing.",
          "On the way, visit Kokchurang and admire the views of the surrounding valleys and mountain peaks.",
          "You may also spot wildlife in the area, like the Himalayan blue sheep and the Himalayan monal.",
          "After reaching Thansing, take-in the beauty of amazing mountain peaks like Koktang and Pandim, among others.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Trek from Thansing to Lamuney | Trekking Distance: | Duration: | Elevation: 13,600 ft.",
        activities: [
          "Wake up to the scenic views and nature’s rhythm. Later, embark on an adventurous journey from Thansing to Lamuney, a scenic trek that takes you through the rugged terrain of the Himalayas. Pass through the mesmerizing views of snow-capped peaks, lush green valleys, and streams. Also, witness the vibrant flora and fauna. Upon arrival, get comfortable in your tents for an overnight stay amidst the mountains of Pandim and Kanchenjunga.",
          "Begin your uphill trek from Thansing to Lamuney, exploring the surroundings as you move ahead.",
          "Observe the flora and fauna, such as colorful alpine flowers and beautiful mountain birds.",
          "Upon reaching Lamuney, roam around the village and interact with the locals learning about their culture.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka| Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka | Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "Upon arrival, explore the area and learn about the lifestyle of the locals there.",
        ],
      },
      {
        day: "Day 9",
        title:
          "Downhill Trek from Tshoka to Yuksom | Trekking Distance: 8 km | Duration: 3-4 hours | Elevation: 5,840 ft.",
        activities: [
          "Take in the fresh air and recharge yourself before you begin your last and long descent from Tshokha village to Yuksom. You will be crossing the same path as you climbed from Goechala. Later, on your way, explore the beautiful Bakhim village and take in the stunning views of the surroundings. Next, continue your journey by walking on the trail that passes through Sachen. Finally, once you reach Yuksom, take the time to relax for the day and enjoy an overnight stay at your camp/homestay.",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
      {
        day: "Day 10",
        title: "Departure Day",
        activities: [
          "Saying goodbye to the picturesque valleys, lush forests, rocky terrains, and snow-capped mountains can be a tough pill to swallow. But don't worry, you'll be leaving with a bag full of incredible memories and a few aches and pains from all the trekking. It's time to check out from your cozy camp/homestay and head to the airport or railway station to reunite with your loved ones eagerly waiting for you back home. Safe travels!",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
    ],
    inclusions: [
      "2 Nights Guest House / Homestay accommodation in Yuksom on a Quad/Triple Sharing basis.",
      "7 Nights Tented accommodation while on the trek on a triple sharing basis.",
      "All Veg Meals from 2nd Day Lunch to till 9th Day Lunch while on Trek",
      "Morning, evening tea/coffee served with light snacks while on the trek.",
      "Trekking Equipment like Sleeping bags, sleeping mattresses, Sleeping tents, utensils.",
      "All fees and permits for Indians are included in the Goechala trek package.",
      "All meals are included from dinner on Day 1 to Breakfast on Day 10.",
      "Basic First Aid Medical kit, Oxygen Cylinder, and Oxi Meter.",
      "Qualified and experienced Trek Leader and support staff.",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Warm Clothes (Mandatory Item)",
      "Walking stick (Mandatory Item)",
      "Hiking shoes (Mandatory Item)",
      "Water bottle (Mandatory Item)",
      "Backpack (50-60l) (Mandatory Item)",
      "Caps",
      "Woollen cap, socks, mittens & scarf",
      "Thermal inners",
      "Waterproof windcheater",
      "Extra pair of socks",
      "Fleece jackets and thermals",
      "Toilet paper & wipes",
      "Day pack (20-30l)",
    ],
    knowBeforeYouGo: [
      "Please carry a valid ID proof.",
      "Take your time adjusting to high altitudes, as the weather conditions can be different from lower areas.",
      "Listen to your trek leaders or instructors carefully for a safe and enjoyable experience.",
      "Carry basic medications and a first-aid kit during the tour.",
      "No bill will be reimbursed for any missed service/facility.",
      "Keep your luggage minimum; the more you carry, the more you hassle.",
      "Any personal expenses, items of personal nature, meals not mentioned, etc. will not be in part of the package.",
      "Mobile & laptop charging points may/may not be available on campsites at a common point.",
      "Avoid using plastic bags and maintain the ecological balance of the destinations.",
      "It is recommended to carry enough warm clothes and the right kind of shoes for the trek.",
      "Please note that in the event of emergencies or natural calamities, the management reserves the right to modify the trek itinerary. However, any changes due to circumstances beyond our control is not covered in the package cost.",
    ],
  },
  {
    id: "3",
    image: "images/hero",
    title: "Dzukou Valley Trek",
    desc: "Dzukou Valley, located on the border of Nagaland and Manipur, is known for its lush green landscapes, seasonal flowers, and serene environment. The valley is particularly famous for the Dzukou lily, which is unique to this region. The best time to visit is from June to September for the blooming flowers and from October to March for pleasant weather. The valley offers a mix of meadows, streams, and panoramic views of the surrounding hills.",
    durationn: "4",
    durationd: "3",
    link: "dzukou-valley-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dimapur and Transfer to Kohima",
        activities: [
          "Arrive at Dimapur Airport/Train Station and meet our representative. Board the private vehicle for transfer to Kohima, which takes approximately 3-4 hours. Upon arrival in Kohima, check-in at the hotel or homestay, freshen up, and have lunch. In the evening, explore the local market, visit the Kohima War Cemetery, and interact with the locals to get a taste of the local culture. Return to the hotel for dinner and an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Kohima to Viswema Village and Trek to Dzukou Valley Base Camp",
        activities: [
          "After an early breakfast at the hotel, check-out and depart for Viswema Village, which is about a one-hour drive away. Upon arrival at Viswema Village, begin the trek to Dzukou Valley Base Camp, which takes approximately 5-6 hours. The initial part of the trek is steep and challenging, leading to a gradual ascent. Take breaks along the way to enjoy the scenic views and have a packed lunch. The trek takes you through dense forests, bamboo groves, and scenic meadows. Upon arrival at the base camp, set up tents and relax. Dinner and overnight stay will be at the base camp.",
        ],
      },
      {
        day: "Day 3",
        title: "Explore Dzukou Valley",
        activities: [
          "After breakfast at the camp, spend the full day exploring Dzukou Valley. Visit the flower valleys, hidden streams, and various viewpoints. The valley is particularly known for the Dzukou lily, which is found only in this region. Enjoy a packed lunch during the exploration. Return to the base camp by evening for dinner and an overnight stay in tents.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek Back to Viswema Village and Return to Dimapur",
        activities: [
          "Have breakfast at the camp and pack up. Begin the trek back to Viswema Village, then transfer to Dimapur by private vehicle, which takes approximately 4-5 hours. Enjoy a packed lunch during the journey. Upon arrival in Dimapur, you will be dropped off at the airport or train station for your onward journey.",
        ],
      },
    ],
    inclusions: [
      "Accommodation (hotel in Kohima, tents in Dzukou Valley)",
      "All meals as specified in the itinerary",
      "Private transportation (Dimapur to Kohima, Kohima to Viswema, and return)",
      "Trekking permits and entry fees",
      "Professional trekking guide",
      "All tolls & driver charges",
      "Camping equipment (tents, sleeping bags, mats)",
      "First aid kit",
    ],
    exclusions: [
      "GST 5%",
      "Airfare/train fare to and from Dimapur.",
      "Personal expenses (laundry, telephone calls, etc.)",
      "Travel insurance",
      "Any meals not specified in the itinerary",
      "Tips and gratuities",
      "Any other expenses not mentioned in the inclusions.",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Personal Water Bottle",
      "Small backpack for personal items",
      "Hat or cap",
      "Sunglasses",
      "Light jacket for morning and evening",
      "Good quality walking/jogging or trekking shoes",
      "Comfortable trekking apparel, ideally full bottoms",
    ],
  },
];

export const SikkimTreks: TripDetail[] = [
  {
    id: "1",
    image: "test",
    title: "Sandakphu Trek",
    desc: 'The Sandakphu-Phalut Trek in the eastern Himalayas is a mesmerizing journey through the Singalila National Park, offering breathtaking views of the Everest cluster and the iconic "Sleeping Buddha." Renowned for its spectacular sunrises and sunsets, the trek takes you through dense bamboo and rhododendron forests, providing a chance to spot rare Himalayan wildlife. The cultural diversity, crossing between India and Nepal, adds a unique touch with warm hospitality and a prevailing Buddhist influence. Culinary delights include a fusion of Nepali and Tibetan cuisine, making the trek a sensory experience. Beyond the physical adventure, the trek holds a spiritual journey towards the Sleeping Buddha, leaving participants with indelible memories and a profound connection to the Himalayas.',
    durationn: "5",
    durationd: "6",
    link: "sikkim/treks/sandakphu-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title: " Drive from Siiliguri to okhrey | 128km (7500ft)/ 7 hours",
        activities: [
          "Start the journey from Siliguri to Okhrey, a scenic drive taking 6 to 7 hours.",
          "Traverse through the picturesque Himalayan foothills, enjoying changing landscapes.",
          "Arrive in Okhrey by late afternoon, a charming village nestled in the hills.",
          "Opt for an overnight stay in Okhrey for acclimatization to the altitude.",
          "Immerse yourself in the tranquil ambiance and prepare for the adventures ahead.",
        ],
      },
      {
        day: "Day 2",
        title: " 2: Okhrey to Ghorkhey | 10km (7700ft)/ 3 hours",
        activities: [
          "Begin the trek in the afternoon, soaking in the beauty of the natural surroundings.",
          "Traverse through forests, observing the local flora and fauna along the way.",
          "Enjoy occasional views of the hills as you ascend and descend through the trail.",
          "Reach Ghorkhey , a picturesque village surrounded by nature.",
          "Check into a local homestay or guesthouse for an authentic experience.",
          "Explore Ghorkhey in the remaining daylight, appreciating its unique charm.",
          "Rest and relax, immersing yourself in the serene atmosphere of Ghorkhey overnight.",
        ],
      },
      {
        day: "Day 3",
        title: "Trek from Ghorkey to Phalut | 15km (11,800ft)/ 6-7 hours",
        activities: [
          "Begin a challenging 15 km uphill trek to Phalut, taking approximately 5 to 6 hours through dense jungle terrain.",
          "Break for lunch at Alu Bari camp to refuel.",
          "Check in at your hotel or homestay in Phalut in the late afternoon for some rest.",
          "Later, embark on a short hike to witness a breathtaking sunset and enjoy stunning mountain views.",
          "Reflect on the day's challenges and relish the tranquility of Phalut's mountainous surroundings.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek from Phalut to Sandakphu | 21km (11,900ft)/9-10 hours",
        activities: [
          "Depart from Phalut for Sandakphu, continuing the trek with a scenic journey.",
          "Navigate the trail, capturing picturesque landscapes and diverse terrain along the way.",
          "Experience a mix of gradual descents and ascents, showcasing the beauty of the Singalila Range.",
          "Reach Sandakphu, the highest peak in West Bengal, and marvel at the panoramic views of the Himalayas.",
          "Check in at your accommodation, appreciating the unique charm of Sandakphu.",
          "Spend the evening exploring the surroundings or simply relaxing, preparing for the next leg of your trek.",
        ],
      },
      {
        day: "Day 5",
        title: "Trek from Sandakphu to Gurdum | 10km (11,900ft)/9-10hrs",
        activities: [
          "Begin your descent from the high-altitude terrain of Sandakphu, enjoying panoramic views along the way.",
          "Traverse diverse landscapes, including rhododendron forests and meadows, as you make your way to Gurdum.",
          "Experience the changing scenery and appreciate the unique flora and fauna of the region.",
          "Arrive at Gurdum and check in at your accommodation, relishing a sense of accomplishment.",
          "Spend the evening in Gurdum, unwinding and perhaps sharing trekking stories with fellow trekkers.",
          "Reflect on the day's journey, enjoying the serene atmosphere of Gurdum as you prepare for the next day's adventure.",
        ],
      },
      {
        day: "Day 6",
        title: "Gurdum to Siliguri | 85Km (7500ft)/3.5-5hrs",
        activities: [
          "Conclude your trek by hiking a last 45-minute to 1-hour stretch to Shrikhokla and take a cab from Shrikhokla to Siliguri, offering a comfortable and convenient journey.",
          "Enjoy a scenic drive, descending from the trek's endpoint in Gurdum.",
          "Relax during the cab ride, reflecting on the remarkable experiences and landscapes encountered during the trek.",
          "Upon reaching Siliguri, your trek concludes, marking the end of your adventurous journey.",
        ],
      },
    ],
    inclusions: [
      "Transportation - Xylo / Sumo Gola / Beloro or similar",
      "Siliguri to Okhrey (128km / 5-6hrs Approx)",
      "Okhrey to Patharey (7km / 40 Mins Approx)",
      "Gurdum to Siliguri (85km / 3-4hrs Approx)",
      "Accommodation - Homestay / Trekkers hut",
      "5 nights Accommodation - (Okhrey - 1 night, Ghorkhey - 1 night, Phalut - 1 night, Sandhakphu - 1 night, Gurdum - 1 night)",
      "Total 14 Meals (Dinner on Day 1, All meals on Day 2, All meals on Day 3, All meals on Day 4, All meals on Day 5 and breakfast on Day 6)",
      "Qualified and experienced trek leader and support staff",
      "Singalila National Park permit for 5 days for Indian and Nepali trekkers",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip.",
    ],
    thingsToCarryTrek: [
      {
        title: "Footwear and Bag:",
        list: ["Trekking shoes with ankle support", "Backpack with rain cover"],
      },
      {
        title: "Warm layers and clothes (Varies by Season)",
        list: [
          "Spring, Summer, Monsoon (3 Layers): Woollen sweater, fleece, padded jacket",
          "Autumn (4 Layers): Woollen sweater, 2 fleece, padded jacket",
          "Winter (5 Layers): Thermals, woollen sweater, 2 fleece, padded jacket",
          "3 Collared T-shirts, 2 quick-dry trek pants",
        ],
      },
      {
        title: "Accessories:",
        list: [
          "Sunglasses",
          "Sun cap with flaps",
          "Waterproof gloves",
          "Balaclava",
          "Woollen socks (2 Dry fit + 1 Woollen)",
          "Headlamp",
          "Trekking pole",
          "Rain jacket + pants / poncho",
        ],
      },
      {
        title: "Toiletries:",
        list: [
          "Sunscreen",
          "Moisturizer",
          "Light towel",
          "Lip balm",
          "Toilet paper (No wet wipes)",
          "Toothbrush",
          "Toothpaste",
          "Reusable plastic covers for used clothes",
        ],
      },
      {
        title: "Cutlery:",
        list: [
          "Steel lunch box",
          "Spoon",
          "Mug",
          "Two water bottles or Hydration Pack",
        ],
      },
    ],
  },
  {
    id: "2",
    image: "images/hero",
    title: "Goechala Trek",
    desc: "GoechaLa trek is nestled at a height of 16,207ft, with a closer look at the third-highest peak-Mt. Kanchenjunga. It is a dream and desire for hundreds of adventure lovers. Bounded by the mesmerizing flora and fauna, which are so vibrant and colourful to cheer up one's mood. The GoechaLa pass trek is a bundle of big summits, making it an absolute adventure to embark on. The trail link with the famous Kanchenjunga National Park, where one can witness the true nature, enough to revitalize your senses. To watch the mountains clearly, April and May are the ideal months. Since the sky is completely clear during this time and the sunset-sunrise views can be captured.",
    durationn: "9",
    durationd: "10",
    link: "treks/goechala-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          " Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        activities: [
          "Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        ],
      },
      {
        day: "Day 2",
        title:
          " Trek from Yuksom to Sachen | Trekking Distance: 8 km | Duration: 5-6 hours | Elevation: 7,150 ft.",
        activities: [
          "Wake up to the sounds of roosters and chirping birds. Gear up your shoes to embark on a trek to Sachen, and walk along the Rathong River while passing through the lush forests witnessing diverse plant life like rhododendrons and ferns. Next, cross the Paha Khola Bridge soaking in the wilderness and serenity around you. This journey promises adventure at every step, leaving you with memories to cherish forever. Upon arrival, relax in your camps for an overnight stay in the realm of nature.",
          "Begin your trek from Yuksom to Sachen, following the trail along the Rathong River.",
          "On the way, admire the beauty of various plant species like rhododendrons, ferns, etc.",
          "Proceed towards the Paha Khola Bridge, enjoying the scenic beauty of dense forest along the way.",
          "Upon reaching Sachen, settle down at the campsite, concluding your journey.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Trek from Sachen to Tshokha| Trekking Distance: 7 km | Duration: 4-5 hours | Elevation: 9.701 ft.",
        activities: [
          "Before you begin your uphill trek to Tshokha, make sure to fuel up and hydrate well. This trail offers the adventure, as you ascend through the majestic Prek Chu River soaking in the scenery of beautiful magnolias and rhododendrons. Keep climbing amidst the wonders of nature until you reach Tshoka, a Tibetan settlement situated in the mountains. Upon arrival, settle into your campsite and later, head out to interact with the locals for a cultural experience before calling it a night.",
          "Begin your uphill trek from Sachen to Tshoka, enjoying viburnum plants on the way.",
          "Cross the Prek Chu River and hike uphill to reach Bakhim.",
          "Continue trekking upwards until you arrive at Tshoka, a Tibetan refugee settlement.",
          "Explore the area and interact with the locals, enjoying your overnight stay at Tshoka.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Trek from Tshoka to Dzongri | Trekking Distance: 9 km | Duration: 5-6 hours | Elevation: 12,980 ft.",
        activities: [
          "Rise and shine amidst the scenic views of Tshokha! Get dressed to ascend from Tshoka to Dzongri, passing through the enchanting forests of rhododendrons. Next, make a quick stop at the Phedang village to relax your muscles before continuing on your journey. Later, as you walk towards Dzongri, take in the breathtaking views of Pandim and Ratong peaks. Upon arrival at the Dzongri, explore the nearby areas to learn about the rich culture before you settle into your camp for an overnight stay.",
          "Begin your uphill trek from Tshoka to Dzongri, passing through the forests of rhododendrons.",
          "On the way, visit the beautiful Phedang village, continuing the journey ahead.",
          "As you walk ahead towards Dzongri, admire the views of Pandim and Rathong peaks.",
          "Upon reaching the campsite, explore the nearby areas and interact with the locals, learning about their culture.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Trek to Dzongri Top | Trek Downhill to Thansing| Trekking Distance: 10 km | Duration: 4-5 hours | Elevation: 13,681 ft",
        activities: [
          "Start your day with an uphill trek to reach the Dzongri Top to experience the 360-degree view of Kanchenjunga. Once you reach the top, take a moment to breathe and admire the views of the Himalayas. Afterwards, trek back to Dzongri and from there, continue your journey to Thasing, passing through the Kokchurang village to spot Himalayan blue sheep and the Himalayan monal. Upon arrival, settle in your camp surrounded by the Koktang and Pandim peaks of the Himalayas for an overnight stay.",
          "Trek uphill from Dzongri to Dzongri Top, covering a notable distance in the Himalayas.",
          "Relax and take-in the views of the mountains, valleys, and surroundings.",
          "Also, enjoy the panoramic views of Kanchenjunga, the third-highest peak in the world.",
          "Climb down to Dzongri to back up your bags, trekking down to Thansing.",
          "On the way, visit Kokchurang and admire the views of the surrounding valleys and mountain peaks.",
          "You may also spot wildlife in the area, like the Himalayan blue sheep and the Himalayan monal.",
          "After reaching Thansing, take-in the beauty of amazing mountain peaks like Koktang and Pandim, among others.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Trek from Thansing to Lamuney | Trekking Distance: | Duration: | Elevation: 13,600 ft.",
        activities: [
          "Wake up to the scenic views and nature’s rhythm. Later, embark on an adventurous journey from Thansing to Lamuney, a scenic trek that takes you through the rugged terrain of the Himalayas. Pass through the mesmerizing views of snow-capped peaks, lush green valleys, and streams. Also, witness the vibrant flora and fauna. Upon arrival, get comfortable in your tents for an overnight stay amidst the mountains of Pandim and Kanchenjunga.",
          "Begin your uphill trek from Thansing to Lamuney, exploring the surroundings as you move ahead.",
          "Observe the flora and fauna, such as colorful alpine flowers and beautiful mountain birds.",
          "Upon reaching Lamuney, roam around the village and interact with the locals learning about their culture.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka| Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka | Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "Upon arrival, explore the area and learn about the lifestyle of the locals there.",
        ],
      },
      {
        day: "Day 9",
        title:
          "Downhill Trek from Tshoka to Yuksom | Trekking Distance: 8 km | Duration: 3-4 hours | Elevation: 5,840 ft.",
        activities: [
          "Take in the fresh air and recharge yourself before you begin your last and long descent from Tshokha village to Yuksom. You will be crossing the same path as you climbed from Goechala. Later, on your way, explore the beautiful Bakhim village and take in the stunning views of the surroundings. Next, continue your journey by walking on the trail that passes through Sachen. Finally, once you reach Yuksom, take the time to relax for the day and enjoy an overnight stay at your camp/homestay.",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
      {
        day: "Day 10",
        title: "Departure Day",
        activities: [
          "Saying goodbye to the picturesque valleys, lush forests, rocky terrains, and snow-capped mountains can be a tough pill to swallow. But don't worry, you'll be leaving with a bag full of incredible memories and a few aches and pains from all the trekking. It's time to check out from your cozy camp/homestay and head to the airport or railway station to reunite with your loved ones eagerly waiting for you back home. Safe travels!",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
    ],
    inclusions: [
      "2 Nights Guest House / Homestay accommodation in Yuksom on a Quad/Triple Sharing basis.",
      "7 Nights Tented accommodation while on the trek on a triple sharing basis.",
      "All Veg Meals from 2nd Day Lunch to till 9th Day Lunch while on Trek",
      "Morning, evening tea/coffee served with light snacks while on the trek.",
      "Trekking Equipment like Sleeping bags, sleeping mattresses, Sleeping tents, utensils.",
      "All fees and permits for Indians are included in the Goechala trek package.",
      "All meals are included from dinner on Day 1 to Breakfast on Day 10.",
      "Basic First Aid Medical kit, Oxygen Cylinder, and Oxi Meter.",
      "Qualified and experienced Trek Leader and support staff.",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Warm Clothes (Mandatory Item)",
      "Walking stick (Mandatory Item)",
      "Hiking shoes (Mandatory Item)",
      "Water bottle (Mandatory Item)",
      "Backpack (50-60l) (Mandatory Item)",
      "Caps",
      "Woollen cap, socks, mittens & scarf",
      "Thermal inners",
      "Waterproof windcheater",
      "Extra pair of socks",
      "Fleece jackets and thermals",
      "Toilet paper & wipes",
      "Day pack (20-30l)",
    ],
    knowBeforeYouGo: [
      "Please carry a valid ID proof.",
      "Take your time adjusting to high altitudes, as the weather conditions can be different from lower areas.",
      "Listen to your trek leaders or instructors carefully for a safe and enjoyable experience.",
      "Carry basic medications and a first-aid kit during the tour.",
      "No bill will be reimbursed for any missed service/facility.",
      "Keep your luggage minimum; the more you carry, the more you hassle.",
      "Any personal expenses, items of personal nature, meals not mentioned, etc. will not be in part of the package.",
      "Mobile & laptop charging points may/may not be available on campsites at a common point.",
      "Avoid using plastic bags and maintain the ecological balance of the destinations.",
      "It is recommended to carry enough warm clothes and the right kind of shoes for the trek.",
      "Please note that in the event of emergencies or natural calamities, the management reserves the right to modify the trek itinerary. However, any changes due to circumstances beyond our control is not covered in the package cost.",
    ],
  }
];

export const SikkimCuratedPackages: TripDetail[] = [
  {
    id: "1",
    image: "images/hero",
    title: "North Sikkim Tour",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "4",
    durationd: "5",
    link: "sikkim/curated-north-sikkim-4nights-5days",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Bagdogra (IXB) Airport or New Jalpaiguri (NJP) Railway Station, you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 3",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
          "Optional Activity: Visit Mt. Katao for an additional cost of INR 3000-3500 per vehicle.",
          "Optional Activity: Vist Sangla Phu lake for Additional cost of INR 1500 Per vehicle.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Departure from Gangtok to Bagdogra Airport / NJP railway station ",
        activities: [
          "After breakfast, check out from your hotel in Gangtok.",
          "You will be driven to Bagdogra Airport (IXB) or New Jalpaiguri (NJP) Railway Station for your onward journey.",
          "Reflect on the wonderful memories of your trip as you travel back, ensuring a comfortable and timely arrival at your destination.",
        ],
      },
    ],
    inclusions: [
      "Travel as per Itinerary in Hatchback/SUV (as per group size).",
      "Accommodation as per the itinerary.",
      "Driver Charges, Permits, Tolls, Fuel & Parking charges.",
      "Airport/ Railway Station Pickup and Drop.",
      "All inner line permit if anything applicable",
    ],
    exclusions: [
      "GST (5%) is applicable extra.",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Any personal expense like tip to the drivers, entry to the monuments. monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card/Passport/Driving licence)",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses",
      "Personal Medicines (if any).",
    ],
  },
  {
    id: "2",
    image: "test",
    title: "North Sikkim + Nathula Pass",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "5",
    durationd: "6",
    link: "sikkim/curated-north-sikkim-tour-nathula-pass",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Siliguri you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Full day Tsogmo Lake, Baba Mandir and Nathula pass excursion",
        activities: [
          "After breakfast, we will embark on a full-day excursion exploring the beautiful surroundings of Gangtok.",
          "Our first stop will be the glacial Tsomgo Lake, also known as Changu Lake. This stunning lake is renowned for its scenic beauty and ever-changing colors.",
          "Next, we will drive to the Baba Mandir, a shrine dedicated to Baba Harbhajan Singh, a revered soldier of the Indian Army.",
          "We will then visit Nathula Pass, an Indo-China border post (Note: Nathula Pass is closed on Mondays and Tuesdays).",
          "After an eventful day, we will return to Gangtok for an overnight stay at your hotel.",
          "Note: Nathu La Pass can be added at an extra cost of INR 4000/- per vehicle",
        ],
      },
      {
        day: "Day 3",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
        ],
      },
      {
        day: "Day 5",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Departure from Gangtok to Bagdogra Airport / NJP railway station",
        activities: [
          "After breakfast, check out from your hotel in Gangtok.",
          "You will be driven to Siliguri for your onward journey.",
          "Reflect on the wonderful memories of your trip as you travel back, ensuring a comfortable and timely arrival at your destination.",
        ],
      },
    ],
    inclusions: [
      "Travel as per Itinerary in Hatchback/ SUV (as per group size).",
      "Accommodation according to the itinerary",
      "Driver Charges, Permits, Tolls, Fuel & Parking charges.",
      "Airport/Railway Station Pickup and Drop.",
      "All inner line permit if anything applicable",
    ],
    exclusions: [
      "GST (5%) is applicable extra",
      "Any kind of food and beverages that is not included in the package like alcoholic drinks, mineral water, meals/refreshment/lunches on the highway",
      "Any personal expense like tip to the drivers, entry to the monuments, monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any cost arising due to natural calamities like landslides, roadblocks, route diversion etc. (to be borne by the customer on the spot)",
      "Anything not mentioned in the inclusion",
      "Air fares/Train Tickets",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card / Passport / Driving licence)",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses",
      "Personal Medicines (if any)",
    ],
  },
  {
    id: "3",
    image: "test",
    title: "North Sikkim + Nathula Pass + Pelling",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "7",
    durationd: "8",
    link: "sikkim/curated-north-sikkim-nathula-pass-pelling",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Bagdogra (IXB) Airport or New Jalpaiguri (NJP) Railway Station, you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Full day Tsogmo Lake, Baba Mandir and Nathula pass excursion",
        activities: [
          "After breakfast, we will embark on a full-day excursion exploring the beautiful surroundings of Gangtok.",
          "Our first stop will be the glacial Tsomgo Lake, also known as Changu Lake. This stunning lake is renowned for its scenic beauty and ever-changing colors.",
          "Next, we will drive to the Baba Mandir, a shrine dedicated to Baba Harbhajan Singh, a revered soldier of the Indian Army.",
          "We will then visit Nathula Pass, an Indo-China border post (Note: Nathula Pass is closed on Mondays and Tuesdays).",
          "After an eventful day, we will return to Gangtok for an overnight stay at your hotel.",
          "Note: Nathu La Pass can be added at an extra cost of INR 4000/- per vehicle",
        ],
      },
      {
        day: "Day 3",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
          "Optional Activity: Visit Mt. Katao for an additional cost of INR 3000-3500 per vehicle.",
          "Optional Activity: Visit Sangla Phu lake for Additional cost of INR 1500 Per vehicle.",
        ],
      },
      {
        day: "Day 5",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 6",
        title: "Gangtok to Pelling via Ravangla",
        activities: [
          "After enjoying a hearty breakfast, prepare for a scenic transfer from Gangtok to Pelling, passing through the charming town of Ravangla.",
          "En route, make a memorable stop at Buddha Park in Ravangla. Here, you'll be awed by the magnificent 130 ft. high Shakyamuni Buddha statue, set against a backdrop of serene landscapes. Take some time to stroll through the beautifully maintained park, soaking in the peaceful atmosphere and capturing some photographs.",
          "Continuing your journey, you'll drive through picturesque landscapes with lush greenery, quaint villages, and stunning views of the Kanchenjunga Ranges. The sight of these majestic mountains will leave you mesmerized and provide ample photo opportunities.",
          "As you approach Pelling, you’ll notice the landscape changing, with the dense forests and cascading waterfalls that characterize this beautiful region.",
          "Upon reaching Pelling, check into your hotel and unwind after the journey. Take some time to relax and freshen up. If you're up for it, you can take a leisurely walk around the hotel premises or explore nearby areas to get a feel of the local culture and scenery.",
          "Settle in for a comfortable overnight stay in Pelling, ready to explore more of this enchanting region the next day.",
        ],
      },
      {
        day: "Day 7",
        title: "Local Sightseeing in Pelling",
        activities: [
          "After a hearty breakfast, indulge in an immersive City tour of Pelling.",
          "Head to the sacred Khecheopalri Lake which is also known as the wish-fulfilling lake and has religious significance in both Hindu and Buddhist folklore.",
          "Further sightseeing will include a visit to some of the most scenic waterfalls like Rimbi Waterfalls and the Kanchenjunga Waterfall.",
          "Later, seek blessings of the local deities by visiting the Khecheopalri Monastery and Pemayangtse Monastery.",
          "Visit the Rabdentse Ruins to know about the glorious past of Sikkim.",
          "Experience the thrill of walking on the Pelling Skywalk and enjoy breathtaking views of the surrounding landscapes and Kanchenjunga range.",
          "Return back to the hotel, after a day full of sightseeing for an overnight stay.",
        ],
      },
      {
        day: "Day 8",
        title: "Departure from Pelling to NJP Station / Bagdogra Airport",
        activities: [
          "After having a hearty breakfast, check out from your hotel and prepare for your departure.",
          "Enjoy a comfortable drive to NJP Station or Bagdogra Airport (IXB).",
          "Your tour concludes upon arrival at your desired location for your onward journey.",
          "Head back home with a plethora of good memories from your trip."
        ]
      }
    ],
    inclusions: [
      "Travel as per Itinerary in Hatchback/SUV (as per group size).",
      "Accommodation as per the itinerary.",
      "Driver Charges, Permits, Tolls, Fuel & Parking charges.",
      "Airport/ Railway Station Pickup and Drop.",
      "All inner line permit if anything applicable."
    ],
    exclusions: [
      "GST (5%) is applicable extra.",
      "Any kind of food and beverages that is not included in the package like alcoholic drinks, mineral water, meals/refreshment/lunches on the highway.",
      "Any personal expense like tip to the drivers, entry to the monuments, monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any cost arising due to natural calamities like landslides, roadblocks etc. (to be borne by the customer on the spot).",
      "Anything not mentioned in the inclusion.",
      "Air fares/Train Tickets.",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card/Passport/Driving licence).",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses.",
      "Personal Medicines (if any).",
    ],
  },
  {
    id: "4",
    image: "test",
    title: "Pelling Tour",
    desc: "Pelling is a small town located in the southern part of Sikkim, blessed with rich culture and heritage. The town is a popular tourist destination and gives an amazing view of Mt Kanchenjunga. On the 4 days, south Sikkim tour one shall be covering the most renowned location and age-old places. The tour shall take you to a famous hamlet. Yuksom gets mesmerized by the views and also visits some of the beautiful water bodies of the location. Take a great experience and beautiful stories to share along with you.",
    durationn: "3",
    durationd: "4",
    link: "sikkim/curated-pelling-tour",
    detailedItinerary: [
        {
            day: "Day 1",
            title: "NJP Railway station/Bagdogra Airport to Pelling (141 KM | 4 Hrs)",
            activities: [
                "Upon arrival at the Bagdogra Airport/NJP Railway Station, our representative will meet you and transfer you to Pelling.",
                "Enjoy the scenic views along the route toward the location.",
                "Check in to the Hotel/Homestay.",
                "Evening at leisure - one can take a walk in the local market.",
                "Overnight stay at Pelling/Darap."
            ]
        },
        {
            day: "Day 2",
            title: "Pelling Full days City Tour",
            activities: [
                "After a hearty breakfast in the morning, indulge in an immersive city tour of Pelling.",
                "Start the tour with a visit to a famous Singshore Bridge.",
                "Visit Pelling Skywalk and witness the natural vista.",
                "Visit Pemayangtse Monastery to feel the calmness of nature.",
                "Head to the sacred Khecheopalri Lake, also known as the wish-fulfilling lake, and stroll around the lake.",
                "Overnight stay at the Hotel/Homestay."
            ]
        },
        {
            day: "Day 3",
            title: "Pelling to Yuksom Via Kanchenjunga Falls (74 Km | 3 Hrs)",
            activities: [
                "After a mouth-watering breakfast, go on an excursion tour of Yuksom.",
                "On the way, visit Rimbi Falls and Kanchenjunga Falls to witness the beauty of flowing water.",
                "Visit the oldest monastery of Sikkim and seek the blessing.",
                "En-route, visit the famous cardamom and orange plantation by Rimbi River.",
                "In the evening, you can choose to explore the local markets of the city or relax at the hotel/Homestay.",
                "Overnight stay at the hotel/Homestay."
            ]
        },
        {
            day: "Day 4",
            title: "Pelling - IXB/NJP Railway Station (90 KM | 3 Hrs)",
            activities: [
                "After breakfast, move to IXB/NJP Railway station.",
                "Depart with a lot of amazing memories."
            ]
        }
    ],
    inclusions: [
        "Entire travel as per the itinerary.",
        "3 Nights Accommodation (3 nights in Pelling/Darap) - Hotel/Homestays on double/triple sharing basis.",
        "A total of 6 meals (D1 - Dinner, D2 & D3 - Breakfast & dinner, D4 - Breakfast).",
        "24/7 Support from Sikkim Expert.",
        "Parking & Tolls Charges.",
        "NOTE: If you don’t choose your room category, you will be allotted a base category room by default."
    ],
    exclusions: [
        "GST (5%) is applicable extra.",
        "Any item which is not mentioned in the Inclusion section.",
        "Siliguri pick up & drop not included.",
        "Any other meals not mentioned in the Inclusion section.",
        "All Museums, Monuments, and other entry fees.",
        "Laundry, tips, phone calls, or any personal expenses.",
        "Any expense personal in nature."
    ],
    bookingProcess: [
        "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
        "The remaining amount must be paid at least 2 days before the trip departure.",
        "After the payment is completed, please share your ID proof and email address.",
        "A confirmation email will be sent to you once all the details are received."
    ],
    thingsToCarry: [
        "Authentic Government ID Card (Voter card / Passport / Driving licence).",
        "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
        "Sunscreen & lip balm, Good U/V protection sunglasses.",
        "Personal medicines (if any)."
    ]
}
];

export const SikkimUpcomingTours: TripDetail[] = [
  {
    id: "1",
    image: "test",
    title: "North Sikkim + Nathula Pass",
    desc: "When you think of Sikkim, you can definitely relate snow with its name. Our North Sikkim Tour package will let you have an enlightening experience with nature, snow and the amazing landscapes that come with it.",
    durationn: "5",
    durationd: "6",
    originalPrice: "",
    currentPrice: "₹22,499/-",
    link: "sikkim/upcoming-north-sikkim-tour-nathula-pass",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          "Arrival at Bagdogra Airport / New Jalpaiguri Railway Station (NJP) and Transfer to Gangtok",
        activities: [
          "Upon arrival at Siliguri you will be warmly greeted by our representative.",
          "From here, you will board our comfortable vehicle and commence your journey to Gangtok.",
          "During the drive, you will make a brief stop at the Triveni View Point, where you can witness the stunning confluence of the Teesta and Rangeet rivers.",
          "Enjoy the scenic drive to Gangtok, navigating through the winding roads along the picturesque Teesta River.",
          "In the evening, you will have the opportunity to visit MG Marg on your own and explore the vibrant local atmosphere.",
          "Arrive in Gangtok and check into your hotel for an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Full day Tsogmo Lake, Baba Mandir and Nathula pass excursion with Tambi View Point",
        activities: [
          "After breakfast, we will embark on a full-day excursion exploring the beautiful surroundings of Gangtok.",
          "Our first stop will be the glacial Tsomgo Lake, also known as Changu Lake. This stunning lake is renowned for its scenic beauty and ever-changing colors.",
          "Next, we will drive to the Baba Mandir, a shrine dedicated to Baba Harbhajan Singh, a revered soldier of the Indian Army.",
          "We will then visit Nathula Pass, an Indo-China border post (Note: Nathula Pass is closed on Mondays and Tuesdays).",
          "After an eventful day, we will return to Gangtok for an overnight stay at your hotel.",
          "Note: Nathu La Pass can be added at an extra cost of INR 4000/- per vehicle",
        ],
      },
      {
        day: "Day 3",
        title: "Gangtok to Lachung - Scenic Drive with En Route Sightseeing",
        activities: [
          "Wake up and enjoy a delicious breakfast before beginning your journey to the charming town of Lachung.",
          "As you travel towards Lachung, you will pass through the picturesque Chungthang town, located near the majestic Kanchenjunga. Here, you can witness the confluence of the Lachen chu and Lachung Chu rivers.",
          "Continue your drive towards the village of Lachung, perched at an elevation of 9500 feet. Along the way, you will be treated to breathtaking views of snow-capped peaks and beautiful alpine meadows.",
          "Your route will take you along the boundary of the Kanchenjunga National Park, offering glimpses of various picturesque hamlets and stunning landscapes.",
          "Upon arrival in Lachung, check into your hotel or homestay. Enjoy a delicious dinner and settle in for an overnight stay in Lachung.",
        ],
      },
      {
        day: "Day 4",
        title: "Lachung - Yumthang Valley and Zero Point Excursion",
        activities: [
          "Wake up to the peaceful sound of yak bells and enjoy an early breakfast. Your driver will then pick you up for an exciting excursion to Yumthang Valley.",
          "Explore the Yumthang Valley, often referred to as the Valley of Flowers in Sikkim, where you can admire vibrant primulas, rhododendrons, and a variety of alpine flowers.",
          "Next, take a relaxing soak in the local hot springs, known for their therapeutic properties.",
          "From Yumthang Valley, continue your journey to Zero Point, located at an altitude of 16,000 feet, where the world feels closer to the sky.",
          "After the excursion, return to Lachung and then travel back to Lachung for an overnight stay at your hotel.",
        ],
      },
      {
        day: "Day 5",
        title: "Lachung to Gangtok - Transfer",
        activities: [
          "After breakfast, bid farewell to Lachung and embark on your drive back to Gangtok.",
          "Upon arrival in Gangtok, check into your hotel and take some time to relax.",
          "You will have the rest of the day to explore the city at your leisure. Be sure to try some local delicacies and immerse yourself in the vibrant culture of Gangtok.",
          "Overnight stay at your hotel in Gangtok.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Departure from Gangtok to Bagdogra Airport / NJP railway station",
        activities: [
          "After breakfast, check out from your hotel in Gangtok.",
          "You will be driven to Siliguri for your onward journey.",
          "Reflect on the wonderful memories of your trip as you travel back, ensuring a comfortable and timely arrival at your destination.",
        ],
      },
    ],
    inclusions: [
      "Entire travel as per the itinerary in a private vehicle (Siliguri to Siliguri)",
      "5 Nights accommodation (3 nights stay in Gangtok, 2 nights stay in Lachung) on double/triple sharing",
      "Note: Single occupancy accommodation is available for an additional cost of 2500/-",
      "A total of 10 meals (Dinner on Day 1, Breakfast and Dinner on Day 2, Breakfast and Dinner on Day 3, Breakfast and Dinner on Day 4, Breakfast and Dinner on Day 5 and Breakfast on Day 6)",
      "All inner line permits if anything applicable",
      "Driver Allowances and fuel",
      "Parking",
      "Permit for Tsomgo Lake, Baba Mandir and Nathula pass",
      "Extra cost for Nathula pass and Zero point included",
    ],
    exclusions: [
      "GST (5%) is applicable extra",
      "Any kind of food and beverages that is not included in the package like alcohol drinks, mineral water, meals/refreshment/lunches on the highway",
      "Any personal expense like tip to the drivers, entry to the monuments, monasteries, camera/video camera charges, laundry, telephone bills, tips etc.",
      "Any cost arising due to natural calamities like landslides, roadblocks, route diversion etc. (to be borne by the customer on the spot)",
      "Anything not mentioned in the inclusion",
      "Air fares/Train Tickets",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Authentic Government ID Card (Voter card / Passport / Driving licence)",
      "Comfortable warm clothing like woollen socks, cap, fleece jackets or warmers, down jacket, toiletries.",
      "Sunscreen & lip balm, Good U/V protection sunglasses",
      "Personal Medicines (if any)",
    ],
  },
  {
    id: "2",
    image: "test",
    title: "Sandakphu Trek",
    desc: 'The Sandakphu-Phalut Trek in the eastern Himalayas is a mesmerizing journey through the Singalila National Park, offering breathtaking views of the Everest cluster and the iconic "Sleeping Buddha." Renowned for its spectacular sunrises and sunsets, the trek takes you through dense bamboo and rhododendron forests, providing a chance to spot rare Himalayan wildlife. The cultural diversity, crossing between India and Nepal, adds a unique touch with warm hospitality and a prevailing Buddhist influence. Culinary delights include a fusion of Nepali and Tibetan cuisine, making the trek a sensory experience. Beyond the physical adventure, the trek holds a spiritual journey towards the Sleeping Buddha, leaving participants with indelible memories and a profound connection to the Himalayas.',
    durationn: "5",
    durationd: "6",
    costDouble: "13,999/-",
    constTriple: "14,999/-",
    link: "sikkim/upcoming-sandakhpu-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title: " Drive from Siiliguri to okhrey | 128km (7500ft)/ 7 hours",
        activities: [
          "Start the journey from Siliguri to Okhrey, a scenic drive taking 6 to 7 hours.",
          "Traverse through the picturesque Himalayan foothills, enjoying changing landscapes.",
          "Arrive in Okhrey by late afternoon, a charming village nestled in the hills.",
          "Opt for an overnight stay in Okhrey for acclimatization to the altitude.",
          "Immerse yourself in the tranquil ambiance and prepare for the adventures ahead.",
        ],
      },
      {
        day: "Day 2",
        title: " 2: Okhrey to Ghorkhey | 10km (7700ft)/ 3 hours",
        activities: [
          "Begin the trek in the afternoon, soaking in the beauty of the natural surroundings.",
          "Traverse through forests, observing the local flora and fauna along the way.",
          "Enjoy occasional views of the hills as you ascend and descend through the trail.",
          "Reach Ghorkhey , a picturesque village surrounded by nature.",
          "Check into a local homestay or guesthouse for an authentic experience.",
          "Explore Ghorkhey in the remaining daylight, appreciating its unique charm.",
          "Rest and relax, immersing yourself in the serene atmosphere of Ghorkhey overnight.",
        ],
      },
      {
        day: "Day 3",
        title: "Trek from Ghorkey to Phalut | 15km (11,800ft)/ 6-7 hours",
        activities: [
          "Begin a challenging 15 km uphill trek to Phalut, taking approximately 5 to 6 hours through dense jungle terrain.",
          "Break for lunch at Alu Bari camp to refuel.",
          "Check in at your hotel or homestay in Phalut in the late afternoon for some rest.",
          "Later, embark on a short hike to witness a breathtaking sunset and enjoy stunning mountain views.",
          "Reflect on the day's challenges and relish the tranquility of Phalut's mountainous surroundings.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek from Phalut to Sandakphu | 21km (11,900ft)/9-10 hours",
        activities: [
          "Depart from Phalut for Sandakphu, continuing the trek with a scenic journey.",
          "Navigate the trail, capturing picturesque landscapes and diverse terrain along the way.",
          "Experience a mix of gradual descents and ascents, showcasing the beauty of the Singalila Range.",
          "Reach Sandakphu, the highest peak in West Bengal, and marvel at the panoramic views of the Himalayas.",
          "Check in at your accommodation, appreciating the unique charm of Sandakphu.",
          "Spend the evening exploring the surroundings or simply relaxing, preparing for the next leg of your trek.",
        ],
      },
      {
        day: "Day 5",
        title: "Trek from Sandakphu to Gurdum | 10km (11,900ft)/9-10hrs",
        activities: [
          "Begin your descent from the high-altitude terrain of Sandakphu, enjoying panoramic views along the way.",
          "Traverse diverse landscapes, including rhododendron forests and meadows, as you make your way to Gurdum.",
          "Experience the changing scenery and appreciate the unique flora and fauna of the region.",
          "Arrive at Gurdum and check in at your accommodation, relishing a sense of accomplishment.",
          "Spend the evening in Gurdum, unwinding and perhaps sharing trekking stories with fellow trekkers.",
          "Reflect on the day's journey, enjoying the serene atmosphere of Gurdum as you prepare for the next day's adventure.",
        ],
      },
      {
        day: "Day 6",
        title: "Gurdum to Siliguri | 85Km (7500ft)/3.5-5hrs",
        activities: [
          "Conclude your trek by hiking a last 45-minute to 1-hour stretch to Shrikhokla and take a cab from Shrikhokla to Siliguri, offering a comfortable and convenient journey.",
          "Enjoy a scenic drive, descending from the trek's endpoint in Gurdum.",
          "Relax during the cab ride, reflecting on the remarkable experiences and landscapes encountered during the trek.",
          "Upon reaching Siliguri, your trek concludes, marking the end of your adventurous journey.",
        ],
      },
    ],
    inclusions: [
      "Transportation - Xylo / Sumo Gola / Beloro or similar",
      "Siliguri to Okhrey (128km / 5-6hrs Approx)",
      "Okhrey to Patharey (7km / 40 Mins Approx)",
      "Gurdum to Siliguri (85km / 3-4hrs Approx)",
      "Accommodation - Homestay / Trekkers hut",
      "5 nights Accommodation - (Okhrey - 1 night, Ghorkhey - 1 night, Phalut - 1 night, Sandhakphu - 1 night, Gurdum - 1 night)",
      "Total 14 Meals (Dinner on Day 1, All meals on Day 2, All meals on Day 3, All meals on Day 4, All meals on Day 5 and breakfast on Day 6)",
      "Qualified and experienced trek leader and support staff",
      "Singalila National Park permit for 5 days for Indian and Nepali trekkers",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip.",
    ],
    thingsToCarryTrek: [
      {
        title: "Footwear and Bag:",
        list: ["Trekking shoes with ankle support", "Backpack with rain cover"],
      },
      {
        title: "Warm layers and clothes (Varies by Season)",
        list: [
          "Spring, Summer, Monsoon (3 Layers): Woollen sweater, fleece, padded jacket",
          "Autumn (4 Layers): Woollen sweater, 2 fleece, padded jacket",
          "Winter (5 Layers): Thermals, woollen sweater, 2 fleece, padded jacket",
          "3 Collared T-shirts, 2 quick-dry trek pants",
        ],
      },
      {
        title: "Accessories:",
        list: [
          "Sunglasses",
          "Sun cap with flaps",
          "Waterproof gloves",
          "Balaclava",
          "Woollen socks (2 Dry fit + 1 Woollen)",
          "Headlamp",
          "Trekking pole",
          "Rain jacket + pants / poncho",
        ],
      },
      {
        title: "Toiletries:",
        list: [
          "Sunscreen",
          "Moisturizer",
          "Light towel",
          "Lip balm",
          "Toilet paper (No wet wipes)",
          "Toothbrush",
          "Toothpaste",
          "Reusable plastic covers for used clothes",
        ],
      },
      {
        title: "Cutlery:",
        list: [
          "Steel lunch box",
          "Spoon",
          "Mug",
          "Two water bottles or Hydration Pack",
        ],
      },
    ],
  },
  {
    id: "3",
    image: "images/hero",
    title: "Goechala Trek",
    desc: "GoechaLa trek is nestled at a height of 16,207ft, with a closer look at the third-highest peak-Mt. Kanchenjunga. It is a dream and desire for hundreds of adventure lovers. Bounded by the mesmerizing flora and fauna, which are so vibrant and colourful to cheer up one's mood. The GoechaLa pass trek is a bundle of big summits, making it an absolute adventure to embark on. The trail link with the famous Kanchenjunga National Park, where one can witness the true nature, enough to revitalize your senses. To watch the mountains clearly, April and May are the ideal months. Since the sky is completely clear during this time and the sunset-sunrise views can be captured.",
    durationn: "9",
    durationd: "10",
    costDouble: "24,499/-",
    link: "sikkim/upcoming-goechala-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title:
          " Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        activities: [
          "Arrival to Bagdogra Airport or NJP Train Station transfer to Yuksom . Drive Distance: 159 km | Drive Duration: 7 hours | NJP railway station / Bagdogra airport.",
        ],
      },
      {
        day: "Day 2",
        title:
          " Trek from Yuksom to Sachen | Trekking Distance: 8 km | Duration: 5-6 hours | Elevation: 7,150 ft.",
        activities: [
          "Wake up to the sounds of roosters and chirping birds. Gear up your shoes to embark on a trek to Sachen, and walk along the Rathong River while passing through the lush forests witnessing diverse plant life like rhododendrons and ferns. Next, cross the Paha Khola Bridge soaking in the wilderness and serenity around you. This journey promises adventure at every step, leaving you with memories to cherish forever. Upon arrival, relax in your camps for an overnight stay in the realm of nature.",
          "Begin your trek from Yuksom to Sachen, following the trail along the Rathong River.",
          "On the way, admire the beauty of various plant species like rhododendrons, ferns, etc.",
          "Proceed towards the Paha Khola Bridge, enjoying the scenic beauty of dense forest along the way.",
          "Upon reaching Sachen, settle down at the campsite, concluding your journey.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Trek from Sachen to Tshokha| Trekking Distance: 7 km | Duration: 4-5 hours | Elevation: 9.701 ft.",
        activities: [
          "Before you begin your uphill trek to Tshokha, make sure to fuel up and hydrate well. This trail offers the adventure, as you ascend through the majestic Prek Chu River soaking in the scenery of beautiful magnolias and rhododendrons. Keep climbing amidst the wonders of nature until you reach Tshoka, a Tibetan settlement situated in the mountains. Upon arrival, settle into your campsite and later, head out to interact with the locals for a cultural experience before calling it a night.",
          "Begin your uphill trek from Sachen to Tshoka, enjoying viburnum plants on the way.",
          "Cross the Prek Chu River and hike uphill to reach Bakhim.",
          "Continue trekking upwards until you arrive at Tshoka, a Tibetan refugee settlement.",
          "Explore the area and interact with the locals, enjoying your overnight stay at Tshoka.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Trek from Tshoka to Dzongri | Trekking Distance: 9 km | Duration: 5-6 hours | Elevation: 12,980 ft.",
        activities: [
          "Rise and shine amidst the scenic views of Tshokha! Get dressed to ascend from Tshoka to Dzongri, passing through the enchanting forests of rhododendrons. Next, make a quick stop at the Phedang village to relax your muscles before continuing on your journey. Later, as you walk towards Dzongri, take in the breathtaking views of Pandim and Ratong peaks. Upon arrival at the Dzongri, explore the nearby areas to learn about the rich culture before you settle into your camp for an overnight stay.",
          "Begin your uphill trek from Tshoka to Dzongri, passing through the forests of rhododendrons.",
          "On the way, visit the beautiful Phedang village, continuing the journey ahead.",
          "As you walk ahead towards Dzongri, admire the views of Pandim and Rathong peaks.",
          "Upon reaching the campsite, explore the nearby areas and interact with the locals, learning about their culture.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Trek to Dzongri Top | Trek Downhill to Thansing| Trekking Distance: 10 km | Duration: 4-5 hours | Elevation: 13,681 ft",
        activities: [
          "Start your day with an uphill trek to reach the Dzongri Top to experience the 360-degree view of Kanchenjunga. Once you reach the top, take a moment to breathe and admire the views of the Himalayas. Afterwards, trek back to Dzongri and from there, continue your journey to Thasing, passing through the Kokchurang village to spot Himalayan blue sheep and the Himalayan monal. Upon arrival, settle in your camp surrounded by the Koktang and Pandim peaks of the Himalayas for an overnight stay.",
          "Trek uphill from Dzongri to Dzongri Top, covering a notable distance in the Himalayas.",
          "Relax and take-in the views of the mountains, valleys, and surroundings.",
          "Also, enjoy the panoramic views of Kanchenjunga, the third-highest peak in the world.",
          "Climb down to Dzongri to back up your bags, trekking down to Thansing.",
          "On the way, visit Kokchurang and admire the views of the surrounding valleys and mountain peaks.",
          "You may also spot wildlife in the area, like the Himalayan blue sheep and the Himalayan monal.",
          "After reaching Thansing, take-in the beauty of amazing mountain peaks like Koktang and Pandim, among others.",
        ],
      },
      {
        day: "Day 6",
        title:
          "Trek from Thansing to Lamuney | Trekking Distance: | Duration: | Elevation: 13,600 ft.",
        activities: [
          "Wake up to the scenic views and nature’s rhythm. Later, embark on an adventurous journey from Thansing to Lamuney, a scenic trek that takes you through the rugged terrain of the Himalayas. Pass through the mesmerizing views of snow-capped peaks, lush green valleys, and streams. Also, witness the vibrant flora and fauna. Upon arrival, get comfortable in your tents for an overnight stay amidst the mountains of Pandim and Kanchenjunga.",
          "Begin your uphill trek from Thansing to Lamuney, exploring the surroundings as you move ahead.",
          "Observe the flora and fauna, such as colorful alpine flowers and beautiful mountain birds.",
          "Upon reaching Lamuney, roam around the village and interact with the locals learning about their culture.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka| Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 7",
        title:
          "Trek to Goechala | Downhill Trek to Kokchurang | Trekking Distance: 11 km | Duration: 4-5hours | Elevation: 15,100 ft.",
        activities: [
          "It’s going to be a long day of trekking, so hydrate well. Begin your trek to Goechala, passing through the still waters of Samiti Lake and challenging trails. Continue until you reach Goechala, via Zemathang. Upon arrival at viewpoint 1 of Goechala Pass, relax for a while amidst the Himalayan ranges. Afterwards, descend to the Kokchurang village crossing the uneven pathways and different mountain ranges. Once you arrive, explore the village before settling in for an overnight stay at your camp.",
          "Pass through steep slopes and challenging trails as you continue your journey.",
          "Continue trekking to Goechala, walking past Zemathang.",
          "After reaching Goecha La Pass viewpoint 1, take-in the beauty of the Himalayan ranges.",
          "Begin the descent from Goecha La Pass viewpoint 1 to the beautiful Kokchurang village.",
          "On the way, admire the views of different mountain ranges while walking on uneven pathways.",
          "After reaching Kokchurang, explore the village, followed by an overnight stay at the campsite.",
        ],
      },
      {
        day: "Day 8",
        title:
          "Descend from Kokchurang to Tshoka | Trekking Distance: 6 km | Duration: 2-3 hours | Elevation: 9,701 ft.",
        activities: [
          "Begin your trek downhill towards Tshoka and admire the views of the beautiful Kanchenjunga Peak from a nearby ridge.",
          "Walk past the Dzongri Plateau and Prek Chu River to continue the journey downwards.",
          "Then, pass through the deciduous forests of Phedang to reach the beautiful Tshoka village.",
          "Upon arrival, explore the area and learn about the lifestyle of the locals there.",
        ],
      },
      {
        day: "Day 9",
        title:
          "Downhill Trek from Tshoka to Yuksom | Trekking Distance: 8 km | Duration: 3-4 hours | Elevation: 5,840 ft.",
        activities: [
          "Take in the fresh air and recharge yourself before you begin your last and long descent from Tshokha village to Yuksom. You will be crossing the same path as you climbed from Goechala. Later, on your way, explore the beautiful Bakhim village and take in the stunning views of the surroundings. Next, continue your journey by walking on the trail that passes through Sachen. Finally, once you reach Yuksom, take the time to relax for the day and enjoy an overnight stay at your camp/homestay.",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
      {
        day: "Day 10",
        title: "Departure Day",
        activities: [
          "Saying goodbye to the picturesque valleys, lush forests, rocky terrains, and snow-capped mountains can be a tough pill to swallow. But don't worry, you'll be leaving with a bag full of incredible memories and a few aches and pains from all the trekking. It's time to check out from your cozy camp/homestay and head to the airport or railway station to reunite with your loved ones eagerly waiting for you back home. Safe travels!",
          "Begin your trek downhill from Tshokha village to Yuksom.",
          "On the way, explore the Bakhim village and take-in the views of the scenery around.",
          "Continue the journey, walking on the trail that passes through Sachen.",
          "Arrive at Yuksom and relax for the day, followed by an overnight stay.",
        ],
      },
    ],
    inclusions: [
      "2 Nights Guest House / Homestay accommodation in Yuksom on a Quad/Triple Sharing basis.",
      "7 Nights Tented accommodation while on the trek on a triple sharing basis.",
      "All Veg Meals from 2nd Day Lunch to till 9th Day Lunch while on Trek",
      "Morning, evening tea/coffee served with light snacks while on the trek.",
      "Trekking Equipment like Sleeping bags, sleeping mattresses, Sleeping tents, utensils.",
      "All fees and permits for Indians are included in the Goechala trek package.",
      "All meals are included from dinner on Day 1 to Breakfast on Day 10.",
      "Basic First Aid Medical kit, Oxygen Cylinder, and Oxi Meter.",
      "Qualified and experienced Trek Leader and support staff.",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses like laundry, phone calls, etc.",
      "Any additional meals or snacks outside of the provided meals",
      "Any alcoholic beverages or bottled water",
      "Tips to the trekking crew (optional but appreciated)",
      "Any costs arising due to unforeseen circumstances like natural disasters, political unrest, flight cancellations, etc.",
      "Accommodation in Bagdogra or any other location before or after the trek",
      "Transportation to and from Bagdogra Airport or any other location outside of the trek",
      "Any medical or emergency expenses that may arise during the trek",
      "Any additional activities or excursions not mentioned in the itinerary",
      "Any costs incurred due to changes in the itinerary, such as additional days or changes in transportation",
      "Trek Permits for foreigners. If you are a Non-Indian, then you must pay an extra amount of Rs. 1,500 for permit charges at the base camp before starting the trek.",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    mandatoryDocuments: [
      {
        title: "Government Photo Identity Card:",
        desc: [
          "Original and photocopy required for identification.",
          "Acceptable documents include driver’s license, Aadhar Card, or passport.",
          "For Indian/Nepali trekkers, carry 4 copies for forest check posts. Foreign trekkers need 4-5 passport copies and Rs 1,500 cash.",
        ],
      },
      {
        title: "Medical Certificate:",
        desc: [
          "Must be filled out by an MBBS doctor.",
          "Essential for forest department permissions and Offbeat Sikkim's requirements.",
          "Ensure a smooth Safety Check-in at the base camp.",
        ],
      },
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Warm Clothes (Mandatory Item)",
      "Walking stick (Mandatory Item)",
      "Hiking shoes (Mandatory Item)",
      "Water bottle (Mandatory Item)",
      "Backpack (50-60l) (Mandatory Item)",
      "Caps",
      "Woollen cap, socks, mittens & scarf",
      "Thermal inners",
      "Waterproof windcheater",
      "Extra pair of socks",
      "Fleece jackets and thermals",
      "Toilet paper & wipes",
      "Day pack (20-30l)",
    ],
    knowBeforeYouGo: [
      "Please carry a valid ID proof.",
      "Take your time adjusting to high altitudes, as the weather conditions can be different from lower areas.",
      "Listen to your trek leaders or instructors carefully for a safe and enjoyable experience.",
      "Carry basic medications and a first-aid kit during the tour.",
      "No bill will be reimbursed for any missed service/facility.",
      "Keep your luggage minimum; the more you carry, the more you hassle.",
      "Any personal expenses, items of personal nature, meals not mentioned, etc. will not be in part of the package.",
      "Mobile & laptop charging points may/may not be available on campsites at a common point.",
      "Avoid using plastic bags and maintain the ecological balance of the destinations.",
      "It is recommended to carry enough warm clothes and the right kind of shoes for the trek.",
      "Please note that in the event of emergencies or natural calamities, the management reserves the right to modify the trek itinerary. However, any changes due to circumstances beyond our control is not covered in the package cost.",
    ],
  },
];

export const NagalandCuratedPackages: TripDetail[] = [
  {
    id: "1",
    image: "test",
    title: "Enchanting Nagaland",
    desc: "Explore the vibrant culture, scenic landscapes, and rich heritage of Nagaland with our exclusive travel package. Nestled in the heart of Northeast India, Nagaland offers an unforgettable journey through picturesque hills, lush forests, and traditional Naga villages. Immerse yourself in the local festivities, taste authentic cuisine, and witness the famous Hornbill Festival. Whether you're an adventure enthusiast or a culture lover, our Nagaland travel package promises a memorable escape into one of India's most captivating destinations.",
    durationn: "5",
    durationd: "6",
    link: "nagaland/curated-nagaland",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival at Dimapur",
        activities: [
          "Arrive at Dimapur Airport/Railway Station. Meet the local representative for transfer to the hotel. Check-in and settle into your hotel room. Spend the day at leisure, exploring the local market at your own pace. Overnight stay in a hotel at Dimapur.",
        ],
      },
      {
        day: "Day 2",
        title: "Dimapur to Kohima",
        activities: [
          "Enjoy a hearty breakfast at the hotel. Depart for Kohima, the second-largest city in Nagaland. Visit the Catholic Church, Naga Heritage Village, Kohima War Cemetery, and Nagaland State Museum. Spend the evening at leisure. Have dinner and enjoy your stay at a hotel in Kohima.",
        ],
      },
      {
        day: "Day 3",
        title: "Kohima to Tuophema",
        activities: [
          "Start the day with breakfast at the hotel. Head towards Tuophema, a tourist village developed by the Nagaland Tourism Department. Check-in to traditional Naga-style huts. Explore the village and enjoy panoramic views. Experience authentic Naga cuisine with rice-brewed beer at the community kitchen. Overnight stay in Naga huts in Tuophema.",
        ],
      },
      {
        day: "Day 4",
        title: "Tuophema to Khonoma",
        activities: [
          "Enjoy breakfast in Tuophema. Depart for Khonoma, a village known for its historical significance. Visit the paddy fields and learn about local farming techniques. Understand the community's conservation efforts in forest preservation. Overnight stay in traditional accommodation in Khonoma.",
        ],
      },
      {
        day: "Day 5",
        title: "Khonoma - Local Sightseeing - Dimapur",
        activities: [
          "Start the day with breakfast amidst beautiful views. Pay a visit to the G H Damant Memorial. Depart for Dimapur in the afternoon. Spend the evening at leisure, relaxing or exploring Dimapur. Overnight stay in a hotel in Dimapur.",
        ],
      },
      {
        day: "Day 6",
        title: "End of the Trip",
        activities: [
          "Enjoy your final breakfast in Nagaland. Transfer to Dimapur Airport/Railway Station for your onward journey. End of tour, with wonderful memories of Nagaland.",
        ],
      },
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "Meals: Breakfast daily",
      "Transfers: Airport/Railway station pick-up and drop-off",
      "Vehicle: Sedan/SUV (depending on group size)",
      "Toll, Parking, Permits & ILP, Driver Allowances",
    ],
    exclusions: [
      "GST (5%) additional",
      "Additional food & beverages: Alcoholic drinks, mineral water, and meals not mentioned in the package",
      "Personal expenses: Tips, monument/monastery entry fees, camera/video charges, laundry, telephone bills, etc.",
      "Natural calamities: Any costs arising due to landslides, roadblocks, etc. (to be borne by the customer on the spot)",
      "Unmentioned costs: Anything not mentioned in the inclusion",
      "Airfares/Train tickets",
    ],
    personalMedicalKit: [
      "Digene (4 tablets): Take it if you feel the food that you’ve taken is undigested. Alert your trek leader immediately. It could be a sign of AMS.",
      "Eno: For digestive issues",
      "Knee Brace (optional): Carry this if you are prone to knee injury or have known issues of knee pain.",
      "ORS (6 packs): Consume a pack of ORS water at least once a day, usually mid-day when you are in the middle of your trek. It replenishes essential salts lost while trekking. Tip: It also makes cold water easier to drink.",
      "Dolo 650 (5 tablets): This is a paracetamol. It helps to tackle fever, mild pain",
      "Avomine (4 tablets): Carry this especially if you are prone to motion sickness. Pop one-half hour before the start of your road journey.",
      "Combiflam (5 tablets): Take a combiflam if you get a sudden twist of the leg or a muscle strain. It is a pain reliever. It also contains paracetamol.",
      "Diamox (1 strip): For Altitude Mountain Sickness issues.",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip.",
    ],
  }
];

export const NagalandTreks: TripDetail[] = [
  {
    id: "3",
    image: "images/hero",
    title: "Dzukou Valley Trek",
    desc: "Dzukou Valley, located on the border of Nagaland and Manipur, is known for its lush green landscapes, seasonal flowers, and serene environment. The valley is particularly famous for the Dzukou lily, which is unique to this region. The best time to visit is from June to September for the blooming flowers and from October to March for pleasant weather. The valley offers a mix of meadows, streams, and panoramic views of the surrounding hills.",
    durationn: "4",
    durationd: "3",
    link: "nagaland/dzukou-valley-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dimapur and Transfer to Kohima",
        activities: [
          "Arrive at Dimapur Airport/Train Station and meet our representative. Board the private vehicle for transfer to Kohima, which takes approximately 3-4 hours. Upon arrival in Kohima, check-in at the hotel or homestay, freshen up, and have lunch. In the evening, explore the local market, visit the Kohima War Cemetery, and interact with the locals to get a taste of the local culture. Return to the hotel for dinner and an overnight stay.",
        ],
      },
      {
        day: "Day 2",
        title: "Kohima to Viswema Village and Trek to Dzukou Valley Base Camp",
        activities: [
          "After an early breakfast at the hotel, check-out and depart for Viswema Village, which is about a one-hour drive away. Upon arrival at Viswema Village, begin the trek to Dzukou Valley Base Camp, which takes approximately 5-6 hours. The initial part of the trek is steep and challenging, leading to a gradual ascent. Take breaks along the way to enjoy the scenic views and have a packed lunch. The trek takes you through dense forests, bamboo groves, and scenic meadows. Upon arrival at the base camp, set up tents and relax. Dinner and overnight stay will be at the base camp.",
        ],
      },
      {
        day: "Day 3",
        title: "Explore Dzukou Valley",
        activities: [
          "After breakfast at the camp, spend the full day exploring Dzukou Valley. Visit the flower valleys, hidden streams, and various viewpoints. The valley is particularly known for the Dzukou lily, which is found only in this region. Enjoy a packed lunch during the exploration. Return to the base camp by evening for dinner and an overnight stay in tents.",
        ],
      },
      {
        day: "Day 4",
        title: "Trek Back to Viswema Village and Return to Dimapur",
        activities: [
          "Have breakfast at the camp and pack up. Begin the trek back to Viswema Village, then transfer to Dimapur by private vehicle, which takes approximately 4-5 hours. Enjoy a packed lunch during the journey. Upon arrival in Dimapur, you will be dropped off at the airport or train station for your onward journey.",
        ],
      },
    ],
    inclusions: [
      "Accommodation (hotel in Kohima, tents in Dzukou Valley)",
      "All meals as specified in the itinerary",
      "Private transportation (Dimapur to Kohima, Kohima to Viswema, and return)",
      "Trekking permits and entry fees",
      "Professional trekking guide",
      "All tolls & driver charges",
      "Camping equipment (tents, sleeping bags, mats)",
      "First aid kit",
    ],
    exclusions: [
      "GST 5%",
      "Airfare/train fare to and from Dimapur.",
      "Personal expenses (laundry, telephone calls, etc.)",
      "Travel insurance",
      "Any meals not specified in the itinerary",
      "Tips and gratuities",
      "Any other expenses not mentioned in the inclusions.",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Personal Water Bottle",
      "Small backpack for personal items",
      "Hat or cap",
      "Sunglasses",
      "Light jacket for morning and evening",
      "Good quality walking/jogging or trekking shoes",
      "Comfortable trekking apparel, ideally full bottoms",
    ],
  },
]

export const MeghalayaUpcomingTours: TripDetail[] = [
  {
    id: "1",
    image: "images/hero",
    title: "Meghalaya Tour",
    desc: "Embark on a rustic, offbeat adventure through the heart of Meghalaya with Offbeat Sikkim Travels. This journey promises a blend of breathtaking landscapes, thrilling treks, and serene waterfalls. Explore the double-decker root bridge from a unique perspective, swim in magnificent waterfalls, and hike through perilous terrains. This adventure is not for the faint-hearted but for those seeking the thrill of the unknown. Join us as we traverse the home of the clouds, visiting villages and forests that embody the essence of Meghalaya.",
    durationn: "5",
    durationd: "6",
    costDouble: "24,499/-",
    link: "upcoming-tours/goechala-trek",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Guwahati Arrival | Umiam Lake | Overnight at Shillong",
        activities: [
          "Arrive at Guwahati Airport/Junction where our representative will greet you.",
          "Enjoy a scenic drive to Shillong, the capital city of Meghalaya.",
          "Enroute, stop by Umiam Lake, also known as Barapani, the largest man-made reservoir in Northeast India.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Shillong to Cherrapunjee | Enroute Waterfalls & Caves | Overnight at Cherrapunjee",
        activities: [
          "After breakfast, start your journey towards Cherrapunjee, one of the wettest places on Earth.",
          "Visit Elephant Falls, named for an elephant-shaped rock at its base.",
          "Stop at Mawkdok Valley, also known as Maggie Point.",
          "Visit the Garden of Caves, a picturesque spot featuring waterfalls, caves, and lush greenery.",
          "Visit Nohkalikai Falls, the tallest plunge waterfall in India.",
          "Explore Seven Sisters Falls, a mesmerizing seven-segmented waterfall.",
          "Finally, visit Dainthlen Falls, a waterfall with a legendary tale.",
          "Explore Mawsmai Cave, famous for its limestone formations, and Arwah Cave, known for its fossils and narrow passages.",
          "Arrive in Cherrapunjee, check-in to your hotel, and enjoy a relaxed evening.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Cherrapunjee | Double-Decker Living Root Bridge Trek | Overnight at Cherrapunjee",
        activities: [
          "Begin your day early with a hearty breakfast.",
          "Trek down 3500 steps with a local guide to reach the Double-Decker Living Root Bridge in Nongriat, a marvel of bioengineering.",
          "Optionally, extend your trek to visit the stunning Rainbow Waterfalls, known for their vibrant hues.",
          "Ascend back to Cherrapunjee after an exhilarating trek.",
          "Spend the evening at leisure, enjoying the serene surroundings.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Cherrapunjee | Mawlynnong Village | Dawki | Shnongpdeng | Overnight at Shnongpdeng Campsite",
        activities: [
          "Post breakfast, drive towards Mawlynnong Village.",
          "Explore this immaculate village and its community, known as the cleanest village in Asia.",
          "Walk across the natural bridges formed by intertwining roots.",
          "Optionally, embark on the Mawryngkhang bamboo trek in Wahkhen village, time permitting.",
          "Continue to Dawki, renowned for the crystal-clear waters of the Umngot River.",
          "Enjoy a serene boat ride and visit the India-Bangladesh border for a unique experience.",
          "Settle into the riverside campsite at Shnongpdeng, where you can enjoy leisure time, camping, and a bonfire by the riverside.",
          "Overnight in Alpine/Dome Tents at Shnongpdeng.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Shnongpdeng | Jowai (Jaintia Hills) | Krang Suri Waterfall | Phe PheWaterfall | Overnight at Shillong",
        activities: [
          "Witness the breathtaking morning view of the river.",
          "Post breakfast, drive towards Jowai and visit Krang Suri Falls, a magical waterfall known for its turquoise blue waters.",
          "Hike to Phe Phe Falls and swim in the stunning natural blue pools.",
          "After an exhilarating day, drive back to Shillong.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 6",
        title: "Shillong | Laitlum Grand Canyon | Guwahati Departure",
        activities: [
          "After breakfast, check out from the hotel.",
          "Visit the majestic Laitlum Grand Canyons, known for its panoramic views and serene environment.",
          "Continue your journey back to Guwahati.",
          "Drop-off at Guwahati Airport or Railway Station for your onward journey.",
          "Trip ends with beautiful memories.",
        ],
      },
    ],
    inclusions: [
      "Accommodation in standard Hotels/Homestays or Guesthouses/Tents (sharing basis)",
      "Transportation in an AC vehicle: SUV/Sedan or Tempo Traveler (as per group size)",
      "Pick & Drop to location (sharing basis)",
      "Complimentary Breakfast and Dinner",
      "All permits, hotel taxes & parking charges",
      "All tolls & driver charges",
      "Local guide charges if any",
      "Bonfire (if weather permits)",
      "Medical kit for emergency conditions",
      "Team Captain throughout the trip",
    ],
    exclusions: [
      "GST 5%",
      "Meals not mentioned above",
      "Personal expenses such as laundry, etc.",
      "Any adventure activities such as river rafting, boating, kayaking, etc.",
      "Additional sightseeing and entry fees not mentioned",
      "Costs due to calamities like weather conditions, landslides, road blockage, increase in fuel prices, overbooking of hotels, political disturbances, etc.",
      "Any increase in charges due to transport price hikes before departure",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
    thingsToCarry: [
      "Personal Water Bottle",
      "Small backpack for personal items",
      "Hat or cap",
      "Sunglasses",
      "Light jacket for morning and evening",
      "Good quality walking/jogging or trekking shoes",
      "Comfortable trekking apparel, ideally full bottoms",
    ],
  },
];

export const MeghalayaCuratedPackages: TripDetail[] = [
  {
    id: "1",
    image: "test",
    title: "Meghalaya Trip",
    desc: "Embark on a rustic, offbeat adventure through the heart of Meghalaya with Offbeat Sikkim Travels. This journey promises a blend of breathtaking landscapes, thrilling treks, and serene waterfalls. Explore the double-decker root bridge from a unique perspective, swim in magnificent waterfalls, and hike through perilous terrains. This adventure is not for the faint-hearted but for those seeking the thrill of the unknown. Join us as we traverse the home of the clouds, visiting villages and forests that embody the essence of Meghalaya.",
    durationn: "5",
    durationd: "6",
    link: "curated-meghalaya",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Guwahati Arrival | Umiam Lake | Overnight at Shillong",
        activities: [
          "Arrive at Guwahati Airport/Junction where our representative will greet you.",
          "Enjoy a scenic drive to Shillong, the capital city of Meghalaya.",
          "Enroute, stop by Umiam Lake, also known as Barapani, the largest man-made reservoir in Northeast India.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Shillong to Cherrapunjee | Enroute Waterfalls & Caves | Overnight at Cherrapunjee",
        activities: [
          "After breakfast, start your journey towards Cherrapunjee, one of the wettest places on Earth.",
          "Visit Elephant Falls, named for an elephant-shaped rock at its base.",
          "Stop at Mawkdok Valley, also known as Maggie Point.",
          "Visit the Garden of Caves, a picturesque spot featuring waterfalls, caves, and lush greenery.",
          "Visit Nohkalikai Falls, the tallest plunge waterfall in India.",
          "Explore Seven Sisters Falls, a mesmerizing seven-segmented waterfall.",
          "Finally, visit Dainthlen Falls, a waterfall with a legendary tale.",
          "Explore Mawsmai Cave, famous for its limestone formations, and Arwah Cave, known for its fossils and narrow passages.",
          "Arrive in Cherrapunjee, check-in to your hotel, and enjoy a relaxed evening.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 3",
        title:
          "Cherrapunjee | Double-Decker Living Root Bridge Trek | Overnight at Cherrapunjee",
        activities: [
          "Begin your day early with a hearty breakfast.",
          "Trek down 3500 steps with a local guide to reach the Double-Decker Living Root Bridge in Nongriat, a marvel of bioengineering.",
          "Optionally, extend your trek to visit the stunning Rainbow Waterfalls, known for their vibrant hues.",
          "Ascend back to Cherrapunjee after an exhilarating trek.",
          "Spend the evening at leisure, enjoying the serene surroundings.",
          "Overnight at a comfortable hotel in Cherrapunjee.",
        ],
      },
      {
        day: "Day 4",
        title:
          "Cherrapunjee | Mawlynnong Village | Dawki | Shnongpdeng | Overnight at Shnongpdeng Campsite",
        activities: [
          "Post breakfast, drive towards Mawlynnong Village.",
          "Explore this immaculate village and its community, known as the cleanest village in Asia.",
          "Walk across the natural bridges formed by intertwining roots.",
          "Optionally, embark on the Mawryngkhang bamboo trek in Wahkhen village, time permitting.",
          "Continue to Dawki, renowned for the crystal-clear waters of the Umngot River.",
          "Enjoy a serene boat ride and visit the India-Bangladesh border for a unique experience.",
          "Settle into the riverside campsite at Shnongpdeng, where you can enjoy leisure time, camping, and a bonfire by the riverside.",
          "Overnight in Alpine/Dome Tents at Shnongpdeng.",
        ],
      },
      {
        day: "Day 5",
        title:
          "Shnongpdeng | Jowai (Jaintia Hills) | Krang Suri Waterfall | Phe Phe Waterfall | Overnight at Shillong",
        activities: [
          "Witness the breathtaking morning view of the river.",
          "Post breakfast, drive towards Jowai and visit Krang Suri Falls, a magical waterfall known for its turquoise blue waters.",
          "Hike to Phe Phe Falls and swim in the stunning natural blue pools.",
          "After an exhilarating day, drive back to Shillong.",
          "Arrive in Shillong, check-in to your hotel, and relax.",
          "Overnight at a comfortable hotel in Shillong.",
        ],
      },
      {
        day: "Day 6",
        title: "Shillong | Laitlum Grand Canyon | Guwahati Departure",
        activities: [
          "After breakfast, check out from the hotel.",
          "Visit the majestic Laitlum Grand Canyons, known for its panoramic views and serene environment.",
          "Continue your journey back to Guwahati.",
          "Drop-off at Guwahati Airport or Railway Station for your onward journey.",
          "Trip ends with beautiful memories.",
        ],
      },
    ],
    inclusions: [
      "Accommodation in standard Hotels/Homestays or Guesthouses/Tents",
      "Transportation in an AC vehicle: SUV/Sedan or Tempo Traveler (as per group size)",
      "Complimentary Breakfast",
      "All permits, hotel taxes & parking charges",
      "All tolls & driver charges",
      "Local guide charges if any",
      "Bonfire (if weather permits)",
      "Medical kit for emergency conditions",
    ],
    exclusions: [
      "GST (5%) is applicable extra",
      "Any kind of food and beverages that is not mentioned above like alcoholic drinks, mineral water, meals/refreshment/lunches on the highway",
      "Any personal expenses",
      "Any adventure activities such as river rafting, boating, kayaking, etc.",
      "Additional sightseeing and entry fees not mentioned",
      "Costs due to calamities like weather conditions, landslides, road blockage, increase in fuel prices, overbooking of hotels, political disturbances, etc.",
      "Any increase in charges due to transport price hikes before departure",
    ],
    bookingProcess: [
      "To confirm your booking, a deposit of ₹5000 Per Head is required in advance.",
      "The remaining amount must be paid at least 2 days before the trip departure.",
      "After the payment is completed, please share your ID proof and email address.",
      "A confirmation email will be sent to you once all the details are received.",
    ],
  }
];

export const Sikkim = [SikkimCuratedPackages, SikkimTreks, SikkimUpcomingTours]

export const Meghalaya = [MeghalayaCuratedPackages, MeghalayaUpcomingTours]

export const Nagaland = [NagalandCuratedPackages, NagalandTreks]
export const FakeTestimonial : TestimonialCard[] = [
  {
    title: 'Ajay Prem',
    rating: 5,
    testimonial: "Landed safely in Chennai after being stuck in North Sikkim for a week due to the"
  },
  {
    title: 'Ajay Prem',
    rating: 4,
    testimonial: "Landed safely in Chennai after being stuck in North Sikkim for a week due to the"
  },
  {
    title: 'Ajay Prem',
    rating: 3,
    testimonial: "Landed safely in Chennai after being stuck in North Sikkim for a week due to the"
  },
]

export const Destinations =[
  {
    id:'1',
    image:'',
    title:'Sikkim',
    link:'/destinations/sikkim',
  },
  {
    id:'2',
    image:'',
    title:'Darjeeling',
    link:'/destinations/darjeeling',
  },
  {
    id:'3',
    image:'',
    title:'Meghalaya',
    link:'/destinations/meghalaya',
  },
  {
    id:'1',
    image:'',
    title:'Arunachal Pradesh',
    link:'/destinations/arunachal-pradesh',
  },
  {
    id:'1',
    image:'',
    title:'Nagaland',
    link:'/destinations/nagaland'
  },

]

export const packagesData:TripDetail[] = [
  ...UpcomingTours,
  ...CuratedPackages,
  ...Treks,
]