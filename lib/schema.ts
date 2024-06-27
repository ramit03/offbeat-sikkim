import { z } from "zod";

export const step1Schema = z.object({
    name: z.string().min(1, {
      message: "Please enter your name",
    }),
    travel_style: z.string().min(1, {
      message: "Please select your travel style",
    }),
    places: z.string().min(1, {
      message: "Please select your place of interest",
    }),
    accommodation: z.string().min(1, {
      message: "Please select your accommodation type",
    }),
    email: z.string()
      .min(1, { message: "Please enter your email" })
      .email({ message: "Please enter a valid email" }),
    phone: z.string()
      .min(10, { message: "Please enter your phone number" })
      .max(10, { message: "Phone number must be 10 digits" })
      .regex(/^\d+$/, { message: "Phone number must contain only digits" })
  });
  
  export const step2Schema = z.object({
    startDate: z.string().refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Please select a valid date",
    }),
    endDate: z.string().refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Please select a valid date",
    }),
    destination: z.array(z.string()).min(1, {
      message: "Please select at least one destination",
    }),
  }).superRefine(({ startDate, endDate }, context) => {
    if (new Date(endDate) < new Date(startDate)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "End date cannot be before start date",
        path: ["endDate"],
      });
    }
  });
  
export const step3Schema = z.object({
    numberOfAdults: z.string().min(1, { message: "Number of adults is required" }),
    numberOfChildren: z.string().min(1, { message: "Number of children is required" }),
    additionalInformation: z.string().optional(),
  });
  
export  const schemas = [step1Schema, step2Schema, step3Schema];


export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;
export type FormData = Step1FormData & Step2FormData & Step3FormData;