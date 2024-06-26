import React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { CardProps } from "@/lib/types";

type TourCardProps = {
  card: CardProps;
};

const Cards = ({ card }: TourCardProps) => {
  if (!card) {
    return <></>;
  }
  return (
    <Card className="w-[232px] h-fit md:w-[289px] lg:w-[292px] lg:h-fit rounded-lg lg:rounded-[10px] bg-[#F8FCFA] shadow-cardShadow ">
      <div className="relative w-full h-[269px] md:h-[364px]">
        <Image src={`/${card.image}.jpg`} fill alt={card.title} />
      </div>
      <div className="px-2 py-5 text-[#051E13] flex justify-between items-end">
        <div className="flex flex-col  space-y-1">
          <h2 className="titles justify-self-end md:titlem min-h-10 md:min-h-12">{card.title}</h2>
          {card.durationn && <p className="bodys">{card.durationn} Nights {card.durationd} Days</p>}
          {
            card.costDouble &&   <p className="labell">
           Starts at ₹ {card.costDouble} 
          </p>
          }
          {card.currentPrice && (
            <>
             {
              card.originalPrice && (
                <p className="bodys line-through">
                ₹ {card.originalPrice} 
              </p>
              )
             } 
              <h4 className="labell text-[#075232]">
                ₹{card.currentPrice} 
              </h4>
            </>
          )}
        </div>
        <Link href={`/packages/${encodeURIComponent(card.link)}`}>
          <IconButton className="bg-primary hover:bg-primary/80">
            <ArrowForwardIcon className="text-white text-[28px] md:text-[32px]" />
          </IconButton>
        </Link>
      </div>
    </Card>
  );
};

export default Cards;
