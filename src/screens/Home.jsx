import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, {useState} from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import IMAGE from '../../assets/pnghome.png'

import CardView from "../components/CardView";
import { useSelector } from "react-redux";

const Home = () => {
 const cities = useSelector((state) => state.cities)
  const [counter, setCounter] = useState(0);


  

  console.log(cities);
  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor="steelblue" />
      <Header />
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {cities &&
            cities?.map((city) => {
              return (
                <CardView
                  name={city.name}
                  min={city.min}
                  max={city.max}
                  weather={city.weather}
                  icon={city.icon}
                  temp={city.temp}
                  key={`${city.name}${city.weather}`}
                />
              );
            })}
          {!cities && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={IMAGE} style={{height: 150, width: 150, marginTop: 130}} />
              <Text style={{marginTop: 60, fontWeight: 'bold', fontSize: 14}}>You dont have cities added to your Home page!</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
