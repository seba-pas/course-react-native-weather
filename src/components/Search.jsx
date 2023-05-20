import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { getCity } from "../../api/api";
import { useNavigation } from "@react-navigation/native";


const Search = () => {
  const [cityName, setCityName] = useState("");
  const [searchedCity, setSearchedCity] = useState({});
  const navigation = useNavigation();
  console.log(cityName);


useEffect(() => {

},[])

  async function handlePress() {
    //city
   
    const response = await getCity(cityName);
    if (!response?.icon) {
      Alert.alert("Sorry we couldn't find yout city");
    }
   
  
    
     navigation.navigate('card', {searchedCity: response})
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginLeft: -200, marginBottom: 2, fontSize: 12 }}>
        Search for a city
      </Text>
      <TextInput
        placeholder="Search"
        style={styles.searchBar}
        onChangeText={(text) => setCityName(text)}
      >
        <EvilIcons name="search" size={20} color="black" />
      </TextInput>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    width: "80%",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "steelblue",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
