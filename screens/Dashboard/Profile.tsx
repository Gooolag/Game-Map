import React, { FC } from "react";
import Switch from 'expo-dark-mode-switch';
import ToggleSwitch from 'toggle-switch-react-native'



import {
    ScrollView,
    View, 
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    Button,
    Pressable
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {

}

const Profile : FC<Props> = () => {
    const [value, setValue] = React.useState(true);

    return (
        <ScrollView >
        <View style={styles.container}>
      <View style={styles.item1}>           
       <View style={styles.item11}>
        <Text style={styles.text}>Nuggah Finder</Text>
       </View>
       <View style={styles.item12}>
       <Switch value={value} onChange={value => setValue(value)} />
       </View>
      </View>
      <View style={styles.item2}>       
      <Image style={styles.tinyLogo} source={require('../../assets/man.png')}/>    
      <View style={styles.item22}>
          <Text style={styles.text}>Hello Nuggah!</Text>
        </View>
      </View>
      <View style={styles.item3}>           
       <Text style={styles.text}>Status </Text>
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
        labelStyle= {styles.incog}
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
    </ScrollView>
    )
};

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
        marginTop:40
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
        backgroundColor: '#e9c46a',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        borderRadius: 20
      },
      item4: {
        backgroundColor: '#e9c46a',

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
        // margin: 10
      },
      tinyLogo: {
        width: 80,
        height: 80,
      },
      button: {
        margin: 20,
        fontSize:15,
        fontWeight: 'bold',
      },
      incog: {
          fontSize:30,
        fontWeight: 'bold',
      }
})

export default Profile;