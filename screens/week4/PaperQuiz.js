import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, IconButton, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function PaperQuiz() {
    return (
        <ScrollView style={{ paddingVertical: 25, flex: 1 }}>
            <Card>
                <Card.Cover source={require("../../assets/week3/room-6.jpg")} />
            </Card>

            <View style={{ alignItems : "center", marginTop : 1}}>
                <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
            </View>
            <Card.Title
                title="Hilton San Francisco"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
            />
        </ScrollView>
    );
}

