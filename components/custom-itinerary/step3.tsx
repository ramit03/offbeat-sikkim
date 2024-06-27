'use client';
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Step3FormData } from "@/lib/types";

const Step3Form: React.FC = () => {
  const { control, formState: { errors } } = useFormContext<Step3FormData>();
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
       <div className=" flex flex-col col-span-2 gap-1 -mt-6 pb-4 text-center">
        <h2 className="headlines text-primary ">
        Almost there!
        </h2>
        <p className="bodys text-[#575F6E]">
          Fill in the details below to customize your itinerary
        </p>
      </div>
      <div className="col-span-1 ">
        <TextField
          className="w-full"
          error={!!errors.noOfAdults}
          type="number"
          label="Number of Adults"
          variant="outlined"
          {...control.register("noOfAdults")}
          sx={{
            color: "#404942",
            "& .MuiInputLabel-root": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#404942",
              },
              "& input": {
                color: "#404942",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
              WebkitTextFillColor: "#404942",
            },
          }}
        />
        {errors.noOfAdults && (
          <p className="text-error bodyl">{errors.noOfAdults.message}</p>
        )}
      </div>

      <div className="col-span-1 ">
        <TextField
          className="w-full"
          error={!!errors.noOfChildren}
          type="number"
          label="Number of Children"
          variant="outlined"
          {...control.register("noOfChildren")}
          sx={{
            color: "#404942",
            "& .MuiInputLabel-root": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#404942",
              },
              "& input": {
                color: "#404942",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
              WebkitTextFillColor: "#404942",
            },
          }}
        />
        {errors.noOfChildren && (
          <p className="text-error bodyl">{errors.noOfChildren.message}</p>
        )}
      </div>
      <div className="col-span-2">
      <TextField
          className="w-full"
          minRows={3}
          label="Additional Information"
          variant="outlined"
          multiline
          {...control.register("additionalInformation")}
          sx={{
            color: "#404942",
            "& .MuiInputLabel-root": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#404942",
              },
              "& input": {
                color: "#404942",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
              WebkitTextFillColor: "#404942",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Step3Form;
