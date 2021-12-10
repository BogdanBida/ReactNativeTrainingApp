import { Pages } from './../enums/pages.enum';
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const INITIAL_ROUTE_NAME = Pages.Home;

export const SCREEN_OPTIONS: NativeStackNavigationOptions = {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: "tomato" },
    headerShadowVisible: false,
}