import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Modal,
  Alert,
  TouchableHighlight,
  TextInput
} from "react-native";
import { Button } from "react-native-elements";
import DuoDatePicker from "../../components/reservation/DuoDatePicker";
import moment from "moment";
import Calendar from "react-native-calendar-select";
import HorizontalFlatList from "../../components/reservation/HorizontalFlatList";
import DayTimePicker from "../../components/reservation/DayTimePicker";
import { reserve } from "../../../actions";

const { width, height } = Dimensions.get("window");

const styles = {
  buttonStyle: {
    borderRadius: 5,
    width: width - 120,
    height: 40,
    backgroundColor: "darkblue"
  },
  input: {
    width: width - 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "darkblue",
    margin: 10,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    let today = moment(new Date());
    let tomorrow = moment(new Date()).add(1, "days");
    this.state = {
      modalVisible: false,
      inputModalVisible: false,
      date: [today, tomorrow],
      days: [
        { day: "Mon", time: "08:00" },
        { day: "Tue", time: "08:00" },
        { day: "Wed", time: "08:00" },
        { day: "Thu", time: "08:00" },
        { day: "Fri", time: "08:00" },
        { day: "Sat", time: "08:00" },
        { day: "Sun", time: "08:00" }
      ],
      time: ["8:00"],
      phone: "3478286553",
      username: "markmoo",
      pickSend: ["1521 plymouth rd, North Brunswick", "University of Alabama"]
    };
  }

  confirmDate = ({ startDate, endDate, startMoment, endMoment }) => {
    this.setState({
      date: [startDate, endDate]
    });
  };
  openCalendar = () => {
    this.calendar && this.calendar.open();
  };
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  renderDayTimeModal = () => {
    return (
      <View style={{ marginTop: 0 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <DayTimePicker days={this.state.days} />
        </Modal>
      </View>
    );
  };

  renderInputModal = () => {
    return (
      <View style={{ marginTop: 0 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.inputModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              height: height / 2,
              width,
              marginTop: height / 4,
              margin: 15,
              justifyContent: "center"
            }}
          >
            <Text>Please Enter Your Name:</Text>
            <View style={styles.input}>
              <TextInput placeholder="please enter your name" />
            </View>
            <Text>Please Enter Your Phone Number:</Text>
            <View style={styles.input}>
              <TextInput placeholder="please enter your phone number" />
            </View>
          </View>
          <Button
            onPress={() => {
              this.setState({ inputModalVisible: false });
              reserve({
                username: this.state.username,
                date: this.state.date,
                days: this.state.days,
                time: this.state.time,
                pickSend: this.state.pickSend
              });
            }}
            buttonStyle={[
              styles.buttonStyle,
              { alignSelf: "center", position: "absolute", bottom: 30 }
            ]}
            title="Reserve Now"
          />
        </Modal>
      </View>
    );
  };

  render() {
    let customI18n = {
      w: ["", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
      weekday: [
        "",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      text: {
        start: "Check in",
        end: "Check out",
        date: "Date",
        save: "Confirm",
        clear: "Reset"
      },
      date: "DD / MM" // date format
    };

    let color = {
      subColor: "#f0f0f0"
    };
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            width: width - 20,
            margin: 10,
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        >
          <View
            style={{
              display: "flex",
              width: width - 20,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <DuoDatePicker
              label="From"
              date={this.state.date[0]}
              onPress={this.openCalendar}
            />
            <DuoDatePicker
              label="To"
              date={this.state.date[1]}
              onPress={this.openCalendar}
            />
          </View>

          <Calendar
            i18n="en"
            ref={calendar => {
              this.calendar = calendar;
            }}
            customI18n={customI18n}
            color={color}
            format="YYYYMMDD"
            minDate={moment(new Date()).format("YYYYMMDD")}
            maxDate="20190312"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onConfirm={this.confirmDate}
          />
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            style={{
              width: width - 20,
              height: 130,
              backgroundColor: "rgba(0,0,0,0.6)"
            }}
          >
            <HorizontalFlatList data={this.state.days} />
          </TouchableHighlight>
          <Button
            onPress={() => this.setState({ inputModalVisible: true })}
            buttonStyle={styles.buttonStyle}
            title="Reserve Now"
          />
        </View>
        {this.renderDayTimeModal()}
        {this.renderInputModal()}
      </View>
    );
  }
}
