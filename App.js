/**
 * The code sets up a React Native app with nested navigation using bottom tabs, stack navigator, and
 * drawer navigator, along with custom styling and icons.
 * @returns The code snippet is returning the main App component `App()` which is wrapped in a
 * `Provider` component from `react-redux`. Inside the `App()` component, there is a
 * `NavigationContainer` component that contains a `DrawerNavigator`. The `DrawerNavigator` has two
 * screens: "Drawer" and "BottomSheet", each with corresponding components.
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux'; // context provider that wraps the complete app.
import { store } from './app/context/store'; // store context from where the provider is called.
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import BottomSheetScreen from './app/screens/BottomSheetScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/////////////////////////////////////////////////// Drawer content component with icons
function DrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Home
        </Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('BottomSheet')}>Bottom Sheet
        </Text>
        </TouchableOpacity>
    </View>
  );
}

//////////////////////////////////////////////// Main App component with nested navigation
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={({ navigation }) => <DrawerContent navigation={navigation} />}>
          <Drawer.Screen
            name="Drawer"
            component={MainTabs}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="BottomSheet"
            component={BottomSheetScreen}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

/////////////////////////////////////////////// Nested tabs and stack navigator with icons
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          ////////////////////////////////////////////////////////////////// Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

  //////////////////////////////////////////////////////////// Stack navigator component for HomeStack
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

///////////////////////////////////////////////////////////////////// Styling of the butons and texts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, 
    alignItems: 'center',
    marginBottom:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
