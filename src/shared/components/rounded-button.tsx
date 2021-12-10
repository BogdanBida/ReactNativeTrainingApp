import React from "react";
import { StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";
import IRoundedButtonProps from "../interfaces/rounted-button-props";


export default function RoundedButton({ onPress, iconName, size, style, iconSrc = SimpleLineIcons, containerPadding = 4 }: IRoundedButtonProps) {
    return (
        <IconButton
            onPress={onPress}
            icon={<Icon as={iconSrc} name={iconName} />}
            borderRadius="full"
            backgroundColor="blue.400:alpha.20"
            padding={containerPadding}
            _icon={{
                color: "blue.500",
                size: size ?? "md",
            }}
            _hover={{
                bg: "blue.600:alpha.20",
            }}
            _pressed={{
                bg: "blue.700:alpha.20",
            }}
            style={[styles.button, style]}
        />
    );
};

const styles = StyleSheet.create({
    button: {},
});
