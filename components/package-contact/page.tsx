'use client';

import React, { useState } from 'react';
import { PackageForm } from '@/lib/types';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Button } from '../ui/button';

const PackageContactForm = () => {
  const [formData, setFormData] = useState<PackageForm>({
    name: "",
    email: "",
    phone: "",
    travelstyle: "",
    accommodation: "",
  });

  const [errors, setErrors] = useState<Partial<PackageForm>>({});

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

  const handleClear = (field: keyof PackageForm) => {
    setFormData({ ...formData, [field]: "" });
    setErrors({ ...errors, [field]: "" });
  };

  const validateForm = () => {
    const newErrors: Partial<PackageForm> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
    if (!formData.travelstyle) newErrors.travelstyle = "Travel Style is required";
    if (!formData.accommodation) newErrors.accommodation = "Accommodation is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 gap-6 flex flex-col justify-center items-center bg-white md:grid md:grid-cols-2">
      <FormControl variant="outlined" className='col-span-1' fullWidth>
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
              <IconButton disableTouchRipple onClick={() => handleClear("name")}>
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
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
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
              <IconButton disableTouchRipple onClick={() => handleClear("email")}>
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
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
              WebkitTextFillColor: "#404942",
            },
          }}
        />
        {errors.email && <p className="text-error bodyl">{errors.email}</p>}
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
              <IconButton disableTouchRipple onClick={() => handleClear("phone")}>
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
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
              color: "#404942",
            },
            "& .MuiOutlinedInput-input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px white inset",
              WebkitTextFillColor: "#404942",
            },
          }}
        />
        {errors.phone && <p className="text-error bodyl">{errors.phone}</p>}
      </FormControl>

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
          <MenuItem value="Luxury">Luxury</MenuItem>
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Budget">Budget</MenuItem>
        </Select>
        {errors.travelstyle && <p className="text-error bodyl">{errors.travelstyle}</p>}
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
          <MenuItem value="Luxury">Luxury</MenuItem>
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Budget">Budget</MenuItem>
        </Select>
        {errors.accommodation && <p className="text-error bodyl">{errors.accommodation}</p>}
      </FormControl>

      <Button type="submit" className="w-fit self-start col-span-2">Get in Touch</Button>
    </form>
  );
};

export default PackageContactForm;