import { Stack } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-full flex bg-[#DCE5DC] px-4 md:px-6 py-14 gap-9 flex-col rounded-t-xl lg:rounded-t-2xl">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-7">
          <div className="flex flex-col gap-7">
            <h1 className="headlinem">Get In Touch</h1>
            <div className="flex flex-col gap-3">
              <Stack direction={"row"} gap={1}>
                <PhoneIcon />
                <p className="bodyl">+91 70297 49687 </p>
              </Stack>
              <Stack direction={"row"} gap={1}>
                <AlternateEmailIcon />
                <p className="bodyl">team@offbeatsikkim.com</p>
              </Stack>
            </div>
          </div>
          <Stack direction={"row"} gap={3.5}>
            <Link
              className="cursor-pointer"
              href={"https://www.instagram.com/offbeatsikkim"}
              target="_blank"
            >
              <InstagramIcon className="hover:text-primary-500 text-[32px] duration-700 transition-colors" />
            </Link>
            <Link
              className="cursor-pointer"
              href={"https://www.facebook.com/offbeatsikkim/"}
              target="_blank"
            >
              <FacebookIcon className="hover:text-primary-500 text-[32px] duration-700 transition-colors" />
            </Link>
            <Link
              className="cursor-pointer"
              href={"https://www.linkedin.com/company/offbeat-sikkim/"}
              target="_blank"
            >
              <LinkedInIcon className="hover:text-primary-500 text-[32px] duration-700 transition-colors" />
            </Link>
          </Stack>
        </div>

        <Stack direction={"column"} gap={{sm:3.5,md:2.5}} className="md:text-center">
          <p className="bodym">
            © Offbeat Sikkim Pvt. Ltd, All rights reserved
          </p>
          <Link className="hover:text-primary transition-colors duration-500" href={"https://www.redendron.media/"} target="_blank">
            <p className="bodym hover:text-primary-500 duration-700 transition-colors">
              Creative Credit: Redendron Media
            </p>
          </Link>
        </Stack>
      </div>
    </section>
  );
};

export default Footer;
