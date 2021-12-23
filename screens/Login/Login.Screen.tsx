import React, { useState, FC } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

interface Props {}

const Login: FC<Props> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>NuggahFinder</Text>
            </View>

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#282C35"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#282C35"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotBtn}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 30,
        marginTop: -150,
        padding: 10,
    },

    inputView: {
        backgroundColor: "#D4D5D6",
        borderRadius: 25,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        justifyContent: "center",
    },

    forgotBtn: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "30%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#D4D5D6",
    },

    loginText: {
        fontSize: 19,
    },
});

export default Login;
