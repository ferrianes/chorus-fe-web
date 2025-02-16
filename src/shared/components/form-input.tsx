'use client';

import * as React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/form'
import { Input } from '@/shared/components/input';
import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';

type FormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  label?: string;
  description?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  inputClassName?: string;
} & UseControllerProps<TFieldValues, TName>

const FormInput = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  name,
  label,
  control,
  description,
  className,
  inputClassName,
  placeholder,
  disabled,
}: FormInputProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            {label && (
              <div className='flex flex-row items-center gap-x-1'>
                <FormLabel>{label}</FormLabel>
              </div>
            )}
            <div className='flex flex-col gap-y-1'>
              <FormControl>
                <Input
                  placeholder={placeholder}
                  disabled={disabled}
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </div>
          </FormItem>
        )
      }
      }
    />
  );
}

export { FormInput };