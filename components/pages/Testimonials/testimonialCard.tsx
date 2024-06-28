import { TestimonialCard as Testimonial } from "@/lib/types";
import React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import StarIcon from '@mui/icons-material/Star';

type TestimonialProps = {
  card: Testimonial;
};

const TestimonialCard = ({ card }: TestimonialProps) => {
  if (!card) {
    return <></>;
  }
  return (
    <Card className="size-[200px] rounded-[10px] text-[#051E13] bg-[#F5F5F5] shadow-cardShadow py-6 px-5 flex flex-col gap-2">
        <h2 className="titlem ">{card.title}</h2>
        <Stack direction={"row"} gap={1}>
        {[...Array(5)].map((_,index)=>(
            index < card.rating? <StarIcon className="text-[#EBC351]"/> : <></>
        ))
        }
        </Stack>
        <p className="bodys">{card.testimonial}</p> 
    </Card>
  );
};

export default TestimonialCard;
