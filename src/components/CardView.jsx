import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CardView = ({ name, min, max, temp, weather, icon }) => {

  //.toFixed(0)
  //Math.round()

  
  var URL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          source={{ uri: URL }}
        />
        <Text
          style={{
            fontSize: 50,
            fontWeight: 200,
            alignSelf: "center",
            marginLeft: 30,
          }}
        >
          {temp}
        </Text>
      </View>

      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}>
          {name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Weather:</Text>
          <Text style={styles.data}>{weather}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Min:</Text>
          <Text style={styles.data}>{min}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Max:</Text>
          <Text style={styles.data}>{max}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    width: "80%",

    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#1e374b",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    elevation: 20,
  },
  label: {
    marginLeft: 20,
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  data: {
    fontSize: 16,
  },
});
