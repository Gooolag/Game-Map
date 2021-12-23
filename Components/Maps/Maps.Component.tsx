import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { constants } from "../../constants";
import {theme} from '../../constants'
interface props {}

const Maps: React.FC<props> = (props) => {
    return (
        <MapView
            style={styles.map}
        />
    );
};

export default Maps;

const styles = StyleSheet.create({
    ontainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: theme.SIZES.width,
        height: theme.SIZES.height
    },
});
