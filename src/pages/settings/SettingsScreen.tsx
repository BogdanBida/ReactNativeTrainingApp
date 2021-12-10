import { Center, Heading, VStack, Text, Flex } from "native-base";
import React from "react";
import { CONTAINER_THEME } from "../../constants/theme";
import RoundedButton from "../../shared/components/rounded-button";
import ToggleDarkMode from "../../shared/components/theme-toggler";
import IPageComponentProps from "../../shared/interfaces/base/INavigationProps";

interface ISettingsScreenProps extends IPageComponentProps {}

const SettingsScreen = ({ navigation }: ISettingsScreenProps) => {
    return (
        <Center flex={1} {...CONTAINER_THEME}>
            <Flex flex={1} flexDirection="column" alignItems="center" justifyContent="space-around">
                <Heading size="lg">Welcome to app settings</Heading>
                <VStack>
                    <Heading size="md">Theme</Heading>
                    <ToggleDarkMode />
                </VStack>
                <RoundedButton onPress={() => navigation.navigate("Home")} iconName="home" />
            </Flex>
        </Center>
    );
};

export default SettingsScreen;
