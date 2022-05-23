import React from 'react';
import Heading from '../../components/Heading';
import {Pressable, View} from 'react-native';
import MainStyle from '../../constants/MainStyle';
import {useNavigation} from '@react-navigation/native';
import Theme from '../../constants/theme';
import Button from '../../components/Button/Button';
import OutlineTextInput from '../../components/TextInput/OutlineTextInput';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={[MainStyle.flex, MainStyle.center]}>
      <Heading name={'Log in'} size={'lg'} variant={'primary'} />
      <OutlineTextInput
        placeholder={'Email'}
        containerStyle={{marginTop: 24}}
      />
      <OutlineTextInput
        placeholder={'Password'}
        containerStyle={{marginTop: 24}}
        isSecure
      />
      <View style={{width: '100%', paddingRight: 16, marginTop: 8}}>
        <Pressable onPress={() => navigation.navigate('Recovery')}>
          <Heading
            name={'Forget password?'}
            style={{textAlign: 'right', color: Theme.textSecondaryColor}}
            variant={'outline'}
          />
        </Pressable>
      </View>
      <Button
        title={'Log in'}
        variant={'secondary'}
        containerStyle={{marginTop: 24}}
      />
      <Button
        title={'Sign up'}
        variant={'outline'}
        containerStyle={{marginTop: 24}}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;
