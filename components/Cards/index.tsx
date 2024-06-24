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
    <Card className="w-[232px] h-fit lg:w-[292px] lg:h-fit rounded-lg lg:rounded-[10px] bg-[#F8FCFA] shadow-cardShadow ">
      <div className="relative w-full h-[269px]">
        <Image src={`/${card.image}.jpg`} fill alt={card.name} />
      </div>
      <div className="px-2 py-5 text-[#051E13] flex justify-between items-end">
        <div className="flex flex-col space-y-1">
          <h2 className="titles md:titlem ">{card.name}</h2>
          {card.duration && <p className="bodys">{card.duration}</p>}
          {card.originalPrice && (
            <>
              <p className="bodys line-through">
                ₹{card.originalPrice} per head
              </p>
              <h4 className="labell text-[#075232]">
                ₹{card.currentPrice} per head
              </h4>
            </>
          )}
        </div>
        <Link href={card.link}>
          <IconButton className="bg-[#19A96C]">
            <ArrowForwardIcon className="text-white text-[40px]" />
          </IconButton>
        </Link>
      </div>
    </Card>
  );
};

export default Cards;
