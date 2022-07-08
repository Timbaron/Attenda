import { View, Text, Modal, StyleSheet, Pressable, Button, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

export default function Register({ RegistermodalVisible, setRegisterModalVisible }) {
    const [email, onChangeEmail] = useState('');
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [password, onChangePassword] = useState();
    const [passwordConfirmation, onChangePasswordConfirmation] = useState('');

    function closeModalHandler() {
        setRegisterModalVisible(false)
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={RegistermodalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setRegisterModalVisible(!RegistermodalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Welcome,Kindly Register</Text>
                        <View style={styles.form}>
                            <SafeAreaView>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeFirstName}
                                    value={firstName}
                                    placeholder="Enter your first name"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeLastName}
                                    value={lastName}
                                    placeholder="Enter your Last name"
                                />
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
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangePasswordConfirmation}
                                    value={passwordConfirmation}
                                    placeholder="Enter your first name"
                                    secureTextEntry={true}
                                />
                            </SafeAreaView>
                        </View>
                        {/* <Button title="Close" onPress={closeModealHandler} /> */}
                        <View style={styles.btnGroup}>
                            <TouchableOpacity onPress={() => Alert.alert('Login Success', 'You have successfully signed in', [
                                {
                                    text: "Sure boss",
                                    onPress: () => closeModalHandler(),
                                    style: "cancel"
                                }
                            ])}
                                style={styles.btn}>
                                <Text style={styles.btnText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeModalHandler} style={styles.btn}>
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
        height: 600,
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
        height: 400,
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