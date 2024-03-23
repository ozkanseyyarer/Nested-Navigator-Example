import React from "react";
import {Button, Text, View} from "react-native";

export default function MemberUpdate({navigation}){
    return(
        <View>
            <Text>Merhaba Member Edit sayfasındasınız</Text>
            <Button title="Üyes ekranına git" onPress={() => navigation.navigate("Member Screen")}/>

        </View>
    )
}