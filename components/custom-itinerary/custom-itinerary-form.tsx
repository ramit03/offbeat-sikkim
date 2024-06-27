"use client";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm, FormProvider, useWatch, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Step1Form from "./step1";
import Step2Form from "./step2";
import Step3Form from "./step3";
import { schemas,FormData } from "@/lib/schema";

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
        animate={{ width: `${remaining}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

const Custom_Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<FormData>({
    resolver: zodResolver(schemas[activeStep]),
    mode: "onTouched",
    defaultValues: {
      travel_style: "Luxury",
      accommodation: "Luxury",
      //@ts-ignore
      places: "Sikkim",
      destination: [],
      startDate: "",
      endDate: "",
    },
  });

  const handleNextOrSubmit = async (data?:FormData) => {
    const isValid = await methods.trigger();
    console.log("Validation Status:", isValid);
    if (isValid) {
      if (activeStep === schemas.length - 1) {
        console.log("Create Your Itinerary button clicked", data);
      } else {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, schemas.length - 1));
      }
    } else {
      const firstErrorField = Object.keys(methods.formState.errors)[0] as keyof FormData;
      if (firstErrorField) {
        methods.setFocus(firstErrorField);
      }
      console.log("Validation Failed:", methods.formState.errors); // Debugging validation errors
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleCreateItinerary = (data: FormData) => {
    console.log("Create Your Itinerary button clicked");
  };

  const selectedPlaceOfInterest = useWatch({
    control: methods.control,
    name: "places",
  }) as string;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleNextOrSubmit)}
        className="w-full flex flex-col px-2.5 md:px-16 py-12 gap-8"
      >
        <CustomConnectorWrapper activeStep={activeStep} />

        <div className="flex-1">
          {activeStep === 0 && <Step1Form />}
          {activeStep === 1 && (
            <Step2Form selectedPlaceOfInterest={selectedPlaceOfInterest} />
          )}
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
            onClick={methods.handleSubmit(handleNextOrSubmit)}
            className="gap-1 flex flex-row items-center px-4 md:px-11"
          >
            <ArrowForwardIcon className="text-lg" />
            <span className="labell">
              {activeStep === 2 ? "Create Itinerary" : "Next"}
            </span>
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Custom_Form;
