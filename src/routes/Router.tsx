import { NavigationContainer } from "@react-navigation/native"
import { AppAuth } from "./AppAuth";
import { AppStack } from "./AppStack";

export function Router() {
    const user = false

    return (
        <NavigationContainer>
            {user ? <AppAuth /> : <AppStack />}
        </NavigationContainer>
    );
}