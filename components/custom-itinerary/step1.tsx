import React from "react";
import { useFormContext } from "react-hook-form";
import { Step1FormData } from "@/lib/types";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Step1Form: React.FC = () => {
  const { register, formState: { errors } } = useFormContext<Step1FormData>();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <TextField className="w-full" error={!!errors.name} label="Name" variant="outlined" {...register("name")} 
        sx={{
          "& .MuiInputLabel-root": {
            color: '#404942',
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: '#404942',
            },
            "& input": {
              color: '#404942',
            },
          },
        }}/>
        {errors.name && <p className="text-error bodyl">{errors.name.message}</p>}
      </div>

      <div>
      <TextField className="w-full bg-transparent" error={!!errors.email} label="Email" variant="outlined" {...register("email")} 
        sx={{
          "& .MuiInputLabel-root": {
            color: '#404942',
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: '#404942',
            },
            "& input": {
              color: '#404942',
            },
          },
        }}/>
        {errors.email && <p className="text-error bodyl">{errors.email.message}</p>}
      </div>

      <div>
      <TextField type="number" className="w-full" error={!!errors.phone} label="Phone" variant="outlined" {...register("phone")} 
        sx={{
          "& .MuiInputLabel-root": {
            color: '#404942',
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: '#404942',
            },
            "& input": {
              color: '#404942',
            },
          },
        }}/>
        {errors.phone && <p className="text-error bodyl">{errors.phone.message}</p>}
      </div>
        
      <FormControl>
      <InputLabel id="luxury">Travel Style</InputLabel>
        <Select className="w-full" labelId="luxury" label='Travel Style' variant="outlined" {...register("travel_style")}
         sx={{
          "& .MuiInputLabel-root": {
            color: '#404942',
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: '#404942',
            },
            "& input": {
              color: '#404942',
            },
          },
        }}>
          <MenuItem value="Luxury">Luxury</MenuItem>
          <MenuItem value="Not">Not</MenuItem>
          <MenuItem value="Third">Third</MenuItem>
        </Select>
        
        {errors.travel_style && <p>{errors.travel_style.message}</p>}
      </FormControl>
      <div>
        <label>Places:</label>
        <select {...register("places")}>
          <option value="">Select...</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Third">Third</option>
        </select>
        {errors.places && <p>{errors.places.message}</p>}
      </div>
      <div>
        <label>Accommodation:</label>
        <select {...register("accommodation")}>
          <option value="">Select...</option>
          <option value="Luxury">Luxury</option>
          <option value="Not">Not</option>
          <option value="Third">Third</option>
        </select>
        {errors.accommodation && <p>{errors.accommodation.message}</p>}
      </div>
    </div>
  );
};

export default Step1Form;