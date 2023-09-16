import { useFonts } from 'expo-font';
import * as splashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails, SignUp, NewRivals, LoginPage, Favorite, Orders } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    light: require("./assets/fonts/Poppins-Light.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await splashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Bottom Navigation' component={BottomTabNavigation} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
        <Stack.Screen name='New Rivals' component={NewRivals} />
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='Favorite' component={Favorite} />
        <Stack.Screen name='Orders' component={Orders} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
