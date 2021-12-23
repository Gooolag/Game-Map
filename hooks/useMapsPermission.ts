import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

type useMapsPermissionTypes = {
  status: String;
  location: Location.LocationObject | null;
  errorMsg: String;
};

const useMapsPermission = (): useMapsPermissionTypes => {
  const [status, setStatus] = useState<String>("");
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<String>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);

  return { status, location, errorMsg };
};

export default useMapsPermission;

const styles = StyleSheet.create({});
