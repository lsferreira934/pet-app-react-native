import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../view/Login';
import { Register } from '../view/Register';
import { Welcome } from '../view/Welcome';

const { Navigator, Screen } = createNativeStackNavigator();


export function AppStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="welcome" component={Welcome} />
            <Screen name="login" component={Login} />
            <Screen name="register" component={Register} />
        </Navigator>
    );
}