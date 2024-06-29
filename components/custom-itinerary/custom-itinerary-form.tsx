"use client";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Step1Form from "./step1";
import Step2Form from "./step2";
import Step3Form from "./step3";;
import { Step1FormData, Step2FormData, Step3FormData,FormData } from "@/lib/types";
import dayjs from "dayjs";
import { SelectChangeEvent } from "@mui/material";

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    travel_style: "Luxury",
    places: "Sikkim",
    accommodation: "Luxury",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    destination: [],
    noOfAdults: "",
    noOfChildren: "",
    additionalInformation: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value as string });
    setErrors((prevErrors) => ({ ...prevErrors, [name as string]: "" }));
  };
  
  const handleClear = (field: keyof FormData) => {
    setFormData({ ...formData, [field]: "" });
  };

  const handleDateChange = (date: dayjs.Dayjs | null, field: keyof Step2FormData) => {
    setFormData({ ...formData, [field]: date ? date.format("YYYY-MM-DD") : "" });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleDestinationToggle = (destination: string) => {
    setFormData((prevData) => ({
      ...prevData,
      destination: prevData.destination.includes(destination)
        ? prevData.destination.filter((d) => d !== destination)
        : [...prevData.destination, destination],
    }));
    setErrors((prevErrors) => ({ ...prevErrors, destination: [""] }));
  };


  const validateStep1 = () => {
    const newErrors: Partial<Step1FormData> = {};
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone) newErrors.phone = "Please enter your phone number";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
    if (!formData.travel_style) newErrors.travel_style = "Please select your travel style";
    if (!formData.places) newErrors.places = "Please select your place of interest";
    if (!formData.accommodation) newErrors.accommodation = "Please select your accommodation type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<Step2FormData> = {};

    if (!formData.startDate) newErrors.startDate = "Please select a start date";
    if (!formData.endDate) newErrors.endDate = "Please select an end date";
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      newErrors.endDate = "End date cannot be before start date";
    }
    if (formData.destination.length === 0) newErrors.destination =[ "Please select at least one destination"];

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Partial<Step3FormData> = {};
    if (!formData.noOfAdults) newErrors.noOfAdults = "Number of adults is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;

    if (activeStep === 0) {
      isValid = validateStep1();
    } else if (activeStep === 1) {
      isValid = validateStep2();
    } else if (activeStep === 2) {
      isValid = validateStep3();
    }

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep3()) {
      console.log("Final Data:", formData);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      travel_style: "Luxury",
      places: "Sikkim",
      accommodation: "Luxury",
      email: "",
      phone: "",
      startDate: "",
      endDate: "",
      destination: [],
      noOfAdults: "",
      noOfChildren: "",
      additionalInformation: "",
    });
    setErrors({});
    setActiveStep(0);
  };

  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };


  const selectedPlaceOfInterest = formData.places;

  return (
      <form
        className="w-full flex flex-col px-2.5 md:px-16 py-12 gap-8"
      >
        <CustomConnectorWrapper activeStep={activeStep} />

        <div className="flex-1">
        {activeStep === 0 && (
          <Step1Form
            formData={formData}
            errors={errors}
            handleClear={handleClear}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
          />
        )}
        {activeStep === 1 && (
          <Step2Form
            formData={formData}

            errors={errors}
            handleClear={handleClear}
            handleDateChange={handleDateChange}
            handleDestinationToggle={handleDestinationToggle}
            selectedPlaceOfInterest={selectedPlaceOfInterest}
          />
        )}
        {activeStep === 2 && (
          <Step3Form
            formData={formData}
     
            errors={errors}
            handleClear={handleClear}
            handleInputChange={handleInputChange}
          />
        )}
        </div>

        <div className="flex flex-row justify-between">
          <Button
            variant={activeStep === 0 ? "ghost" : "outline"}
            className="gap-1 flex flex-row items-center px-4 md:px-11"
            onClick={handleBack}
            type="button"
          >
            <ArrowBackIcon className="text-lg" />
            <span className="labell">Back</span>
          </Button>

          {activeStep === 2 ? (
            <Button
              type="button"
              className="gap-1 flex flex-row labell items-center px-4 md:px-11"
              onClick={handleSubmit}
            >Create Itinerary
              <ArrowForwardIcon className="text-lg" />         
            </Button>
          ) : (
            <Button
              type="button"
              className="gap-1 flex flex-row labell items-center px-4 md:px-11"
              onClick={handleNext}
            > Next
              <ArrowForwardIcon className="text-lg" />
             
            </Button>
          )}
        </div>
      </form>
  );
};

export default Custom_Form;
