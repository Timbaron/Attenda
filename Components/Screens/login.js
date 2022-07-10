import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert, SafeAreaView, TextInput, ToastAndroid } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function login({ LoginmodalVisible, setLoginModalVisible }) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState();

    function closeModealHandler() {
        setLoginModalVisible(false)
    }

    function resultHandler(result) {
        if(result.errors){
            ToastAndroid.showWithGravity(
                result.errors[0],
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
        if(result.status == 'error'){
            ToastAndroid.showWithGravity(
                result.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
        if(result.status == 'success'){
            console.log(result.token)
        }
    }

    function loginHandler() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + `${API_token}`);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(baseUrl + "login?email=" + `${email}` + "&password=" + `${password}`, requestOptions)
            .then(response => response.json())
            .then(result => resultHandler(result))
            .catch(error => console.log('error', error));


    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={LoginmodalVisible}
                onRequestClose={() => {
                    setLoginModalVisible(!LoginmodalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Welcome Back, Please Login</Text>
                        <View style={styles.form}>
                            <SafeAreaView>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeEmail}
                                    value={email}
                                    placeholder="Enter your email address"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangePassword}
                                    value={password}
                                    placeholder="Enter your password"
                                    secureTextEntry={true}
                                />
                            </SafeAreaView>
                        </View>
                        {/* <Button title="Close" onPress={closeModealHandler} /> */}
                        <View style={styles.btnGroup}>
                            <TouchableOpacity onPress={loginHandler}
                                style={styles.btn}>
                                <Text style={styles.btnText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeModealHandler} style={styles.btn}>
                                <Text style={styles.btnText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "transparent"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        width: 300,
        height: 550,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    modalText: {
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#EA256F',
        marginBottom: 60
    },
    form: {
        width: 280,
        backgroundColor: 'transparent',
        height: 200,
        marginBottom: 5,
        borderRadius: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
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