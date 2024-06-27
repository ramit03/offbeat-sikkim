"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Step2FormData } from "@/lib/types";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import { Chip} from "@mui/material";
import { placesAndDestinations } from "@/constants";

interface Step2FormProps {
  selectedPlaceOfInterest: string;
}

const Step2Form: React.FC<Step2FormProps> = ({ selectedPlaceOfInterest }) => {
  const {
    control,
    formState: { errors,touchedFields },
    trigger,
    setValue,
  } = useFormContext<Step2FormData>();

  const [selectedDestinations, setSelectedDestinations] = React.useState<
    string[]
  >([]);
  console.log(selectedDestinations);

  const availableDestinations =
    placesAndDestinations[selectedPlaceOfInterest] || [];

  const handleDateChange = async (date: dayjs.Dayjs | null, field: any) => {
    const formattedDate = date ? date.format("YYYY-MM-DD") : "";
    setValue(field.name, formattedDate);
    await trigger(field.name);
    console.log(`${field.name} set to:`, formattedDate);
  };

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
      <div className=" flex flex-col col-span-2 gap-1 -mt-6 pb-4 text-center">
        <h2 className="headlines text-primary ">
          Please select your tour dates and destinations
        </h2>
        <p className="bodys text-[#575F6E]">
          Fill in the details below to customize your itinerary
        </p>
      </div>
      <div className="col-span-1">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <>
                <DatePicker
                  {...field}
                  className="w-full"
                  label="Start Date"
                  disablePast
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) => handleDateChange(date, field)}
                  slotProps={{
                    textField: {
                      onBlur: () => trigger("startDate"),
                      sx: {
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
                      },
                    },
                  }}
                />
                {errors.startDate && touchedFields.startDate && (
                  <p className="text-error bodyl">{errors.startDate.message}</p>
                )}
              </>
            )}
          />
        </LocalizationProvider>
      </div>

      <div className="col-span-1">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="endDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
              <DatePicker
                label="End Date"
                disablePast
                className="w-full"
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => handleDateChange(date, field)}
                slotProps={{
                  textField: {
                    onBlur: () => trigger("endDate"),
                    sx: {
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
                    },
                  },
                }}
              />
                {errors.endDate && touchedFields.endDate && (
                  <p className="text-error bodyl">{errors.endDate.message}</p>
                )}
              </>
            )}
          />
        </LocalizationProvider>
      </div>
      <div className="col-span-2 space-y-3">
        <p className="text-black bodym">Select Destinations</p>
        <Controller
          name="destination"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {availableDestinations.map((destination, index) => (
                  <Chip
                    className="text-primary"
                    key={index}
                    label={destination}
                    clickable
                    onClick={() => {
                      const updatedDestinations = field.value.includes(
                        destination
                      )
                        ? field.value.filter((d) => d !== destination)
                        : [...field.value, destination];
                      setValue("destination", updatedDestinations);
                      trigger("destination");
                    }}
                    variant={
                      field.value.includes(destination) ? "filled" : "outlined"
                    }
                    sx={{
                      ...(field.value.includes(destination)
                        ? {
                            backgroundColor: "primary.main",
                            color: "white",
                            "& .MuiChip-label": { color: "white" },
                          }
                        : {
                            borderColor: "primary.main",
                            color: "primary.main",
                            "& .MuiChip-label": { color: "primary.main" },
                          }),
                      "&:hover": {
                        backgroundColor: field.value.includes(destination)
                          ? "primary.dark"
                          : "rgba(25, 169, 108, 0.1)",
                      },
                    }}
                  />
                ))}
              </div>
              {errors.destination && touchedFields.destination && (
                <p className="text-error bodyl">{errors.destination.message}</p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Step2Form;
