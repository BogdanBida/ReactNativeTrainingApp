import { Center, Heading, VStack, Flex, HStack, Avatar, Text, Spinner, Box } from "native-base";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
// import MapView, { Marker } from "react-native-maps";
import { CONTAINER_THEME } from "../../constants/theme";
import { ApiEndpoints } from "../../enums/api-endpoints.enum";
import IUserDTO from "../../models/user-dto";
import ApiService from "../../services/api-service";
import IPageComponentProps from "../../shared/interfaces/base/INavigationProps";

const apiService = new ApiService();

interface IProfileScreenProps extends IPageComponentProps {}

function calculateInitials(name: string) {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("");
}

const ProfileScreen = ({ navigation }: IProfileScreenProps) => {
    const [user, setUser] = useState<IUserDTO>();

    useEffect(() => {
        apiService.apiGet(ApiEndpoints.Users, { id: Math.round(Math.random() * 10) }).then((response) => {
            setUser((response as IUserDTO[])[0]);
        });
    }, []);

    return (
        <Flex flex={1} {...CONTAINER_THEME} flexDirection="column" alignItems="center" padding="5">
            {user ? (
                <>
                    <Flex alignItems="center" flexDirection="row" style={{ width: "100%" }}>
                        <Avatar size="lg" bg="green.500">
                            {calculateInitials(user.name)}
                        </Avatar>
                        <VStack margin="2">
                            <Heading size="md">{user.name}</Heading>
                            <Heading size="sm">{user.username}</Heading>
                            <Heading size="sm">Email: {user.email}</Heading>
                        </VStack>
                    </Flex>
                    <VStack style={{ width: "100%", paddingHorizontal: 5, paddingTop: 5 }}>
                        <Heading size="sm">Phone: {user.phone}</Heading>
                        <Heading size="sm">Company: {user.company.name}</Heading>
                        <Heading size="sm">Website: {user.website}</Heading>
                        <Heading size="md" marginTop="5">
                            Adress:
                        </Heading>
                        <VStack style={{ paddingLeft: 15 }}>
                            <Text>Street: {user.address.street}</Text>
                            <Text>Suite: {user.address.suite}</Text>
                            <Text>City: {user.address.city}</Text>
                            <Text>Zipcode: {user.address.zipcode}</Text>
                        </VStack>
                    </VStack>
                    <MapView
                        style={{ width: "100%", height: 300, marginTop: 20 }}
                        showsCompass={true}
                        initialRegion={{
                            latitude: parseFloat(user.address.geo.lat),
                            longitude: parseFloat(user.address.geo.lng),
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: parseFloat(user.address.geo.lat),
                                longitude: parseFloat(user.address.geo.lng),
                            }}
                            title={"User location"}
                            description={`Location: ${user.address.street}. ${user.address.city}`}
                        />
                    </MapView>
                </>
            ) : (
                <Spinner size="lg" />
            )}
        </Flex>
    );
};

export default ProfileScreen;
