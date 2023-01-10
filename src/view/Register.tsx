import { VStack, useTheme, Icon,  useToast, FormControl } from 'native-base';
import { Button } from '../components/Button';
import { ControlledInput } from '../components/ControlledInput';
import { Envelope, IdentificationBadge, Phone } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';
import { useState } from 'react';
import { IconPassword } from '../components/IconPassword';
import { ToastAlert } from '../components/ToastAlert';
import { SubmitHandler, useForm } from 'react-hook-form';


type FormData = {
  name: string
  lastName: string,
  phone: string,
  email: string,
  password: string,
  validatePassword: string
}

export function Register() {
  const [ show, setShow ] = useState(false);
  
  const { colors } = useTheme();
  const { control, handleSubmit } = useForm<FormData>();
  const navigation = useNavigation();
  const toast = useToast();
 
  const handleSendForm: SubmitHandler<FormData> = (data) => {
    console.log(data)
    // const ToastDetails = {
    //   title: "Senha ",
    //   variant: "subtle",
    //   description: "Thanks for signing up with us.",
    //   status: "info"
    // };
    // if (form.password !== form.replay) {
     
    //   toast.show({ render: () =>  <ToastAlert {...ToastDetails}/>,  placement:"top-right"})
    // }
  }


  return (
    <VStack flex={1} bg="light.50">

      <Header title='Cadastro' colorTitle='light.50' bg="warning.400" />

      <VStack flex={1} alignItems="center" bg='light.50' px={8} pt={15}>

      <FormControl w="100%" >
        <ControlledInput
          control={control}
          name="name"
          placeholder="Nome"
          InputLeftElement={<Icon as={<IdentificationBadge color={colors.muted[400]} />} ml={4} />}
          mt={10}
          mb={2}
        />

        <ControlledInput
          control={control}
          name="lastName"
          placeholder="Sobrenome"
          InputLeftElement={<Icon as={<IdentificationBadge color={colors.muted[400]} />} ml={4} />}
          mb={2}
        />

        <ControlledInput
          control={control}
          name="phone"
          placeholder="Telefone"
          InputLeftElement={<Icon as={<Phone color={colors.muted[400]} />} ml={4} />}
          mb={2}
        />

        <ControlledInput
          control={control}
          name="email"
          placeholder="Seu E-mail"
          InputLeftElement={<Icon as={<Envelope color={colors.muted[400]} />} ml={4} />}
          mb={10}
        />

        <ControlledInput
          control={control}
          name="password"
          placeholder="Sua senha"
          type={show ? "text" : "password"}
          InputRightElement={<Icon as={<IconPassword show={show} tooglePassword={() => setShow(!show)} />} mr={4} />}
          mb={2}
        />


        <ControlledInput
          control={control}
          name="validatePassword"
          placeholder="Sua senha"
          type={show ? "text" : "password"}
          InputRightElement={<Icon as={<IconPassword show={show} tooglePassword={() => setShow(!show)} />} mr={4} />}
          mb={10}
        />

       
        <Button
          title="Criar conta"
          fontSize="md"
          color="light.50"
          w="full"
          bg="warning.400"
          mb={8}
          _pressed={{ bg: "warning.300" }}
          onPress={handleSubmit(handleSendForm)}
        />
        </FormControl>
      </VStack>

    </VStack>
  );
}