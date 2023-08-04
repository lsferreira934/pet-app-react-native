import React from 'react'
import { Input } from './Input'
import { Control, Controller, FieldError } from 'react-hook-form'
import { FormControl, IInputProps, Text, WarningOutlineIcon } from 'native-base'
import { WarningCircle } from 'phosphor-react-native'

type Props = IInputProps & {
  control: Control<any>
  name: string
  error?: FieldError
}

export function ControlledInput ({ control, name, error, ...rest }:Props) {

  return (
    <FormControl isInvalid={error? true: false}>
        <Controller 
          name={name}
          control={control}
          render={({field: {onChange, value}}) => (
            <Input onChangeText={onChange} value={value} {...rest}/>
            )
          }
        />
        { error && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error.message}
        </FormControl.ErrorMessage>)}
      </FormControl>
  )
}
