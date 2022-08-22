import { Box, Heading, VStack, useTheme, Icon, HStack, IconButton } from 'native-base';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Envelope, Eye, EyeClosed } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';
import { useState } from 'react';
import { IconPassword } from '../components/IconPassword';

export function Register() {
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
    <VStack flex={1} bg="light.50">

      <Header title='Boas-vindas!' colorTitle='light.50' bg="warning.400" />

      <VStack flex={1} alignItems="center" bg='light.50' px={8} pt={15}>

        <Input
          placeholder="Seu E-mail"
          InputLeftElement={<Icon as={<Envelope color={colors.muted[400]} />} ml={4} />}
          mb={10}
          mt={20}
        />

        <Input
          placeholder="Sua senha"
          type={show ? "text" : "password"}
          InputRightElement={<Icon as={<IconPassword show={show} tooglePassword={handleShow} />} mr={4} />}
          mb={2}
        />


        <Input
          placeholder="Sua senha"
          type={show ? "text" : "password"}
          InputRightElement={<Icon as={<IconPassword show={show} tooglePassword={handleShow} />} mr={4} />}
          mb={2}
        />

       
        <Button
          title="Criar conta"
          fontSize="md"
          color="light.50"
          w="full"
          bg="warning.400"
          mb={8}
          _pressed={{ bg: "warning.300" }}
        />
      </VStack>

    </VStack>
  );
}