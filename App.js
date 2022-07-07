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

