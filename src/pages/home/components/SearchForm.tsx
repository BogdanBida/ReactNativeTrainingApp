import { Box, Button, Divider, Flex, FormControl, Heading, HStack, Icon, IconButton, Input, Text } from "native-base";
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
            <Flex>
                <FormControl>
                    <FormControl.Label>User id</FormControl.Label>
                    <HStack>
                        <Input
                            placeholder="User id"
                            value={userId}
                            onChange={(event) => {
                                const text = event.nativeEvent.text;
                                setUserId(text.replace(REGEX_USER_ID_EXTRA_CHARS, ""));
                            }}
                            style={{ flexGrow: 1 }}
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
                </FormControl>
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
        // marginHorizontal: 2,
        marginVertical: "auto",
    },
});
