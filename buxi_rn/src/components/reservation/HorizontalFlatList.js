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

class HorizontalFlatList extends React.Component {
  state = { data: [] };
  componentDidMount = () => {
    this.setState({ data: this.props.data });
  };
  componentWillReceiveProps = newProps => {
    if (this.props.data != newProps.data) {
      console.log(newProps.data);
      this.setState({ data: newProps.data });
    }
  };
  renderItem = ({ item: rowData }) => {
    console.log(rowData);
    return (
      <View style={styles.flatList}>
        <Text style={styles.text}>{rowData.day}</Text>
        <Text style={styles.text}>{rowData.selected ? "8:00" : "N/A"}</Text>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.day}
        horizontal
      />
    );
  }
}

export default HorizontalFlatList;
