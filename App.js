import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from './Components/item'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import ClassDetails from './Components/Class/details';

export default function App() {
  const attends = [
    {
      id: 1,
      className: 'CMP 221',
      TotalStudents: 50,
      LastUpdated: '6-July-2022'
    },
    {
      id: 2,
      className: 'CMP 224',
      TotalStudents: 45,
      LastUpdated: '6-July-2022'
    },
    {
      id: 3,
      className: 'CMP 223',
      TotalStudents: 70,
      LastUpdated: '6-July-2022'
    },
    {
      id: 4,
      className: 'CMP 421',
      TotalStudents: 30,
      LastUpdated: '6-July-2022'
    },
    {
      id: 5,
      className: 'CMP 222',
      TotalStudents: 50,
      LastUpdated: '6-July-2022'
    }
  ]
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Class" component={ClassDetails} />
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
    borderRadius: '12px',
    alignItems: 'center',
    padding: '10px',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: '50%'
  },
  info: {
    padding: '10px',
    color: '#FFFFFF',
    fontFamily: 'Cursive',
    fontSize: '20px'
  },
  content: {
    flex: 1,
    margin: '5px',
    backgroundColor: 'black',
    width: '90%',
    height: '100%',
    borderRadius: '12px',
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
    borderRadius: '10px',
  },
  ContentHeaderText: {
    fontFamily: 'Cursive',
    fontSize: '15px'
  },
  OldAttendance: {
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    flex: 1,
    margin: '10px',
    marginBottom: '4px',
    borderRadius: '10px',
    // justifyContent: 'space-around',
  }
});
