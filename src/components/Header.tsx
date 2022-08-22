import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type props = StyledProps & {
    title: string;
    colorTitle: string;
}

export function Header({ title, colorTitle, ...rest }: props) {
    const { colors } = useTheme();
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            pt={8}
            pb={2}
            px={4}
            {...rest}>

            <IconButton
                icon={<CaretLeft color={colors.light[50]} size={28} />}
                onPress={handleGoBack}
                _pressed={{
                    bg: "transparent"
                }}
            />
            <Heading color={colorTitle} flex={1}  fontSize="lg" ml={16} >
                {title}
            </Heading>
        </HStack>
    );
}