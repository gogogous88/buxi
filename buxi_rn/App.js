import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Reservation from "./src/containers/reservation";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Reservation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
