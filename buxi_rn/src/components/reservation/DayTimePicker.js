import React from "react";
import { View, Text, TouchableHighlight, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const styles = {
  buttonStyle: {
    borderRadius: 5,
    width: width - 120,
    height: 40,
    backgroundColor: "darkblue"
  }
};

const DayTimePicker = props => {
  return (
    <View
      style={{
        marginTop: 0,
        alignItems: "center",
        flexDirection: "column",
        height,
        width,
        justifyContent: "space-around"
      }}
    >
      {props.days.map((day, index) => {
        const tagTint = day.select ? "grey" : "white";
        const textTint = day.select ? "white" : "grey";
        const aStyles = {
          tagView: {
            width: 100,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "grey",
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: tagTint
          },
          text: {
            color: textTint
          }
        };

        return (
          <View
            key={index}
            style={{
              marginTop: 10,
              width,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around"
              // borderColor: "grey",
              // borderWidth: 1
            }}
          >
            <TouchableHighlight style={aStyles.tagView}>
              <Text style={aStyles.text}>{day.day}</Text>
            </TouchableHighlight>
            <View style={aStyles.tagView}>
              <Text style={aStyles.text}>{day.time}</Text>
            </View>
          </View>
        );
      })}
      <Button title="Confirm" buttonStyle={styles.buttonStyle} />
    </View>
  );
};

export default DayTimePicker;
