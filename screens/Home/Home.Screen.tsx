import React, { FC } from "react";

import {
    View, 
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {

}

const Home : FC<Props> = () => {
    return (
        <SafeAreaView style = {styles.container} >
            <Text> This is Home </Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
})

export default Home;