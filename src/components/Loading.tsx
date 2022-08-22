import { Center, Spinner } from 'native-base';

export function Loading() {
    return (
        <Center flex={1} bg="warning.400">
            <Spinner color="white" size="lg" />
        </Center>
    );
};