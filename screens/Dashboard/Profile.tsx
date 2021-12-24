import React, { FC } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider, useTheme } from '../../constants/theme';
import { Screen, SwitchToggle } from '../../components';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  ScrollView,
  TextInput
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { darkColors } from "../../constants/colors";

interface Props {

}

const Profile: FC<Props> = () => {
  const [value, setValue] = React.useState(true);
  const { setScheme, isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,

      justifyContent: 'center',
      height: '50%',
      alignItems: 'stretch',
      flexDirection: 'column',
      // margin: 10
    },
    item1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      flexDirection: 'row',
      margin: 20,
      marginTop: 40
    },
    item2: {
      flex: 1,
      padding: 5,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row'
    },
    item3: {
      flex: 2,
      backgroundColor: '#4A4E69',
      justifyContent: 'center',
      // alignItems: 'center',
      flexDirection: 'row',
      margin: 30,
      padding: 10,
      borderRadius: 20
    },
    item4: {
      flex: 6,
      alignItems: 'stretch',
      padding: 10
    },
    item11: {
      flex: 4,
      justifyContent: 'center',
      // alignItems: 'center',
    },
    item12: {
      justifyContent: 'center',
    },
    item22: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    item31: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item32: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    item41: {
      justifyContent: 'center',

    },
    item42: {
      flex: 1,
    },
    text: {
      fontSize: 30,
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      color: ''
      // margin: 10
    },
    tinyLogo: {
      width: 80,
      height: 80,
    },
    button: {
      margin: 10,
      fontSize: 15,
      fontWeight: 'bold',
      borderColor: '#22223B',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10
    },
    incog: {
      fontSize: 30,
      marginLeft: 20,
      fontWeight: 'bold',
    },
    textInput: {
      alignSelf: 'flex-start',
      borderColor: "gray",
      width: "90%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      marginLeft: 15
    },
  })

  return (
    <AppearanceProvider>
      <ThemeProvider>
        <Screen>

          <View style={styles.container}>
            <View style={styles.item1}>
              <View style={styles.item11}>
                <Text style={styles.text}>Nuggah Finder</Text>
              </View>
              <View style={styles.item12}>
                <SwitchToggle />

              </View>
            </View>
            <View style={styles.item2}>
              <Image style={styles.tinyLogo} source={require('../../assets/man.png')} />
              <View style={styles.item22}>
                <Text style={styles.text}>Hello Nuggah!</Text>
              </View>
            </View>
            <View style={styles.item3}>
              <View style={styles.item31} ><TextInput placeholder="Share anything you want!!" placeholderTextColor="#F2E9E4" style={styles.textInput} /></View>
              <View style={styles.item32}><Button title=">"></Button></View>
            </View>
            <View style={styles.item4}>
              <View style={styles.item41}>
                <ToggleSwitch
            isOn={false}
            onColor="green"
            offColor="red"
            label="Visiblity"
            size="large"
            onToggle={isOn => console.log("changed to : ", isOn)}
            labelStyle={styles.button}
          />
              </View>
              <View style={styles.item41}>
                <Pressable><Text style={styles.button}>Edit Profile</Text></Pressable>
              </View>
              <View style={styles.item41}>
                <Pressable><Text style={styles.button}>Change Password</Text></Pressable>
              </View>
              <View style={styles.item41}>
                <Pressable><Text style={styles.button}>Logout</Text></Pressable>
              </View>
            </View>
          </View>
        </Screen>

      </ThemeProvider>

    </AppearanceProvider>
  )
};


export default Profile;