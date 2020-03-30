import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
function MyStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="food"
            component={food}
            options={{title: 'food Page'}}
          />
          <Stack.Screen name="food" component={food} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }