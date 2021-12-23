import React, { FC } from "react";

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Maps from "../../Components/Maps/Maps.Component";
import useMapsPermission from "../../hooks/useMapsPermission";
interface Props {}

const Home: FC<Props> = () => {
  const { status, location, errorMsg } = useMapsPermission();
  console.log(status);
  console.log(location);

  return (
    <SafeAreaView style={styles.container}>
      <Maps />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
