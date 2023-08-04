import { Input as NativeBaseInput, IInputProps } from 'native-base';



export function Input({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            bg="gray.100"
            h={14}
            size="mb"
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            color="gray.700"
            placeholderTextColor="gray.300"
            _focus={{
                borderWidth: 1,
                borderColor: "warning.400",
                bg: "gray.100"
            }}
            {...rest}
        />
    );
}