import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function loginScreen(params) {
  const navigation = params.navigation;
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/allbikes-1539286251.jpg?crop=0.880xw:1.00xh;0.0561xw,0&resize=1600:*",
        }}
      />
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Power Bike Shop</Text>
      

<TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "whitesmoke",
        }}
      >
        <AntDesign name="google" size={24} />
        <Text style={{ paddingLeft: 10, color: "red" }}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("register")} >
      <Text style={{color: "gainsboro", paddingTop: 15,  }}>
          Not a Member? <Text style={{color: "orange"}}> Sign up</Text>
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}