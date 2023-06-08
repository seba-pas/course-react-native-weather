import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute, useFocusEffect, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../../utils/redux/citySlice";

const Card = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState({});
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation()



const temp = Math.round(city?.temp)
const min = Math.round(city?.min)
const max = Math.round(city?.max)

  function handleAdd() {
    dispatch(addCity(city));
  }

  function handleBack(){
    navigation.goBack()
  }

  useEffect(() => {
    async function loadCard() {
      const parent = await route?.params.searchedCity;
      setCity(parent);
      
      setLoading(false);
    }

    loadCard();

    return () => {
      setLoading(true);
      setCity({});
    };
  }, [route.params]);

  var URL = `https://openweathermap.org/img/wn/${city?.icon}@2x.png`;

  return (
    <>
      {loading === true || !city?.icon ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="steelblue" />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
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
                {temp}°C
              </Text>
            </View>

            <View style={{ marginTop: 20, marginLeft: 10 }}>
              <Text
                style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}
              >
                {city?.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Weather:</Text>
                <Text style={styles.data}>{city?.weather}</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Min:</Text>
                <Text style={styles.data}>{min}°C</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Max:</Text>
                <Text style={styles.data}>{max}°C</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "steelblue",
              width: 150,
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
            onPress={handleAdd}
          >
            <Text style={{ color: "white" }}>Add To Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "steelblue",
              width: 150,
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={handleBack}
            
          >
            <Text style={{ color: "white" }}>Go Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: "33%",
    width: "70%",

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
