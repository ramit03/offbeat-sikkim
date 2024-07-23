import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme";

const roboto = Roboto({
  weight: ['100','300','400','700'],
  style: ['normal','italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "Offbeat Sikkim",
  description: "Plan your adventure across the offbeat locations in North East India with Offbeat Sikkim. Explore Sikkim, Meghalaya, Arunachal Pradesh, Nagaland, and similar offbeat destinations. Book treks, cultural tours, group tours and travel packages starting at just INR 13,999/-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#F6FBF4] pt-20 md:pt-32`}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>      
      </body>
    </html>
  );
}
