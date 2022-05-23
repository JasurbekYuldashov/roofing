import React from 'react';
import Heading from '../../components/Heading';
import {Pressable, View} from 'react-native';
import MainStyle from '../../constants/MainStyle';
import {useNavigation} from '@react-navigation/native';
import OutlineButton from '../../components/Button/OutlineButton';
import userRole from '../../constants/userRole';
import Theme from '../../constants/theme';
import Button from '../../components/Button/Button';

const Login = () => {
  const navigation = useNavigation();
  const handlePress = role => {
    navigation.navigate('Login', {state: {role: role}});
  };
  return (
    <View style={[MainStyle.flex, MainStyle.center]}>
      <Heading name={'Log in'} size={'lg'} variant={'primary'} />
      <OutlineButton
        title={'Member'}
        // onPress={() => handlePress(userRole.member)}
        containerStyle={{marginTop: 24}}
      />
      <OutlineButton
        title={'Distributor'}
        // onPress={() => handlePress(userRole.worker)}
        containerStyle={{marginTop: 24}}
      />
      <View style={{width: '100%', paddingRight: 16, marginTop: 16}}>
        <Pressable onPress={() => navigation.navigate('Recovery')}>
          <Heading
            name={'Forget password?'}
            style={{textAlign: 'right', color: Theme.textSecondaryColor}}
            variant={'outline'}
            // size={}
          />
        </Pressable>
      </View>
      <Button title={'Log in'} containerStyle={{marginTop: 24}} />
      <Button title={'Sign up'} containerStyle={{marginTop: 24}} />
    </View>
  );
};

export default Login;
