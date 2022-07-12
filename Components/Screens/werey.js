const storeToken = async (result) => {
        try {
            await AsyncStorage.setItem('@token', result.token)
            ToastAndroid.showWithGravity(
                result.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            setLoginModalVisible(false)
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
            storeToken(result)
        }
    }

    function loginHandler() {
        setIsLoading(true)
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
                    {(isLoading) ? (
                        <>
                            <ActivityIndicator size="large" color="#00ff00" />
                            <Text>Attempting Login......</Text>
                        </>
                    )
                        : <Text></Text>}
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
        </View>
    )