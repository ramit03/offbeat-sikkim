import React from "react";
import { useFormContext } from "react-hook-form";
import { Step1FormData } from "@/lib/types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Step1Form: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Step1FormData>();
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/[0-9]/.test(event.key) &&
      !["Backspace", "ArrowLeft", "ArrowRight", "Delete"].includes(event.key)
    ) {
      event.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
      <div className=" flex flex-col col-span-2 gap-1 -mt-6 pb-4 text-center">
        <h2 className="headlines text-primary ">
          Create your customized itinerary in 3..2..1!
        </h2>
        <p className="bodys text-[#575F6E]">
          Fill in the details below to customize your itinerary
        </p>
      </div>
      <div className="col-span-1 ">
        <TextField
          className="w-full"
          error={!!errors.name}
          label="Name"
          variant="outlined"
          {...register("name")}
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
        {errors.name && (
          <p className="text-error bodyl">{errors.name.message}</p>
        )}
      </div>

      <div className="col-span-1">
        <TextField
          className="w-full bg-transparent"
          error={!!errors.email}
          label="Email"
          variant="outlined"
          {...register("email")}
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
        {errors.email && (
          <p className="text-error bodyl">{errors.email.message}</p>
        )}
      </div>

      <div className="col-span-1">
        <TextField
          type="number"
          className="w-full"
          error={!!errors.phone}
          label="Phone"
          variant="outlined"
          {...register("phone")}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          sx={{
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
        {errors.phone && (
          <p className="text-error bodyl">{errors.phone.message}</p>
        )}
      </div>

      <FormControl className="col-span-1">
        <InputLabel id="luxury">Travel Style</InputLabel>
        <Select
          className="w-full"
          defaultValue={"Luxury"}
          labelId="luxury"
          label="Travel Style"
          error={!!errors.travel_style}
          variant="outlined"
          {...register("travel_style")}
          sx={{
            color: "#404942",
            "& .MuiInputLabel-root": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#404942",
            },
            "& input": {
              color: "#404942",
            },
          }}
        >
          <MenuItem value="Luxury">Luxury</MenuItem>
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Budget">Budget</MenuItem>
        </Select>

        {errors.travel_style && (
          <p className="text-error bodyl">{errors.travel_style.message}</p>
        )}
      </FormControl>

      <FormControl className="col-span-1">
        <InputLabel id="places">Places of Interest</InputLabel>
        <Select
          className="w-full"
          labelId="places"
          defaultValue={"Sikkim"}
          label="Places of Interest"
          error={!!errors.places}
          variant="outlined"
          {...register("places")}
          sx={{
            color: "#404942",
            "& .MuiInputLabel-root": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#404942",
            },
            "& input": {
              color: "#404942",
            },
          }}
        >
          <MenuItem value="Sikkim">Sikkim</MenuItem>
          <MenuItem value="Darjeeling">Darjeeling</MenuItem>
          <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
          <MenuItem value="Nagaland">Nagaland</MenuItem>
          <MenuItem value="Meghalaya">Meghalaya</MenuItem>
        </Select>
        {errors.places && (
          <p className="text-error bodyl">{errors.places.message}</p>
        )}
      </FormControl>

      <FormControl className="col-span-1">
        <InputLabel id="accomodation">Accomodation Type</InputLabel>
        <Select
          className="w-full"
          labelId="accomodation"
          defaultValue={"Luxury"}
          label="Accomodation Type"
          error={!!errors.accommodation}
          variant="outlined"
          {...register("accommodation")}
          sx={{
            color: "#404942",
            "& .MuiInputLabel-root": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#404942",
            },
            "& input": {
              color: "#404942",
            },
          }}
        >
          <MenuItem value="Luxury">Luxury</MenuItem>
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Budget">Budget</MenuItem>
        </Select>

        {errors.accommodation && (
          <p className="text-error bodyl">{errors.accommodation.message}</p>
        )}
      </FormControl>
    </div>
  );
};

export default Step1Form;
