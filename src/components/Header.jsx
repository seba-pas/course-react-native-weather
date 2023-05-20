import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "steelblue",
          width: "100%",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          The Weather App
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
