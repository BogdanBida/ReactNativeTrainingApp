import { Card, FlatList, Spinner, Text } from "native-base";
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
        <Spinner flex={1} size="lg" margin="auto"/>
    );
}

const styles = StyleSheet.create({
    flatList: {
        flexGrow: 0,
    },
});
