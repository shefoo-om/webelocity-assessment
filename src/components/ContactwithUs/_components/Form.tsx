"use client";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/schema';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

export default function ContactUsForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            console.log(data);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSubmitted(true);
            reset();
            // Hide success message after 3 seconds
            setTimeout(() => setIsSubmitted(false), 4000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputRow">
                <div className="inputChil">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register('name')}
                        disabled={isSubmitting}
                    />
                    {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                </div>
                <div className="inputChil">
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email')}
                        disabled={isSubmitting}
                    />
                    {errors.email && <span className="errorMessage">{errors.email.message}</span>}
                </div>
            </div>

            <div className="inputChil">
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <PhoneInput
                            country={'us'}
                            value={field.value}
                            onChange={field.onChange}
                            disabled={isSubmitting}
                            inputStyle={{
                                width: '100%',
                                height: '44px',
                                fontSize: '16px',
                                paddingLeft: '48px',
                                borderRadius: '10px',
                                border: '1px solid #e5e5e5',
                                color: "black"
                            }}
                            buttonStyle={{
                                backgroundColor: '#f8f9fa',
                                borderRadius: '9px 0 0 9px',
                                borderRight: '1px solid #e5e5e5',
                                borderTop: '1px solid #e5e5e5',
                                borderLeft: '1px solid #e5e5e5',
                                borderBottom: '1px solid #e5e5e5',
                                color: "black"
                            }}
                            dropdownStyle={{
                                width: '250px',
                                maxHeight: '250px',
                                borderTopLeftRadius: '24px',
                                borderBottomLeftRadius: '24px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        />
                    )}
                />
                {errors.phone && <span className="errorMessage">{errors.phone.message}</span>}
            </div>

            <div className="inputChil">
                <input
                    type="text"
                    placeholder="Address"
                    {...register('address')}
                    disabled={isSubmitting}
                />
                {errors.address && <span className="errorMessage">{errors.address.message}</span>}
            </div>

            <div className="inputChil">
                <textarea
                    placeholder="Message"
                    {...register('message')}
                    disabled={isSubmitting}
                />
                {errors.message && <span className="errorMessage">{errors.message.message}</span>}
            </div>

            <div className="form-footer">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={isSubmitting ? 'submitting' : isSubmitted ? 'submitted' : ''}
                >
                    {isSubmitting ? (
                        'Sending...'
                    ) : isSubmitted ? (
                        'Message Sent ✓'
                    ) : (
                        'Submit'
                    )}
                </button>

                {isSubmitted && (
                    <div className="success-message">
                        Thank you! We&apos;ll connect with you soon.
                    </div>
                )}
            </div>
        </form>
    );
}