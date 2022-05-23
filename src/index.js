import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Role from './views/Role';
import MainStyle from './constants/MainStyle';
import Theme from './constants/theme';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {getMe} from './redux/user/actions';
import Login from "./views/Login";
import Register from "./views/Register";
import RecoveryPassword from "./views/RecoveryPassword";

const Stack = createNativeStackNavigator();
const Router = () => {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch();

  const role = useSelector(state => state.user.role);
  const token = useSelector(state => state.user.token);
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);

  function onAuthStateChanged(user) {
    if (user) {
      dispatch(getMe(user.uid));
    }
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }
  return (
    <View style={MainStyle.flex}>
      <StatusBar backgroundColor={Theme.whiteColor} barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {fontFamily: Theme.fontMedium},
          contentStyle: {backgroundColor: Theme.whiteColor},
        }}>
        {!role && !token ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name={'Role'} component={Role} />
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Register'} component={Register} />
            <Stack.Screen name={'Recovery'} component={RecoveryPassword} />
          </Stack.Group>
        ) : null}
      </Stack.Navigator>
    </View>
  );
};

export default Router;
