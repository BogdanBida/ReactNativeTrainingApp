import React from "react";
import { Text, Link, HStack, Center, Heading, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/home/HomeScreen";
import SettingsScreen from "./src/pages/settings/SettingsScreen";
import { THEME_CONFIG } from "./src/constants/theme";
import { INITIAL_ROUTE_NAME, SCREEN_OPTIONS } from "./src/constants/navigation";
import { Pages } from "./src/enums/pages.enum";

export const theme = extendTheme({ config: THEME_CONFIG });

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} screenOptions={SCREEN_OPTIONS}>
                    <Stack.Screen name={Pages.Home} component={HomeScreen} />
                    <Stack.Screen name={Pages.Settings} component={SettingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
