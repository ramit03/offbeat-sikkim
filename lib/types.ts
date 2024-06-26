export interface CardProps {
    image: string;
    title: string;
    durationn?: string;
    duarationd?:string,
    originalPrice?: string;
    currentPrice?: string;
    link: string;
  }


  export interface TripDetail {
    id:string,
    title:string,
    image:string,
    desc: string,
    durationn:string,
    durationd:string,
    costDouble?:string,
    constTriple?:string,
    originalPrice?:string,
    currentPrice?:string,
    link:string,
    detailedItinerary: ItineraryDay[],
    inclusions: string[],
    exclusions: string[],
    bookingProcess: string[],
    thingsToCarry?: string[],
    thingsToCarryTrek?:ThingsToCarry[],
    personalMedicalKit?: string[],
    mandatoryDocuments?: MandatoryDocs[],
  }
  export interface ThingsToCarry{
    title:string,
    list?:string[],
  }
  export interface ItineraryDay {
    day: string;
    title: string,
    activities: string[];
}
  export interface MandatoryDocs {
    title:string,
    desc:string[],
  } 

  export interface Step1FormData {
    name: string;
    email: string;
    phone: string;
    travel_style: "Luxury" | "Not" | "Third";
    places: "Sikkim" | "Meghalaya" | "Third";
    accommodation: "Luxury" | "Not" | "Third";
  }
  
  export interface Step2FormData {
    destination: string[];
    date: {
      from: Date;
      to: Date;
    };
  }
  
  export interface Step3FormData {}
  
  export type FormData = Step1FormData & Step2FormData & Step3FormData;
  