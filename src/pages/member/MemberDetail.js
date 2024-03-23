import React from "react";
import {Button, Text, View} from "react-native";

export default function MemberDetail({navigation}){
    return(
        <View>
            <Text>Member Detail Screen</Text>
            <Button title="Üye Güncelleme ekranına git" onPress={() => navigation.navigate("Member Update")}/>

        </View>
    )
}