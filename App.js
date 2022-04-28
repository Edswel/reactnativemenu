import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
// export { default as createDrawerNavigator } from './navigators/createDrawerNavigator';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={true}
      screenOptions={{
        headerStyle: { backgroundColor: '#ddd' },
        headerTintColor: '#000',
        sceneContainerStyle: { backgroundColor: '#ccc' },
        drawerContentStyle: { backgroundColor: '#ccc' },
        drawerInactiveTintColor: 'gray',
        drawerActiveTintColor: '#000',
        drawerActiveBackgroundColor: '#eee'
      }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: 'Categories',
        drawerIcon: ({ color, size }) => (
          <Ionicons name='list' color={color} size={size} />
        )
      }} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='star' color={color} size={size} />
        )
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#ddd' },
          headerTintColor: '#000',
          contentStyle: { backgroundColor: '#eee' }
        }}>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
            title: "Meal's Detail"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
