import React from 'react'
import { Input } from './Input'
import { Control, Controller, FieldError } from 'react-hook-form'
import { FormControl, IInputProps } from 'native-base'
import { WarningCircle } from 'phosphor-react-native'

type Props = IInputProps & {
  control: Control<any>
  name: string
  labelError?: FieldError
}

export function ControlledInput ({ control, name, labelError, ...rest }:Props) {

  return (
    <Controller 
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <>
          <Input onChange={onChange} value={value} {...rest}/>
          <FormControl.ErrorMessage leftIcon={<WarningCircle size={32} />}>
            {labelError}
          </FormControl.ErrorMessage>
        </>
        )
      }
    />
  )
}
