'use client';
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Step3FormData } from "@/lib/types";

interface Step3FormProps {
  formData: Step3FormData;
  errors: Partial<Step3FormData>;
  handleClear: (field: keyof Step3FormData) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step3Form: React.FC<Step3FormProps> = ({formData, errors, handleClear, handleInputChange}) => {

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
      <div className="col-span-1 flex items-center">
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="noOfAdults">Number of Adults</InputLabel>
          <OutlinedInput
            id="noOfAdults"
            name="noOfAdults"
            type="number"
            label='Number of Adults*'
            value={formData.noOfAdults}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton disableTouchRipple onClick={() => handleClear("noOfAdults")}>
                  <CancelOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              color: "#404942",
              "& .MuiOutlinedInput-notchedOutline" : {
                borderColor : "#404942",
             },
              "& .MuiInputLabel-root": {
                color: "#404942",
              },
              "& .MuiOutlinedInput-input": {
                color: '#404942'
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
          {errors.noOfAdults && <p className="text-error bodyl">{errors.noOfAdults}</p>}
        </FormControl>
      </div>

      <div className="col-span-1 flex items-center">
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="noOfChildren">Number of Children</InputLabel>
          <OutlinedInput
            id="noOfChildren"
            name="noOfChildren"
            type="number"
            value={formData.noOfChildren}
            label='Number of Children'
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton disableTouchRipple onClick={() => handleClear("noOfChildren")}>
                  <CancelOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              color: "#404942",
              "& .MuiOutlinedInput-notchedOutline" : {
                borderColor : "#404942",
             },
              "& .MuiInputLabel-root": {
                color: "#404942",
              },
              "& .MuiOutlinedInput-input": {
                color: '#404942'
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
          {errors.noOfChildren && <p className="text-error bodyl">{errors.noOfChildren}</p>}
        </FormControl>
      </div>

      <div className="col-span-2 flex items-center">
        <TextField
          className="w-full"
          minRows={3}
          label="Additional Information"
          variant="outlined"
          multiline
          name="additionalInformation"
          value={formData.additionalInformation}
          onChange={handleInputChange}
          sx={{
            "& .MuiInputLabel-root": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#404942",
              },
              "&:hover fieldset": {
                borderColor: "#404942",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#404942",
              },
            },
            "& .MuiOutlinedInput-input": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: "#404942",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Step3Form;