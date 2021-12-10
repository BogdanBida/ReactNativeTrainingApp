import { AspectRatio, Box, Center, Text, Image, Stack, Heading } from "native-base";
import React from "react";
import IPostDTO from "../../../models/post-dto";

interface IPostProps extends IPostDTO {
    imgColor: string;
}

export default function Post({ title, body, id, userId, imgColor }: IPostProps) {
    return (
        <Box
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            margin="2"
            _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
                shadow: 2,
            }}
            _light={{
                backgroundColor: "gray.50",
                shadow: 4,
            }}
        >
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                        source={{
                            uri: `https://via.placeholder.com/1920x1080/${imgColor}`,
                        }}
                        alt="image"
                    />
                </AspectRatio>
                <Center
                    bg="violet.500"
                    _dark={{
                        bg: "blue.400",
                    }}
                    _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs",
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                >
                    <Text>
                        Id: {id} UserId: {userId}
                    </Text>
                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        {title}
                    </Heading>
                </Stack>
                <Text fontWeight="400">{body}</Text>
            </Stack>
        </Box>
    );
}
