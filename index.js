import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class index extends Component {
food({navigation}) {
    return (
      <View style={{ height: 120, backgroundColor: '#d7d5d2' }} />
      // <Button
      //   title="Go to food screen!"
      //   onPress={() => navigation.navigate('food', {name: 'food'})}
      // />
    );
  }
MyStack() {
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
}