import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

const styles = {
  flatList: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    margin: 4
  },
  text: { fontSize: 16, fontWeight: "bold", margin: 20, color: "white" }
};

renderItem = ({ item: rowData }) => {
  return (
    <View style={styles.flatList}>
      <Text style={styles.text}>{rowData.day}</Text>
      <Text style={styles.text}>{rowData.time}</Text>
    </View>
  );
};

const HorizontalFlatList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={this.renderItem}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => item.day}
      horizontal
    />
  );
};

export default HorizontalFlatList;
