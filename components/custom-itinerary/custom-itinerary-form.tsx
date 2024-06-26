"use client";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from "zod";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Step1Form from "./step1";
import Step2Form from "./step2";
import Step3Form from "./step3";

interface CustomConnectorWrapperProps {
  activeStep: number;
}
const CustomConnectorWrapper = ({
  activeStep,
}: CustomConnectorWrapperProps) => {
  const progress = (activeStep + 1) * 33.33;
  const remaining = 100 - progress;
  return (
    <div className="flex h-full p-4 flex-row gap-1.5">
      <motion.div
        className="h-1 rounded-full bg-primary"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="h-1 rounded-full bg-primary-container"
        initial={{ width: "100%" }}
        animate={{ width: `${100 - progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export const step1Schema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  travel_style: z.enum(["Luxury", "Not", "Third"], {
    required_error: "Please select your travel style",
  }),
  places: z.enum(["Sikkim", "Meghalaya", "Third"], {
    required_error: "Please select your place of interest",
  }),
  accommodation: z.enum(["Luxury", "Not", "Third"], {
    required_error: "Please select your accommodation type",
  }),
  email: z.string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  phone: z.string()
    .min(10, { message: "Please enter your phone number" })
    .max(10, { message: "Phone number must be 10 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
});

const step2Schema = z.object({
  destination: z.string().min(1, {
    message: "Please select your destinations",
  }),
  date: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    {
      required_error: "Please select your tour dates",
    }
  ),
});

const step3Schema = z.object({});

const schemas = [step1Schema, step2Schema, step3Schema];

const Custom_Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<FormData>({
    resolver: zodResolver(schemas[activeStep]),
    mode: "onTouched",
  });

  const handleNext = async () => {
   
      setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, 2));
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCreateItinerary = () => {
    console.log("Create Your Itinerary button clicked");
  };

  return (
    <FormProvider {...methods}>
    <form 
      onSubmit={methods.handleSubmit(handleCreateItinerary)}
    className="w-full flex flex-col px-2.5 py-12 gap-8">
      <CustomConnectorWrapper activeStep={activeStep} />

      <div className=" flex flex-col gap-1 text-center">
        <h2 className="headlines text-primary ">
          Create your customized itinerary in 3..2..1!
        </h2>
        <p className="bodys text-[#575F6E]">
          Fill in the details below to customize your itinerary
        </p>
      </div>

      <div className="flex-1">
          {activeStep === 0 && <Step1Form />}
          {activeStep === 1 && <Step2Form />}
          {activeStep === 2 && <Step3Form />}
        </div>

      <div className="flex flex-row justify-between">
        <Button
          variant={activeStep === 0 ? "ghost" : "outline"}
          className="gap-1 flex flex-row items-center px-4 md:px-11"
          onClick={handleBack}
        >
          <ArrowBackIcon className="text-lg" />
          <span className="labell">Back</span>
        </Button>
        <Button
          onClick={activeStep ===2?methods.handleSubmit(handleCreateItinerary) : handleNext}
          className="gap-1 flex flex-row items-center px-4 md:px-11"
        >
          <ArrowForwardIcon className="text-lg" />
          <span className="labell">{activeStep === 2? 'Create Itinerary':'Next'}</span>
        </Button>
      </div>
    </form>
    </FormProvider>
  );
};

export default Custom_Form;
