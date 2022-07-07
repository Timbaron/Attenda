import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from './Components/Class/list'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Screens/HomeScreen';
import ClassScreen from './Components/Screens/ClassScreen';
import AttendanceScreen from './Components/Screens/AttendanceScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="ClassScreen" component={ClassScreen} options={{ title: 'Class'}}/>
        <Stack.Screen name="Attendance" component={AttendanceScreen} options={{ title: 'Attendance' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  Listcontainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    width: '90%',
    height: '120px',
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px',
    backgroundColor: 'black',
    borderRadius: 12,
    alignItems: 'center',
    padding: '10px',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  info: {
    padding: '10px',
    color: '#FFFFFF',
    fontFamily: 'Cursive',
    fontSize: 20
  },
  content: {
    flex: 1,
    margin: '5px',
    backgroundColor: 'black',
    width: '90%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center'
  },
  contentHeader: {
    height: '70px',
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    margin: '5px',
    marginTop: '10px',
    borderRadius: 10,
  },
  ContentHeaderText: {
    fontFamily: 'Cursive',
    fontSize: 15
  },
  OldAttendance: {
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    flex: 1,
    margin: '10px',
    marginBottom: '4px',
    borderRadius: 10,
    // justifyContent: 'space-around',
  }
});
