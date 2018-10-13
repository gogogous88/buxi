import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from "react-native";
import { Button } from "react-native-elements";
import GridView from "react-native-super-grid";
import moment from "moment";
import _ from "lodash";

const { width, height } = Dimensions.get("window");

const styles = {
  confirmButtonStyle: {
    borderRadius: 5,
    width: width - 120,
    height: 40,
    backgroundColor: "darkblue"
  },
  buttonStyle: {
    borderRadius: 5,
    width: width / 3.5 - 20,
    height: 35,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  gridView: {
    width: width - 20,
    alignSelf: "center"
  },
  dayStyle: {
    borderRadius: 5,
    width: width / 5,
    height: 20,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 1
  }
};

class DayTimePicker extends React.Component {
  componentDidMount = () => {};

  renderDays = index => {
    const { props } = this;
    let startDate = new Date(moment(props.date[0]));
    let endDate = new Date(moment(props.date[1]));
    var oneWeek = 24 * 60 * 60 * 1000 * 7;
    var diffWeek = Math.round(
      Math.abs((endDate.getTime() - startDate.getTime()) / oneWeek)
    );

    let days = [];
    for (i = 0; i <= diffWeek + 1; i++) {
      if (
        !_.isEmpty(days) &&
        new Date(moment(days[days.length - 1])).getTime() > endDate.getTime()
      ) {
        days = days.slice(0, -1);
      } else {
        days = [
          ...days,
          moment(
            startDate.setDate(
              startDate.getDate() + (7 + index - startDate.getDay())
            ) +
              7 * i
          ).format("YYYY-MM-DD")
        ];
      }
    }

    return days;
  };
  render() {
    const { props } = this;

    return (
      <View style={{ marginTop: 50 }}>
        <ScrollView>
          <GridView
            spacing={1}
            itemDimension={width / 3.5}
            style={styles.gridView}
            items={props.days[0]["data"]}
            renderItem={(item, index) => {
              const backgroundTint = item.selected ? "grey" : "white";
              const textTint = item.selected ? "white" : "black";
              return (
                <TouchableHighlight
                  key={item.day}
                  style={[
                    styles.buttonStyle,
                    { backgroundColor: backgroundTint }
                  ]}
                  onPress={() => props.onSelectChange(index)}
                >
                  <Text style={{ color: textTint }}>{item.day}</Text>
                </TouchableHighlight>
              );
            }}
          />
          <View>
            <Text>
              form:
              {moment(props.date[0]).format("YYYY-MM-DD")}
              -to:
              {moment(props.date[1]).format("YYYY-MM-DD")}
            </Text>
            {props.days[0].data.map((day, index) => {
              if (day.selected) {
                return (
                  <View key={index}>
                    <Text>{day.day}</Text>

                    <GridView
                      spacing={1}
                      itemDimension={width / 5}
                      style={styles.gridView}
                      items={this.renderDays(index + 1)}
                      renderItem={(item, index) => {
                        return (
                          <View key={item} style={[styles.dayStyle]}>
                            <Text style={{ fontSize: 10 }}>{item}</Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                );
              }
              return (
                <View key={index}>
                  <Text>{day.day}</Text>
                  <View
                    style={{
                      borderColor: "grey",
                      height: 30,
                      width: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 1,
                      marginLeft: 30,
                      marginTop: 5,
                      borderRadius: 5
                    }}
                  >
                    <Text>No Pick Up</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <Button
            title="Confirm"
            onPress={() => props.onConfirm()}
            buttonStyle={[styles.confirmButtonStyle, { alignSelf: "center" }]}
          />
        </ScrollView>
      </View>
    );
  }
}

export default DayTimePicker;
