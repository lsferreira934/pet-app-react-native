import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
    title: string;
    fontSize: 'sm' | 'md' | 'lg' | 'xl';
    color: string;
}

export function Button({ title, fontSize, color, ...rest }: Props) {
    return (
        <NativeBaseButton
            h={14}
            rounded="lg"
            {...rest}
        >
            <Heading color={color} fontSize={fontSize}>
                {title}
            </Heading>
        </NativeBaseButton >
    );
}