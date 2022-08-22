import { Box, Heading, VStack } from 'native-base';
import { Button } from '../components/Button';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {

    const navigator = useNavigation()

    function handleGoToLogin() {
        navigator.navigate('login')
    }

    function handleGoToRegister() {
        navigator.navigate('register')
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent="space-between" bg="warning.400">
            <Box flex={1} alignItems="center" zIndex={0} position="relative" >
                <ImageBackground
                    source={require('../assets/dog1.jpg')}
                    style={{ width: 400, height: 500 }}
                />
            </Box>

            <Box flex={1} alignItems="center" justifyContent="center" zIndex={2} position="absolute" mt={400} px={8} rounded="xl" bg="light.50" w="full" h="96" >
                <Heading color="gray.500" fontSize="2xl" mt={8} mb={12}>
                    Seja bem-vindo!
                </Heading>

                <Button
                    title="Acessar minha conta"
                    fontSize="md"
                    color="light.50"
                    w="full"
                    bg="warning.400"
                    mb={8}
                    _pressed={{ bg: "warning.300" }}
                    onPress={handleGoToLogin}
                />

                <Button
                    title="Criar conta"
                    fontSize="md"
                    color="warning.400"
                    w="full"
                    bg="light.50"
                    mb={8}
                    _pressed={{ bg: "light.100" }}
                    onPress={handleGoToRegister}
                />
            </Box>
        </VStack>
    );
}