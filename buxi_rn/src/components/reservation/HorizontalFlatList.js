import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  SectionList,
  TouchableOpacity
} from "react-native";

const styles = {
  flatList: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    margin: 4
  },
  text: { fontSize: 16, fontWeight: "bold", margin: 20, color: "white" }
};

class HorizontalFlatList extends React.Component {
  state = { data: [], refresh: false };
  componentDidMount = () => {
    this.setState({ data: this.props.data });
  };

  renderItem = ({ item, index, section }) => {
    return (
      <TouchableOpacity
        onPress={this.props.onListPress}
        style={styles.flatList}
      >
        <Text style={styles.text}>{item.day}</Text>
        <Text style={styles.text}>{item.selected ? "8:00" : "N/A"}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    console.log(this.props.data);
    return (
      <SectionList
        sections={this.props.data}
        renderItem={this.renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        // keyExtractor={(item, index) => item.day}
        horizontal
      />
    );
  }
}

export default HorizontalFlatList;
