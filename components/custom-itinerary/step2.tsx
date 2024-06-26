import React from "react";
import { useFormContext } from "react-hook-form";
import { Step2FormData } from "@/lib/types";

const Step2Form: React.FC = () => {
  const { register, formState: { errors } } = useFormContext<Step2FormData>();

  return (
    <div>
      <div>
        <label>Destination:</label>
        <input {...register("destination")} />
        {errors.destination && <p>{errors.destination.message}</p>}
      </div>
      <div>
        <label>Date From:</label>
        <input type="date" {...register("date.from")} />
        {errors.date?.from && <p>{errors.date.from?.message}</p>}
      </div>
      <div>
        <label>Date To:</label>
        <input type="date" {...register("date.to")} />
        {errors.date?.to && <p>{errors.date.to?.message}</p>}
      </div>
    </div>
  );
};

export default Step2Form;