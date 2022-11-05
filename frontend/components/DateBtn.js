import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const DateBtn = (props) => {
    const monthNames = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const datetype = (props) => {
        if (props.datetype == "day") {
            return props.date.getDate();
        } else if (props.datetype == "month") {
            return monthNames[props.date.getMonth()];
        } else {
            return props.date.getFullYear();
        }
    };
};

export default DateBtn;