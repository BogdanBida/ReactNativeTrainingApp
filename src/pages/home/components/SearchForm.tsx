import { Box, Button, Divider, Flex, Heading, HStack, Icon, IconButton, Input, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import ISearchParams from "../interfaces/search-params";

const REGEX_USER_ID_EXTRA_CHARS = /\D/;

interface ISearchFormProps {
    onSearch: (searchParams: ISearchParams) => void;
}

export default function SearchForm({ onSearch }: ISearchFormProps) {
    const [userId, setUserId] = useState<string>("");

    return (
        <Box>
            <Heading size="md" marginBottom="5">
                Search from for posts (right side list)
            </Heading>
            <Divider my="2" />
            <Flex>
                <Text>Search by user id (number):</Text>
                <HStack>
                    <Input
                        placeholder="User id"
                        value={userId}
                        onChange={(event) => {
                            const text = event.nativeEvent.text;
                            setUserId(text.replace(REGEX_USER_ID_EXTRA_CHARS, ""));
                        }}
                        style={{ marginVertical: "5px", flexGrow: 1 }}
                    />
                    <IconButton
                        onPress={() => {
                            setUserId("");
                        }}
                        icon={<Icon as={Feather} name="delete" />}
                        borderRadius="full"
                        _icon={{
                            color: "red.500",
                            size: "sm",
                        }}
                        _hover={{
                            bg: "red.600:alpha.20",
                        }}
                        _pressed={{
                            bg: "red.700:alpha.20",
                        }}
                        style={styles.cleanButton}
                    />
                </HStack>
                <Divider my="2" />
                <Button
                    onPress={() => {
                        onSearch({ userId });
                    }}
                    color="blueGray.700"
                    style={styles.searchButton}
                >
                    Search
                </Button>
            </Flex>
        </Box>
    );
}

const styles = StyleSheet.create({
    searchButton: {
        minWidth: "max-content",
        width: "50%",
        marginTop: "10px",
        marginHorizontal: "auto",
    },
    cleanButton: {
        marginHorizontal: "5px",
        marginVertical: "auto",
    },
});
