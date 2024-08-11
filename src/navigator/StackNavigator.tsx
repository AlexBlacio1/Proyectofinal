import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { CartScreen } from '../screens/CartScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PRIMARY_COLOR
                }
            }}>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
}
