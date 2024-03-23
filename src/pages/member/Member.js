import React from "react";
import {Button, Text, View} from "react-native";

export default function Member({navigation}){
    return (
        <View>
            <Text>Member</Text>
            <Button title="Üye detay sayfasına git" onPress={() => navigation.navigate("Member Detail")}/>
        </View>
    );
}