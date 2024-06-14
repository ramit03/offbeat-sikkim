"use client";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { StepLabel, styled } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const CustomStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ ownerState }) => ({
    color: ownerState.active ? '#19a96c' : '#B1B1B1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  function CustomStepIcon(props: any) {
    const { active } = props;
  
    return (
      <CustomStepIconRoot ownerState={{ active }}>
        {active ? <CircleIcon /> : <CircleOutlinedIcon />}
      </CustomStepIconRoot>
    );
  }

  const step1Schema = z.object({
    name:z.string().min(1,{
      message:"Please enter your name",
    }),
    travel_style:z.enum(['Luxury','Not','Third'],{required_error:"Please select your travel style"}),
    places:z.enum(['Sikkim','Meghalaya','Third'],{required_error:"Please select your place of interest"}),
    accomodation:z.enum(['Luxury','Not','Third'],{required_error:"Please select your accomodation type"}),
  });

  const step2Schema = z.object({
    destination:z.string().min(1,{
      message:"Please select your destinations"
    }),
    date:z.object(
      {
        from:z.date(),
        to: z.date(),
      },
      {
        required_error: 'Please select your tour dates',
      }
    ),
  });

  const step3Schema = z.object({

  })

  const schemas = [step1Schema,step2Schema,step3Schema]

const Custom_Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCreateItinerary = () => {
    // Handle the itinerary creation logic here
    console.log("Create Your Itinerary button clicked");
  };
  const steps = [0, 1, 2];
  return (
      <div className="w-full flex flex-col">
      <Stepper className=""  activeStep={activeStep}>
       
        {steps.map((_, index) => (
          <Step className="flex" key={index}>
            <StepLabel StepIconComponent={CustomStepIcon} />
          </Step>
        ))}
      </Stepper>
      <div className="flex flex-row pt-4">
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          className="mr-2"
        >
          Back
        </Button>
        <div className="flex-1" />
        {activeStep === 2 ? (
          <Button onClick={handleCreateItinerary}>
            Create Your Itinerary
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}


export default Custom_Form;
