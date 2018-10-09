import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform
} from "react-native";
import moment from "moment";

const { width, height } = Dimensions.get("window");

const styles = {
  box: {
    height: width / 2,
    width: width / 2 - 40,
    borderRadius: 5,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  }
};

const DuoDatePicker = props => {
  const today = props.date;
  return (
    <TouchableOpacity style={styles.box} onPress={props.onPress}>
      <Text style={{ fontSize: 16 }}>{props.label}</Text>
      <Text style={{ fontSize: 18, fontWeight: "200" }}>
        {`${moment(today).format("MMM")} | ${moment(today).format("ddd")}`}
      </Text>
      <Text style={{ fontSize: 50, fontWeight: "200" }}>
        {moment(today).format("DD")}
      </Text>
      <Text style={{ fontSize: 14 }}>{moment(today).format("YYYY")}</Text>
    </TouchableOpacity>
  );
};

export default DuoDatePicker;
