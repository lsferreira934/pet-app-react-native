import { Box, Heading, VStack, HStack, useTheme, IconButton, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import { ImageBackground } from 'react-native';
import { Input } from '../components/Input';
import { CaretLeft, Envelope } from 'phosphor-react-native';
import { IconPassword } from '../components/IconPassword';
import { useState } from 'react';

export function Login() {
    const [show, setShow] = useState(false);

    const { colors } = useTheme();
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleShow() {
        setShow(!show)
    }

    return (
        <VStack flex={1} alignItems="center" bg="warning.400">
            <Box flex={1} alignItems="center" zIndex={0} position="relative" mt={410} >
                <ImageBackground
                    source={require('../assets/dog1.jpg')}
                    style={{ width: 400, height: 500 }}
                />
            </Box>

            <Box flex={1} alignItems="center" justifyContent="center" zIndex={2} position="absolute" px={8} mt={8} roundedBottom="xl" bg="light.50" w="full" h="96" >

                <HStack justifyContent="space-between">
                    <IconButton icon={<CaretLeft color={colors.warning[400]} size={24} />} onPress={handleGoBack} />
                    <Box flex={1}></Box>
                </HStack>

                <Heading color="gray.500" fontSize="xl" mt={2} mb={6}>
                    Acesse a sua conta
                </Heading>

                <Input
                    placeholder="Sua senha"
                    InputRightElement={<Icon as={<Envelope color={colors.muted[400]} />} mr={4} />}
                    mb={2}
                />

                <Input
                    placeholder="Sua senha"
                    type={show ? "text" : "password"}
                    InputRightElement={<Icon as={<IconPassword show={show} tooglePassword={handleShow} />} mr={4} />}
                    mb={2}
                />

                <Button
                    title="Entrar"
                    fontSize="md"
                    color="light.50"
                    w="full"
                    bg="warning.400"
                    mb={8}
                    _pressed={{ bg: "warning.300" }}
                />
            </Box >
        </VStack >
    );
}