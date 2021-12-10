import { Box, Center, Flex, Heading, HStack, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import IPageComponentProps from "../../shared/interfaces/base/INavigationProps";
import RoundedButton from "../../shared/components/rounded-button";
import { CONTAINER_THEME } from "../../constants/theme";
import ApiService from "../../services/api-service";
import PostList from "./components/PostList";
import { ApiEndpoints } from "../../enums/api-endpoints.enum";
import IPostDTO from "../../models/post-dto";
import SearchForm from "./components/SearchForm";
import ISearchParams from "./interfaces/search-params";

interface IHomeScreenProps extends IPageComponentProps {}

const apiService = new ApiService();

const HomeScreen = ({ navigation }: IHomeScreenProps) => {
    const [posts, setPosts] = useState<IPostDTO[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchParams, setSearchParams] = useState<ISearchParams>({});

    useEffect(() => {
        setIsLoaded(false);
        apiService.apiGet<IPostDTO[]>(ApiEndpoints.Posts, searchParams).then((response) => {
            setPosts(response);
            setIsLoaded(true);
        });
    }, [searchParams]);

    return (
        <Flex flex={1} {...CONTAINER_THEME} justifyContent="space-between" flexDirection="row">
            <Flex flexDirection="column" justifyContent="space-between">
                <Heading size="lg" margin="5">
                    Training application
                </Heading>
                <RoundedButton
                    onPress={() => navigation.navigate("Settings")}
                    iconName="settings"
                    style={{ margin: 16, marginRight: "auto" }}
                />
            </Flex>
            <Center>
                <SearchForm onSearch={(searchParams) => setSearchParams(searchParams)} />
            </Center>
            <Box
                _dark={{
                    backgroundColor: "blueGray.800",
                    shadow: 10,
                }}
                _light={{
                    shadow: 5,
                }}
            >
                <PostList posts={posts} isLoaded={isLoaded} />
            </Box>
        </Flex>
    );
};

export default HomeScreen;
