import { Center, FlatList, Heading, Spinner } from "native-base";
import React from "react";
import IPostDTO from "../../../models/post-dto";
import Post from "./Post";
import { StyleSheet } from "react-native";

interface IPostListProps {
    posts: IPostDTO[];
    style?: any;
    isLoaded: boolean;
}

const getImgColor = () => Math.floor(Math.random() * 16777215).toString(16);

export default function PostList({ posts, style, isLoaded }: IPostListProps) {
    return isLoaded ? (
        posts && posts.length ? (
            <FlatList
                data={posts.map((post) => ({
                    ...post,
                    imgColor: getImgColor(),
                }))}
                renderItem={({ item }) => <Post {...item} />}
                style={[styles.flatList, style]}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                initialNumToRender={5}
            />
        ) : (
            <Center flex={1}>
                <Heading size="lg">Posts not found {":("}</Heading>
            </Center>
        )
    ) : (
        <Center flex={1}>
            <Spinner flex={1} size="lg" margin="auto" />
        </Center>
    );
}

const styles = StyleSheet.create({
    flatList: {
        flexGrow: 0,
    },
});
