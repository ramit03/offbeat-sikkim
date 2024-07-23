"use client";
import React, { ChangeEvent, useState } from "react";
import { PackageForm } from "@/lib/types";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Button } from "../ui/button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CuratedPackages, UpcomingTours } from "@/constants";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";

interface PackageContactFormProps {
  link: string;
  packageTitle?: string;
  handleClose: () => void;
  tourDates?: string[];
}

const PackageContactForm: React.FC<PackageContactFormProps> = ({
  link,
  packageTitle,
  handleClose,
  tourDates,
}) => {
  const isUpcoming = link.startsWith("upcoming");
  const isTrek = link.endsWith("trek") && !isUpcoming;
  const isCurated = link.startsWith("curated");
  const isDefault = link === "";

  const source = isUpcoming
    ? "upcoming"
    : isTrek
    ? "trek"
    : isCurated
    ? "curated"
    : isDefault
    ? "default"
    : "default";

  const [formData, setFormData] = useState<PackageForm>({
    packageName: packageTitle,
    name: "",
    email: "",
    phone: "",
    travelstyle: "",
    accommodation: "",
    noOfAdults: "",
    noOfChildren: "0",
    age: [""],
    additionalInformation: "",
    tourPackage: packageTitle || "",
    startDate: "",
    tourDates: "",
    source: source,
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<PackageForm>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleClear = (field: keyof PackageForm) => {
    setFormData({ ...formData, [field]: "" });
    setErrors({ ...errors, [field]: "" });
  };

  const handleDateChange = (date: dayjs.Dayjs | null, field: string) => {
    setFormData({
      ...formData,
      [field]: date ? date.format("YYYY-MM-DD") : "",
    });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleAddField = () => {
    setFormData((prevFormData) => {
      const newAgeArray = [...(prevFormData.age || [""]), ""];
      return {
        ...prevFormData,
        age: newAgeArray,
        noOfChildren: newAgeArray.length.toString(),
      };
    });
  };

  const handleRemoveField = (index: number) => {
    const updatedFields = (formData.age || [""]).filter((_, i) => i !== index);
    setFormData((prevFormData) => ({
      ...prevFormData,
      age: updatedFields,
      noOfChildren: updatedFields.length.toString(),
    }));
  };

  const handleInputChangeChildren = (index: number, value: string) => {
    const updatedFormData = { ...formData };
    const updatedNoOfChildren = [...(updatedFormData.age || [""])];

    updatedNoOfChildren[index] = value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      age: updatedNoOfChildren,
      noOfChildren: updatedNoOfChildren.length.toString(),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      age: [""],
    }));
  };
  const validateForm = () => {
    const newErrors: Partial<PackageForm> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if ((isDefault || isCurated) && !formData.tourPackage)
      newErrors.tourPackage = "Please select a tour package";
    if ((isDefault || isCurated) && !formData.travelstyle)
      newErrors.travelstyle = "Travel Style is required";
    if ((isDefault || isCurated) && !formData.accommodation)
      newErrors.accommodation = "Accommodation is required";
    if ((isTrek || isDefault || isCurated) && !formData.startDate)
      newErrors.startDate = "Please select a start date";
    if (!formData.noOfAdults)
      newErrors.noOfAdults = "Number of adults is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const finalFormData = { ...formData };
    if (isTrek) {
      delete finalFormData.travelstyle;
      delete finalFormData.accommodation;
      delete finalFormData.tourDates;
    }

    if (isCurated || isDefault) {
      delete finalFormData.tourDates;
      const payload = {
        name: formData.name,
        phone_number: formData.phone,
        email: formData.email,
        tourPackage: formData.tourPackage,
        start_Date: formData.startDate,
        no_of_adults: parseInt(formData.noOfAdults, 10) || 0,
        no_of_children: parseInt(formData.noOfChildren ?? "0", 10) || 0,
        children_details: formData.age,
        travel_style: formData.travelstyle,
        accommodation: formData.accommodation,
        comments: formData.additionalInformation,
      };

      const config = {
        method: "post",
        url: "/api/trip-plan-request",
        headers: {
          Accept: "application/json",
        },
        data: payload,
      };

      try {
        const response = await axios(config);
        console.log("Response:", response.data);
        setResponseMessage(response.data.message);
      } catch (error: any) {
        console.error("Submission error:", {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
          config: error.config,
        });
        setResponseMessage("An error occurred. Please try again.");
      }
    }

    if (!isDefault && !isCurated) {
      delete finalFormData.tourPackage;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          handleClose();
        }, 5000);
      } else {
        console.error("Email sending failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setIsSubmitted(true);
    }
  };

    return (
      <form
        onSubmit={handleSubmit}
        className="p-5 gap-6 flex flex-col justify-center items-center rounded-lg bg-white md:grid md:grid-cols-2"
      >
        <Stack direction={"column"} gap={1} className="col-span-2">
          <h2 className="text-primary headlines md:headlinel text-center">
            Enquire about our Packages
          </h2>
          <p className="bodys md:titlem text-[#575F6E] text-center">
            Fill in the details below to start planning your trip
          </p>
        </Stack>
        {isSubmitted ? (
          <div className="col-span-2 text-center">
            <h3 className="text-success">
              Your enquiry has been submitted successfully!
            </h3>
          </div>
        ) : (
          <>
            <FormControl variant="outlined" className="col-span-1" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput
                id="name"
                name="name"
                label="Name*"
                value={formData.name}
                error={!!errors.name}
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disableTouchRipple
                      onClick={() => handleClear("name")}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  color: "#404942",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#404942",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#404942",
                  },
                  "& .MuiOutlinedInput-input": {
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
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "#404942",
                    },
                  "& .MuiOutlinedInput-input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px white inset",
                    WebkitTextFillColor: "#404942",
                  },
                }}
              />
              {errors.name && <p className="text-error bodyl">{errors.name}</p>}
            </FormControl>

            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                label="Email*"
                error={!!errors.email}
                value={formData.email}
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disableTouchRipple
                      onClick={() => handleClear("email")}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  color: "#404942",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#404942",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#404942",
                  },
                  "& .MuiOutlinedInput-input": {
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
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "#404942",
                    },
                  "& .MuiOutlinedInput-input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px white inset",
                    WebkitTextFillColor: "#404942",
                  },
                }}
              />
              {errors.email && (
                <p className="text-error bodyl">{errors.email}</p>
              )}
            </FormControl>

            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="phone">Phone</InputLabel>
              <OutlinedInput
                id="phone"
                name="phone"
                label="Phone*"
                type="number"
                value={formData.phone}
                onChange={handleInputChange}
                error={!!errors.phone}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disableTouchRipple
                      onClick={() => handleClear("phone")}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  color: "#404942",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#404942",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#404942",
                  },
                  "& .MuiOutlinedInput-input": {
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
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "#404942",
                    },
                  "& .MuiOutlinedInput-input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px white inset",
                    WebkitTextFillColor: "#404942",
                  },
                }}
              />
              {errors.phone && (
                <p className="text-error bodyl">{errors.phone}</p>
              )}
            </FormControl>

            {isUpcoming && (
              <FormControl className="col-span-2 w-full">
                <FormLabel id="dates" className="text-[#404942]">
                  Select Dates
                </FormLabel>
                <RadioGroup
                  aria-labelledby="dates"
                  name="tourDates"
                  value={formData.tourDates}
                  onChange={handleRadioChange}
                >
                  {tourDates?.map((date, index) => (
                    <FormControlLabel
                      id={`${index}`}
                      key={index}
                      value={date}
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#19A96C",
                            },
                          }}
                        />
                      }
                      label={date}
                    />
                  ))}
                </RadioGroup>
                {errors.tourDates && (
                  <p className="text-error bodyl">{errors.tourDates}</p>
                )}
              </FormControl>
            )}

            {(isDefault || isCurated) && (
              <>
                <FormControl className="col-span-1 w-full">
                  <InputLabel id="travel_style">Travel Style</InputLabel>
                  <Select
                    className="w-full"
                    labelId="travel_style"
                    label="Travel Style*"
                    name="travelstyle"
                    value={formData.travelstyle}
                    onChange={handleSelectChange}
                    error={!!errors.travelstyle}
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
                    <MenuItem value="Premium">Premium</MenuItem>
                    <MenuItem value="Mid-Range">Mid-Range</MenuItem>
                  </Select>
                  {errors.travelstyle && (
                    <p className="text-error bodyl">{errors.travelstyle}</p>
                  )}
                </FormControl>

                <FormControl className="col-span-1 w-full">
                  <InputLabel id="accommodation">Accommodation Type</InputLabel>
                  <Select
                    className="w-full"
                    labelId="accommodation"
                    label="Accommodation Type*"
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleSelectChange}
                    error={!!errors.accommodation}
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
                    <MenuItem value="Resort">Resort</MenuItem>
                    <MenuItem value="Hotel">Hotel</MenuItem>
                    <MenuItem value="Homestay">Homestay</MenuItem>
                  </Select>
                  {errors.accommodation && (
                    <p className="text-error bodyl">{errors.accommodation}</p>
                  )}
                </FormControl>
              </>
            )}

            {(isTrek || isDefault || isCurated) && (
              <>
                <div className="col-span-1 w-full flex gap-2 flex-col">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="w-full"
                      label="Start Date"
                      disablePast
                      value={
                        formData.startDate ? dayjs(formData.startDate) : null
                      }
                      onChange={(date) => handleDateChange(date, "startDate")}
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
                      }}
                    />
                    {errors.startDate && (
                      <p className="text-error bodyl">{errors.startDate}</p>
                    )}
                  </LocalizationProvider>
                </div>
              </>
            )}
            {(isDefault || isCurated) && (
              <>
                <FormControl className="col-span-1 w-full">
                  <InputLabel id="tourPackage">Tour Package</InputLabel>
                  <Select
                    className="w-full"
                    labelId="tourPackage"
                    label="Tour Package*"
                    name="tourPackage"
                    value={formData.tourPackage}
                    onChange={handleSelectChange}
                    error={!!errors.tourPackage}
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
                    {CuratedPackages.map((item, index) => (
                      <MenuItem
                        key={index}
                        value={item.title}
                        id={index as unknown as string}
                      >
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.tourPackage && (
                    <p className="text-error bodyl">{errors.tourPackage}</p>
                  )}
                </FormControl>
              </>
            )}

            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="noOfAdults">Number of Adults</InputLabel>
              <OutlinedInput
                id="noOfAdults"
                name="noOfAdults"
                type="number"
                label="Number of Adults*"
                value={formData.noOfAdults}
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      disableTouchRipple
                      onClick={() => handleClear("noOfAdults")}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  color: "#404942",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#404942",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#404942",
                  },
                  "& .MuiOutlinedInput-input": {
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
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "#404942",
                    },
                  "& .MuiOutlinedInput-input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px #F6FBF4 inset",
                    WebkitTextFillColor: "#404942",
                  },
                }}
              />
              {errors.noOfAdults && (
                <p className="text-error bodyl">{errors.noOfAdults}</p>
              )}
            </FormControl>
            {!isUpcoming && (
              <div className="gap-3 w-full flex flex-wrap md:col-span-2">
                {(formData.age || []).map((field, index) => (
                  <div
                    key={index}
                    className="col-span-1 flex flex-wrap gap-2 items-center"
                  >
                    <FormControl variant="outlined" className="w-52">
                      <InputLabel htmlFor={`age-${index}`}>
                        No of Children & Age
                      </InputLabel>
                      <Select
                        className="w-full"
                        id={`age-${index}`}
                        name={`age-${index}`}
                        value={(formData.age && formData.age[index]) || ""}
                        label="No of Children & Age"
                        onChange={(e) =>
                          handleInputChangeChildren(index, e.target.value)
                        }
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
                        <MenuItem value="0">None</MenuItem>
                        <MenuItem value="1 Year">1Y</MenuItem>
                        <MenuItem value="2 Years">2Y</MenuItem>
                        <MenuItem value="3 Years">3Y</MenuItem>
                        <MenuItem value="4 Years">4Y</MenuItem>
                        <MenuItem value="5 Years">5Y</MenuItem>
                        <MenuItem value="6 Years">6Y</MenuItem>
                        <MenuItem value="7 Years">7Y</MenuItem>
                        <MenuItem value="8 Years">8Y</MenuItem>
                        <MenuItem value="9 Years">9Y</MenuItem>
                        <MenuItem value="10 Years">10Y</MenuItem>
                        <MenuItem value="11 Years">11Y</MenuItem>
                        <MenuItem value="12 Years">12Y</MenuItem>
                        <MenuItem value="13 Years">13Y</MenuItem>
                        <MenuItem value="14 Years">14Y</MenuItem>
                        <MenuItem value="15 Years">15Y</MenuItem>
                        <MenuItem value="16 Years">16Y</MenuItem>
                      </Select>
                    </FormControl>

                    {index === (formData.age || []).length - 1 && (
                      <div className="flex flex-row">
                        <IconButton
                          disableTouchRipple
                          size="small"
                          disabled={!field.trim()}
                          onClick={handleAddField}
                        >
                          <AddCircleOutlineIcon className="hover:text-primary" />
                        </IconButton>
                        <IconButton
                          disableTouchRipple
                          size="small"
                          onClick={() => handleRemoveField(index)}
                          disabled={(formData.age || []).length === 1}
                        >
                          <CancelOutlinedIcon className="hover:text-error" />
                        </IconButton>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="col-span-2 w-full flex items-center">
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
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":
                    {
                      color: "#404942",
                    },
                }}
              />
            </div>
            <Button type="submit" className="w-fit self-start col-span-2">
              Get in Touch
            </Button>
          </>
        )}
      </form>
    );
  };

export default PackageContactForm;
