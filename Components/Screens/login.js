import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, DevSettings, FlatList, SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import AttendanceList from '../Attendance/list'
import { createGlobalState } from 'react-hooks-global-state';

export default function Login({ navigation }) {
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const initialState = { token: '' };
    const {setGlobalState , useGlobalState } = createGlobalState(initialState);
    const [token, setToken] = useGlobalState('token');
    

    const storeToken = async (result) => {
        try {
            await AsyncStorage.setItem('activeToken', result.token)
            // setToken(result.token)
            ToastAndroid.showWithGravity(
                result.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            DevSettings.reload()
        } catch (error) {
            // saving error
            console.error(error)
        }
    }

    function resultHandler(result) {
        setIsLoading(false)
        if (result.errors) {
            ToastAndroid.showWithGravity(
                result.errors[0],
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
        if (result.status == 'error') {
            ToastAndroid.showWithGravity(
                result.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
        if (result.status == 'success') {
            AsyncStorage.removeItem('token') // Remove or delete existing tokens if available
            AsyncStorage.setItem('token', result.token) // Set new token to AsyncStorage
            DevSettings.reload()
        }
    }

    const loginHandler =  async () => {
        setIsLoading(true)
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Bearer " + `${API_token}`);

        var requestOptions = {
            method: 'POST',
            // headers: myHeaders,
            redirect: 'follow'
        };

        fetch(baseUrl + "login?email=" + `${email}` + "&password=" + `${password}`, requestOptions)
            .then(response => response.json())
            .then(result => resultHandler(result))
            .catch(error => console.log('error', error));


    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.info}>Login</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <SafeAreaView>
                        <Text style={{ color: 'black', fontWeight: 'bold',margin:15, fontSize: 15, marginBottom: 5 }}>Email address:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            underlineColorAndroid='transparent'
                            placeholder="Enter your email address"
                        />
                        <Text style={{ color: 'black', fontWeight: 'bold', margin: 15, fontSize: 15, marginBottom: 5 }}>Password:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </SafeAreaView>
                </View>
                {(isLoading) && (
                    <>
                        <ActivityIndicator size="large" color="#00ff00" />
                        <Text>Attempting Login......</Text>
                    </>
                )}
                {/* <Button title="Close" onPress={closeModealHandler} /> */}
                    <TouchableOpacity onPress={loginHandler}
                        style={styles.btn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                {/* <View style={styles.btnGroup}>
                    <TouchableOpacity onPress={closeModealHandler} style={styles.btn}>
                        <Text style={styles.btnText}>Close</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <Button title="Submit" onPress={() => DevSettings.reload()}></Button> */}
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EA256F'
    },
    header: {
        width: 300,
        height: 110,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#E8F0F7',
        borderRadius: 12,
        alignItems: 'center',
        padding: 10,
    },
    info: {
        padding: 10,
        color: '#EA256F',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        width: 300,
        height: 100,
        borderRadius: 12,
        alignItems: 'center'
    },
    contentHeader: {
        height: 70,
        width: 280,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: 5,
        marginTop: 10,
        borderRadius: 10,
    },
    ContentHeaderText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#EA256F'
    },
    OldAttendance: {
        backgroundColor: 'white',
        width: 300,
        height: 100,
        flex: 1,
        margin: 10,
        marginBottom: 4,
        borderRadius: 10,
        // justifyContent: 'space-around',
    },
    form: {
        width: 280,
        backgroundColor: 'white',
        height: 250,
        margin: 10,
        borderRadius: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    btn: {
        height: 50,
        width: 100,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EA256F',
        borderRadius: 10,
    },
    btnGroup: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 250,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    }
});
