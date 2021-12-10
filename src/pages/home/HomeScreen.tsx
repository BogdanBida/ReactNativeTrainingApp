import { Box, Flex } from "native-base";
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
import { MENU_NAVIGATION_ITEMS } from "./constants/nav-menu";
import SearchModal from "./components/SearchModal";

interface IHomeScreenProps extends IPageComponentProps {}

const apiService = new ApiService();

export default function HomeScreen({ navigation }: IHomeScreenProps) {
    const [posts, setPosts] = useState<IPostDTO[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [searchParams, setSearchParams] = useState<ISearchParams>({});
    const [isShowSearchModal, setShowSearchModal] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        apiService.apiGet<IPostDTO[]>(ApiEndpoints.Posts, searchParams).then((response) => {
            setPosts(response);
            setIsLoaded(true);
        });
    }, [searchParams]);

    return (
        <Flex flex={1} {...CONTAINER_THEME} justifyContent="space-between" flexDirection="row">
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-end"
                style={styles.leftMenu}
                _dark={{
                    backgroundColor: "blueGray.800:alpha.40",
                    shadow: 6,
                }}
                _light={{
                    backgroundColor: "blueGray.100:alpha.20",
                    shadow: 5,
                }}
            >
                <SearchModal styles={{ openBtn: [styles.navBtn, { marginVertical: "auto" }] }} onSearch={(searchParams) => setSearchParams(searchParams)}  />
                {MENU_NAVIGATION_ITEMS.map((menuItemData) => (
                    <RoundedButton
                        onPress={() => navigation.navigate(menuItemData.destination)}
                        {...menuItemData.btnOptions}
                        style={styles.navBtn}
                    />
                ))}
            </Flex>
            {/* <Center>
                <SearchForm onSearch={(searchParams) => setSearchParams(searchParams)} />
            </Center> */}
            <Box flex={1}>
                <PostList posts={posts} isLoaded={isLoaded} />
            </Box>
        </Flex>
    );
}

const styles = StyleSheet.create({
    leftMenu: {
        paddingVertical: 8,
    },
    navBtn: {
        margin: 6,
    },
});
