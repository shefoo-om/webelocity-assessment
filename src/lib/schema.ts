import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const contactFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().refine((val) => {
        if (!val) return false;
        const cleanNumber = val.startsWith('+') ? val : `+${val}`;
        const phoneNumber = parsePhoneNumberFromString(cleanNumber);
        if (!phoneNumber) {
            return parsePhoneNumberFromString(cleanNumber, 'US')?.isValid();
        }
        return phoneNumber.isValid();
    }, { message: "Please enter a valid phone number" }),
    address: z.string().optional(),
    message: z.string().min(5, { message: "Message is required" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;